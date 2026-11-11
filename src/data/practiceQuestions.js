/* =========================================================================
   PRACTICE QUESTIONS — 100 Curated Grade 8 Surface Area Questions
   10 Themed Worlds × 10 Questions each = 100 Distinct Questions with Hints
   ========================================================================= */

export const PRACTICE_QUESTIONS = [
  {
    "id": 1,
    "worldIndex": 0,
    "qIndex": 0,
    "rule": "✦ COUNT THE FACES",
    "prompt": "Liam unfolds a closed cube gift box into a flat net. How many square faces does the net have?",
    "hint": "A cube has 6 identical square faces that unfold into a flat net.",
    "diagramData": {
      "type": "faces",
      "solid": "cube"
    },
    "options": [
      "6 faces",
      "5 faces",
      "8 faces",
      "4 faces"
    ],
    "correctIndex": 0,
    "correctValue": 6,
    "explanation": "A cube has 6 identical faces, so its net has 6 square faces."
  },
  {
    "id": 2,
    "worldIndex": 0,
    "qIndex": 1,
    "rule": "✦ ADD EVERY FACE",
    "prompt": "Emma has a gift box that is 5 cm long, 3 cm wide and 2 cm tall. What is its total surface area?",
    "hint": "Find the area of the three pairs of matching faces: top and bottom, front and back, and left and right. Add them and double the result.",
    "diagramData": {
      "type": "cuboid",
      "L": 5,
      "W": 3,
      "H": 2,
      "unit": "cm"
    },
    "options": [
      "30 cm²",
      "62 cm²",
      "52 cm²",
      "60 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 62,
    "explanation": "2 × (5×3 + 5×2 + 3×2) = 2 × (15 + 10 + 6) = 2 × 31 = 62 cm²."
  },
  {
    "id": 3,
    "worldIndex": 0,
    "qIndex": 2,
    "rule": "✦ ADD EVERY FACE",
    "prompt": "Jack has a cube gift box with edge length 4 cm. What is its total surface area?",
    "hint": "A cube has 6 equal square faces. Find the area of one face, 4 times 4, and multiply by 6.",
    "diagramData": {
      "type": "cuboid",
      "L": 4,
      "W": 4,
      "H": 4,
      "unit": "cm"
    },
    "options": [
      "96 cm²",
      "80 cm²",
      "24 cm²",
      "64 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 96,
    "explanation": "6 × 4² = 6 × 16 = 96 cm²."
  },
  {
    "id": 4,
    "worldIndex": 0,
    "qIndex": 3,
    "rule": "✦ OPPOSITE FACES ARE TWINS",
    "prompt": "Sophia is wrapping a jewelry gift box measuring 8 cm long, 4 cm wide and 3 cm tall. What is the total surface area to cover?",
    "hint": "Calculate the area of each pair of opposite faces: 8 times 4, 8 times 3, and 4 times 3. Then add them and double the total.",
    "diagramData": {
      "type": "cuboid",
      "L": 8,
      "W": 4,
      "H": 3,
      "unit": "cm"
    },
    "options": [
      "96 cm²",
      "144 cm²",
      "68 cm²",
      "136 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 136,
    "explanation": "2 × (8×4 + 8×3 + 4×3) = 2 × (32 + 24 + 12) = 2 × 68 = 136 cm²."
  },
  {
    "id": 5,
    "worldIndex": 0,
    "qIndex": 4,
    "rule": "✦ COUNT THE FACES",
    "prompt": "Lucas unfolds a cuboid shoe gift box into a net. How many rectangular faces will the net have?",
    "hint": "Every cuboid has 6 rectangular faces arranged in 3 opposite pairs.",
    "diagramData": {
      "type": "faces",
      "solid": "cuboid"
    },
    "options": [
      "6 faces",
      "4 faces",
      "8 faces",
      "12 faces"
    ],
    "correctIndex": 0,
    "correctValue": 6,
    "explanation": "Every cuboid has 6 faces: top, bottom, front, back, and two sides."
  },
  {
    "id": 6,
    "worldIndex": 0,
    "qIndex": 5,
    "rule": "✦ ADD EVERY FACE",
    "prompt": "Chloe wraps a cube gift box with edges of 6 cm. What is its total surface area?",
    "hint": "Each face is a 6 by 6 square with area 36 square centimetres. Multiply by 6 for all six faces.",
    "diagramData": {
      "type": "cuboid",
      "L": 6,
      "W": 6,
      "H": 6,
      "unit": "cm"
    },
    "options": [
      "36 cm²",
      "216 cm²",
      "240 cm²",
      "180 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 216,
    "explanation": "6 × 6² = 6 × 36 = 216 cm²."
  },
  {
    "id": 7,
    "worldIndex": 0,
    "qIndex": 6,
    "rule": "✦ OPPOSITE FACES ARE TWINS",
    "prompt": "Alex is wrapping a long gift box measuring 10 cm long, 5 cm wide and 2 cm tall. What is its total surface area?",
    "hint": "Work out the area of the three pairs: 10 times 5, 10 times 2, and 5 times 2. Double their sum.",
    "diagramData": {
      "type": "cuboid",
      "L": 10,
      "W": 5,
      "H": 2,
      "unit": "cm"
    },
    "options": [
      "160 cm²",
      "150 cm²",
      "80 cm²",
      "100 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 160,
    "explanation": "2 × (10×5 + 10×2 + 5×2) = 2 × (50 + 20 + 10) = 2 × 80 = 160 cm²."
  },
  {
    "id": 8,
    "worldIndex": 0,
    "qIndex": 7,
    "rule": "✦ ADD EVERY FACE",
    "prompt": "Maya has a small souvenir gift box measuring 7 cm long, 3 cm wide and 4 cm tall. Find its total surface area.",
    "hint": "Add the areas of one top, one front and one side face: 21 plus 28 plus 12. Then multiply by two.",
    "diagramData": {
      "type": "cuboid",
      "L": 7,
      "W": 3,
      "H": 4,
      "unit": "cm"
    },
    "options": [
      "84 cm²",
      "130 cm²",
      "61 cm²",
      "122 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 122,
    "explanation": "2 × (7×3 + 7×4 + 3×4) = 2 × (21 + 28 + 12) = 2 × 61 = 122 cm²."
  },
  {
    "id": 9,
    "worldIndex": 0,
    "qIndex": 8,
    "rule": "✦ ADD EVERY FACE",
    "prompt": "Noah wraps a puzzle cube gift box with edge length 3 cm. What is its total surface area?",
    "hint": "Find the area of one square face, 3 times 3 equals 9, then multiply by 6 identical faces.",
    "diagramData": {
      "type": "cuboid",
      "L": 3,
      "W": 3,
      "H": 3,
      "unit": "cm"
    },
    "options": [
      "54 cm²",
      "27 cm²",
      "36 cm²",
      "18 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 54,
    "explanation": "6 × 3² = 6 × 9 = 54 cm²."
  },
  {
    "id": 10,
    "worldIndex": 0,
    "qIndex": 9,
    "rule": "✦ OPPOSITE FACES ARE TWINS",
    "prompt": "Ava wraps a shirt gift box measuring 9 cm long, 6 cm wide and 2 cm tall. What is its total surface area?",
    "hint": "Add the three face areas: 9 times 6, 9 times 2, and 6 times 2. Double the total to cover all faces.",
    "diagramData": {
      "type": "cuboid",
      "L": 9,
      "W": 6,
      "H": 2,
      "unit": "cm"
    },
    "options": [
      "108 cm²",
      "168 cm²",
      "180 cm²",
      "84 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 168,
    "explanation": "2 × (9×6 + 9×2 + 6×2) = 2 × (54 + 18 + 12) = 2 × 84 = 168 cm²."
  },
  {
    "id": 11,
    "worldIndex": 1,
    "qIndex": 0,
    "rule": "✦ AREA OF ONE FACE",
    "prompt": "Oliver rolls a standard gaming dice with edge length 5 cm. What is the area of just one of its square faces?",
    "hint": "The area of a square face is side times side. Multiply 5 by 5.",
    "diagramData": {
      "type": "cuboid",
      "L": 5,
      "W": 5,
      "H": 5,
      "unit": "cm"
    },
    "options": [
      "25 cm²",
      "10 cm²",
      "150 cm²",
      "20 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 25,
    "explanation": "Area of one square face = 5 × 5 = 25 cm²."
  },
  {
    "id": 12,
    "worldIndex": 1,
    "qIndex": 1,
    "rule": "✦ 6 EQUAL SQUARES",
    "prompt": "Harper has a mini wooden dice with edge length 2 cm. What is the total surface area of all 6 faces?",
    "hint": "Each face has area 2 times 2 equals 4. Multiply 4 by 6 faces.",
    "diagramData": {
      "type": "cuboid",
      "L": 2,
      "W": 2,
      "H": 2,
      "unit": "cm"
    },
    "options": [
      "8 cm²",
      "12 cm²",
      "16 cm²",
      "24 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 24,
    "explanation": "6 × 2² = 6 × 4 = 24 cm²."
  },
  {
    "id": 13,
    "worldIndex": 1,
    "qIndex": 2,
    "rule": "✦ 6 EQUAL SQUARES",
    "prompt": "Ethan inspects a giant display dice with edge length 10 cm. What is its total surface area?",
    "hint": "One face has area 10 times 10 equals 100 square centimetres. Multiply 100 by 6.",
    "diagramData": {
      "type": "cuboid",
      "L": 10,
      "W": 10,
      "H": 10,
      "unit": "cm"
    },
    "options": [
      "600 cm²",
      "1000 cm²",
      "100 cm²",
      "400 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 600,
    "explanation": "6 × 10² = 6 × 100 = 600 cm²."
  },
  {
    "id": 14,
    "worldIndex": 1,
    "qIndex": 3,
    "rule": "✦ 6 EQUAL SQUARES",
    "prompt": "Mia holds a decorative stone cube dice with edge length 7 cm. What is its total surface area?",
    "hint": "Calculate 7 squared to get 49 for one face, then multiply 49 by 6.",
    "diagramData": {
      "type": "cuboid",
      "L": 7,
      "W": 7,
      "H": 7,
      "unit": "cm"
    },
    "options": [
      "343 cm²",
      "294 cm²",
      "196 cm²",
      "49 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 294,
    "explanation": "6 × 7² = 6 × 49 = 294 cm²."
  },
  {
    "id": 15,
    "worldIndex": 1,
    "qIndex": 4,
    "rule": "✦ 6 EQUAL SQUARES",
    "prompt": "James has a novelty foam dice with edge length 8 cm. What is its total surface area?",
    "hint": "One face has area 8 times 8 equals 64. Multiply 64 by 6 faces.",
    "diagramData": {
      "type": "cuboid",
      "L": 8,
      "W": 8,
      "H": 8,
      "unit": "cm"
    },
    "options": [
      "384 cm²",
      "256 cm²",
      "64 cm²",
      "512 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 384,
    "explanation": "6 × 8² = 6 × 64 = 384 cm²."
  },
  {
    "id": 16,
    "worldIndex": 1,
    "qIndex": 5,
    "rule": "✦ MULTIPLY BY 6",
    "prompt": "A board game dice has a single face area of 36 cm². What is the total surface area of the whole dice?",
    "hint": "Since a dice has 6 identical square faces, multiply the single face area 36 by 6.",
    "diagramData": {
      "type": "cuboid",
      "L": 6,
      "W": 6,
      "H": 6,
      "unit": "cm"
    },
    "options": [
      "144 cm²",
      "256 cm²",
      "36 cm²",
      "216 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 216,
    "explanation": "Total surface area = 6 × 36 = 216 cm²."
  },
  {
    "id": 17,
    "worldIndex": 1,
    "qIndex": 6,
    "rule": "✦ 6 EQUAL SQUARES",
    "prompt": "Logan carves a wooden dice with edge length 9 cm. What is its total surface area?",
    "hint": "Square 9 to find the area of one face, then multiply 81 by 6.",
    "diagramData": {
      "type": "cuboid",
      "L": 9,
      "W": 9,
      "H": 9,
      "unit": "cm"
    },
    "options": [
      "486 cm²",
      "729 cm²",
      "81 cm²",
      "324 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 486,
    "explanation": "6 × 9² = 6 × 81 = 486 cm²."
  },
  {
    "id": 18,
    "worldIndex": 1,
    "qIndex": 7,
    "rule": "✦ 6 EQUAL SQUARES",
    "prompt": "Charlotte makes a giant foam cube with edge length 11 cm. What is its total surface area?",
    "hint": "One face has area 11 times 11 equals 121. Multiply 121 by 6.",
    "diagramData": {
      "type": "cuboid",
      "L": 11,
      "W": 11,
      "H": 11,
      "unit": "cm"
    },
    "options": [
      "1331 cm²",
      "726 cm²",
      "484 cm²",
      "121 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 726,
    "explanation": "6 × 11² = 6 × 121 = 726 cm²."
  },
  {
    "id": 19,
    "worldIndex": 1,
    "qIndex": 8,
    "rule": "✦ COMBINED DICE",
    "prompt": "Leo has two identical separate dice with edge length 3 cm each. What is the combined surface area of both dice?",
    "hint": "Find the surface area of one dice: 6 times 9 equals 54. Then double it for both separate dice.",
    "diagramData": {
      "type": "cuboid",
      "L": 3,
      "W": 3,
      "H": 3,
      "unit": "cm"
    },
    "options": [
      "108 cm²",
      "72 cm²",
      "81 cm²",
      "54 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 108,
    "explanation": "One dice = 6 × 3² = 54 cm². Both dice = 2 × 54 = 108 cm²."
  },
  {
    "id": 20,
    "worldIndex": 1,
    "qIndex": 9,
    "rule": "✦ 6 EQUAL SQUARES",
    "prompt": "Mason has a big collector cube dice with edge length 12 cm. What is its total surface area?",
    "hint": "One face has area 12 times 12 equals 144. Multiply 144 by 6.",
    "diagramData": {
      "type": "cuboid",
      "L": 12,
      "W": 12,
      "H": 12,
      "unit": "cm"
    },
    "options": [
      "1728 cm²",
      "576 cm²",
      "144 cm²",
      "864 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 864,
    "explanation": "6 × 12² = 6 × 144 = 864 cm²."
  },
  {
    "id": 21,
    "worldIndex": 2,
    "qIndex": 0,
    "rule": "✦ OPPOSITE FACES ARE TWINS",
    "prompt": "A family breakfast cereal box is 20 cm long, 5 cm wide and 30 cm tall. What is its total surface area of cardboard?",
    "hint": "Find the areas of the 3 pairs: top and bottom 20 by 5, front and back 20 by 30, sides 5 by 30. Add them and double.",
    "diagramData": {
      "type": "cuboid",
      "L": 20,
      "W": 5,
      "H": 30,
      "unit": "cm"
    },
    "options": [
      "1700 cm²",
      "3000 cm²",
      "850 cm²",
      "1600 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 1700,
    "explanation": "2 × (20×5 + 20×30 + 5×30) = 2 × (100 + 600 + 150) = 2 × 850 = 1700 cm²."
  },
  {
    "id": 22,
    "worldIndex": 2,
    "qIndex": 1,
    "rule": "✦ THREE PAIRS OF FACES",
    "prompt": "An organic oats cereal box measures 15 cm long, 6 cm wide and 25 cm tall. What is its total surface area?",
    "hint": "Add the 3 face areas: 15 times 6, 15 times 25, and 6 times 25. Multiply the total by 2.",
    "diagramData": {
      "type": "cuboid",
      "L": 15,
      "W": 6,
      "H": 25,
      "unit": "cm"
    },
    "options": [
      "2250 cm²",
      "1230 cm²",
      "1150 cm²",
      "615 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 1230,
    "explanation": "2 × (15×6 + 15×25 + 6×25) = 2 × (90 + 375 + 150) = 2 × 615 = 1230 cm²."
  },
  {
    "id": 23,
    "worldIndex": 2,
    "qIndex": 2,
    "rule": "✦ ADD EVERY FACE",
    "prompt": "A mini snack cereal box measures 12 cm long, 4 cm wide and 18 cm tall. Find its total surface area.",
    "hint": "Top and bottom are 48 each, front and back are 216 each, and sides are 72 each. Add all 6 faces together.",
    "diagramData": {
      "type": "cuboid",
      "L": 12,
      "W": 4,
      "H": 18,
      "unit": "cm"
    },
    "options": [
      "672 cm²",
      "620 cm²",
      "336 cm²",
      "864 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 672,
    "explanation": "2 × (12×4 + 12×18 + 4×18) = 2 × (48 + 216 + 72) = 2 × 336 = 672 cm²."
  },
  {
    "id": 24,
    "worldIndex": 2,
    "qIndex": 3,
    "rule": "✦ THREE PAIRS OF FACES",
    "prompt": "A healthy granola box measures 22 cm long, 8 cm wide and 28 cm tall. What is its total surface area?",
    "hint": "Calculate one face of each pair: 22 times 8, 22 times 28, and 8 times 28. Add them and multiply by 2.",
    "diagramData": {
      "type": "cuboid",
      "L": 22,
      "W": 8,
      "H": 28,
      "unit": "cm"
    },
    "options": [
      "4928 cm²",
      "1920 cm²",
      "1016 cm²",
      "2032 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 2032,
    "explanation": "2 × (22×8 + 22×28 + 8×28) = 2 × (176 + 616 + 224) = 2 × 1016 = 2032 cm²."
  },
  {
    "id": 25,
    "worldIndex": 2,
    "qIndex": 4,
    "rule": "✦ OPPOSITE FACES ARE TWINS",
    "prompt": "An extra large jumbo cereal box measures 25 cm long, 10 cm wide and 35 cm tall. What is its total surface area?",
    "hint": "Add the areas 250 plus 875 plus 350 to get 1475 for three faces, then double for all six faces.",
    "diagramData": {
      "type": "cuboid",
      "L": 25,
      "W": 10,
      "H": 35,
      "unit": "cm"
    },
    "options": [
      "2950 cm²",
      "8750 cm²",
      "1475 cm²",
      "2800 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 2950,
    "explanation": "2 × (25×10 + 25×35 + 10×35) = 2 × (250 + 875 + 350) = 2 × 1475 = 2950 cm²."
  },
  {
    "id": 26,
    "worldIndex": 2,
    "qIndex": 5,
    "rule": "✦ THREE PAIRS OF FACES",
    "prompt": "A honey rings cereal box is 18 cm long, 7 cm wide and 24 cm tall. Find its total surface area.",
    "hint": "Work out 18 times 7, 18 times 24, and 7 times 24. Add the three answers and double the result.",
    "diagramData": {
      "type": "cuboid",
      "L": 18,
      "W": 7,
      "H": 24,
      "unit": "cm"
    },
    "options": [
      "3024 cm²",
      "1452 cm²",
      "1380 cm²",
      "726 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 1452,
    "explanation": "2 × (18×7 + 18×24 + 7×24) = 2 × (126 + 432 + 168) = 2 × 726 = 1452 cm²."
  },
  {
    "id": 27,
    "worldIndex": 2,
    "qIndex": 6,
    "rule": "✦ ADD EVERY FACE",
    "prompt": "A cereal bar variety box measures 16 cm long, 5 cm wide and 20 cm tall. What is its total surface area?",
    "hint": "Add 80, 320, and 100 to get 500 square centimetres. Double it to get the total surface area.",
    "diagramData": {
      "type": "cuboid",
      "L": 16,
      "W": 5,
      "H": 20,
      "unit": "cm"
    },
    "options": [
      "1000 cm²",
      "920 cm²",
      "500 cm²",
      "1600 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 1000,
    "explanation": "2 × (16×5 + 16×20 + 5×20) = 2 × (80 + 320 + 100) = 2 × 500 = 1000 cm²."
  },
  {
    "id": 28,
    "worldIndex": 2,
    "qIndex": 7,
    "rule": "✦ OPPOSITE FACES ARE TWINS",
    "prompt": "A wheat biscuit box is 20 cm long, 10 cm wide and 30 cm tall. Find its total surface area.",
    "hint": "Add 200 plus 600 plus 300 to get 1100, then double it to get 2200.",
    "diagramData": {
      "type": "cuboid",
      "L": 20,
      "W": 10,
      "H": 30,
      "unit": "cm"
    },
    "options": [
      "6000 cm²",
      "2100 cm²",
      "1100 cm²",
      "2200 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 2200,
    "explanation": "2 × (20×10 + 20×30 + 10×30) = 2 × (200 + 600 + 300) = 2 × 1100 = 2200 cm²."
  },
  {
    "id": 29,
    "worldIndex": 2,
    "qIndex": 8,
    "rule": "✦ THREE PAIRS OF FACES",
    "prompt": "A bran flakes carton is 14 cm long, 6 cm wide and 22 cm tall. What is its total surface area?",
    "hint": "Calculate the area of each face type: 14 times 6, 14 times 22, and 6 times 22. Sum them and double.",
    "diagramData": {
      "type": "cuboid",
      "L": 14,
      "W": 6,
      "H": 22,
      "unit": "cm"
    },
    "options": [
      "1048 cm²",
      "1848 cm²",
      "524 cm²",
      "980 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 1048,
    "explanation": "2 × (14×6 + 14×22 + 6×22) = 2 × (84 + 308 + 132) = 2 × 524 = 1048 cm²."
  },
  {
    "id": 30,
    "worldIndex": 2,
    "qIndex": 9,
    "rule": "✦ ADD EVERY FACE",
    "prompt": "A crunchy cornflakes box is 24 cm long, 7 cm wide and 32 cm tall. What is its total surface area?",
    "hint": "The three pairs of rectangles have areas 168, 768, and 224. Add them together and multiply by 2.",
    "diagramData": {
      "type": "cuboid",
      "L": 24,
      "W": 7,
      "H": 32,
      "unit": "cm"
    },
    "options": [
      "5376 cm²",
      "2320 cm²",
      "2240 cm²",
      "1160 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 2320,
    "explanation": "2 × (24×7 + 24×32 + 7×32) = 2 × (168 + 768 + 224) = 2 × 1160 = 2320 cm²."
  },
  {
    "id": 31,
    "worldIndex": 3,
    "qIndex": 0,
    "rule": "✦ PRISM: ENDS + SIDES",
    "prompt": "A camping tent is shaped like a triangular prism 4 m long. Each triangle end has base 3 m and height 2 m, and the sloping sides are 2.5 m. What is its total surface area?",
    "hint": "The two triangle ends have area 2 times half times base times height. The three rectangular sides unfold into a single rectangle of perimeter times length.",
    "diagramData": {
      "type": "prism",
      "a": 3,
      "b": 2,
      "c": 2.5,
      "L": 4,
      "unit": "m"
    },
    "options": [
      "38 m²",
      "44 m²",
      "24 m²",
      "32 m²"
    ],
    "correctIndex": 0,
    "correctValue": 38,
    "explanation": "Ends: 2 × (½ × 3 × 2) = 6 m². Sides: (2.5 + 2.5 + 3) × 4 = 8 × 4 = 32 m². Total = 6 + 32 = 38 m²."
  },
  {
    "id": 32,
    "worldIndex": 3,
    "qIndex": 1,
    "rule": "✦ PRISM: ENDS + SIDES",
    "prompt": "A scout pup tent is 3 m long. The triangular front and back each have base 2 m and height 1.5 m, with two sloping sides of 1.8 m. Find the total surface area of canvas.",
    "hint": "Add the area of both triangle ends to the area of the three rectangular sides.",
    "diagramData": {
      "type": "prism",
      "a": 2,
      "b": 1.5,
      "c": 1.8,
      "L": 3,
      "unit": "m"
    },
    "options": [
      "16.8 m²",
      "18 m²",
      "22.4 m²",
      "19.8 m²"
    ],
    "correctIndex": 3,
    "correctValue": 19.8,
    "explanation": "Ends: 2 × (½ × 2 × 1.5) = 3 m². Sides: (1.8 + 1.8 + 2) × 3 = 5.6 × 3 = 16.8 m². Total = 19.8 m²."
  },
  {
    "id": 33,
    "worldIndex": 3,
    "qIndex": 2,
    "rule": "✦ RIGHT TRIANGLE PRISM",
    "prompt": "A ridge tent is 5 m long. Its right-angled triangle ends have legs 3 m and 4 m, with hypotenuse 5 m. What is its total surface area?",
    "hint": "Two right triangles have area 3 times 4 equals 12. The three sides have area perimeter 12 times length 5 equals 60.",
    "diagramData": {
      "type": "prism",
      "a": 3,
      "b": 4,
      "c": 5,
      "L": 5,
      "unit": "m"
    },
    "options": [
      "72 m²",
      "60 m²",
      "36 m²",
      "84 m²"
    ],
    "correctIndex": 0,
    "correctValue": 72,
    "explanation": "Ends: 2 × (½ × 3 × 4) = 12 m². Sides: (3 + 4 + 5) × 5 = 12 × 5 = 60 m². Total = 12 + 60 = 72 m²."
  },
  {
    "id": 34,
    "worldIndex": 3,
    "qIndex": 3,
    "rule": "✦ PRISM: ENDS + SIDES",
    "prompt": "A storage tent prism is 6 m long. Its triangle ends have base 6 m, height 4 m, and both sloping sides are 5 m. Find its total surface area.",
    "hint": "Calculate 2 times half times 6 times 4 for the ends, and perimeter 16 times length 6 for the sides.",
    "diagramData": {
      "type": "prism",
      "a": 6,
      "b": 4,
      "c": 5,
      "L": 6,
      "unit": "m"
    },
    "options": [
      "96 m²",
      "120 m²",
      "144 m²",
      "72 m²"
    ],
    "correctIndex": 1,
    "correctValue": 120,
    "explanation": "Ends: 2 × (½ × 6 × 4) = 24 m². Sides: (5 + 5 + 6) × 6 = 16 × 6 = 96 m². Total = 24 + 96 = 120 m²."
  },
  {
    "id": 35,
    "worldIndex": 3,
    "qIndex": 4,
    "rule": "✦ PRISM: ENDS + SIDES",
    "prompt": "An A-frame camping shelter is 4 m long. The triangular ends have base 4 m and height 3 m, with sloping sides of 3.6 m. Find the total surface area.",
    "hint": "Find the area of the two triangle ends, then add the perimeter of the triangle multiplied by the tent length.",
    "diagramData": {
      "type": "prism",
      "a": 4,
      "b": 3,
      "c": 3.6,
      "L": 4,
      "unit": "m"
    },
    "options": [
      "56.8 m²",
      "62 m²",
      "48 m²",
      "44.8 m²"
    ],
    "correctIndex": 0,
    "correctValue": 56.8,
    "explanation": "Ends: 2 × (½ × 4 × 3) = 12 m². Sides: (3.6 + 3.6 + 4) × 4 = 11.2 × 4 = 44.8 m². Total = 12 + 44.8 = 56.8 m²."
  },
  {
    "id": 36,
    "worldIndex": 3,
    "qIndex": 5,
    "rule": "✦ RIGHT TRIANGLE PRISM",
    "prompt": "A hiking wedge tent is 3 m long with right-triangle ends of legs 1.5 m and 2 m, and hypotenuse 2.5 m. Find its total surface area.",
    "hint": "The two triangular ends make 3 square metres. The three sides have perimeter 6 metres times length 3 metres equals 18.",
    "diagramData": {
      "type": "prism",
      "a": 1.5,
      "b": 2,
      "c": 2.5,
      "L": 3,
      "unit": "m"
    },
    "options": [
      "18 m²",
      "24 m²",
      "15 m²",
      "21 m²"
    ],
    "correctIndex": 3,
    "correctValue": 21,
    "explanation": "Ends: 2 × (½ × 1.5 × 2) = 3 m². Sides: (1.5 + 2 + 2.5) × 3 = 6 × 3 = 18 m². Total = 3 + 18 = 21 m²."
  },
  {
    "id": 37,
    "worldIndex": 3,
    "qIndex": 6,
    "rule": "✦ RIGHT TRIANGLE PRISM",
    "prompt": "A triangular wooden cabin model is 5 m long. Each end is a right triangle with legs 6 m and 8 m, and hypotenuse 10 m. What is its total surface area?",
    "hint": "The two triangle ends have area 6 times 8 equals 48. The three rectangular walls have area perimeter 24 times length 5.",
    "diagramData": {
      "type": "prism",
      "a": 6,
      "b": 8,
      "c": 10,
      "L": 5,
      "unit": "m"
    },
    "options": [
      "168 m²",
      "120 m²",
      "96 m²",
      "180 m²"
    ],
    "correctIndex": 0,
    "correctValue": 168,
    "explanation": "Ends: 2 × (½ × 6 × 8) = 48 m². Sides: (6 + 8 + 10) × 5 = 24 × 5 = 120 m². Total = 48 + 120 = 168 m²."
  },
  {
    "id": 38,
    "worldIndex": 3,
    "qIndex": 7,
    "rule": "✦ PRISM: ENDS + SIDES",
    "prompt": "A trail tent is 4 m long. Its triangular ends have base 3 m, height 2.4 m, and sloping sides 2.5 m. Find the total surface area.",
    "hint": "Two ends give 3 times 2.4 equals 7.2. The three side faces give perimeter 8 times length 4 equals 32.",
    "diagramData": {
      "type": "prism",
      "a": 3,
      "b": 2.4,
      "c": 2.5,
      "L": 4,
      "unit": "m"
    },
    "options": [
      "32 m²",
      "39.2 m²",
      "45 m²",
      "28.8 m²"
    ],
    "correctIndex": 1,
    "correctValue": 39.2,
    "explanation": "Ends: 2 × (½ × 3 × 2.4) = 7.2 m². Sides: (2.5 + 2.5 + 3) × 4 = 8 × 4 = 32 m². Total = 7.2 + 32 = 39.2 m²."
  },
  {
    "id": 39,
    "worldIndex": 3,
    "qIndex": 8,
    "rule": "✦ RIGHT TRIANGLE PRISM",
    "prompt": "A family cabin tent is 6 m long. Its right-angled triangle ends have sides 3 m, 4 m, and 5 m. Find its total surface area.",
    "hint": "Add the two triangle ends (area 12) to the perimeter times length (12 times 6 equals 72).",
    "diagramData": {
      "type": "prism",
      "a": 3,
      "b": 4,
      "c": 5,
      "L": 6,
      "unit": "m"
    },
    "options": [
      "84 m²",
      "96 m²",
      "60 m²",
      "72 m²"
    ],
    "correctIndex": 0,
    "correctValue": 84,
    "explanation": "Ends: 2 × (½ × 3 × 4) = 12 m². Sides: (3 + 4 + 5) × 6 = 12 × 6 = 72 m². Total = 12 + 72 = 84 m²."
  },
  {
    "id": 40,
    "worldIndex": 3,
    "qIndex": 9,
    "rule": "✦ PRISM: ENDS + SIDES",
    "prompt": "A safari tent prism is 7 m long. The triangular ends have base 6 m, height 4 m, and sloping sides 5 m. Find its total surface area.",
    "hint": "Two triangle ends give 24 square metres. The sides give perimeter 16 times length 7 equals 112.",
    "diagramData": {
      "type": "prism",
      "a": 6,
      "b": 4,
      "c": 5,
      "L": 7,
      "unit": "m"
    },
    "options": [
      "112 m²",
      "150 m²",
      "120 m²",
      "136 m²"
    ],
    "correctIndex": 3,
    "correctValue": 136,
    "explanation": "Ends: 2 × (½ × 6 × 4) = 24 m². Sides: (5 + 5 + 6) × 7 = 16 × 7 = 112 m². Total = 24 + 112 = 136 m²."
  },
  {
    "id": 41,
    "worldIndex": 4,
    "qIndex": 0,
    "rule": "✦ CIRCLES + CURVED SIDE",
    "prompt": "A closed soup tin has radius 7 cm and height 10 cm. Find its total surface area (take π = 22/7).",
    "hint": "A cylinder has 2 circle lids and 1 curved surface. Area = 2 pi r squared plus 2 pi r h.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 10,
      "unit": "cm"
    },
    "options": [
      "748 cm²",
      "440 cm²",
      "308 cm²",
      "616 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 748,
    "explanation": "2πr² + 2πrh = 2×(22/7)×49 + 2×(22/7)×7×10 = 308 + 440 = 748 cm²."
  },
  {
    "id": 42,
    "worldIndex": 4,
    "qIndex": 1,
    "rule": "✦ CURVED LABEL ONLY",
    "prompt": "Oliver designs a paper label that wraps around a tin with radius 7 cm and height 15 cm. Find the area of the label (take π = 22/7).",
    "hint": "The label is a rectangle whose width is the circumference, 2 pi r, and height is h. Multiply 44 by 15.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 15,
      "unit": "cm",
      "labelOnly": true
    },
    "options": [
      "968 cm²",
      "660 cm²",
      "528 cm²",
      "308 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 660,
    "explanation": "Label = 2πrh = 2 × (22/7) × 7 × 15 = 44 × 15 = 660 cm²."
  },
  {
    "id": 43,
    "worldIndex": 4,
    "qIndex": 2,
    "rule": "✦ CIRCLES + CURVED SIDE",
    "prompt": "A closed biscuit tin has radius 14 cm and height 20 cm. Find its total surface area (take π = 22/7).",
    "hint": "Two circles give 2 times 22 over 7 times 14 squared. The curved surface is 2 times 22 over 7 times 14 times 20.",
    "diagramData": {
      "type": "cylinder",
      "r": 14,
      "h": 20,
      "unit": "cm"
    },
    "options": [
      "2992 cm²",
      "2500 cm²",
      "1232 cm²",
      "1760 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 2992,
    "explanation": "2πr² + 2πrh = 2×(22/7)×196 + 2×(22/7)×14×20 = 1232 + 1760 = 2992 cm²."
  },
  {
    "id": 44,
    "worldIndex": 4,
    "qIndex": 3,
    "rule": "✦ CIRCLES + CURVED SIDE",
    "prompt": "A closed can of beans has radius 7 cm and height 12 cm. Find its total surface area (take π = 22/7).",
    "hint": "The two circle lids make 308 square centimetres. The curved side makes 44 times 12 equals 528.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 12,
      "unit": "cm"
    },
    "options": [
      "528 cm²",
      "704 cm²",
      "308 cm²",
      "836 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 836,
    "explanation": "2πr² + 2πrh = 308 + 44 × 12 = 308 + 528 = 836 cm²."
  },
  {
    "id": 45,
    "worldIndex": 4,
    "qIndex": 4,
    "rule": "✦ CIRCLES + CURVED SIDE",
    "prompt": "A closed paint tin has radius 7 cm and height 8 cm. Find its total surface area (take π = 22/7).",
    "hint": "Add the two lids, 308, to the curved surface, 44 times 8 equals 352.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 8,
      "unit": "cm"
    },
    "options": [
      "660 cm²",
      "352 cm²",
      "308 cm²",
      "550 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 660,
    "explanation": "2πr² + 2πrh = 308 + 44 × 8 = 308 + 352 = 660 cm²."
  },
  {
    "id": 46,
    "worldIndex": 4,
    "qIndex": 5,
    "rule": "✦ CIRCLES + CURVED SIDE",
    "prompt": "A closed tin of peaches has radius 7 cm and height 14 cm. Find its total surface area (take π = 22/7).",
    "hint": "2 pi r squared equals 308. 2 pi r times h equals 44 times 14 equals 616. Add them together.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 14,
      "unit": "cm"
    },
    "options": [
      "616 cm²",
      "924 cm²",
      "770 cm²",
      "308 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 924,
    "explanation": "2πr² + 2πrh = 308 + 44 × 14 = 308 + 616 = 924 cm²."
  },
  {
    "id": 47,
    "worldIndex": 4,
    "qIndex": 6,
    "rule": "✦ CIRCLES + CURVED SIDE",
    "prompt": "A cylindrical food canister has radius 14 cm and height 10 cm. Find its total surface area (take π = 22/7).",
    "hint": "Calculate 2 times pi times 14 squared for the two lids, and 2 times pi times 14 times 10 for the curved side.",
    "diagramData": {
      "type": "cylinder",
      "r": 14,
      "h": 10,
      "unit": "cm"
    },
    "options": [
      "2112 cm²",
      "1980 cm²",
      "1232 cm²",
      "880 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 2112,
    "explanation": "2πr² + 2πrh = 1232 + 2 × (22/7) × 14 × 10 = 1232 + 880 = 2112 cm²."
  },
  {
    "id": 48,
    "worldIndex": 4,
    "qIndex": 7,
    "rule": "✦ CURVED LABEL ONLY",
    "prompt": "Maya wraps a decorative label around a coffee tin of radius 7 cm and height 18 cm. Find the area of the label (take π = 22/7).",
    "hint": "The label covers only the curved side: circumference 2 pi r times height. Multiply 44 by 18.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 18,
      "unit": "cm",
      "labelOnly": true
    },
    "options": [
      "1100 cm²",
      "704 cm²",
      "308 cm²",
      "792 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 792,
    "explanation": "Label = 2πrh = 44 × 18 = 792 cm²."
  },
  {
    "id": 49,
    "worldIndex": 4,
    "qIndex": 8,
    "rule": "✦ CIRCLES + CURVED SIDE",
    "prompt": "A tall oil tin has radius 7 cm and height 25 cm. Find its total surface area (take π = 22/7).",
    "hint": "Two circular ends equal 308. The curved surface equals 44 times 25 equals 1100.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 25,
      "unit": "cm"
    },
    "options": [
      "1408 cm²",
      "1100 cm²",
      "308 cm²",
      "1250 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 1408,
    "explanation": "2πr² + 2πrh = 308 + 44 × 25 = 308 + 1100 = 1408 cm²."
  },
  {
    "id": 50,
    "worldIndex": 4,
    "qIndex": 9,
    "rule": "✦ CIRCLES + CURVED SIDE",
    "prompt": "A flat tuna tin has radius 7 cm and height 4 cm. Find its total surface area (take π = 22/7).",
    "hint": "Add 308 for the two lids and 44 times 4 equals 176 for the shallow curved side.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 4,
      "unit": "cm"
    },
    "options": [
      "176 cm²",
      "484 cm²",
      "396 cm²",
      "308 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 484,
    "explanation": "2πr² + 2πrh = 308 + 44 × 4 = 308 + 176 = 484 cm²."
  },
  {
    "id": 51,
    "worldIndex": 5,
    "qIndex": 0,
    "rule": "✦ ONLY THE FACES NEEDED",
    "prompt": "Mia's glass fish tank is 50 cm long, 30 cm wide and 40 cm tall. It has NO lid on top. Find the area of glass needed.",
    "hint": "Since the tank has no top lid, add only 5 faces: bottom plus 2 long sides plus 2 short sides.",
    "diagramData": {
      "type": "cuboid",
      "L": 50,
      "W": 30,
      "H": 40,
      "unit": "cm",
      "open": true
    },
    "options": [
      "7900 cm²",
      "7500 cm²",
      "6400 cm²",
      "9400 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 7900,
    "explanation": "Bottom (50×30=1500) + 2×(50×40=4000) + 2×(30×40=2400) = 1500 + 4000 + 2400 = 7900 cm²."
  },
  {
    "id": 52,
    "worldIndex": 5,
    "qIndex": 1,
    "rule": "✦ OPEN CUBE (5 FACES)",
    "prompt": "An open glass cube aquarium has edges of 30 cm and no lid. What is the area of glass needed for its 5 faces?",
    "hint": "A cube has 6 faces, but without a lid there are only 5 faces. Multiply 5 by 30 squared.",
    "diagramData": {
      "type": "cuboid",
      "L": 30,
      "W": 30,
      "H": 30,
      "unit": "cm",
      "open": true
    },
    "options": [
      "5400 cm²",
      "2700 cm²",
      "3600 cm²",
      "4500 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 4500,
    "explanation": "5 faces = 5 × 30² = 5 × 900 = 4500 cm²."
  },
  {
    "id": 53,
    "worldIndex": 5,
    "qIndex": 2,
    "rule": "✦ ONLY THE FACES NEEDED",
    "prompt": "A turtle tank with no lid measures 60 cm long, 40 cm wide and 30 cm high. Find the total surface area of glass.",
    "hint": "Exclude the top face. Calculate 1 base face plus 4 vertical walls.",
    "diagramData": {
      "type": "cuboid",
      "L": 60,
      "W": 40,
      "H": 30,
      "unit": "cm",
      "open": true
    },
    "options": [
      "8400 cm²",
      "10800 cm²",
      "6000 cm²",
      "7800 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 8400,
    "explanation": "Bottom 60×40 = 2400. Front/back = 2×60×30 = 3600. Sides = 2×40×30 = 2400. Total = 8400 cm²."
  },
  {
    "id": 54,
    "worldIndex": 5,
    "qIndex": 3,
    "rule": "✦ OPEN CYLINDER",
    "prompt": "An open cylindrical fish bowl has radius 7 cm and height 20 cm, open at the top. Find its outside surface area (take π = 22/7).",
    "hint": "It has only 1 circular base and 1 curved side surface. Calculate pi r squared plus 2 pi r h.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 20,
      "unit": "cm",
      "open": true
    },
    "options": [
      "1188 cm²",
      "1034 cm²",
      "950 cm²",
      "880 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 1034,
    "explanation": "Base πr² = (22/7)×49 = 154 cm². Curved 2πrh = 44×20 = 880 cm². Total = 154 + 880 = 1034 cm²."
  },
  {
    "id": 55,
    "worldIndex": 5,
    "qIndex": 4,
    "rule": "✦ ONLY THE FACES NEEDED",
    "prompt": "A small open-top aquarium is 40 cm long, 25 cm wide and 20 cm tall. Find the total area of glass.",
    "hint": "Add the bottom 1000, the two long walls 1600, and the two short walls 1000.",
    "diagramData": {
      "type": "cuboid",
      "L": 40,
      "W": 25,
      "H": 20,
      "unit": "cm",
      "open": true
    },
    "options": [
      "3600 cm²",
      "3200 cm²",
      "2600 cm²",
      "4600 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 3600,
    "explanation": "Bottom 40×25 = 1000. Walls = 2×40×20 + 2×25×20 = 1600 + 1000 = 2600. Total = 3600 cm²."
  },
  {
    "id": 56,
    "worldIndex": 5,
    "qIndex": 5,
    "rule": "✦ OPEN CUBE (5 FACES)",
    "prompt": "An open cube display tank has edge length 20 cm and no top. Find the surface area of the 5 faces.",
    "hint": "Multiply 5 by the area of one face, 20 times 20.",
    "diagramData": {
      "type": "cuboid",
      "L": 20,
      "W": 20,
      "H": 20,
      "unit": "cm",
      "open": true
    },
    "options": [
      "2400 cm²",
      "1200 cm²",
      "1600 cm²",
      "2000 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 2000,
    "explanation": "5 × 20² = 5 × 400 = 2000 cm²."
  },
  {
    "id": 57,
    "worldIndex": 5,
    "qIndex": 6,
    "rule": "✦ ONLY THE FACES NEEDED",
    "prompt": "A reptile terrarium with no lid is 80 cm long, 40 cm wide and 50 cm high. Find the total glass area.",
    "hint": "Do not include the top. Calculate bottom plus front, back, left and right.",
    "diagramData": {
      "type": "cuboid",
      "L": 80,
      "W": 40,
      "H": 50,
      "unit": "cm",
      "open": true
    },
    "options": [
      "15200 cm²",
      "18400 cm²",
      "12000 cm²",
      "14000 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 15200,
    "explanation": "Bottom 80×40 = 3200. Front/back 2×80×50 = 8000. Sides 2×40×50 = 4000. Total = 15200 cm²."
  },
  {
    "id": 58,
    "worldIndex": 5,
    "qIndex": 7,
    "rule": "✦ OPEN CYLINDER",
    "prompt": "An open cylindrical aquarium tube has radius 14 cm and height 30 cm with a base but no lid. Find its surface area (take π = 22/7).",
    "hint": "Only 1 base circle (pi r squared equals 616) plus the curved side (2 pi r h equals 2640).",
    "diagramData": {
      "type": "cylinder",
      "r": 14,
      "h": 30,
      "unit": "cm",
      "open": true
    },
    "options": [
      "3872 cm²",
      "3256 cm²",
      "3100 cm²",
      "2640 cm²"
    ],
    "correctIndex": 1,
    "correctValue": 3256,
    "explanation": "Base πr² = (22/7)×196 = 616. Curved 2πrh = 2×(22/7)×14×30 = 2640. Total = 616 + 2640 = 3256 cm²."
  },
  {
    "id": 59,
    "worldIndex": 5,
    "qIndex": 8,
    "rule": "✦ ONLY THE FACES NEEDED",
    "prompt": "An open reef tank is 70 cm long, 35 cm wide and 30 cm high with no lid. Find the total surface area.",
    "hint": "Combine the single bottom base with the 4 upright glass panels.",
    "diagramData": {
      "type": "cuboid",
      "L": 70,
      "W": 35,
      "H": 30,
      "unit": "cm",
      "open": true
    },
    "options": [
      "8750 cm²",
      "8100 cm²",
      "6300 cm²",
      "11200 cm²"
    ],
    "correctIndex": 0,
    "correctValue": 8750,
    "explanation": "Bottom 70×35 = 2450. Walls 2×70×30 + 2×35×30 = 4200 + 2100 = 6300. Total = 8750 cm²."
  },
  {
    "id": 60,
    "worldIndex": 5,
    "qIndex": 9,
    "rule": "✦ ONLY THE FACES NEEDED",
    "prompt": "A nano shrimp tank with no top is 25 cm long, 20 cm wide and 15 cm tall. Find the area of glass.",
    "hint": "Add the bottom face 500 to the 4 sides: 750 plus 600.",
    "diagramData": {
      "type": "cuboid",
      "L": 25,
      "W": 20,
      "H": 15,
      "unit": "cm",
      "open": true
    },
    "options": [
      "2350 cm²",
      "1700 cm²",
      "1350 cm²",
      "1850 cm²"
    ],
    "correctIndex": 3,
    "correctValue": 1850,
    "explanation": "Bottom 25×20 = 500. Walls = 2×25×15 + 2×20×15 = 750 + 600 = 1350. Total = 1850 cm²."
  },
  {
    "id": 61,
    "worldIndex": 6,
    "qIndex": 0,
    "rule": "✦ SQUARE BASE + 4 TRIANGLES",
    "prompt": "A glass pyramid monument has a square base of 10 m by 10 m and each triangular face has a slant height of 8 m. Find its total surface area.",
    "hint": "A square pyramid has 1 square base and 4 identical triangles. Area = base squared plus 4 times half base times slant height.",
    "diagramData": {
      "type": "pyramid",
      "b": 10,
      "l": 8,
      "unit": "m"
    },
    "options": [
      "260 m²",
      "160 m²",
      "420 m²",
      "220 m²"
    ],
    "correctIndex": 0,
    "correctValue": 260,
    "explanation": "Base 10² = 100 m². 4 triangles: 4 × (½ × 10 × 8) = 160 m². Total = 100 + 160 = 260 m²."
  },
  {
    "id": 62,
    "worldIndex": 6,
    "qIndex": 1,
    "rule": "✦ SQUARE BASE + 4 TRIANGLES",
    "prompt": "A stone pyramid pavilion has a square base of 6 m by 6 m and a slant height of 5 m. Find its total surface area.",
    "hint": "Base area is 36. Each triangle is half times 6 times 5 equals 15. Multiply 15 by 4 and add 36.",
    "diagramData": {
      "type": "pyramid",
      "b": 6,
      "l": 5,
      "unit": "m"
    },
    "options": [
      "60 m²",
      "96 m²",
      "120 m²",
      "36 m²"
    ],
    "correctIndex": 1,
    "correctValue": 96,
    "explanation": "Base 6² = 36 m². 4 triangles: 4 × (½ × 6 × 5) = 60 m². Total = 36 + 60 = 96 m²."
  },
  {
    "id": 63,
    "worldIndex": 6,
    "qIndex": 2,
    "rule": "✦ SQUARE BASE + 4 TRIANGLES",
    "prompt": "A roof spire pyramid has a square base of 4 m by 4 m and a slant height of 6 m. What is its total surface area?",
    "hint": "Square base gives 16. Four triangles give 4 times 12 equals 48.",
    "diagramData": {
      "type": "pyramid",
      "b": 4,
      "l": 6,
      "unit": "m"
    },
    "options": [
      "64 m²",
      "80 m²",
      "16 m²",
      "48 m²"
    ],
    "correctIndex": 0,
    "correctValue": 64,
    "explanation": "Base 4² = 16 m². 4 triangles: 4 × (½ × 4 × 6) = 48 m². Total = 16 + 48 = 64 m²."
  },
  {
    "id": 64,
    "worldIndex": 6,
    "qIndex": 3,
    "rule": "✦ SQUARE BASE + 4 TRIANGLES",
    "prompt": "A museum pyramid display has a square base of 8 m by 8 m and a slant height of 7 m. Find its total surface area.",
    "hint": "Add the base area 64 to 4 times 28 equals 112 for the triangular sides.",
    "diagramData": {
      "type": "pyramid",
      "b": 8,
      "l": 7,
      "unit": "m"
    },
    "options": [
      "112 m²",
      "224 m²",
      "64 m²",
      "176 m²"
    ],
    "correctIndex": 3,
    "correctValue": 176,
    "explanation": "Base 8² = 64 m². 4 triangles: 4 × (½ × 8 × 7) = 112 m². Total = 64 + 112 = 176 m²."
  },
  {
    "id": 65,
    "worldIndex": 6,
    "qIndex": 4,
    "rule": "✦ SQUARE BASE + 4 TRIANGLES",
    "prompt": "An outdoor shade pyramid has a square base of 12 m by 12 m and a slant height of 10 m. What is its total surface area?",
    "hint": "Base area is 144 square metres. The 4 sloping faces have total area 4 times 60 equals 240.",
    "diagramData": {
      "type": "pyramid",
      "b": 12,
      "l": 10,
      "unit": "m"
    },
    "options": [
      "384 m²",
      "240 m²",
      "144 m²",
      "480 m²"
    ],
    "correctIndex": 0,
    "correctValue": 384,
    "explanation": "Base 12² = 144 m². 4 triangles: 4 × (½ × 12 × 10) = 240 m². Total = 144 + 240 = 384 m²."
  },
  {
    "id": 66,
    "worldIndex": 6,
    "qIndex": 5,
    "rule": "✦ SQUARE BASE + 4 TRIANGLES",
    "prompt": "A pyramid glamping tent has a square floor of 6 m by 6 m and slant height 4 m. Find its total surface area.",
    "hint": "Add the floor area 36 to the four triangles, 4 times 12 equals 48.",
    "diagramData": {
      "type": "pyramid",
      "b": 6,
      "l": 4,
      "unit": "m"
    },
    "options": [
      "48 m²",
      "84 m²",
      "96 m²",
      "36 m²"
    ],
    "correctIndex": 1,
    "correctValue": 84,
    "explanation": "Base 6² = 36 m². 4 triangles: 4 × (½ × 6 × 4) = 48 m². Total = 36 + 48 = 84 m²."
  },
  {
    "id": 67,
    "worldIndex": 6,
    "qIndex": 6,
    "rule": "✦ SQUARE BASE + 4 TRIANGLES",
    "prompt": "A grand pyramid roof has a square base of 14 m by 14 m and slant height 9 m. Find its total surface area.",
    "hint": "Base area is 196. Each triangle is 63. Four triangles give 252. Add 196 and 252.",
    "diagramData": {
      "type": "pyramid",
      "b": 14,
      "l": 9,
      "unit": "m"
    },
    "options": [
      "448 m²",
      "504 m²",
      "196 m²",
      "252 m²"
    ],
    "correctIndex": 0,
    "correctValue": 448,
    "explanation": "Base 14² = 196 m². 4 triangles: 4 × (½ × 14 × 9) = 252 m². Total = 196 + 252 = 448 m²."
  },
  {
    "id": 68,
    "worldIndex": 6,
    "qIndex": 7,
    "rule": "✦ SQUARE BASE + 4 TRIANGLES",
    "prompt": "An entrance canopy pyramid has a square base of 10 m by 10 m and slant height 12 m. Find its total surface area.",
    "hint": "Add base 100 to the four triangles, 4 times 60 equals 240.",
    "diagramData": {
      "type": "pyramid",
      "b": 10,
      "l": 12,
      "unit": "m"
    },
    "options": [
      "240 m²",
      "380 m²",
      "100 m²",
      "340 m²"
    ],
    "correctIndex": 3,
    "correctValue": 340,
    "explanation": "Base 10² = 100 m². 4 triangles: 4 × (½ × 10 × 12) = 240 m². Total = 100 + 240 = 340 m²."
  },
  {
    "id": 69,
    "worldIndex": 6,
    "qIndex": 8,
    "rule": "✦ SQUARE BASE + 4 TRIANGLES",
    "prompt": "A garden pyramid feature has a square base of 8 m by 8 m and slant height 10 m. What is its total surface area?",
    "hint": "Base is 64. Four triangles are 4 times 40 equals 160. Total is 224.",
    "diagramData": {
      "type": "pyramid",
      "b": 8,
      "l": 10,
      "unit": "m"
    },
    "options": [
      "224 m²",
      "160 m²",
      "64 m²",
      "256 m²"
    ],
    "correctIndex": 0,
    "correctValue": 224,
    "explanation": "Base 8² = 64 m². 4 triangles: 4 × (½ × 8 × 10) = 160 m². Total = 64 + 160 = 224 m²."
  },
  {
    "id": 70,
    "worldIndex": 6,
    "qIndex": 9,
    "rule": "✦ SQUARE BASE + 4 TRIANGLES",
    "prompt": "A large civic pyramid has a square base of 16 m by 16 m and slant height 15 m. Find its total surface area.",
    "hint": "Square base gives 256. Four sloping triangles give 4 times 120 equals 480. Sum them up.",
    "diagramData": {
      "type": "pyramid",
      "b": 16,
      "l": 15,
      "unit": "m"
    },
    "options": [
      "480 m²",
      "736 m²",
      "800 m²",
      "256 m²"
    ],
    "correctIndex": 1,
    "correctValue": 736,
    "explanation": "Base 16² = 256 m². 4 triangles: 4 × (½ × 16 × 15) = 480 m². Total = 256 + 480 = 736 m²."
  },
  {
    "id": 71,
    "worldIndex": 7,
    "qIndex": 0,
    "rule": "✦ AREA × COST",
    "prompt": "Leo paints the 4 walls and ceiling of a bedroom 5 m long, 4 m wide and 3 m high (not the floor). Paint costs $3 per m². What is the total cost?",
    "hint": "Area = ceiling 20 plus 4 walls 54 equals 74 square metres. Multiply by $3 per square metre.",
    "diagramData": {
      "type": "cuboid",
      "L": 5,
      "W": 4,
      "H": 3,
      "unit": "m",
      "open": true
    },
    "options": [
      "$222",
      "$240",
      "$180",
      "$282"
    ],
    "correctIndex": 0,
    "correctValue": 222,
    "explanation": "Ceiling 20 + walls (2×5×3 + 2×4×3 = 54) = 74 m². Cost = 74 × $3 = $222."
  },
  {
    "id": 72,
    "worldIndex": 7,
    "qIndex": 1,
    "rule": "✦ ALL 6 FACES",
    "prompt": "A storage container 6 m long, 3 m wide and 2 m high is painted on all 6 outer faces. Find the total surface area to paint.",
    "hint": "All 6 faces need paint. Calculate 2 times the sum of 18, 12, and 6.",
    "diagramData": {
      "type": "cuboid",
      "L": 6,
      "W": 3,
      "H": 2,
      "unit": "m"
    },
    "options": [
      "36 m²",
      "80 m²",
      "54 m²",
      "72 m²"
    ],
    "correctIndex": 3,
    "correctValue": 72,
    "explanation": "2 × (6×3 + 6×2 + 3×2) = 2 × (18 + 12 + 6) = 2 × 36 = 72 m²."
  },
  {
    "id": 73,
    "worldIndex": 7,
    "qIndex": 2,
    "rule": "✦ 4 WALLS ONLY",
    "prompt": "A room is 6 m long, 5 m wide and 3 m high. Find the area of just the 4 vertical walls that need painting.",
    "hint": "The 4 walls equal perimeter times height: 2 times (6 plus 5) times 3.",
    "diagramData": {
      "type": "cuboid",
      "L": 6,
      "W": 5,
      "H": 3,
      "unit": "m",
      "open": true
    },
    "options": [
      "66 m²",
      "96 m²",
      "60 m²",
      "72 m²"
    ],
    "correctIndex": 0,
    "correctValue": 66,
    "explanation": "4 walls = 2×6×3 + 2×5×3 = 36 + 30 = 66 m²."
  },
  {
    "id": 74,
    "worldIndex": 7,
    "qIndex": 3,
    "rule": "✦ 5 SURFACES",
    "prompt": "A cube garden shed has edge length 3 m. Jack paints the 4 exterior walls and the flat roof (5 faces). Find the total painted area.",
    "hint": "Each face is 3 times 3 equals 9 square metres. Multiply by 5 faces.",
    "diagramData": {
      "type": "cuboid",
      "L": 3,
      "W": 3,
      "H": 3,
      "unit": "m",
      "open": true
    },
    "options": [
      "54 m²",
      "45 m²",
      "27 m²",
      "36 m²"
    ],
    "correctIndex": 1,
    "correctValue": 45,
    "explanation": "5 faces = 5 × 3² = 5 × 9 = 45 m²."
  },
  {
    "id": 75,
    "worldIndex": 7,
    "qIndex": 4,
    "rule": "✦ AREA × COST",
    "prompt": "A wooden shipping crate 4 m long, 2 m wide and 2 m high is coated in varnish on all 6 faces. Varnish costs $5 per m². What is the total cost?",
    "hint": "Surface area is 40 square metres. Multiply 40 by the cost of $5 per square metre.",
    "diagramData": {
      "type": "cuboid",
      "L": 4,
      "W": 2,
      "H": 2,
      "unit": "m"
    },
    "options": [
      "$200",
      "$80",
      "$240",
      "$160"
    ],
    "correctIndex": 0,
    "correctValue": 200,
    "explanation": "SA = 2×(8 + 8 + 4) = 40 m². Cost = 40 × $5 = $200."
  },
  {
    "id": 76,
    "worldIndex": 7,
    "qIndex": 5,
    "rule": "✦ CEILING + 4 WALLS",
    "prompt": "A classroom is 8 m long, 6 m wide and 3 m high. Find the total area of the ceiling and the 4 walls to be painted.",
    "hint": "Ceiling is 48. The four walls make 84. Add 48 and 84 together.",
    "diagramData": {
      "type": "cuboid",
      "L": 8,
      "W": 6,
      "H": 3,
      "unit": "m",
      "open": true
    },
    "options": [
      "180 m²",
      "120 m²",
      "84 m²",
      "132 m²"
    ],
    "correctIndex": 3,
    "correctValue": 132,
    "explanation": "Ceiling 8×6 = 48. 4 walls = 2×8×3 + 2×6×3 = 48 + 36 = 84. Total = 48 + 84 = 132 m²."
  },
  {
    "id": 77,
    "worldIndex": 7,
    "qIndex": 6,
    "rule": "✦ AREA × COST",
    "prompt": "A metal cube container with edge length 4 m is spray painted on all 6 faces. Paint costs $4 per m². What is the total cost?",
    "hint": "Surface area is 6 times 16 equals 96 square metres. Multiply 96 by $4.",
    "diagramData": {
      "type": "cuboid",
      "L": 4,
      "W": 4,
      "H": 4,
      "unit": "m"
    },
    "options": [
      "$384",
      "$256",
      "$320",
      "$420"
    ],
    "correctIndex": 0,
    "correctValue": 384,
    "explanation": "SA = 6 × 4² = 6 × 16 = 96 m². Cost = 96 × $4 = $384."
  },
  {
    "id": 78,
    "worldIndex": 7,
    "qIndex": 7,
    "rule": "✦ CEILING + 4 WALLS",
    "prompt": "A long hallway is 10 m long, 3 m wide and 3 m high. Find the area of the 4 walls and ceiling combined (no floor).",
    "hint": "Ceiling is 30. Four walls are 60 plus 18 equals 78. Total is 108 square metres.",
    "diagramData": {
      "type": "cuboid",
      "L": 10,
      "W": 3,
      "H": 3,
      "unit": "m",
      "open": true
    },
    "options": [
      "138 m²",
      "108 m²",
      "96 m²",
      "78 m²"
    ],
    "correctIndex": 1,
    "correctValue": 108,
    "explanation": "Ceiling 10×3 = 30. Walls = 2×10×3 + 2×3×3 = 60 + 18 = 78. Total = 30 + 78 = 108 m²."
  },
  {
    "id": 79,
    "worldIndex": 7,
    "qIndex": 8,
    "rule": "✦ AREA × COST",
    "prompt": "A garden shed 5 m long, 4 m wide and 2 m high is painted all over on all 6 faces. Paint costs $2 per m². How much does it cost?",
    "hint": "Calculate total surface area 76 square metres, then multiply by $2.",
    "diagramData": {
      "type": "cuboid",
      "L": 5,
      "W": 4,
      "H": 2,
      "unit": "m"
    },
    "options": [
      "$152",
      "$160",
      "$120",
      "$76"
    ],
    "correctIndex": 0,
    "correctValue": 152,
    "explanation": "SA = 2×(20 + 10 + 8) = 76 m². Cost = 76 × $2 = $152."
  },
  {
    "id": 80,
    "worldIndex": 7,
    "qIndex": 9,
    "rule": "✦ 4 WALLS ONLY",
    "prompt": "An art gallery room is 12 m long, 8 m wide and 4 m high. Find the area of just the 4 display walls to hang pictures.",
    "hint": "The 4 walls have area equal to perimeter (12 plus 8 plus 12 plus 8) times height 4.",
    "diagramData": {
      "type": "cuboid",
      "L": 12,
      "W": 8,
      "H": 4,
      "unit": "m",
      "open": true
    },
    "options": [
      "256 m²",
      "180 m²",
      "96 m²",
      "160 m²"
    ],
    "correctIndex": 3,
    "correctValue": 160,
    "explanation": "4 walls = 2×12×4 + 2×8×4 = 96 + 64 = 160 m²."
  },
  {
    "id": 81,
    "worldIndex": 8,
    "qIndex": 0,
    "rule": "✦ WORK BACKWARDS",
    "prompt": "A cube package has a total surface area of 150 cm². How long is each edge?",
    "hint": "A cube has 6 equal faces. Divide 150 by 6 to find the area of one face, then take the square root.",
    "diagramData": {
      "type": "cuboid",
      "L": 5,
      "W": 5,
      "H": 5,
      "unit": "cm",
      "unknown": "all",
      "total": 150
    },
    "options": [
      "5 cm",
      "25 cm",
      "6 cm",
      "4 cm"
    ],
    "correctIndex": 0,
    "correctValue": 5,
    "explanation": "One face = 150 ÷ 6 = 25 cm². Edge = √25 = 5 cm."
  },
  {
    "id": 82,
    "worldIndex": 8,
    "qIndex": 1,
    "rule": "✦ WORK BACKWARDS",
    "prompt": "A cube gift box has a total surface area of 294 cm². How long is each edge?",
    "hint": "Divide 294 by 6 to get 49, then find the square root of 49.",
    "diagramData": {
      "type": "cuboid",
      "L": 7,
      "W": 7,
      "H": 7,
      "unit": "cm",
      "unknown": "all",
      "total": 294
    },
    "options": [
      "49 cm",
      "7 cm",
      "6 cm",
      "8 cm"
    ],
    "correctIndex": 1,
    "correctValue": 7,
    "explanation": "One face = 294 ÷ 6 = 49 cm². Edge = √49 = 7 cm."
  },
  {
    "id": 83,
    "worldIndex": 8,
    "qIndex": 2,
    "rule": "✦ WORK BACKWARDS",
    "prompt": "A cube box has a total surface area of 96 cm². How long is each edge?",
    "hint": "Share 96 equally among 6 faces to get 16, then find the square root of 16.",
    "diagramData": {
      "type": "cuboid",
      "L": 4,
      "W": 4,
      "H": 4,
      "unit": "cm",
      "unknown": "all",
      "total": 96
    },
    "options": [
      "4 cm",
      "3 cm",
      "5 cm",
      "16 cm"
    ],
    "correctIndex": 0,
    "correctValue": 4,
    "explanation": "One face = 96 ÷ 6 = 16 cm². Edge = √16 = 4 cm."
  },
  {
    "id": 84,
    "worldIndex": 8,
    "qIndex": 3,
    "rule": "✦ WORK BACKWARDS",
    "prompt": "A cuboid box is 10 cm long and 6 cm wide. Its total surface area is 280 cm². Find its height.",
    "hint": "Half of 280 is 140. Subtract the top face 60 to get 80. Divide 80 by length plus width (16) to find height.",
    "diagramData": {
      "type": "cuboid",
      "L": 10,
      "W": 6,
      "H": 5,
      "unit": "cm",
      "unknown": "H",
      "total": 280
    },
    "options": [
      "6 cm",
      "8 cm",
      "4 cm",
      "5 cm"
    ],
    "correctIndex": 3,
    "correctValue": 5,
    "explanation": "Half SA = 140. 140 − (10×6) = 80. 80 ÷ (10 + 6) = 80 ÷ 16 = 5 cm."
  },
  {
    "id": 85,
    "worldIndex": 8,
    "qIndex": 4,
    "rule": "✦ WORK BACKWARDS",
    "prompt": "A cuboid package is 8 cm long and 5 cm wide. Its total surface area is 262 cm². Find its height.",
    "hint": "Half of 262 is 131. Subtract the base area 40 to get 91. Divide 91 by (8 plus 5 equals 13) to get 7.",
    "diagramData": {
      "type": "cuboid",
      "L": 8,
      "W": 5,
      "H": 7,
      "unit": "cm",
      "unknown": "H",
      "total": 262
    },
    "options": [
      "7 cm",
      "6 cm",
      "8 cm",
      "5 cm"
    ],
    "correctIndex": 0,
    "correctValue": 7,
    "explanation": "Half SA = 131. 131 − (8×5) = 91. 91 ÷ (8 + 5) = 91 ÷ 13 = 7 cm."
  },
  {
    "id": 86,
    "worldIndex": 8,
    "qIndex": 5,
    "rule": "✦ WORK BACKWARDS",
    "prompt": "A closed tin can has radius 7 cm and total surface area 748 cm² (take π = 22/7). Find its height.",
    "hint": "Subtract the two circular lids (308) from 748 to get the curved label (440). Divide 440 by circumference 44.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 10,
      "unit": "cm",
      "unknown": true
    },
    "options": [
      "12 cm",
      "10 cm",
      "14 cm",
      "8 cm"
    ],
    "correctIndex": 1,
    "correctValue": 10,
    "explanation": "Two lids = 308 cm². Curved = 748 − 308 = 440 cm². h = 440 ÷ (2×22/7×7) = 440 ÷ 44 = 10 cm."
  },
  {
    "id": 87,
    "worldIndex": 8,
    "qIndex": 6,
    "rule": "✦ WORK BACKWARDS",
    "prompt": "A cube container has a total surface area of 384 cm². How long is each edge?",
    "hint": "Divide 384 by 6 to find one face area 64, then find the square root of 64.",
    "diagramData": {
      "type": "cuboid",
      "L": 8,
      "W": 8,
      "H": 8,
      "unit": "cm",
      "unknown": "all",
      "total": 384
    },
    "options": [
      "8 cm",
      "7 cm",
      "9 cm",
      "64 cm"
    ],
    "correctIndex": 0,
    "correctValue": 8,
    "explanation": "One face = 384 ÷ 6 = 64 cm². Edge = √64 = 8 cm."
  },
  {
    "id": 88,
    "worldIndex": 8,
    "qIndex": 7,
    "rule": "✦ WORK BACKWARDS",
    "prompt": "A cuboid package is 12 cm long and 5 cm wide. Its total surface area is 392 cm². Find its height.",
    "hint": "Half of 392 is 196. Take away the base face 60 to get 136. Divide 136 by 17 to get 8.",
    "diagramData": {
      "type": "cuboid",
      "L": 12,
      "W": 5,
      "H": 8,
      "unit": "cm",
      "unknown": "H",
      "total": 392
    },
    "options": [
      "7 cm",
      "6 cm",
      "9 cm",
      "8 cm"
    ],
    "correctIndex": 3,
    "correctValue": 8,
    "explanation": "Half SA = 196. 196 − (12×5) = 136. 136 ÷ (12 + 5) = 136 ÷ 17 = 8 cm."
  },
  {
    "id": 89,
    "worldIndex": 8,
    "qIndex": 8,
    "rule": "✦ WORK BACKWARDS",
    "prompt": "A closed tin can has radius 7 cm and total surface area 1012 cm² (take π = 22/7). Find its height.",
    "hint": "Subtract the two lids 308 from 1012 to get 704 for the curved label. Divide 704 by circumference 44.",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 16,
      "unit": "cm",
      "unknown": true
    },
    "options": [
      "16 cm",
      "14 cm",
      "18 cm",
      "12 cm"
    ],
    "correctIndex": 0,
    "correctValue": 16,
    "explanation": "Curved = 1012 − 308 = 704 cm². h = 704 ÷ 44 = 16 cm."
  },
  {
    "id": 90,
    "worldIndex": 8,
    "qIndex": 9,
    "rule": "✦ WORK BACKWARDS",
    "prompt": "A large cube shipping box has a total surface area of 600 cm². How long is each edge?",
    "hint": "Divide 600 by 6 to find one face has area 100, then find the square root of 100.",
    "diagramData": {
      "type": "cuboid",
      "L": 10,
      "W": 10,
      "H": 10,
      "unit": "cm",
      "unknown": "all",
      "total": 600
    },
    "options": [
      "100 cm",
      "10 cm",
      "8 cm",
      "12 cm"
    ],
    "correctIndex": 1,
    "correctValue": 10,
    "explanation": "One face = 600 ÷ 6 = 100 cm². Edge = √100 = 10 cm."
  },
  {
    "id": 91,
    "worldIndex": 9,
    "qIndex": 0,
    "rule": "✦ 4 VERTICAL WALLS",
    "prompt": "A glass tower section is a cuboid 20 m long, 15 m wide and 40 m tall. Find the total surface area of all 4 vertical glass walls.",
    "hint": "The 4 vertical glass walls equal perimeter (20 plus 15 plus 20 plus 15) times height 40.",
    "diagramData": {
      "type": "cuboid",
      "L": 20,
      "W": 15,
      "H": 40,
      "unit": "m",
      "open": true
    },
    "options": [
      "2800 m²",
      "2600 m²",
      "2400 m²",
      "3400 m²"
    ],
    "correctIndex": 0,
    "correctValue": 2800,
    "explanation": "4 walls = 2×(20×40) + 2×(15×40) = 1600 + 1200 = 2800 m²."
  },
  {
    "id": 92,
    "worldIndex": 9,
    "qIndex": 1,
    "rule": "✦ 5 EXTERIOR SURFACES",
    "prompt": "A modern penthouse cube on top of a skyscraper has edge length 10 m. Find the exterior surface area of the roof and the 4 walls (5 faces).",
    "hint": "The floor sits on the building, so calculate only 5 faces: 5 times 10 squared.",
    "diagramData": {
      "type": "cuboid",
      "L": 10,
      "W": 10,
      "H": 10,
      "unit": "m",
      "open": true
    },
    "options": [
      "600 m²",
      "300 m²",
      "400 m²",
      "500 m²"
    ],
    "correctIndex": 3,
    "correctValue": 500,
    "explanation": "5 faces = 5 × 10² = 5 × 100 = 500 m²."
  },
  {
    "id": 93,
    "worldIndex": 9,
    "qIndex": 2,
    "rule": "✦ CIRCLES + CURVED SIDE",
    "prompt": "A cylindrical water tower atop a building has radius 7 m and height 15 m (take π = 22/7). Find its total exterior surface area.",
    "hint": "Add the two circular ends (308) to the curved surface (2 pi r h equals 660).",
    "diagramData": {
      "type": "cylinder",
      "r": 7,
      "h": 15,
      "unit": "m"
    },
    "options": [
      "968 m²",
      "660 m²",
      "308 m²",
      "850 m²"
    ],
    "correctIndex": 0,
    "correctValue": 968,
    "explanation": "2πr² + 2πrh = 308 + 44 × 15 = 308 + 660 = 968 m²."
  },
  {
    "id": 94,
    "worldIndex": 9,
    "qIndex": 3,
    "rule": "✦ ALL 6 FACES",
    "prompt": "A grand skyscraper entrance lobby is a cuboid 30 m long, 20 m wide and 10 m tall. Find its total surface area of all 6 faces.",
    "hint": "Add the three face pairs: 30 by 20, 30 by 10, and 20 by 10. Double the total.",
    "diagramData": {
      "type": "cuboid",
      "L": 30,
      "W": 20,
      "H": 10,
      "unit": "m"
    },
    "options": [
      "6000 m²",
      "2200 m²",
      "2400 m²",
      "1100 m²"
    ],
    "correctIndex": 1,
    "correctValue": 2200,
    "explanation": "2 × (30×20 + 30×10 + 20×10) = 2 × (600 + 300 + 200) = 2 × 1100 = 2200 m²."
  },
  {
    "id": 95,
    "worldIndex": 9,
    "qIndex": 4,
    "rule": "✦ 4 SLOPING TRIANGLES",
    "prompt": "A decorative glass pyramid crowns a skyscraper. The square base is 20 m by 20 m and slant height is 15 m. Glass covers only the 4 sloping faces. Find the glass area.",
    "hint": "Calculate the area of the 4 triangular sloping faces only (exclude the base): 4 times half times 20 times 15.",
    "diagramData": {
      "type": "pyramid",
      "b": 20,
      "l": 15,
      "unit": "m"
    },
    "options": [
      "600 m²",
      "800 m²",
      "400 m²",
      "1000 m²"
    ],
    "correctIndex": 0,
    "correctValue": 600,
    "explanation": "4 sloping faces = 4 × (½ × 20 × 15) = 4 × 150 = 600 m²."
  },
  {
    "id": 96,
    "worldIndex": 9,
    "qIndex": 5,
    "rule": "✦ CURVED SURFACE ONLY",
    "prompt": "An observation deck is a cylinder with radius 14 m and height 25 m (take π = 22/7). Find the curved glass wall area only.",
    "hint": "The curved wall is circumference times height: 2 pi r times h equals 88 times 25.",
    "diagramData": {
      "type": "cylinder",
      "r": 14,
      "h": 25,
      "unit": "m",
      "labelOnly": true
    },
    "options": [
      "3432 m²",
      "2000 m²",
      "1232 m²",
      "2200 m²"
    ],
    "correctIndex": 3,
    "correctValue": 2200,
    "explanation": "Curved wall = 2πrh = 2 × (22/7) × 14 × 25 = 88 × 25 = 2200 m²."
  },
  {
    "id": 97,
    "worldIndex": 9,
    "qIndex": 6,
    "rule": "✦ PRISM: ENDS + SIDES",
    "prompt": "A skybridge between two skyscrapers is a triangular prism 25 m long. Each triangle end has base 6 m, height 4 m, and sloping sides of 5 m. Find its total surface area.",
    "hint": "Add the two triangle ends (24 square metres) to the perimeter times length (16 times 25 equals 400).",
    "diagramData": {
      "type": "prism",
      "a": 6,
      "b": 4,
      "c": 5,
      "L": 25,
      "unit": "m"
    },
    "options": [
      "424 m²",
      "400 m²",
      "360 m²",
      "450 m²"
    ],
    "correctIndex": 0,
    "correctValue": 424,
    "explanation": "Ends: 2 × (½ × 6 × 4) = 24 m². Sides: (5 + 5 + 6) × 25 = 16 × 25 = 400 m². Total = 24 + 400 = 424 m²."
  },
  {
    "id": 98,
    "worldIndex": 9,
    "qIndex": 7,
    "rule": "✦ 4 EXTERIOR WALLS",
    "prompt": "A main tower block is 25 m long, 12 m wide and 50 m high. Find the total area of the 4 exterior walls.",
    "hint": "The 4 exterior walls have area perimeter (25 plus 12 plus 25 plus 12) times height 50.",
    "diagramData": {
      "type": "cuboid",
      "L": 25,
      "W": 12,
      "H": 50,
      "unit": "m",
      "open": true
    },
    "options": [
      "4300 m²",
      "3700 m²",
      "3500 m²",
      "3100 m²"
    ],
    "correctIndex": 1,
    "correctValue": 3700,
    "explanation": "4 walls = 2×(25×50) + 2×(12×50) = 2500 + 1200 = 3700 m²."
  },
  {
    "id": 99,
    "worldIndex": 9,
    "qIndex": 8,
    "rule": "✦ 5 SURFACES",
    "prompt": "An elevator machinery housing cube on the roof has edge length 6 m. Find the exterior surface area of its top and 4 sides (5 faces).",
    "hint": "The bottom is attached to the roof. Multiply 5 faces by 6 squared.",
    "diagramData": {
      "type": "cuboid",
      "L": 6,
      "W": 6,
      "H": 6,
      "unit": "m",
      "open": true
    },
    "options": [
      "180 m²",
      "120 m²",
      "144 m²",
      "216 m²"
    ],
    "correctIndex": 0,
    "correctValue": 180,
    "explanation": "5 faces = 5 × 6² = 5 × 36 = 180 m²."
  },
  {
    "id": 100,
    "worldIndex": 9,
    "qIndex": 9,
    "rule": "✦ ALL 6 FACES",
    "prompt": "A summit corporate headquarters is a cuboid 40 m long, 25 m wide and 30 m high. Find its total surface area of all 6 faces.",
    "hint": "Add the three matching face pairs: 40 times 25, 40 times 30, and 25 times 30. Double the sum to find the total surface area.",
    "diagramData": {
      "type": "cuboid",
      "L": 40,
      "W": 25,
      "H": 30,
      "unit": "m"
    },
    "options": [
      "30000 m²",
      "5400 m²",
      "2950 m²",
      "5900 m²"
    ],
    "correctIndex": 3,
    "correctValue": 5900,
    "explanation": "2 × (40×25 + 40×30 + 25×30) = 2 × (1000 + 1200 + 750) = 2 × 2950 = 5900 m²."
  }
];

export function getPracticeQuestion(worldIndex, qIndex) {
  const found = PRACTICE_QUESTIONS.find(q => q.worldIndex === worldIndex && q.qIndex === qIndex);
  return found || PRACTICE_QUESTIONS[0];
}
