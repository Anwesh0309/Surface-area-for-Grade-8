/* =========================================================================
   MATH DATA & PROCEDURAL QUESTION GENERATOR
   Procedurally generates Grade 8 "Surface Area" questions.
   Each question carries diagram data for <SolidDiagram/>.
   ========================================================================= */
import { PRACTICE_QUESTIONS, getPracticeQuestion } from './data/practiceQuestions.js';

export { PRACTICE_QUESTIONS, getPracticeQuestion };

export function getQuestion(worldIndex = 0, qIndex = 0) {
  return getPracticeQuestion(worldIndex, qIndex);
}

export const WESTERN_NAMES = [
  "Leo", "Emma", "Alex", "Oliver", "Sophia", "Jack", "Maya", "Lucas",
  "Ethan", "Chloe", "Noah", "Liam", "Harper", "Ava", "Mason", "Ella",
  "James", "Mia", "Logan", "Charlotte"
];

export const PRACTICE_WORLDS = [
  { id: 0, name: "Gift Box Galaxy", icon: "🎁", range: "Q1–10", difficulty: 1, unit: "cm" },
  { id: 1, name: "Dice Dock", icon: "🎲", range: "Q11–20", difficulty: 1, unit: "cm" },
  { id: 2, name: "Cereal Factory", icon: "🥣", range: "Q21–30", difficulty: 2, unit: "cm" },
  { id: 3, name: "Tent Town", icon: "⛺", range: "Q31–40", difficulty: 2, unit: "m" },
  { id: 4, name: "Tin Can Tower", icon: "🥫", range: "Q41–50", difficulty: 2, unit: "cm" },
  { id: 5, name: "Aquarium Alley", icon: "🐠", range: "Q51–60", difficulty: 3, unit: "cm" },
  { id: 6, name: "Pyramid Plains", icon: "🔺", range: "Q61–70", difficulty: 3, unit: "m" },
  { id: 7, name: "Paint Palace", icon: "🎨", range: "Q71–80", difficulty: 3, unit: "m" },
  { id: 8, name: "Packaging Port", icon: "📦", range: "Q81–90", difficulty: 4, unit: "cm" },
  { id: 9, name: "Skyscraper Summit", icon: "🏙️", range: "Q91–100", difficulty: 4, unit: "m" }
];

const CTX = {
  cuboid: { cm: ["gift box", "cereal box", "shoebox", "juice carton"], m: ["storage container", "shipping crate", "garden shed"] },
  cube: { cm: ["dice", "sugar cube box", "puzzle cube", "toy block"], m: ["storage cube", "concrete block", "water tank"] },
  open: { cm: ["fish tank with no lid", "open-top tray", "open toy box"], m: ["swimming pool (no top)", "open water tank", "sandpit box"] },
  prism: { cm: ["chocolate box", "doorstop wedge", "cheese wedge box"], m: ["tent", "ramp", "roof section"] },
  cylinder: { cm: ["soup tin", "pencil case tube", "paint tin"], m: ["water tank", "silo", "pillar"] },
  pyramid: { cm: ["paperweight", "gift box lid", "candle"], m: ["glass pyramid", "roof spire", "monument"] }
};

