# Surface Area Quest — Grade 8 Mathematics

An interactive, gamified 5-phase mathematics learning experience designed for Grade 8 students exploring **Surface Area** of 3D solids (cubes, cuboids, triangular prisms, cylinders, and square-based pyramids).

## 🚀 Features

- **Phase 1: Wonder & Curiosity** — Real-world packaging exploration with Zoe's gift box.
- **Phase 2: Story** — Narrative-driven conceptual journey with high-quality anime illustrations explaining nets, face pairs, prisms, and cylinders.
- **Phase 3: Simulation Lab** — 3 interactive simulation stations:
  - *Station 1: Net Unfolder* — Unfold 3D solids into 2D nets in real-time.
  - *Station 2: Paint Shop* — Select only the faces that need material (e.g. open tanks, rooms).
  - *Station 3: Reverse Packager* — Work backwards from total surface area to missing dimensions.
- **Phase 4: Practice Worlds** — 10 themed worlds containing **100 distinct curated questions** with pedagogical hints, detailed explanations, and 3D isometric diagrams.
- **Phase 5: Reflect & Scoreboard** — Reflection prompt with XP tracking, streak counter, and stars.
- **Audio & Narration Pipeline** — ElevenLabs voice narration with proper mathematical pronunciation and audio overlap prevention.

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS**
- **Canvas Confetti**
- **ElevenLabs API** (Voice: Alice)

## 📦 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment (optional)
```bash
cp .env.example .env.local
# Add your VITE_ELEVENLABS_API_KEY in .env.local if generating new audio
```

### 3. Run development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```
