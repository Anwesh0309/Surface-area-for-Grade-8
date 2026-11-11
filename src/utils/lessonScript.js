/* =========================================================================
   LESSON SCRIPT — Single source of truth for every spoken line.
   ---------------------------------------------------------------------------
   • UI components DISPLAY these exact strings.
   • src/utils/narration.js wraps them in styled segments for playback.
   • scripts/generate_audio.js reads ALL_PHRASES to pre-generate the MP3s.
   Because all three read the same strings, on-screen text and audio can
   never drift apart (1:1 parity).
   ========================================================================= */

import { PRACTICE_QUESTIONS } from '../data/practiceQuestions.js';

export const WONDER = {
  paragraph:
    "Zoe's gift box is 30 centimetres long, 20 centimetres wide and 10 centimetres tall. To cover every face exactly, she needs 2200 square centimetres of wrapping paper!",
  question:
    "How can we find the total area of every face of a 3D shape without missing any?"
};

export const STORY = [
  {
    body: "Gift boxes, cereal packets, tins and tents all have outer surfaces. The surface area of a solid is the total area of all its faces. It tells us how much paper, paint or material covers the outside!",
    style: 'statement'
  },
  {
    body: "If we cut along some edges and flatten a box, we get a net. A net shows every face laid out flat, so we can find the area of each face and add them all up!",
    style: 'statement'
  },
  {
    body: "A cube has 6 identical square faces. If each edge is 5 centimetres, one face is 25 square centimetres, so the whole cube is 6 times 25, which is 150 square centimetres.",
    style: 'emphasis'
  },
  {
    body: "A cuboid has 3 pairs of matching rectangles: top and bottom, front and back, left and right. Add one face from each pair, then double it! Zoe's box is 2 times 600 plus 300 plus 200, which is 2200 square centimetres.",
    style: 'emphasis'
  },
  {
    body: "A triangular prism has 2 triangle ends and 3 rectangle sides. The sides unfold into one long rectangle, so their total area is the perimeter of the triangle times the length of the prism.",
    style: 'thinking'
  },
  {
    body: "A cylinder has 2 circle ends and a curved surface. Peel off the label and it becomes a rectangle! Its width is the circumference, 2 pi r, and its height is the height of the cylinder.",
    style: 'emphasis'
  },
  {
    body: "Zoe's tin has a radius of 7 centimetres and a height of 10 centimetres. The two lids make 308 square centimetres and the label makes 440 square centimetres, so the tin needs 748 square centimetres of metal!",
    style: 'encouragement'
  },
  {
    body: "Amazing work! You can now unfold solids into nets and add up every face. Step into the lab to unfold nets, paint and wrap solids, and solve reverse puzzles!",
    style: 'celebration'
  }
];

export const SIMULATE_INTROS = {
  1: "Drag the slider to unfold the solid into its net. Then tap every face to reveal its area and add them all up!",
  2: "Read the job carefully and tap only the faces that need material. Then find their areas and the total!",
  3: "Work backwards! Use the total surface area to find the missing measurement, one step at a time!"
};

export const SIMULATE_ACTIVITIES = {
  1: [
    {
      desc: "Zoe is covering a giant dice (a cube with 4 cm edges) in shiny paper. Unfold it into a net, tap every face to reveal its area, then add them up!",
      hint: "All 6 faces are 4 × 4 squares. Surface area = 6 × 16."
    },
    {
      desc: "A cereal box is 20 cm long, 6 cm wide and 30 cm tall. Unfold the box, reveal each face and find how much cardboard it uses!",
      hint: "Opposite faces are twins: 2 × (20 × 6) + 2 × (20 × 30) + 2 × (6 × 30)."
    },
    {
      desc: "A chocolate box is a triangular prism 20 cm long. Each triangle end has base 6 cm, height 4 cm and sloping sides of 5 cm. Unfold it and add the faces!",
      hint: "2 triangles: 2 × ½ × 6 × 4. 3 rectangles: (5 + 5 + 6) × 20."
    }
  ],
  2: [
    {
      desc: "Mia's fish tank is 50 cm long, 30 cm wide and 40 cm tall. It has NO lid. Tap the faces that need glass, then find the total area of glass.",
      hint: "Leave out the top face. Bottom + 2 long sides + 2 short sides."
    },
    {
      desc: "Leo's bedroom is 5 m long, 4 m wide and 3 m high. He paints the 4 walls and the ceiling, but NOT the floor. Tap the faces to paint, then find the area.",
      hint: "Leave out the floor (bottom). Ceiling + 2 long walls + 2 short walls."
    },
    {
      desc: "A pencil holder is a cylinder with radius 7 cm and height 10 cm, open at the top. Tap the surfaces that need metal, then find the total area (π = 22/7).",
      hint: "Base = πr². Curved surface = 2πr × h. No lid!"
    }
  ],
  3: [
    {
      desc: "A puzzle cube has a total surface area of 294 cm². How long is each edge?",
      hint: "A cube has 6 equal faces. Share 294 equally, then find the square root."
    },
    {
      desc: "A shoebox is 30 cm long and 18 cm wide. Its total surface area is 2232 cm². How tall is the box?",
      hint: "lw + lh + wh = 1116. The two side faces share h: lh + wh = (l + w) × h = 48h."
    },
    {
      desc: "A paint tin has radius 7 cm and a total surface area of 748 cm². How tall is the tin? (π = 22/7)",
      hint: "Take away the two circles first. What's left is the label: circumference × height."
    }
  ]
};

export const REFLECT = {
  question:
    "How do you find the surface area of a solid? Explain it to Robo with an example!"
};

export const FEEDBACK = {
  splitDone: "Awesome! You found the total surface area!",
  buildDone: "Great job! You covered exactly the right faces!",
  reverseDone: "Brilliant reverse thinking!",
  tryAgain: "Not quite. Try again!",
  practiceCorrect: "Correct! Excellent surface area work!",
  practiceWrong: "Not quite!",
  lessonDone: "Outstanding reflection! Lesson complete!"
};

// Compile ALL phrases to generate audio for
const simPhrases = [];
for (const s of [1, 2, 3]) {
  simPhrases.push({ text: SIMULATE_INTROS[s], style: s === 3 ? 'question' : 'instruction' });
  for (const act of SIMULATE_ACTIVITIES[s]) {
    simPhrases.push({ text: act.desc, style: 'instruction' });
    simPhrases.push({ text: act.hint, style: 'thinking' });
  }
}

const practicePhrases = [];
for (const q of PRACTICE_QUESTIONS) {
  practicePhrases.push({ text: q.prompt, style: 'question' });
  practicePhrases.push({ text: q.hint, style: 'thinking' });
}

export const ALL_PHRASES = [
  { text: WONDER.paragraph, style: 'statement' },
  { text: WONDER.question, style: 'question' },
  ...STORY.map(s => ({ text: s.body, style: s.style })),
  ...simPhrases,
  { text: REFLECT.question, style: 'thinking' },
  { text: FEEDBACK.splitDone, style: 'celebration' },
  { text: FEEDBACK.buildDone, style: 'celebration' },
  { text: FEEDBACK.reverseDone, style: 'celebration' },
  { text: FEEDBACK.tryAgain, style: 'encouragement' },
  { text: FEEDBACK.practiceCorrect, style: 'celebration' },
  { text: FEEDBACK.practiceWrong, style: 'encouragement' },
  { text: FEEDBACK.lessonDone, style: 'celebration' },
  ...practicePhrases
];