const SOLID_FACES = [
  { name: "cube", n: 6 },
  { name: "cuboid", n: 6 },
  { name: "triangular prism", n: 5 },
  { name: "square-based pyramid", n: 5 },
  { name: "pentagonal prism", n: 7 },
  { name: "triangular pyramid", n: 4 }
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatNum(val) {
  return (Math.round(val * 100) / 100).toString();
}

function choosePi() {
  if (Math.random() < 0.6) return { pi: 22 / 7, piLabel: "take π = 22/7", r: pick([7, 7, 14]) };
  return { pi: 3.14, piLabel: "take π = 3.14", r: randInt(2, 10) };
}

const RULES = {
  faces: "✦ COUNT THE FACES",
  add: "✦ ADD EVERY FACE",
  open: "✦ ONLY THE FACES NEEDED",
  curved: "✦ CIRCLES + CURVED SIDE",
  reverse: "✦ WORK BACKWARDS",
  cost: "✦ AREA × COST"
};

/**
 * Generate a procedural question for a given world
 */
export function makeQuestion(worldIndex = 0) {
  const world = PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0];
  const name = pick(WESTERN_NAMES);
  const diff = world.difficulty;
  const unit = world.unit;
  const u2 = `${unit}²`;

  const allowed = ['cube', 'cuboid', 'cuboid', 'faces'];
  if (diff >= 2) allowed.push('open', 'prism', 'cylinder', 'cylinder');
  if (diff >= 3) allowed.push('openCyl', 'label', 'pyramid', 'pyramid', 'cubeRev');
  if (diff >= 4) allowed.push('cuboidRev', 'cuboidRev', 'cylRev', 'cost', 'cost');
  const archetype = pick(allowed);

  let prompt = "";
  let correct = 0;
  let distractors = [];
  let diagramData = {};
  let explanation = "";
  let rule = RULES.add;
  let fmtOpt = v => `${v} ${u2}`;

  switch (archetype) {
    case 'faces': {
      const s = pick(SOLID_FACES);
      correct = s.n;
      prompt = `${name} unfolds a ${s.name} into a net. How many faces will the net have?`;
      diagramData = { type: 'faces', solid: s.name };
      distractors = [s.n + 1, s.n - 1, s.n + 2, 8];
      explanation = `A ${s.name} has ${s.n} faces, so its net has ${s.n} shapes.`;
      rule = RULES.faces;
      fmtOpt = v => `${v} faces`;
      break;
    }

    case 'cube': {
      const s = randInt(2, 12);
      correct = 6 * s * s;
      prompt = `${name} covers every face of a ${pick(CTX.cube[unit])} with paper. Each edge is ${s} ${unit}. Find the total surface area.`;
      diagramData = { type: 'cuboid', L: s, W: s, H: s, unit };
      distractors = [s * s * s, 4 * s * s, s * s, 6 * s];
      explanation = `6 × ${s}² = 6 × ${s * s} = ${correct} ${u2}.`;
      break;
    }

    case 'cuboid': {
      const L = randInt(4, 15), W = randInt(2, 10), H = randInt(2, 12);
      const lw = L * W, lh = L * H, wh = W * H;
      correct = 2 * (lw + lh + wh);
      prompt = `A closed ${pick(CTX.cuboid[unit])} measures ${L} ${unit} by ${W} ${unit} by ${H} ${unit}. Find its total surface area.`;
      diagramData = { type: 'cuboid', L, W, H, unit };
      distractors = [L * W * H, lw + lh + wh, 2 * (lw + lh) + wh, 4 * (lw + lh + wh)];
      explanation = `2(${lw} + ${lh} + ${wh}) = 2 × ${lw + lh + wh} = ${correct} ${u2}.`;
      break;
    }

    case 'open': {
      const L = randInt(5, 15), W = randInt(3, 10), H = randInt(2, 10);
      const lw = L * W, lh = L * H, wh = W * H;
      correct = lw + 2 * lh + 2 * wh;
      prompt = `An ${pick(CTX.open[unit])} is ${L} ${unit} long, ${W} ${unit} wide and ${H} ${unit} high. Find the area of its outside surface (no top).`;
      diagramData = { type: 'cuboid', L, W, H, unit, open: true };
      distractors = [2 * (lw + lh + wh), 2 * lh + 2 * wh, lw + lh + wh, 2 * lw + lh + wh];
      explanation = `Bottom ${lw} + 2 × ${lh} + 2 × ${wh} = ${correct} ${u2} (no lid!).`;
      rule = RULES.open;
      break;
    }

    case 'prism': {
      const k = randInt(1, 3), L = randInt(4, 15);
      const a = 3 * k, b = 4 * k, c = 5 * k;
      const ends = a * b; // 2 × ½ab
      const sides = (a + b + c) * L;
      correct = ends + sides;
      prompt = `A ${pick(CTX.prism[unit])} is a triangular prism ${L} ${unit} long. Each end is a right-angled triangle with sides ${a}, ${b} and ${c} ${unit}. Find its total surface area.`;
      diagramData = { type: 'prism', a, b, c, L, unit };
      distractors = [2 * ends + sides, sides, ends / 2 + sides, a * b * L];
      explanation = `Ends 2 × ½ × ${a} × ${b} = ${ends}; sides (${a} + ${b} + ${c}) × ${L} = ${sides}; total ${correct} ${u2}.`;
      break;
    }

    case 'cylinder': {
      const { pi, piLabel, r } = choosePi();
      const h = randInt(3, 20);
      const ends = 2 * pi * r * r, curved = 2 * pi * r * h;
      correct = ends + curved;
      prompt = `A closed ${pick(CTX.cylinder[unit])} has radius ${r} ${unit} and height ${h} ${unit}. Find its total surface area (${piLabel}).`;
      diagramData = { type: 'cylinder', r, h, unit };
      distractors = [pi * r * r + curved, curved, ends + pi * r * h, pi * r * r * h];
      explanation = `2πr² + 2πrh = ${formatNum(ends)} + ${formatNum(curved)} = ${formatNum(correct)} ${u2}.`;
      rule = RULES.curved;
      break;
    }

    case 'openCyl': {
      const { pi, piLabel, r } = choosePi();
      const h = randInt(3, 20);
      const base = pi * r * r, curved = 2 * pi * r * h;
      correct = base + curved;
      prompt = `A ${pick(CTX.cylinder[unit])} has a base but NO lid. Its radius is ${r} ${unit} and height ${h} ${unit}. Find its outside surface area (${piLabel}).`;
      diagramData = { type: 'cylinder', r, h, unit, open: true };
      distractors = [2 * base + curved, curved, base + pi * r * h, 2 * base];
      explanation = `πr² + 2πrh = ${formatNum(base)} + ${formatNum(curved)} = ${formatNum(correct)} ${u2}.`;
      rule = RULES.open;
      break;
    }

    case 'label': {
      const { pi, piLabel, r } = choosePi();
      const h = randInt(4, 20);
      correct = 2 * pi * r * h;
      prompt = `${name} designs a paper label that wraps exactly once around a tin with radius ${r} ${unit} and height ${h} ${unit}. Find the area of the label (${piLabel}).`;
      diagramData = { type: 'cylinder', r, h, unit, labelOnly: true };
      distractors = [pi * r * h, correct + 2 * pi * r * r, pi * r * r * h, 2 * pi * r * r];
      explanation = `Label = 2πr × h = ${formatNum(2 * pi * r)} × ${h} = ${formatNum(correct)} ${u2}.`;
      rule = RULES.curved;
      break;
    }

    case 'pyramid': {
      const b = 2 * randInt(2, 8), l = randInt(b / 2 + 2, b + 8);
      const base = b * b, tris = 4 * (b * l) / 2;
      correct = base + tris;
      prompt = `A ${pick(CTX.pyramid[unit])} is a square-based pyramid. The base is ${b} ${unit} by ${b} ${unit} and each triangle has a slant height of ${l} ${unit}. Find its total surface area.`;
      diagramData = { type: 'pyramid', b, l, unit };
      distractors = [base + 4 * b * l, tris, base + b * l, base + 2 * tris];
      explanation = `${b}² + 4 × ½ × ${b} × ${l} = ${base} + ${tris} = ${correct} ${u2}.`;
      break;
    }

    case 'cubeRev': {
      const s = randInt(2, 12);
      const SA = 6 * s * s;
      correct = s;
      prompt = `A ${pick(CTX.cube[unit])} has a total surface area of ${SA} ${u2}. How long is each edge?`;
      diagramData = { type: 'cuboid', L: s, W: s, H: s, unit, unknown: 'all', total: SA };
      distractors = [SA / 6, SA / 4 > 0 ? Math.round(Math.sqrt(SA / 4) * 100) / 100 : 1, s + 1, s * 2];
      explanation = `${SA} ÷ 6 = ${s * s}, and √${s * s} = ${s} ${unit}.`;
      rule = RULES.reverse;
      fmtOpt = v => `${v} ${unit}`;
      break;
    }

    case 'cuboidRev': {
      const L = randInt(4, 15), W = randInt(2, 10), H = randInt(2, 12);
      const SA = 2 * (L * W + L * H + W * H);
      correct = H;
      prompt = `A closed ${pick(CTX.cuboid[unit])} is ${L} ${unit} long and ${W} ${unit} wide. Its total surface area is ${SA} ${u2}. Find its height.`;
      diagramData = { type: 'cuboid', L, W, H, unit, unknown: 'H', total: SA };
      distractors = [2 * H, H + 1, (SA / 2 - L * W) / L, SA / (L * W)];
      explanation = `${SA} ÷ 2 = ${SA / 2}; ${SA / 2} − ${L * W} = ${SA / 2 - L * W}; ÷ (${L} + ${W}) = ${H} ${unit}.`;
      rule = RULES.reverse;
      fmtOpt = v => `${v} ${unit}`;
      break;
    }

    case 'cylRev': {
      const r = 7, h = randInt(3, 20);
      const pi = 22 / 7;
      const SA = 2 * pi * r * r + 2 * pi * r * h;
      correct = h;
      prompt = `A closed tin has radius 7 ${unit} and total surface area ${formatNum(SA)} ${u2}. Find its height (take π = 22/7).`;
      diagramData = { type: 'cylinder', r, h, unit, unknown: true };
      distractors = [h + 7, 2 * h, (SA - pi * r * r) / (2 * pi * r), SA / (2 * pi * r)];
      explanation = `${formatNum(SA)} − 308 = ${formatNum(2 * pi * r * h)}; ÷ 44 = ${h} ${unit}.`;
      rule = RULES.reverse;
      fmtOpt = v => `${v} ${unit}`;
      break;
    }

    case 'cost': {
      const L = randInt(2, 8), W = randInt(2, 6), H = randInt(2, 5);
      const price = randInt(2, 9);
      const SA = 2 * (L * W + L * H + W * H);
      correct = SA * price;
      prompt = `A closed crate ${L} m by ${W} m by ${H} m is painted on every face. Paint costs $${price} per m². How much does it cost?`;
      diagramData = { type: 'cuboid', L, W, H, unit: 'm' };
      distractors = [L * W * H * price, (SA / 2) * price, SA, SA * price + price * L * W];
      explanation = `SA = ${SA} m², so cost = ${SA} × $${price} = $${correct}.`;
      rule = RULES.cost;
      fmtOpt = v => `$${v}`;
      break;
    }

    default:
      break;
  }

  prompt = prompt.replace(/\b([Aa]) (?=[aeiouAEIOU]|(?:8|11|18|8\d)\b)/g, '$1n ');

  // Deduplicate and build 3 distinct, positive distractors
  const correctLabel = formatNum(correct);
  const uniq = [];
  for (const d of distractors) {
    const f = formatNum(d);
    if (d > 0 && f !== correctLabel && !uniq.includes(f)) uniq.push(f);
  }
  const fallbacks = [correct * 2, correct + 10, correct * 1.5, correct + 4, correct + 1, correct + 2];
  for (const fb of fallbacks) {
    if (uniq.length >= 3) break;
    const f = formatNum(fb);
    if (fb > 0 && f !== correctLabel && !uniq.includes(f)) uniq.push(f);
  }

  const rawOptions = [correctLabel, ...uniq.slice(0, 3)].map(fmtOpt);
  const target = rawOptions[0];
  const options = [...rawOptions];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return {
    world,
    name,
    archetype,
    prompt,
    correctIndex: options.indexOf(target),
    correctValue: correct,
    options,
    diagramData,
    rule,
    explanation
  };
}
