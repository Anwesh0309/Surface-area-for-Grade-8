/* =========================================================================
   NARRATION SCRIPTS — maps each lesson phase to its spoken segments.
   Only paragraph text, questions, guidance, and hints are narrated.
   Every string comes from lessonScript.js, the single source of truth.
   ========================================================================= */
import { say, ask, think, instruct, cheer, encourage } from './audio.js';
import {
  WONDER,
  STORY,
  SIMULATE_INTROS,
  SIMULATE_ACTIVITIES,
  REFLECT,
  FEEDBACK
} from './lessonScript.js';

export function wonderNarration() {
  return [say(WONDER.paragraph), ask(WONDER.question)];
}

export function getStoryNarration(slideIndex) {
  const slide = STORY[slideIndex];
  return slide ? [{ text: slide.body, style: slide.style }] : [];
}

export function simulateStationIntro(station) {
  const text = SIMULATE_INTROS[station];
  if (!text) return [];
  return [station === 3 ? ask(text) : instruct(text)];
}

export function simulateActivityGuidance(station, actIdx) {
  const act = SIMULATE_ACTIVITIES[station]?.[actIdx];
  if (!act) return [];
  return [instruct(act.desc)];
}

export function simulateActivityHint(station, actIdx) {
  const act = SIMULATE_ACTIVITIES[station]?.[actIdx];
  if (!act) return [];
  return [think(act.hint)];
}

export function practiceQuestionNarration(prompt) {
  if (!prompt) return [];
  return [ask(prompt)];
}

export function practiceHintNarration(hint) {
  if (!hint) return [];
  return [think(hint)];
}

export function reflectQuestionNarration() {
  return [think(REFLECT.question)];
}

export const feedbackNarration = {
  splitDone: () => [cheer(FEEDBACK.splitDone)],
  buildDone: () => [cheer(FEEDBACK.buildDone)],
  reverseDone: () => [cheer(FEEDBACK.reverseDone)],
  tryAgain: () => [encourage(FEEDBACK.tryAgain)],
  practiceCorrect: () => [cheer(FEEDBACK.practiceCorrect)],
  practiceWrong: () => [encourage(FEEDBACK.practiceWrong)],
  lessonDone: () => [cheer(FEEDBACK.lessonDone)]
};
