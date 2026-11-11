/* =========================================================================
   PRACTICE QUESTIONS DATA GENERATOR
   Creates src/data/practiceQuestions.js with all 100 questions.
   ========================================================================= */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_FILE = path.resolve(__dirname, '..', 'src', 'data', 'practiceQuestions.js');

const rawQuestions = [
  // ==========================================
  // WORLD 0: Gift Box Galaxy (Q1–10, cm)
  // ==========================================
  {
    worldIndex: 0, qIndex: 0,
    rule: "✦ COUNT THE FACES",
    prompt: "Liam unfolds a closed cube gift box into a flat net. How many square faces does the net have?",
    hint: "A cube has 6 identical square faces that unfold into a flat net.",
    diagramData: { type: 'faces', solid: 'cube' },
    correct: 6,
    distractors: [5, 8, 4],
    unit: 'faces',
    explanation: "A cube has 6 identical faces, so its net has 6 square faces."
  },
  {
    worldIndex: 0, qIndex: 1,
    rule: "✦ ADD EVERY FACE",
    prompt: "Emma has a gift box that is 5 cm long, 3 cm wide and 2 cm tall. What is its total surface area?",
    hint: "Find the area of the three pairs of matching faces: top and bottom, front and back, and left and right. Add them and double the result.",
    diagramData: { type: 'cuboid', L: 5, W: 3, H: 2, unit: 'cm' },
    correct: 62,
    distractors: [30, 60, 52],
    unit: 'cm²',
    explanation: "2 × (5×3 + 5×2 + 3×2) = 2 × (15 + 10 + 6) = 2 × 31 = 62 cm²."
  },
  {
    worldIndex: 0, qIndex: 2,
    rule: "✦ ADD EVERY FACE",
    prompt: "Jack has a cube gift box with edge length 4 cm. What is its total surface area?",
    hint: "A cube has 6 equal square faces. Find the area of one face, 4 times 4, and multiply by 6.",
    diagramData: { type: 'cuboid', L: 4, W: 4, H: 4, unit: 'cm' },
    correct: 96,
    distractors: [64, 24, 80],
    unit: 'cm²',
    explanation: "6 × 4² = 6 × 16 = 96 cm²."
  },
  {
    worldIndex: 0, qIndex: 3,
    rule: "✦ OPPOSITE FACES ARE TWINS",
    prompt: "Sophia is wrapping a jewelry gift box measuring 8 cm long, 4 cm wide and 3 cm tall. What is the total surface area to cover?",
    hint: "Calculate the area of each pair of opposite faces: 8 times 4, 8 times 3, and 4 times 3. Then add them and double the total.",
    diagramData: { type: 'cuboid', L: 8, W: 4, H: 3, unit: 'cm' },
    correct: 136,
    distractors: [96, 68, 144],
    unit: 'cm²',
    explanation: "2 × (8×4 + 8×3 + 4×3) = 2 × (32 + 24 + 12) = 2 × 68 = 136 cm²."
  },
  {
    worldIndex: 0, qIndex: 4,
    rule: "✦ COUNT THE FACES",
    prompt: "Lucas unfolds a cuboid shoe gift box into a net. How many rectangular faces will the net have?",
    hint: "Every cuboid has 6 rectangular faces arranged in 3 opposite pairs.",
    diagramData: { type: 'faces', solid: 'cuboid' },
    correct: 6,
    distractors: [4, 8, 12],
    unit: 'faces',
    explanation: "Every cuboid has 6 faces: top, bottom, front, back, and two sides."
  },
  {
    worldIndex: 0, qIndex: 5,
    rule: "✦ ADD EVERY FACE",
    prompt: "Chloe wraps a cube gift box with edges of 6 cm. What is its total surface area?",
    hint: "Each face is a 6 by 6 square with area 36 square centimetres. Multiply by 6 for all six faces.",
    diagramData: { type: 'cuboid', L: 6, W: 6, H: 6, unit: 'cm' },
    correct: 216,
    distractors: [36, 180, 240],
    unit: 'cm²',
    explanation: "6 × 6² = 6 × 36 = 216 cm²."
  },
  {
    worldIndex: 0, qIndex: 6,
    rule: "✦ OPPOSITE FACES ARE TWINS",
    prompt: "Alex is wrapping a long gift box measuring 10 cm long, 5 cm wide and 2 cm tall. What is its total surface area?",
    hint: "Work out the area of the three pairs: 10 times 5, 10 times 2, and 5 times 2. Double their sum.",
    diagramData: { type: 'cuboid', L: 10, W: 5, H: 2, unit: 'cm' },
    correct: 160,
    distractors: [100, 80, 150],
    unit: 'cm²',
    explanation: "2 × (10×5 + 10×2 + 5×2) = 2 × (50 + 20 + 10) = 2 × 80 = 160 cm²."
  },
  {
    worldIndex: 0, qIndex: 7,
    rule: "✦ ADD EVERY FACE",
    prompt: "Maya has a small souvenir gift box measuring 7 cm long, 3 cm wide and 4 cm tall. Find its total surface area.",
    hint: "Add the areas of one top, one front and one side face: 21 plus 28 plus 12. Then multiply by two.",
    diagramData: { type: 'cuboid', L: 7, W: 3, H: 4, unit: 'cm' },
    correct: 122,
    distractors: [84, 61, 130],
    unit: 'cm²',
    explanation: "2 × (7×3 + 7×4 + 3×4) = 2 × (21 + 28 + 12) = 2 × 61 = 122 cm²."
  },
  {
    worldIndex: 0, qIndex: 8,
    rule: "✦ ADD EVERY FACE",
    prompt: "Noah wraps a puzzle cube gift box with edge length 3 cm. What is its total surface area?",
    hint: "Find the area of one square face, 3 times 3 equals 9, then multiply by 6 identical faces.",
    diagramData: { type: 'cuboid', L: 3, W: 3, H: 3, unit: 'cm' },
    correct: 54,
    distractors: [27, 36, 18],
    unit: 'cm²',
    explanation: "6 × 3² = 6 × 9 = 54 cm²."
  },
  {
    worldIndex: 0, qIndex: 9,
    rule: "✦ OPPOSITE FACES ARE TWINS",
    prompt: "Ava wraps a shirt gift box measuring 9 cm long, 6 cm wide and 2 cm tall. What is its total surface area?",
    hint: "Add the three face areas: 9 times 6, 9 times 2, and 6 times 2. Double the total to cover all faces.",
    diagramData: { type: 'cuboid', L: 9, W: 6, H: 2, unit: 'cm' },
    correct: 168,
    distractors: [108, 84, 180],
    unit: 'cm²',
    explanation: "2 × (9×6 + 9×2 + 6×2) = 2 × (54 + 18 + 12) = 2 × 84 = 168 cm²."
  },

  // ==========================================
  // WORLD 1: Dice Dock (Q11–20, cm)
  // ==========================================
  {
    worldIndex: 1, qIndex: 0,
    rule: "✦ AREA OF ONE FACE",
    prompt: "Oliver rolls a standard gaming dice with edge length 5 cm. What is the area of just one of its square faces?",
    hint: "The area of a square face is side times side. Multiply 5 by 5.",
    diagramData: { type: 'cuboid', L: 5, W: 5, H: 5, unit: 'cm' },
    correct: 25,
    distractors: [20, 150, 10],
    unit: 'cm²',
    explanation: "Area of one square face = 5 × 5 = 25 cm²."
  },
  {
    worldIndex: 1, qIndex: 1,
    rule: "✦ 6 EQUAL SQUARES",
    prompt: "Harper has a mini wooden dice with edge length 2 cm. What is the total surface area of all 6 faces?",
    hint: "Each face has area 2 times 2 equals 4. Multiply 4 by 6 faces.",
    diagramData: { type: 'cuboid', L: 2, W: 2, H: 2, unit: 'cm' },
    correct: 24,
    distractors: [8, 16, 12],
    unit: 'cm²',
    explanation: "6 × 2² = 6 × 4 = 24 cm²."
  },
  {
    worldIndex: 1, qIndex: 2,
    rule: "✦ 6 EQUAL SQUARES",
    prompt: "Ethan inspects a giant display dice with edge length 10 cm. What is its total surface area?",
    hint: "One face has area 10 times 10 equals 100 square centimetres. Multiply 100 by 6.",
    diagramData: { type: 'cuboid', L: 10, W: 10, H: 10, unit: 'cm' },
    correct: 600,
    distractors: [1000, 100, 400],
    unit: 'cm²',
    explanation: "6 × 10² = 6 × 100 = 600 cm²."
  },
  {
    worldIndex: 1, qIndex: 3,
    rule: "✦ 6 EQUAL SQUARES",
    prompt: "Mia holds a decorative stone cube dice with edge length 7 cm. What is its total surface area?",
    hint: "Calculate 7 squared to get 49 for one face, then multiply 49 by 6.",
    diagramData: { type: 'cuboid', L: 7, W: 7, H: 7, unit: 'cm' },
    correct: 294,
    distractors: [343, 49, 196],
    unit: 'cm²',
    explanation: "6 × 7² = 6 × 49 = 294 cm²."
  },
  {
    worldIndex: 1, qIndex: 4,
    rule: "✦ 6 EQUAL SQUARES",
    prompt: "James has a novelty foam dice with edge length 8 cm. What is its total surface area?",
    hint: "One face has area 8 times 8 equals 64. Multiply 64 by 6 faces.",
    diagramData: { type: 'cuboid', L: 8, W: 8, H: 8, unit: 'cm' },
    correct: 384,
    distractors: [512, 64, 256],
    unit: 'cm²',
    explanation: "6 × 8² = 6 × 64 = 384 cm²."
  },
  {
    worldIndex: 1, qIndex: 5,
    rule: "✦ MULTIPLY BY 6",
    prompt: "A board game dice has a single face area of 36 cm². What is the total surface area of the whole dice?",
    hint: "Since a dice has 6 identical square faces, multiply the single face area 36 by 6.",
    diagramData: { type: 'cuboid', L: 6, W: 6, H: 6, unit: 'cm' },
    correct: 216,
    distractors: [144, 36, 256],
    unit: 'cm²',
    explanation: "Total surface area = 6 × 36 = 216 cm²."
  },
  {
    worldIndex: 1, qIndex: 6,
    rule: "✦ 6 EQUAL SQUARES",
    prompt: "Logan carves a wooden dice with edge length 9 cm. What is its total surface area?",
    hint: "Square 9 to find the area of one face, then multiply 81 by 6.",
    diagramData: { type: 'cuboid', L: 9, W: 9, H: 9, unit: 'cm' },
    correct: 486,
    distractors: [729, 81, 324],
    unit: 'cm²',
    explanation: "6 × 9² = 6 × 81 = 486 cm²."
  },
  {
    worldIndex: 1, qIndex: 7,
    rule: "✦ 6 EQUAL SQUARES",
    prompt: "Charlotte makes a giant foam cube with edge length 11 cm. What is its total surface area?",
    hint: "One face has area 11 times 11 equals 121. Multiply 121 by 6.",
    diagramData: { type: 'cuboid', L: 11, W: 11, H: 11, unit: 'cm' },
    correct: 726,
    distractors: [1331, 121, 484],
    unit: 'cm²',
    explanation: "6 × 11² = 6 × 121 = 726 cm²."
  },
  {
    worldIndex: 1, qIndex: 8,
    rule: "✦ COMBINED DICE",
    prompt: "Leo has two identical separate dice with edge length 3 cm each. What is the combined surface area of both dice?",
    hint: "Find the surface area of one dice: 6 times 9 equals 54. Then double it for both separate dice.",
    diagramData: { type: 'cuboid', L: 3, W: 3, H: 3, unit: 'cm' },
    correct: 108,
    distractors: [54, 81, 72],
    unit: 'cm²',
    explanation: "One dice = 6 × 3² = 54 cm². Both dice = 2 × 54 = 108 cm²."
  },
  {
    worldIndex: 1, qIndex: 9,
    rule: "✦ 6 EQUAL SQUARES",
    prompt: "Mason has a big collector cube dice with edge length 12 cm. What is its total surface area?",
    hint: "One face has area 12 times 12 equals 144. Multiply 144 by 6.",
    diagramData: { type: 'cuboid', L: 12, W: 12, H: 12, unit: 'cm' },
    correct: 864,
    distractors: [1728, 144, 576],
    unit: 'cm²',
    explanation: "6 × 12² = 6 × 144 = 864 cm²."
  },

  // ==========================================
  // WORLD 2: Cereal Factory (Q21–30, cm)
  // ==========================================
  {
    worldIndex: 2, qIndex: 0,
    rule: "✦ OPPOSITE FACES ARE TWINS",
    prompt: "A family breakfast cereal box is 20 cm long, 5 cm wide and 30 cm tall. What is its total surface area of cardboard?",
    hint: "Find the areas of the 3 pairs: top and bottom 20 by 5, front and back 20 by 30, sides 5 by 30. Add them and double.",
    diagramData: { type: 'cuboid', L: 20, W: 5, H: 30, unit: 'cm' },
    correct: 1700,
    distractors: [3000, 850, 1600],
    unit: 'cm²',
    explanation: "2 × (20×5 + 20×30 + 5×30) = 2 × (100 + 600 + 150) = 2 × 850 = 1700 cm²."
  },
  {
    worldIndex: 2, qIndex: 1,
    rule: "✦ THREE PAIRS OF FACES",
    prompt: "An organic oats cereal box measures 15 cm long, 6 cm wide and 25 cm tall. What is its total surface area?",
    hint: "Add the 3 face areas: 15 times 6, 15 times 25, and 6 times 25. Multiply the total by 2.",
    diagramData: { type: 'cuboid', L: 15, W: 6, H: 25, unit: 'cm' },
    correct: 1230,
    distractors: [2250, 615, 1150],
    unit: 'cm²',
    explanation: "2 × (15×6 + 15×25 + 6×25) = 2 × (90 + 375 + 150) = 2 × 615 = 1230 cm²."
  },
  {
    worldIndex: 2, qIndex: 2,
    rule: "✦ ADD EVERY FACE",
    prompt: "A mini snack cereal box measures 12 cm long, 4 cm wide and 18 cm tall. Find its total surface area.",
    hint: "Top and bottom are 48 each, front and back are 216 each, and sides are 72 each. Add all 6 faces together.",
    diagramData: { type: 'cuboid', L: 12, W: 4, H: 18, unit: 'cm' },
    correct: 672,
    distractors: [864, 336, 620],
    unit: 'cm²',
    explanation: "2 × (12×4 + 12×18 + 4×18) = 2 × (48 + 216 + 72) = 2 × 336 = 672 cm²."
  },
  {
    worldIndex: 2, qIndex: 3,
    rule: "✦ THREE PAIRS OF FACES",
    prompt: "A healthy granola box measures 22 cm long, 8 cm wide and 28 cm tall. What is its total surface area?",
    hint: "Calculate one face of each pair: 22 times 8, 22 times 28, and 8 times 28. Add them and multiply by 2.",
    diagramData: { type: 'cuboid', L: 22, W: 8, H: 28, unit: 'cm' },
    correct: 2032,
    distractors: [4928, 1016, 1920],
    unit: 'cm²',
    explanation: "2 × (22×8 + 22×28 + 8×28) = 2 × (176 + 616 + 224) = 2 × 1016 = 2032 cm²."
  },
  {
    worldIndex: 2, qIndex: 4,
    rule: "✦ OPPOSITE FACES ARE TWINS",
    prompt: "An extra large jumbo cereal box measures 25 cm long, 10 cm wide and 35 cm tall. What is its total surface area?",
    hint: "Add the areas 250 plus 875 plus 350 to get 1475 for three faces, then double for all six faces.",
    diagramData: { type: 'cuboid', L: 25, W: 10, H: 35, unit: 'cm' },
    correct: 2950,
    distractors: [8750, 1475, 2800],
    unit: 'cm²',
    explanation: "2 × (25×10 + 25×35 + 10×35) = 2 × (250 + 875 + 350) = 2 × 1475 = 2950 cm²."
  },
  {
    worldIndex: 2, qIndex: 5,
    rule: "✦ THREE PAIRS OF FACES",
    prompt: "A honey rings cereal box is 18 cm long, 7 cm wide and 24 cm tall. Find its total surface area.",
    hint: "Work out 18 times 7, 18 times 24, and 7 times 24. Add the three answers and double the result.",
    diagramData: { type: 'cuboid', L: 18, W: 7, H: 24, unit: 'cm' },
    correct: 1452,
    distractors: [3024, 726, 1380],
    unit: 'cm²',
    explanation: "2 × (18×7 + 18×24 + 7×24) = 2 × (126 + 432 + 168) = 2 × 726 = 1452 cm²."
  },
  {
    worldIndex: 2, qIndex: 6,
    rule: "✦ ADD EVERY FACE",
    prompt: "A cereal bar variety box measures 16 cm long, 5 cm wide and 20 cm tall. What is its total surface area?",
    hint: "Add 80, 320, and 100 to get 500 square centimetres. Double it to get the total surface area.",
    diagramData: { type: 'cuboid', L: 16, W: 5, H: 20, unit: 'cm' },
    correct: 1000,
    distractors: [1600, 500, 920],
    unit: 'cm²',
    explanation: "2 × (16×5 + 16×20 + 5×20) = 2 × (80 + 320 + 100) = 2 × 500 = 1000 cm²."
  },
  {
    worldIndex: 2, qIndex: 7,
    rule: "✦ OPPOSITE FACES ARE TWINS",
    prompt: "A wheat biscuit box is 20 cm long, 10 cm wide and 30 cm tall. Find its total surface area.",
    hint: "Add 200 plus 600 plus 300 to get 1100, then double it to get 2200.",
    diagramData: { type: 'cuboid', L: 20, W: 10, H: 30, unit: 'cm' },
    correct: 2200,
    distractors: [6000, 1100, 2100],
    unit: 'cm²',
    explanation: "2 × (20×10 + 20×30 + 10×30) = 2 × (200 + 600 + 300) = 2 × 1100 = 2200 cm²."
  },
  {
    worldIndex: 2, qIndex: 8,
    rule: "✦ THREE PAIRS OF FACES",
    prompt: "A bran flakes carton is 14 cm long, 6 cm wide and 22 cm tall. What is its total surface area?",
    hint: "Calculate the area of each face type: 14 times 6, 14 times 22, and 6 times 22. Sum them and double.",
    diagramData: { type: 'cuboid', L: 14, W: 6, H: 22, unit: 'cm' },
    correct: 1048,
    distractors: [1848, 524, 980],
    unit: 'cm²',
    explanation: "2 × (14×6 + 14×22 + 6×22) = 2 × (84 + 308 + 132) = 2 × 524 = 1048 cm²."
  },
  {
    worldIndex: 2, qIndex: 9,
    rule: "✦ ADD EVERY FACE",
    prompt: "A crunchy cornflakes box is 24 cm long, 7 cm wide and 32 cm tall. What is its total surface area?",
    hint: "The three pairs of rectangles have areas 168, 768, and 224. Add them together and multiply by 2.",
    diagramData: { type: 'cuboid', L: 24, W: 7, H: 32, unit: 'cm' },
    correct: 2320,
    distractors: [5376, 1160, 2240],
    unit: 'cm²',
    explanation: "2 × (24×7 + 24×32 + 7×32) = 2 × (168 + 768 + 224) = 2 × 1160 = 2320 cm²."
  },

  // ==========================================
  // WORLD 3: Tent Town (Q31–40, m)
  // ==========================================
  {
    worldIndex: 3, qIndex: 0,
    rule: "✦ PRISM: ENDS + SIDES",
    prompt: "A camping tent is shaped like a triangular prism 4 m long. Each triangle end has base 3 m and height 2 m, and the sloping sides are 2.5 m. What is its total surface area?",
    hint: "The two triangle ends have area 2 times half times base times height. The three rectangular sides unfold into a single rectangle of perimeter times length.",
    diagramData: { type: 'prism', a: 3, b: 2, c: 2.5, L: 4, unit: 'm' },
    correct: 38,
    distractors: [32, 24, 44],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 3 × 2) = 6 m². Sides: (2.5 + 2.5 + 3) × 4 = 8 × 4 = 32 m². Total = 6 + 32 = 38 m²."
  },
  {
    worldIndex: 3, qIndex: 1,
    rule: "✦ PRISM: ENDS + SIDES",
    prompt: "A scout pup tent is 3 m long. The triangular front and back each have base 2 m and height 1.5 m, with two sloping sides of 1.8 m. Find the total surface area of canvas.",
    hint: "Add the area of both triangle ends to the area of the three rectangular sides.",
    diagramData: { type: 'prism', a: 2, b: 1.5, c: 1.8, L: 3, unit: 'm' },
    correct: 19.8,
    distractors: [16.8, 22.4, 18],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 2 × 1.5) = 3 m². Sides: (1.8 + 1.8 + 2) × 3 = 5.6 × 3 = 16.8 m². Total = 19.8 m²."
  },
  {
    worldIndex: 3, qIndex: 2,
    rule: "✦ RIGHT TRIANGLE PRISM",
    prompt: "A ridge tent is 5 m long. Its right-angled triangle ends have legs 3 m and 4 m, with hypotenuse 5 m. What is its total surface area?",
    hint: "Two right triangles have area 3 times 4 equals 12. The three sides have area perimeter 12 times length 5 equals 60.",
    diagramData: { type: 'prism', a: 3, b: 4, c: 5, L: 5, unit: 'm' },
    correct: 72,
    distractors: [60, 36, 84],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 3 × 4) = 12 m². Sides: (3 + 4 + 5) × 5 = 12 × 5 = 60 m². Total = 12 + 60 = 72 m²."
  },
  {
    worldIndex: 3, qIndex: 3,
    rule: "✦ PRISM: ENDS + SIDES",
    prompt: "A storage tent prism is 6 m long. Its triangle ends have base 6 m, height 4 m, and both sloping sides are 5 m. Find its total surface area.",
    hint: "Calculate 2 times half times 6 times 4 for the ends, and perimeter 16 times length 6 for the sides.",
    diagramData: { type: 'prism', a: 6, b: 4, c: 5, L: 6, unit: 'm' },
    correct: 120,
    distractors: [96, 72, 144],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 6 × 4) = 24 m². Sides: (5 + 5 + 6) × 6 = 16 × 6 = 96 m². Total = 24 + 96 = 120 m²."
  },
  {
    worldIndex: 3, qIndex: 4,
    rule: "✦ PRISM: ENDS + SIDES",
    prompt: "An A-frame camping shelter is 4 m long. The triangular ends have base 4 m and height 3 m, with sloping sides of 3.6 m. Find the total surface area.",
    hint: "Find the area of the two triangle ends, then add the perimeter of the triangle multiplied by the tent length.",
    diagramData: { type: 'prism', a: 4, b: 3, c: 3.6, L: 4, unit: 'm' },
    correct: 56.8,
    distractors: [44.8, 48, 62],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 4 × 3) = 12 m². Sides: (3.6 + 3.6 + 4) × 4 = 11.2 × 4 = 44.8 m². Total = 12 + 44.8 = 56.8 m²."
  },
  {
    worldIndex: 3, qIndex: 5,
    rule: "✦ RIGHT TRIANGLE PRISM",
    prompt: "A hiking wedge tent is 3 m long with right-triangle ends of legs 1.5 m and 2 m, and hypotenuse 2.5 m. Find its total surface area.",
    hint: "The two triangular ends make 3 square metres. The three sides have perimeter 6 metres times length 3 metres equals 18.",
    diagramData: { type: 'prism', a: 1.5, b: 2, c: 2.5, L: 3, unit: 'm' },
    correct: 21,
    distractors: [18, 15, 24],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 1.5 × 2) = 3 m². Sides: (1.5 + 2 + 2.5) × 3 = 6 × 3 = 18 m². Total = 3 + 18 = 21 m²."
  },
  {
    worldIndex: 3, qIndex: 6,
    rule: "✦ RIGHT TRIANGLE PRISM",
    prompt: "A triangular wooden cabin model is 5 m long. Each end is a right triangle with legs 6 m and 8 m, and hypotenuse 10 m. What is its total surface area?",
    hint: "The two triangle ends have area 6 times 8 equals 48. The three rectangular walls have area perimeter 24 times length 5.",
    diagramData: { type: 'prism', a: 6, b: 8, c: 10, L: 5, unit: 'm' },
    correct: 168,
    distractors: [120, 96, 180],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 6 × 8) = 48 m². Sides: (6 + 8 + 10) × 5 = 24 × 5 = 120 m². Total = 48 + 120 = 168 m²."
  },
  {
    worldIndex: 3, qIndex: 7,
    rule: "✦ PRISM: ENDS + SIDES",
    prompt: "A trail tent is 4 m long. Its triangular ends have base 3 m, height 2.4 m, and sloping sides 2.5 m. Find the total surface area.",
    hint: "Two ends give 3 times 2.4 equals 7.2. The three side faces give perimeter 8 times length 4 equals 32.",
    diagramData: { type: 'prism', a: 3, b: 2.4, c: 2.5, L: 4, unit: 'm' },
    correct: 39.2,
    distractors: [32, 28.8, 45],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 3 × 2.4) = 7.2 m². Sides: (2.5 + 2.5 + 3) × 4 = 8 × 4 = 32 m². Total = 7.2 + 32 = 39.2 m²."
  },
  {
    worldIndex: 3, qIndex: 8,
    rule: "✦ RIGHT TRIANGLE PRISM",
    prompt: "A family cabin tent is 6 m long. Its right-angled triangle ends have sides 3 m, 4 m, and 5 m. Find its total surface area.",
    hint: "Add the two triangle ends (area 12) to the perimeter times length (12 times 6 equals 72).",
    diagramData: { type: 'prism', a: 3, b: 4, c: 5, L: 6, unit: 'm' },
    correct: 84,
    distractors: [72, 60, 96],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 3 × 4) = 12 m². Sides: (3 + 4 + 5) × 6 = 12 × 6 = 72 m². Total = 12 + 72 = 84 m²."
  },
  {
    worldIndex: 3, qIndex: 9,
    rule: "✦ PRISM: ENDS + SIDES",
    prompt: "A safari tent prism is 7 m long. The triangular ends have base 6 m, height 4 m, and sloping sides 5 m. Find its total surface area.",
    hint: "Two triangle ends give 24 square metres. The sides give perimeter 16 times length 7 equals 112.",
    diagramData: { type: 'prism', a: 6, b: 4, c: 5, L: 7, unit: 'm' },
    correct: 136,
    distractors: [112, 120, 150],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 6 × 4) = 24 m². Sides: (5 + 5 + 6) × 7 = 16 × 7 = 112 m². Total = 24 + 112 = 136 m²."
  },

  // ==========================================
  // WORLD 4: Tin Can Tower (Q41–50, cm)
  // ==========================================
  {
    worldIndex: 4, qIndex: 0,
    rule: "✦ CIRCLES + CURVED SIDE",
    prompt: "A closed soup tin has radius 7 cm and height 10 cm. Find its total surface area (take π = 22/7).",
    hint: "A cylinder has 2 circle lids and 1 curved surface. Area = 2 pi r squared plus 2 pi r h.",
    diagramData: { type: 'cylinder', r: 7, h: 10, unit: 'cm' },
    correct: 748,
    distractors: [440, 308, 616],
    unit: 'cm²',
    explanation: "2πr² + 2πrh = 2×(22/7)×49 + 2×(22/7)×7×10 = 308 + 440 = 748 cm²."
  },
  {
    worldIndex: 4, qIndex: 1,
    rule: "✦ CURVED LABEL ONLY",
    prompt: "Oliver designs a paper label that wraps around a tin with radius 7 cm and height 15 cm. Find the area of the label (take π = 22/7).",
    hint: "The label is a rectangle whose width is the circumference, 2 pi r, and height is h. Multiply 44 by 15.",
    diagramData: { type: 'cylinder', r: 7, h: 15, unit: 'cm', labelOnly: true },
    correct: 660,
    distractors: [968, 308, 528],
    unit: 'cm²',
    explanation: "Label = 2πrh = 2 × (22/7) × 7 × 15 = 44 × 15 = 660 cm²."
  },
  {
    worldIndex: 4, qIndex: 2,
    rule: "✦ CIRCLES + CURVED SIDE",
    prompt: "A closed biscuit tin has radius 14 cm and height 20 cm. Find its total surface area (take π = 22/7).",
    hint: "Two circles give 2 times 22 over 7 times 14 squared. The curved surface is 2 times 22 over 7 times 14 times 20.",
    diagramData: { type: 'cylinder', r: 14, h: 20, unit: 'cm' },
    correct: 2992,
    distractors: [1760, 1232, 2500],
    unit: 'cm²',
    explanation: "2πr² + 2πrh = 2×(22/7)×196 + 2×(22/7)×14×20 = 1232 + 1760 = 2992 cm²."
  },
  {
    worldIndex: 4, qIndex: 3,
    rule: "✦ CIRCLES + CURVED SIDE",
    prompt: "A closed can of beans has radius 7 cm and height 12 cm. Find its total surface area (take π = 22/7).",
    hint: "The two circle lids make 308 square centimetres. The curved side makes 44 times 12 equals 528.",
    diagramData: { type: 'cylinder', r: 7, h: 12, unit: 'cm' },
    correct: 836,
    distractors: [528, 308, 704],
    unit: 'cm²',
    explanation: "2πr² + 2πrh = 308 + 44 × 12 = 308 + 528 = 836 cm²."
  },
  {
    worldIndex: 4, qIndex: 4,
    rule: "✦ CIRCLES + CURVED SIDE",
    prompt: "A closed paint tin has radius 7 cm and height 8 cm. Find its total surface area (take π = 22/7).",
    hint: "Add the two lids, 308, to the curved surface, 44 times 8 equals 352.",
    diagramData: { type: 'cylinder', r: 7, h: 8, unit: 'cm' },
    correct: 660,
    distractors: [352, 308, 550],
    unit: 'cm²',
    explanation: "2πr² + 2πrh = 308 + 44 × 8 = 308 + 352 = 660 cm²."
  },
  {
    worldIndex: 4, qIndex: 5,
    rule: "✦ CIRCLES + CURVED SIDE",
    prompt: "A closed tin of peaches has radius 7 cm and height 14 cm. Find its total surface area (take π = 22/7).",
    hint: "2 pi r squared equals 308. 2 pi r times h equals 44 times 14 equals 616. Add them together.",
    diagramData: { type: 'cylinder', r: 7, h: 14, unit: 'cm' },
    correct: 924,
    distractors: [616, 308, 770],
    unit: 'cm²',
    explanation: "2πr² + 2πrh = 308 + 44 × 14 = 308 + 616 = 924 cm²."
  },
  {
    worldIndex: 4, qIndex: 6,
    rule: "✦ CIRCLES + CURVED SIDE",
    prompt: "A cylindrical food canister has radius 14 cm and height 10 cm. Find its total surface area (take π = 22/7).",
    hint: "Calculate 2 times pi times 14 squared for the two lids, and 2 times pi times 14 times 10 for the curved side.",
    diagramData: { type: 'cylinder', r: 14, h: 10, unit: 'cm' },
    correct: 2112,
    distractors: [880, 1232, 1980],
    unit: 'cm²',
    explanation: "2πr² + 2πrh = 1232 + 2 × (22/7) × 14 × 10 = 1232 + 880 = 2112 cm²."
  },
  {
    worldIndex: 4, qIndex: 7,
    rule: "✦ CURVED LABEL ONLY",
    prompt: "Maya wraps a decorative label around a coffee tin of radius 7 cm and height 18 cm. Find the area of the label (take π = 22/7).",
    hint: "The label covers only the curved side: circumference 2 pi r times height. Multiply 44 by 18.",
    diagramData: { type: 'cylinder', r: 7, h: 18, unit: 'cm', labelOnly: true },
    correct: 792,
    distractors: [1100, 308, 704],
    unit: 'cm²',
    explanation: "Label = 2πrh = 44 × 18 = 792 cm²."
  },
  {
    worldIndex: 4, qIndex: 8,
    rule: "✦ CIRCLES + CURVED SIDE",
    prompt: "A tall oil tin has radius 7 cm and height 25 cm. Find its total surface area (take π = 22/7).",
    hint: "Two circular ends equal 308. The curved surface equals 44 times 25 equals 1100.",
    diagramData: { type: 'cylinder', r: 7, h: 25, unit: 'cm' },
    correct: 1408,
    distractors: [1100, 308, 1250],
    unit: 'cm²',
    explanation: "2πr² + 2πrh = 308 + 44 × 25 = 308 + 1100 = 1408 cm²."
  },
  {
    worldIndex: 4, qIndex: 9,
    rule: "✦ CIRCLES + CURVED SIDE",
    prompt: "A flat tuna tin has radius 7 cm and height 4 cm. Find its total surface area (take π = 22/7).",
    hint: "Add 308 for the two lids and 44 times 4 equals 176 for the shallow curved side.",
    diagramData: { type: 'cylinder', r: 7, h: 4, unit: 'cm' },
    correct: 484,
    distractors: [176, 308, 396],
    unit: 'cm²',
    explanation: "2πr² + 2πrh = 308 + 44 × 4 = 308 + 176 = 484 cm²."
  },

  // ==========================================
  // WORLD 5: Aquarium Alley (Q51–60, cm)
  // ==========================================
  {
    worldIndex: 5, qIndex: 0,
    rule: "✦ ONLY THE FACES NEEDED",
    prompt: "Mia's glass fish tank is 50 cm long, 30 cm wide and 40 cm tall. It has NO lid on top. Find the area of glass needed.",
    hint: "Since the tank has no top lid, add only 5 faces: bottom plus 2 long sides plus 2 short sides.",
    diagramData: { type: 'cuboid', L: 50, W: 30, H: 40, unit: 'cm', open: true },
    correct: 7900,
    distractors: [9400, 6400, 7500],
    unit: 'cm²',
    explanation: "Bottom (50×30=1500) + 2×(50×40=4000) + 2×(30×40=2400) = 1500 + 4000 + 2400 = 7900 cm²."
  },
  {
    worldIndex: 5, qIndex: 1,
    rule: "✦ OPEN CUBE (5 FACES)",
    prompt: "An open glass cube aquarium has edges of 30 cm and no lid. What is the area of glass needed for its 5 faces?",
    hint: "A cube has 6 faces, but without a lid there are only 5 faces. Multiply 5 by 30 squared.",
    diagramData: { type: 'cuboid', L: 30, W: 30, H: 30, unit: 'cm', open: true },
    correct: 4500,
    distractors: [5400, 3600, 2700],
    unit: 'cm²',
    explanation: "5 faces = 5 × 30² = 5 × 900 = 4500 cm²."
  },
  {
    worldIndex: 5, qIndex: 2,
    rule: "✦ ONLY THE FACES NEEDED",
    prompt: "A turtle tank with no lid measures 60 cm long, 40 cm wide and 30 cm high. Find the total surface area of glass.",
    hint: "Exclude the top face. Calculate 1 base face plus 4 vertical walls.",
    diagramData: { type: 'cuboid', L: 60, W: 40, H: 30, unit: 'cm', open: true },
    correct: 8400,
    distractors: [10800, 6000, 7800],
    unit: 'cm²',
    explanation: "Bottom 60×40 = 2400. Front/back = 2×60×30 = 3600. Sides = 2×40×30 = 2400. Total = 8400 cm²."
  },
  {
    worldIndex: 5, qIndex: 3,
    rule: "✦ OPEN CYLINDER",
    prompt: "An open cylindrical fish bowl has radius 7 cm and height 20 cm, open at the top. Find its outside surface area (take π = 22/7).",
    hint: "It has only 1 circular base and 1 curved side surface. Calculate pi r squared plus 2 pi r h.",
    diagramData: { type: 'cylinder', r: 7, h: 20, unit: 'cm', open: true },
    correct: 1034,
    distractors: [1188, 880, 950],
    unit: 'cm²',
    explanation: "Base πr² = (22/7)×49 = 154 cm². Curved 2πrh = 44×20 = 880 cm². Total = 154 + 880 = 1034 cm²."
  },
  {
    worldIndex: 5, qIndex: 4,
    rule: "✦ ONLY THE FACES NEEDED",
    prompt: "A small open-top aquarium is 40 cm long, 25 cm wide and 20 cm tall. Find the total area of glass.",
    hint: "Add the bottom 1000, the two long walls 1600, and the two short walls 1000.",
    diagramData: { type: 'cuboid', L: 40, W: 25, H: 20, unit: 'cm', open: true },
    correct: 3600,
    distractors: [4600, 2600, 3200],
    unit: 'cm²',
    explanation: "Bottom 40×25 = 1000. Walls = 2×40×20 + 2×25×20 = 1600 + 1000 = 2600. Total = 3600 cm²."
  },
  {
    worldIndex: 5, qIndex: 5,
    rule: "✦ OPEN CUBE (5 FACES)",
    prompt: "An open cube display tank has edge length 20 cm and no top. Find the surface area of the 5 faces.",
    hint: "Multiply 5 by the area of one face, 20 times 20.",
    diagramData: { type: 'cuboid', L: 20, W: 20, H: 20, unit: 'cm', open: true },
    correct: 2000,
    distractors: [2400, 1600, 1200],
    unit: 'cm²',
    explanation: "5 × 20² = 5 × 400 = 2000 cm²."
  },
  {
    worldIndex: 5, qIndex: 6,
    rule: "✦ ONLY THE FACES NEEDED",
    prompt: "A reptile terrarium with no lid is 80 cm long, 40 cm wide and 50 cm high. Find the total glass area.",
    hint: "Do not include the top. Calculate bottom plus front, back, left and right.",
    diagramData: { type: 'cuboid', L: 80, W: 40, H: 50, unit: 'cm', open: true },
    correct: 15200,
    distractors: [18400, 12000, 14000],
    unit: 'cm²',
    explanation: "Bottom 80×40 = 3200. Front/back 2×80×50 = 8000. Sides 2×40×50 = 4000. Total = 15200 cm²."
  },
  {
    worldIndex: 5, qIndex: 7,
    rule: "✦ OPEN CYLINDER",
    prompt: "An open cylindrical aquarium tube has radius 14 cm and height 30 cm with a base but no lid. Find its surface area (take π = 22/7).",
    hint: "Only 1 base circle (pi r squared equals 616) plus the curved side (2 pi r h equals 2640).",
    diagramData: { type: 'cylinder', r: 14, h: 30, unit: 'cm', open: true },
    correct: 3256,
    distractors: [3872, 2640, 3100],
    unit: 'cm²',
    explanation: "Base πr² = (22/7)×196 = 616. Curved 2πrh = 2×(22/7)×14×30 = 2640. Total = 616 + 2640 = 3256 cm²."
  },
  {
    worldIndex: 5, qIndex: 8,
    rule: "✦ ONLY THE FACES NEEDED",
    prompt: "An open reef tank is 70 cm long, 35 cm wide and 30 cm high with no lid. Find the total surface area.",
    hint: "Combine the single bottom base with the 4 upright glass panels.",
    diagramData: { type: 'cuboid', L: 70, W: 35, H: 30, unit: 'cm', open: true },
    correct: 8750,
    distractors: [11200, 6300, 8100],
    unit: 'cm²',
    explanation: "Bottom 70×35 = 2450. Walls 2×70×30 + 2×35×30 = 4200 + 2100 = 6300. Total = 8750 cm²."
  },
  {
    worldIndex: 5, qIndex: 9,
    rule: "✦ ONLY THE FACES NEEDED",
    prompt: "A nano shrimp tank with no top is 25 cm long, 20 cm wide and 15 cm tall. Find the area of glass.",
    hint: "Add the bottom face 500 to the 4 sides: 750 plus 600.",
    diagramData: { type: 'cuboid', L: 25, W: 20, H: 15, unit: 'cm', open: true },
    correct: 1850,
    distractors: [2350, 1350, 1700],
    unit: 'cm²',
    explanation: "Bottom 25×20 = 500. Walls = 2×25×15 + 2×20×15 = 750 + 600 = 1350. Total = 1850 cm²."
  },

  // ==========================================
  // WORLD 6: Pyramid Plains (Q61–70, m)
  // ==========================================
  {
    worldIndex: 6, qIndex: 0,
    rule: "✦ SQUARE BASE + 4 TRIANGLES",
    prompt: "A glass pyramid monument has a square base of 10 m by 10 m and each triangular face has a slant height of 8 m. Find its total surface area.",
    hint: "A square pyramid has 1 square base and 4 identical triangles. Area = base squared plus 4 times half base times slant height.",
    diagramData: { type: 'pyramid', b: 10, l: 8, unit: 'm' },
    correct: 260,
    distractors: [160, 420, 220],
    unit: 'm²',
    explanation: "Base 10² = 100 m². 4 triangles: 4 × (½ × 10 × 8) = 160 m². Total = 100 + 160 = 260 m²."
  },
  {
    worldIndex: 6, qIndex: 1,
    rule: "✦ SQUARE BASE + 4 TRIANGLES",
    prompt: "A stone pyramid pavilion has a square base of 6 m by 6 m and a slant height of 5 m. Find its total surface area.",
    hint: "Base area is 36. Each triangle is half times 6 times 5 equals 15. Multiply 15 by 4 and add 36.",
    diagramData: { type: 'pyramid', b: 6, l: 5, unit: 'm' },
    correct: 96,
    distractors: [60, 36, 120],
    unit: 'm²',
    explanation: "Base 6² = 36 m². 4 triangles: 4 × (½ × 6 × 5) = 60 m². Total = 36 + 60 = 96 m²."
  },
  {
    worldIndex: 6, qIndex: 2,
    rule: "✦ SQUARE BASE + 4 TRIANGLES",
    prompt: "A roof spire pyramid has a square base of 4 m by 4 m and a slant height of 6 m. What is its total surface area?",
    hint: "Square base gives 16. Four triangles give 4 times 12 equals 48.",
    diagramData: { type: 'pyramid', b: 4, l: 6, unit: 'm' },
    correct: 64,
    distractors: [48, 16, 80],
    unit: 'm²',
    explanation: "Base 4² = 16 m². 4 triangles: 4 × (½ × 4 × 6) = 48 m². Total = 16 + 48 = 64 m²."
  },
  {
    worldIndex: 6, qIndex: 3,
    rule: "✦ SQUARE BASE + 4 TRIANGLES",
    prompt: "A museum pyramid display has a square base of 8 m by 8 m and a slant height of 7 m. Find its total surface area.",
    hint: "Add the base area 64 to 4 times 28 equals 112 for the triangular sides.",
    diagramData: { type: 'pyramid', b: 8, l: 7, unit: 'm' },
    correct: 176,
    distractors: [112, 64, 224],
    unit: 'm²',
    explanation: "Base 8² = 64 m². 4 triangles: 4 × (½ × 8 × 7) = 112 m². Total = 64 + 112 = 176 m²."
  },
  {
    worldIndex: 6, qIndex: 4,
    rule: "✦ SQUARE BASE + 4 TRIANGLES",
    prompt: "An outdoor shade pyramid has a square base of 12 m by 12 m and a slant height of 10 m. What is its total surface area?",
    hint: "Base area is 144 square metres. The 4 sloping faces have total area 4 times 60 equals 240.",
    diagramData: { type: 'pyramid', b: 12, l: 10, unit: 'm' },
    correct: 384,
    distractors: [240, 144, 480],
    unit: 'm²',
    explanation: "Base 12² = 144 m². 4 triangles: 4 × (½ × 12 × 10) = 240 m². Total = 144 + 240 = 384 m²."
  },
  {
    worldIndex: 6, qIndex: 5,
    rule: "✦ SQUARE BASE + 4 TRIANGLES",
    prompt: "A pyramid glamping tent has a square floor of 6 m by 6 m and slant height 4 m. Find its total surface area.",
    hint: "Add the floor area 36 to the four triangles, 4 times 12 equals 48.",
    diagramData: { type: 'pyramid', b: 6, l: 4, unit: 'm' },
    correct: 84,
    distractors: [48, 36, 96],
    unit: 'm²',
    explanation: "Base 6² = 36 m². 4 triangles: 4 × (½ × 6 × 4) = 48 m². Total = 36 + 48 = 84 m²."
  },
  {
    worldIndex: 6, qIndex: 6,
    rule: "✦ SQUARE BASE + 4 TRIANGLES",
    prompt: "A grand pyramid roof has a square base of 14 m by 14 m and slant height 9 m. Find its total surface area.",
    hint: "Base area is 196. Each triangle is 63. Four triangles give 252. Add 196 and 252.",
    diagramData: { type: 'pyramid', b: 14, l: 9, unit: 'm' },
    correct: 448,
    distractors: [252, 196, 504],
    unit: 'm²',
    explanation: "Base 14² = 196 m². 4 triangles: 4 × (½ × 14 × 9) = 252 m². Total = 196 + 252 = 448 m²."
  },
  {
    worldIndex: 6, qIndex: 7,
    rule: "✦ SQUARE BASE + 4 TRIANGLES",
    prompt: "An entrance canopy pyramid has a square base of 10 m by 10 m and slant height 12 m. Find its total surface area.",
    hint: "Add base 100 to the four triangles, 4 times 60 equals 240.",
    diagramData: { type: 'pyramid', b: 10, l: 12, unit: 'm' },
    correct: 340,
    distractors: [240, 100, 380],
    unit: 'm²',
    explanation: "Base 10² = 100 m². 4 triangles: 4 × (½ × 10 × 12) = 240 m². Total = 100 + 240 = 340 m²."
  },
  {
    worldIndex: 6, qIndex: 8,
    rule: "✦ SQUARE BASE + 4 TRIANGLES",
    prompt: "A garden pyramid feature has a square base of 8 m by 8 m and slant height 10 m. What is its total surface area?",
    hint: "Base is 64. Four triangles are 4 times 40 equals 160. Total is 224.",
    diagramData: { type: 'pyramid', b: 8, l: 10, unit: 'm' },
    correct: 224,
    distractors: [160, 64, 256],
    unit: 'm²',
    explanation: "Base 8² = 64 m². 4 triangles: 4 × (½ × 8 × 10) = 160 m². Total = 64 + 160 = 224 m²."
  },
  {
    worldIndex: 6, qIndex: 9,
    rule: "✦ SQUARE BASE + 4 TRIANGLES",
    prompt: "A large civic pyramid has a square base of 16 m by 16 m and slant height 15 m. Find its total surface area.",
    hint: "Square base gives 256. Four sloping triangles give 4 times 120 equals 480. Sum them up.",
    diagramData: { type: 'pyramid', b: 16, l: 15, unit: 'm' },
    correct: 736,
    distractors: [480, 256, 800],
    unit: 'm²',
    explanation: "Base 16² = 256 m². 4 triangles: 4 × (½ × 16 × 15) = 480 m². Total = 256 + 480 = 736 m²."
  },

  // ==========================================
  // WORLD 7: Paint Palace (Q71–80, m)
  // ==========================================
  {
    worldIndex: 7, qIndex: 0,
    rule: "✦ AREA × COST",
    prompt: "Leo paints the 4 walls and ceiling of a bedroom 5 m long, 4 m wide and 3 m high (not the floor). Paint costs $3 per m². What is the total cost?",
    hint: "Area = ceiling 20 plus 4 walls 54 equals 74 square metres. Multiply by $3 per square metre.",
    diagramData: { type: 'cuboid', L: 5, W: 4, H: 3, unit: 'm', open: true },
    correct: 222,
    distractors: [282, 180, 240],
    unit: '$',
    explanation: "Ceiling 20 + walls (2×5×3 + 2×4×3 = 54) = 74 m². Cost = 74 × $3 = $222."
  },
  {
    worldIndex: 7, qIndex: 1,
    rule: "✦ ALL 6 FACES",
    prompt: "A storage container 6 m long, 3 m wide and 2 m high is painted on all 6 outer faces. Find the total surface area to paint.",
    hint: "All 6 faces need paint. Calculate 2 times the sum of 18, 12, and 6.",
    diagramData: { type: 'cuboid', L: 6, W: 3, H: 2, unit: 'm' },
    correct: 72,
    distractors: [36, 54, 80],
    unit: 'm²',
    explanation: "2 × (6×3 + 6×2 + 3×2) = 2 × (18 + 12 + 6) = 2 × 36 = 72 m²."
  },
  {
    worldIndex: 7, qIndex: 2,
    rule: "✦ 4 WALLS ONLY",
    prompt: "A room is 6 m long, 5 m wide and 3 m high. Find the area of just the 4 vertical walls that need painting.",
    hint: "The 4 walls equal perimeter times height: 2 times (6 plus 5) times 3.",
    diagramData: { type: 'cuboid', L: 6, W: 5, H: 3, unit: 'm', open: true },
    correct: 66,
    distractors: [96, 60, 72],
    unit: 'm²',
    explanation: "4 walls = 2×6×3 + 2×5×3 = 36 + 30 = 66 m²."
  },
  {
    worldIndex: 7, qIndex: 3,
    rule: "✦ 5 SURFACES",
    prompt: "A cube garden shed has edge length 3 m. Jack paints the 4 exterior walls and the flat roof (5 faces). Find the total painted area.",
    hint: "Each face is 3 times 3 equals 9 square metres. Multiply by 5 faces.",
    diagramData: { type: 'cuboid', L: 3, W: 3, H: 3, unit: 'm', open: true },
    correct: 45,
    distractors: [54, 36, 27],
    unit: 'm²',
    explanation: "5 faces = 5 × 3² = 5 × 9 = 45 m²."
  },
  {
    worldIndex: 7, qIndex: 4,
    rule: "✦ AREA × COST",
    prompt: "A wooden shipping crate 4 m long, 2 m wide and 2 m high is coated in varnish on all 6 faces. Varnish costs $5 per m². What is the total cost?",
    hint: "Surface area is 40 square metres. Multiply 40 by the cost of $5 per square metre.",
    diagramData: { type: 'cuboid', L: 4, W: 2, H: 2, unit: 'm' },
    correct: 200,
    distractors: [160, 240, 80],
    unit: '$',
    explanation: "SA = 2×(8 + 8 + 4) = 40 m². Cost = 40 × $5 = $200."
  },
  {
    worldIndex: 7, qIndex: 5,
    rule: "✦ CEILING + 4 WALLS",
    prompt: "A classroom is 8 m long, 6 m wide and 3 m high. Find the total area of the ceiling and the 4 walls to be painted.",
    hint: "Ceiling is 48. The four walls make 84. Add 48 and 84 together.",
    diagramData: { type: 'cuboid', L: 8, W: 6, H: 3, unit: 'm', open: true },
    correct: 132,
    distractors: [180, 84, 120],
    unit: 'm²',
    explanation: "Ceiling 8×6 = 48. 4 walls = 2×8×3 + 2×6×3 = 48 + 36 = 84. Total = 48 + 84 = 132 m²."
  },
  {
    worldIndex: 7, qIndex: 6,
    rule: "✦ AREA × COST",
    prompt: "A metal cube container with edge length 4 m is spray painted on all 6 faces. Paint costs $4 per m². What is the total cost?",
    hint: "Surface area is 6 times 16 equals 96 square metres. Multiply 96 by $4.",
    diagramData: { type: 'cuboid', L: 4, W: 4, H: 4, unit: 'm' },
    correct: 384,
    distractors: [256, 320, 420],
    unit: '$',
    explanation: "SA = 6 × 4² = 6 × 16 = 96 m². Cost = 96 × $4 = $384."
  },
  {
    worldIndex: 7, qIndex: 7,
    rule: "✦ CEILING + 4 WALLS",
    prompt: "A long hallway is 10 m long, 3 m wide and 3 m high. Find the area of the 4 walls and ceiling combined (no floor).",
    hint: "Ceiling is 30. Four walls are 60 plus 18 equals 78. Total is 108 square metres.",
    diagramData: { type: 'cuboid', L: 10, W: 3, H: 3, unit: 'm', open: true },
    correct: 108,
    distractors: [138, 78, 96],
    unit: 'm²',
    explanation: "Ceiling 10×3 = 30. Walls = 2×10×3 + 2×3×3 = 60 + 18 = 78. Total = 30 + 78 = 108 m²."
  },
  {
    worldIndex: 7, qIndex: 8,
    rule: "✦ AREA × COST",
    prompt: "A garden shed 5 m long, 4 m wide and 2 m high is painted all over on all 6 faces. Paint costs $2 per m². How much does it cost?",
    hint: "Calculate total surface area 76 square metres, then multiply by $2.",
    diagramData: { type: 'cuboid', L: 5, W: 4, H: 2, unit: 'm' },
    correct: 152,
    distractors: [76, 120, 160],
    unit: '$',
    explanation: "SA = 2×(20 + 10 + 8) = 76 m². Cost = 76 × $2 = $152."
  },
  {
    worldIndex: 7, qIndex: 9,
    rule: "✦ 4 WALLS ONLY",
    prompt: "An art gallery room is 12 m long, 8 m wide and 4 m high. Find the area of just the 4 display walls to hang pictures.",
    hint: "The 4 walls have area equal to perimeter (12 plus 8 plus 12 plus 8) times height 4.",
    diagramData: { type: 'cuboid', L: 12, W: 8, H: 4, unit: 'm', open: true },
    correct: 160,
    distractors: [256, 96, 180],
    unit: 'm²',
    explanation: "4 walls = 2×12×4 + 2×8×4 = 96 + 64 = 160 m²."
  },

  // ==========================================
  // WORLD 8: Packaging Port (Q81–90, cm)
  // ==========================================
  {
    worldIndex: 8, qIndex: 0,
    rule: "✦ WORK BACKWARDS",
    prompt: "A cube package has a total surface area of 150 cm². How long is each edge?",
    hint: "A cube has 6 equal faces. Divide 150 by 6 to find the area of one face, then take the square root.",
    diagramData: { type: 'cuboid', L: 5, W: 5, H: 5, unit: 'cm', unknown: 'all', total: 150 },
    correct: 5,
    distractors: [25, 6, 4],
    unit: 'cm',
    explanation: "One face = 150 ÷ 6 = 25 cm². Edge = √25 = 5 cm."
  },
  {
    worldIndex: 8, qIndex: 1,
    rule: "✦ WORK BACKWARDS",
    prompt: "A cube gift box has a total surface area of 294 cm². How long is each edge?",
    hint: "Divide 294 by 6 to get 49, then find the square root of 49.",
    diagramData: { type: 'cuboid', L: 7, W: 7, H: 7, unit: 'cm', unknown: 'all', total: 294 },
    correct: 7,
    distractors: [49, 8, 6],
    unit: 'cm',
    explanation: "One face = 294 ÷ 6 = 49 cm². Edge = √49 = 7 cm."
  },
  {
    worldIndex: 8, qIndex: 2,
    rule: "✦ WORK BACKWARDS",
    prompt: "A cube box has a total surface area of 96 cm². How long is each edge?",
    hint: "Share 96 equally among 6 faces to get 16, then find the square root of 16.",
    diagramData: { type: 'cuboid', L: 4, W: 4, H: 4, unit: 'cm', unknown: 'all', total: 96 },
    correct: 4,
    distractors: [16, 5, 3],
    unit: 'cm',
    explanation: "One face = 96 ÷ 6 = 16 cm². Edge = √16 = 4 cm."
  },
  {
    worldIndex: 8, qIndex: 3,
    rule: "✦ WORK BACKWARDS",
    prompt: "A cuboid box is 10 cm long and 6 cm wide. Its total surface area is 280 cm². Find its height.",
    hint: "Half of 280 is 140. Subtract the top face 60 to get 80. Divide 80 by length plus width (16) to find height.",
    diagramData: { type: 'cuboid', L: 10, W: 6, H: 5, unit: 'cm', unknown: 'H', total: 280 },
    correct: 5,
    distractors: [6, 4, 8],
    unit: 'cm',
    explanation: "Half SA = 140. 140 − (10×6) = 80. 80 ÷ (10 + 6) = 80 ÷ 16 = 5 cm."
  },
  {
    worldIndex: 8, qIndex: 4,
    rule: "✦ WORK BACKWARDS",
    prompt: "A cuboid package is 8 cm long and 5 cm wide. Its total surface area is 262 cm². Find its height.",
    hint: "Half of 262 is 131. Subtract the base area 40 to get 91. Divide 91 by (8 plus 5 equals 13) to get 7.",
    diagramData: { type: 'cuboid', L: 8, W: 5, H: 7, unit: 'cm', unknown: 'H', total: 262 },
    correct: 7,
    distractors: [6, 8, 5],
    unit: 'cm',
    explanation: "Half SA = 131. 131 − (8×5) = 91. 91 ÷ (8 + 5) = 91 ÷ 13 = 7 cm."
  },
  {
    worldIndex: 8, qIndex: 5,
    rule: "✦ WORK BACKWARDS",
    prompt: "A closed tin can has radius 7 cm and total surface area 748 cm² (take π = 22/7). Find its height.",
    hint: "Subtract the two circular lids (308) from 748 to get the curved label (440). Divide 440 by circumference 44.",
    diagramData: { type: 'cylinder', r: 7, h: 10, unit: 'cm', unknown: true },
    correct: 10,
    distractors: [12, 8, 14],
    unit: 'cm',
    explanation: "Two lids = 308 cm². Curved = 748 − 308 = 440 cm². h = 440 ÷ (2×22/7×7) = 440 ÷ 44 = 10 cm."
  },
  {
    worldIndex: 8, qIndex: 6,
    rule: "✦ WORK BACKWARDS",
    prompt: "A cube container has a total surface area of 384 cm². How long is each edge?",
    hint: "Divide 384 by 6 to find one face area 64, then find the square root of 64.",
    diagramData: { type: 'cuboid', L: 8, W: 8, H: 8, unit: 'cm', unknown: 'all', total: 384 },
    correct: 8,
    distractors: [64, 9, 7],
    unit: 'cm',
    explanation: "One face = 384 ÷ 6 = 64 cm². Edge = √64 = 8 cm."
  },
  {
    worldIndex: 8, qIndex: 7,
    rule: "✦ WORK BACKWARDS",
    prompt: "A cuboid package is 12 cm long and 5 cm wide. Its total surface area is 392 cm². Find its height.",
    hint: "Half of 392 is 196. Take away the base face 60 to get 136. Divide 136 by 17 to get 8.",
    diagramData: { type: 'cuboid', L: 12, W: 5, H: 8, unit: 'cm', unknown: 'H', total: 392 },
    correct: 8,
    distractors: [7, 9, 6],
    unit: 'cm',
    explanation: "Half SA = 196. 196 − (12×5) = 136. 136 ÷ (12 + 5) = 136 ÷ 17 = 8 cm."
  },
  {
    worldIndex: 8, qIndex: 8,
    rule: "✦ WORK BACKWARDS",
    prompt: "A closed tin can has radius 7 cm and total surface area 1012 cm² (take π = 22/7). Find its height.",
    hint: "Subtract the two lids 308 from 1012 to get 704 for the curved label. Divide 704 by circumference 44.",
    diagramData: { type: 'cylinder', r: 7, h: 16, unit: 'cm', unknown: true },
    correct: 16,
    distractors: [14, 18, 12],
    unit: 'cm',
    explanation: "Curved = 1012 − 308 = 704 cm². h = 704 ÷ 44 = 16 cm."
  },
  {
    worldIndex: 8, qIndex: 9,
    rule: "✦ WORK BACKWARDS",
    prompt: "A large cube shipping box has a total surface area of 600 cm². How long is each edge?",
    hint: "Divide 600 by 6 to find one face has area 100, then find the square root of 100.",
    diagramData: { type: 'cuboid', L: 10, W: 10, H: 10, unit: 'cm', unknown: 'all', total: 600 },
    correct: 10,
    distractors: [100, 12, 8],
    unit: 'cm',
    explanation: "One face = 600 ÷ 6 = 100 cm². Edge = √100 = 10 cm."
  },

  // ==========================================
  // WORLD 9: Skyscraper Summit (Q91–100, m)
  // ==========================================
  {
    worldIndex: 9, qIndex: 0,
    rule: "✦ 4 VERTICAL WALLS",
    prompt: "A glass tower section is a cuboid 20 m long, 15 m wide and 40 m tall. Find the total surface area of all 4 vertical glass walls.",
    hint: "The 4 vertical glass walls equal perimeter (20 plus 15 plus 20 plus 15) times height 40.",
    diagramData: { type: 'cuboid', L: 20, W: 15, H: 40, unit: 'm', open: true },
    correct: 2800,
    distractors: [3400, 2400, 2600],
    unit: 'm²',
    explanation: "4 walls = 2×(20×40) + 2×(15×40) = 1600 + 1200 = 2800 m²."
  },
  {
    worldIndex: 9, qIndex: 1,
    rule: "✦ 5 EXTERIOR SURFACES",
    prompt: "A modern penthouse cube on top of a skyscraper has edge length 10 m. Find the exterior surface area of the roof and the 4 walls (5 faces).",
    hint: "The floor sits on the building, so calculate only 5 faces: 5 times 10 squared.",
    diagramData: { type: 'cuboid', L: 10, W: 10, H: 10, unit: 'm', open: true },
    correct: 500,
    distractors: [600, 400, 300],
    unit: 'm²',
    explanation: "5 faces = 5 × 10² = 5 × 100 = 500 m²."
  },
  {
    worldIndex: 9, qIndex: 2,
    rule: "✦ CIRCLES + CURVED SIDE",
    prompt: "A cylindrical water tower atop a building has radius 7 m and height 15 m (take π = 22/7). Find its total exterior surface area.",
    hint: "Add the two circular ends (308) to the curved surface (2 pi r h equals 660).",
    diagramData: { type: 'cylinder', r: 7, h: 15, unit: 'm' },
    correct: 968,
    distractors: [660, 308, 850],
    unit: 'm²',
    explanation: "2πr² + 2πrh = 308 + 44 × 15 = 308 + 660 = 968 m²."
  },
  {
    worldIndex: 9, qIndex: 3,
    rule: "✦ ALL 6 FACES",
    prompt: "A grand skyscraper entrance lobby is a cuboid 30 m long, 20 m wide and 10 m tall. Find its total surface area of all 6 faces.",
    hint: "Add the three face pairs: 30 by 20, 30 by 10, and 20 by 10. Double the total.",
    diagramData: { type: 'cuboid', L: 30, W: 20, H: 10, unit: 'm' },
    correct: 2200,
    distractors: [6000, 1100, 2400],
    unit: 'm²',
    explanation: "2 × (30×20 + 30×10 + 20×10) = 2 × (600 + 300 + 200) = 2 × 1100 = 2200 m²."
  },
  {
    worldIndex: 9, qIndex: 4,
    rule: "✦ 4 SLOPING TRIANGLES",
    prompt: "A decorative glass pyramid crowns a skyscraper. The square base is 20 m by 20 m and slant height is 15 m. Glass covers only the 4 sloping faces. Find the glass area.",
    hint: "Calculate the area of the 4 triangular sloping faces only (exclude the base): 4 times half times 20 times 15.",
    diagramData: { type: 'pyramid', b: 20, l: 15, unit: 'm' },
    correct: 600,
    distractors: [1000, 400, 800],
    unit: 'm²',
    explanation: "4 sloping faces = 4 × (½ × 20 × 15) = 4 × 150 = 600 m²."
  },
  {
    worldIndex: 9, qIndex: 5,
    rule: "✦ CURVED SURFACE ONLY",
    prompt: "An observation deck is a cylinder with radius 14 m and height 25 m (take π = 22/7). Find the curved glass wall area only.",
    hint: "The curved wall is circumference times height: 2 pi r times h equals 88 times 25.",
    diagramData: { type: 'cylinder', r: 14, h: 25, unit: 'm', labelOnly: true },
    correct: 2200,
    distractors: [3432, 1232, 2000],
    unit: 'm²',
    explanation: "Curved wall = 2πrh = 2 × (22/7) × 14 × 25 = 88 × 25 = 2200 m²."
  },
  {
    worldIndex: 9, qIndex: 6,
    rule: "✦ PRISM: ENDS + SIDES",
    prompt: "A skybridge between two skyscrapers is a triangular prism 25 m long. Each triangle end has base 6 m, height 4 m, and sloping sides of 5 m. Find its total surface area.",
    hint: "Add the two triangle ends (24 square metres) to the perimeter times length (16 times 25 equals 400).",
    diagramData: { type: 'prism', a: 6, b: 4, c: 5, L: 25, unit: 'm' },
    correct: 424,
    distractors: [400, 360, 450],
    unit: 'm²',
    explanation: "Ends: 2 × (½ × 6 × 4) = 24 m². Sides: (5 + 5 + 6) × 25 = 16 × 25 = 400 m². Total = 24 + 400 = 424 m²."
  },
  {
    worldIndex: 9, qIndex: 7,
    rule: "✦ 4 EXTERIOR WALLS",
    prompt: "A main tower block is 25 m long, 12 m wide and 50 m high. Find the total area of the 4 exterior walls.",
    hint: "The 4 exterior walls have area perimeter (25 plus 12 plus 25 plus 12) times height 50.",
    diagramData: { type: 'cuboid', L: 25, W: 12, H: 50, unit: 'm', open: true },
    correct: 3700,
    distractors: [4300, 3100, 3500],
    unit: 'm²',
    explanation: "4 walls = 2×(25×50) + 2×(12×50) = 2500 + 1200 = 3700 m²."
  },
  {
    worldIndex: 9, qIndex: 8,
    rule: "✦ 5 SURFACES",
    prompt: "An elevator machinery housing cube on the roof has edge length 6 m. Find the exterior surface area of its top and 4 sides (5 faces).",
    hint: "The bottom is attached to the roof. Multiply 5 faces by 6 squared.",
    diagramData: { type: 'cuboid', L: 6, W: 6, H: 6, unit: 'm', open: true },
    correct: 180,
    distractors: [216, 144, 120],
    unit: 'm²',
    explanation: "5 faces = 5 × 6² = 5 × 36 = 180 m²."
  },
  {
    worldIndex: 9, qIndex: 9,
    rule: "✦ ALL 6 FACES",
    prompt: "A summit corporate headquarters is a cuboid 40 m long, 25 m wide and 30 m high. Find its total surface area of all 6 faces.",
    hint: "Add the three matching face pairs: 40 times 25, 40 times 30, and 25 times 30. Double the sum to find the total surface area.",
    diagramData: { type: 'cuboid', L: 40, W: 25, H: 30, unit: 'm' },
    correct: 5900,
    distractors: [30000, 2950, 5400],
    unit: 'm²',
    explanation: "2 × (40×25 + 40×30 + 25×30) = 2 × (1000 + 1200 + 750) = 2 × 2950 = 5900 m²."
  }
];

