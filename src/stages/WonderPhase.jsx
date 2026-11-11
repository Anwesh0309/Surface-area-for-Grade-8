import React, { useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { narrate, stopNarration } from '../utils/audio.js';
import { wonderNarration } from '../utils/narration.js';
import { WONDER } from '../utils/lessonScript.js';
import { iso, makeFit, ptsAttr, cuboidFaces } from '../components/iso.js';

/* Zoe's gift box: 30 cm × 20 cm × 10 cm cuboid with a ribbon */
function GiftBox() {
  const L = 30, W = 20, H = 10;
  const faces = cuboidFaces(L, W, H).filter(f => f.visible);
  const all = faces.flatMap(f => f.p3.map(iso));
  const fit = makeFit(all, 300, 200, 28);
  const P = p => fit(iso(p));
  const colors = { top: '#facc15', front: '#f472b6', right: '#38bdf8' };
  const ribbon = [
    [[L / 2 - 1, 0, H], [L / 2 + 1, 0, H], [L / 2 + 1, W, H], [L / 2 - 1, W, H]],
    [[0, W / 2 - 1, H], [L, W / 2 - 1, H], [L, W / 2 + 1, H], [0, W / 2 + 1, H]],
    [[L / 2 - 1, W, H], [L / 2 + 1, W, H], [L / 2 + 1, W, 0], [L / 2 - 1, W, 0]],
    [[L, W / 2 - 1, H], [L, W / 2 + 1, H], [L, W / 2 + 1, 0], [L, W / 2 - 1, 0]]
  ];
  const mid = (a, b) => { const p = P(a), q = P(b); return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]; };
  const lab = (pt, txt, dx = 0, dy = 0, anchor = 'middle') => (
    <text x={pt[0] + dx} y={pt[1] + dy} fill="#e2e8f0" fontSize="12" fontWeight="800" textAnchor={anchor}>{txt}</text>
  );
  return (
    <svg viewBox="0 0 300 200" className="w-40 sm:w-52 shrink-0 h-auto max-h-[20vh] drop-shadow-[0_0_18px_rgba(192,132,252,0.45)]">
      {faces.map(f => (
        <polygon key={f.key} points={ptsAttr(f.p3.map(P))} fill={colors[f.key]} fillOpacity="0.45" stroke={colors[f.key]} strokeWidth="2.5" strokeLinejoin="round" />
      ))}
      {ribbon.map((r, i) => <polygon key={i} points={ptsAttr(r.map(P))} fill="#c084fc" opacity="0.9" />)}
      <circle cx={P([L / 2, W / 2, H])[0]} cy={P([L / 2, W / 2, H])[1] - 6} r="9" fill="#c084fc" stroke="#fff" strokeWidth="2" />
      {lab(mid([0, W, 0], [L, W, 0]), '30 cm', -10, 18)}
      {lab(mid([L, W, 0], [L, 0, 0]), '20 cm', 18, 16)}
      {lab(mid([L, 0, 0], [L, 0, H]), '10 cm', 8, 4, 'start')}
    </svg>
  );
}

export function WonderPhase({ muted, onNext }) {
  useEffect(() => {
    stopNarration();
    narrate(wonderNarration(), !muted);
    return () => stopNarration();
  }, [muted]);

  const handleReplay = () => {
    stopNarration();
    narrate(wonderNarration(), !muted);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-4 relative overflow-hidden select-none z-10">
      <BgSymbols />

      <div className="w-full max-w-2xl glass-card flex flex-col items-center text-center fade-in-up z-20 my-auto">
        {/* Glowing Phase Band */}
        <div className="phase-band phase-band--wonder" />

        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🔍</span>
            <span className="text-purple-300 font-display font-800 text-xs sm:text-sm tracking-wider uppercase">
              Phase 1: Wonder & Curiosity
            </span>
          </div>
          <button
            onClick={handleReplay}
            title="Replay Wonder Narration"
            className="bg-purple-900/80 hover:bg-purple-700 border border-purple-400/50 text-purple-200 px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition"
          >
            <span>🔊</span>
            <span>Listen</span>
          </button>
        </div>

        <h2 className="text-main-heading text-purple-200 mb-3 max-w-xl">
          How Much Paper Wraps Zoe's Gift?
        </h2>

        {/* Feature Stat Box */}
        <div className="w-full bg-[#1e143c]/90 border border-purple-400/30 rounded-2xl p-4 sm:p-6 mb-4 flex flex-col items-center shadow-xl">
          <div className="text-number text-amber-300 text-4xl sm:text-6xl mb-1">
            2200 cm² of Paper!
          </div>
          <div className="flex items-center gap-4 w-full">
            <GiftBox />
            <p className="text-body text-slate-200 text-left">
              {WONDER.paragraph}
            </p>
          </div>
        </div>

        {/* Mascot Thinking Bubble */}
        <div className="flex items-center gap-3 bg-[#14082c]/80 border border-purple-500/30 rounded-full px-5 py-2 mb-5">
          <div className="w-8 h-8 rounded-full bg-purple-500/30 text-purple-200 flex items-center justify-center font-bold text-sm shrink-0">
            🤖
          </div>
          <p className="text-slate-300 text-xs sm:text-sm font-semibold">
            {WONDER.question}
          </p>
        </div>

        <button onClick={onNext} className="btn-gold flex items-center gap-2">
          <span>Explore the Story</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
