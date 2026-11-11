/* =========================================================================
   AUDIO ENGINE — ElevenLabs "Alice" narration pipeline
   Voice: Alice (Clear, Engaging Educator) — Voice ID: Xb7hH8MSUJpSbSDYk0k2
   Model: eleven_multilingual_v2
   ---------------------------------------------------------------------------
   1. Cache check   → audioMap[text] (pre-generated static MP3, zero latency)
   2. Dynamic fetch → /api/elevenlabs dev proxy, then direct ElevenLabs API
   3. Last resort   → browser speechSynthesis (so lessons never go silent)
   Zero audio overlap: any new narration or stopNarration() cancels previous audio instantly.
   ========================================================================= */
import { audioMap } from './audioMap.js';

export const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
export const MODEL_ID = 'eleven_multilingual_v2';
const API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY || '';

// Per-style ElevenLabs settings (rate/pitch are only used by the browser fallback)
export const STYLE_SETTINGS = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true, rate: 1.06, pitch: 1.2 },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true, rate: 1.0,  pitch: 1.1 },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true, rate: 0.98, pitch: 1.08 },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true, rate: 0.95, pitch: 1.05 },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true, rate: 0.90, pitch: 0.95 },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true, rate: 1.0,  pitch: 1.0 },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true, rate: 1.0,  pitch: 1.0 }
};

const settingsFor = style => STYLE_SETTINGS[style] || STYLE_SETTINGS.statement;

export let audioMuted = false;
let currentAudioElement = null;
let currentQueue = 0;
let elevenLabsDisabled = false;
const urlCache = new Map();

/* ---------------------------- URL resolution ---------------------------- */
async function fetchElevenLabs(text, style) {
  if (elevenLabsDisabled) return null;
  const s = settingsFor(style);
  const body = JSON.stringify({
    text,
    model_id: MODEL_ID,
    voice_settings: {
      stability: s.stability,
      similarity_boost: s.similarity_boost,
      style: s.style,
      use_speaker_boost: s.use_speaker_boost
    }
  });

  const attempts = [];
  if (import.meta.env.DEV) {
    attempts.push({ url: `/api/elevenlabs/v1/text-to-speech/${VOICE_ID}`, headers: {} });
  }
  if (API_KEY) {
    attempts.push({
      url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      headers: { 'xi-api-key': API_KEY }
    });
  }

  for (const a of attempts) {
    try {
      const res = await fetch(a.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'audio/mpeg', ...a.headers },
        body
      });
      if (res.ok) {
        const blob = await res.blob();
        if (blob.size > 0 && /audio|octet/.test(blob.type || 'audio/mpeg')) {
          return URL.createObjectURL(blob);
        }
      } else if (res.status === 401 || res.status === 402 || res.status === 429) {
        if (a.headers['xi-api-key']) elevenLabsDisabled = res.status !== 429;
      }
    } catch (e) {
      /* network error — try the next route */
    }
  }
  return null;
}

/** Resolve a playable URL for a phrase: static pre-generated asset first, then ElevenLabs. */
export function getAudioUrl(text, style = 'statement') {
  if (!text) return Promise.resolve(null);
  if (audioMap && audioMap[text]) return Promise.resolve(audioMap[text]);
  const key = `${style}|${text}`;
  if (!urlCache.has(key)) {
    const p = fetchElevenLabs(text, style).then(url => {
      if (!url) urlCache.delete(key);
      return url;
    });
    urlCache.set(key, p);
  }
  return urlCache.get(key);
}

/* ------------------------------- Playback ------------------------------- */
export function prepareSpokenText(text) {
  if (!text) return '';
  return text
    .replace(/cm²/g, 'square centimetres')
    .replace(/m²/g, 'square metres')
    .replace(/\bcm\b/g, 'centimetres')
    .replace(/\bm\b/g, 'metres')
    .replace(/π\s*=\s*22\/7/g, 'taking pi equal to 22 over 7')
    .replace(/π\s*=\s*3\.14/g, 'taking pi equal to 3.14')
    .replace(/π/g, 'pi')
    .replace(/×/g, 'times')
    .replace(/÷/g, 'divided by')
    .replace(/\$(\d+)/g, '$1 dollars')
    .replace(/²/g, ' squared')
    .replace(/½/g, 'half')
    .replace(/√(\d+)/g, 'square root of $1')
    .replace(/lw \+ lh \+ wh/g, 'l w plus l h plus w h')
    .replace(/2πr² \+ 2πrh/g, '2 pi r squared plus 2 pi r h')
    .replace(/2πrh/g, '2 pi r h')
    .replace(/2πr/g, '2 pi r')
    .replace(/πr²/g, 'pi r squared')
    .replace(/\bSA\b/g, 'surface area');
}

function pickVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  return (
    voices.find(v => /female|alice|zira|samantha|victoria|google us english/i.test(v.name)) ||
    voices.find(v => v.lang && v.lang.startsWith('en')) ||
    voices[0]
  );
}

let ttsVoice = null;
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => { ttsVoice = pickVoice(); };
  ttsVoice = pickVoice();
}

function fallbackSpeech(seg, queueId) {
  return new Promise(resolve => {
    if (queueId !== currentQueue || audioMuted || typeof window === 'undefined' || !('speechSynthesis' in window) || !seg.text) {
      return resolve();
    }
    const cfg = settingsFor(seg.style);
    const spoken = prepareSpokenText(seg.text);
    const utter = new SpeechSynthesisUtterance(spoken);
    if (ttsVoice) utter.voice = ttsVoice;
    utter.rate = cfg.rate;
    utter.pitch = cfg.pitch;
    utter.onend = () => resolve();
    utter.onerror = () => resolve();
    window.speechSynthesis.speak(utter);
  });
}

function playUrl(url, seg, queueId) {
  return new Promise(resolve => {
    if (queueId !== currentQueue || audioMuted) return resolve();

    // Clean up previous audio element immediately
    if (currentAudioElement) {
      try {
        currentAudioElement.pause();
        currentAudioElement.currentTime = 0;
        currentAudioElement.removeAttribute('src');
        currentAudioElement.load();
      } catch (e) {}
      currentAudioElement = null;
    }

    const audio = new Audio(url);
    currentAudioElement = audio;
    let settled = false;

    const done = () => {
      if (!settled) {
        settled = true;
        if (currentAudioElement === audio) {
          currentAudioElement = null;
        }
        resolve();
      }
    };

    audio.onended = done;
    audio.onpause = () => {
      if (queueId !== currentQueue) done();
    };
    audio.onerror = () => {
      if (queueId === currentQueue && !audioMuted) {
        fallbackSpeech(seg, queueId).then(done);
      } else {
        done();
      }
    };

    audio.play().catch(() => {
      if (queueId === currentQueue && !audioMuted) {
        fallbackSpeech(seg, queueId).then(done);
      } else {
        done();
      }
    });
  });
}

export function setMuted(m) {
  audioMuted = m;
  if (m) stopNarration();
}

/** Immediately stop ALL narration, sound and synthesis across the entire application */
export function stopNarration() {
  currentQueue++;
  if (currentAudioElement) {
    try {
      currentAudioElement.pause();
      currentAudioElement.currentTime = 0;
      currentAudioElement.removeAttribute('src');
      currentAudioElement.load();
    } catch (e) {}
    currentAudioElement = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

/**
 * Play an array of segments in order.
 * Strictly prevents audio overlap: a new narrate() call cancels any active audio and pending queues immediately.
 */
export async function narrate(segments, autoplay = true) {
  if (!autoplay || audioMuted) return;
  stopNarration();
  const myQueue = ++currentQueue;
  const list = (Array.isArray(segments) ? segments : [segments]).filter(s => s && s.text);
  if (!list.length) return;

  for (let i = 0; i < list.length; i++) {
    if (myQueue !== currentQueue || audioMuted) return;
    const item = list[i];
    const url = await getAudioUrl(item.text, item.style);
    if (myQueue !== currentQueue || audioMuted) return;

    if (url) {
      await playUrl(url, item, myQueue);
    } else {
      await fallbackSpeech(item, myQueue);
    }
    if (myQueue !== currentQueue || audioMuted) return;
  }
}

/* --------------------------- Segment helpers ---------------------------- */
export const say = text => ({ text, style: 'statement' });
export const ask = text => ({ text, style: 'question' });
export const cheer = text => ({ text, style: 'celebration' });
export const encourage = text => ({ text, style: 'encouragement' });
export const emphasize = text => ({ text, style: 'emphasis' });
export const think = text => ({ text, style: 'thinking' });
export const celebrate = text => ({ text, style: 'celebration' });
export const instruct = text => ({ text, style: 'instruction' });