// Helper to format option with unit
function formatOption(val, unit) {
  if (unit === '$') return `$${val}`;
  return `${val} ${unit}`;
}

// Build finalized questions with randomized option orders and verified correctIndex
const finalizedQuestions = rawQuestions.map((q, idx) => {
  const optionsRaw = [q.correct, ...q.distractors];
  // Deterministic shuffle using idx seed so options stay consistent
  const shuffled = [...optionsRaw];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = (idx * 3 + i) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const formattedOptions = shuffled.map(v => formatOption(v, q.unit));
  const correctTarget = formatOption(q.correct, q.unit);
  const correctIndex = formattedOptions.indexOf(correctTarget);

  return {
    id: idx + 1,
    worldIndex: q.worldIndex,
    qIndex: q.qIndex,
    rule: q.rule,
    prompt: q.prompt,
    hint: q.hint,
    diagramData: q.diagramData,
    options: formattedOptions,
    correctIndex,
    correctValue: q.correct,
    explanation: q.explanation
  };
});

// Output code
const fileContent = `/* =========================================================================
   PRACTICE QUESTIONS — 100 Curated Grade 8 Surface Area Questions
   10 Themed Worlds × 10 Questions each = 100 Distinct Questions with Hints
   ========================================================================= */

export const PRACTICE_QUESTIONS = ${JSON.stringify(finalizedQuestions, null, 2)};

export function getPracticeQuestion(worldIndex, qIndex) {
  const found = PRACTICE_QUESTIONS.find(q => q.worldIndex === worldIndex && q.qIndex === qIndex);
  return found || PRACTICE_QUESTIONS[0];
}
`;

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, fileContent);
console.log(`Successfully generated ${finalizedQuestions.length} practice questions in ${OUT_FILE}`);

