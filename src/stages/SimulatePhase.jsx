import React, { useState, useEffect, useRef } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { narrate, stopNarration } from '../utils/audio.js';
import {
  simulateStationIntro,
  simulateActivityGuidance,
  simulateActivityHint,
  feedbackNarration
} from '../utils/narration.js';
import { iso, makeFit, lerpPt, ptsAttr, centroid, cuboidFaces, prismFaces } from '../components/iso.js';

/* =========================================================================
   SIMULATION STATIONS — Surface Area (Grade 8)
   Station 1 · Net Unfolder      → SEE a solid unfold into its net, add faces
   Station 2 · Paint Shop        → TRY it: choose the right faces, calculate
   Station 3 · Reverse Packager  → WORK BACKWARDS from SA to a missing size
   ========================================================================= */

const fmt = n => (Number.isInteger(n) ? String(n) : String(Number(n.toFixed(2))));
const close = (a, b) => Math.abs(a - b) < 0.011;

const PAIR_COLORS = {
  top: '#facc15', bottom: '#facc15', front: '#f472b6', back: '#f472b6', left: '#38bdf8', right: '#38bdf8',
  endA: '#facc15', endB: '#facc15', slantA: '#f472b6', slantB: '#f472b6', base: '#38bdf8'
};

/* ------------------------------------------------------------------------
   STATION DATA
   ------------------------------------------------------------------------ */
const STATION_ACTIVITIES = {
  1: [
    {
      id: 1,
      title: "Activity 1: Giant Dice",
      desc: "Zoe is covering a giant dice (a cube with 4 cm edges) in shiny paper. Unfold it into a net, tap every face to reveal its area, then add them up!",
      icon: "🎲",
      unit: "cm",
      solid: 'cuboid',
      dims: { L: 4, W: 4, H: 4 },
      hint: "All 6 faces are 4 × 4 squares. Surface area = 6 × 16."
    },
    {
      id: 2,
      title: "Activity 2: Cereal Box",
      desc: "A cereal box is 20 cm long, 6 cm wide and 30 cm tall. Unfold the box, reveal each face and find how much cardboard it uses!",
      icon: "🥣",
      unit: "cm",
      solid: 'cuboid',
      dims: { L: 20, W: 6, H: 30 },
      hint: "Opposite faces are twins: 2 × (20 × 6) + 2 × (20 × 30) + 2 × (6 × 30)."
    },
    {
      id: 3,
      title: "Activity 3: Chocolate Prism Box",
      desc: "A chocolate box is a triangular prism 20 cm long. Each triangle end has base 6 cm, height 4 cm and sloping sides of 5 cm. Unfold it and add the faces!",
      icon: "🍫",
      unit: "cm",
      solid: 'prism',
      dims: { L: 20, b: 6, h: 4, s: 5 },
      hint: "2 triangles: 2 × ½ × 6 × 4. 3 rectangles: (5 + 5 + 6) × 20."
    }
  ],
  2: [
    {
      id: 1,
      title: "Activity 1: Open-Top Fish Tank",
      desc: "Mia's fish tank is 50 cm long, 30 cm wide and 40 cm tall. It has NO lid. Tap the faces that need glass, then find the total area of glass.",
      icon: "🐠",
      unit: "cm",
      solid: 'cuboid',
      dims: { L: 50, W: 30, H: 40 },
      need: ['bottom', 'front', 'back', 'left', 'right'],
      why: "A fish tank has glass on the bottom and all 4 sides — but no lid on top!",
      groups: [
        { label: 'Bottom', formula: '50 × 30', answer: 1500 },
        { label: 'Front + Back', formula: '2 × 50 × 40', answer: 4000 },
        { label: 'Left + Right', formula: '2 × 30 × 40', answer: 2400 }
      ],
      hint: "Leave out the top face. Bottom + 2 long sides + 2 short sides."
    },
    {
      id: 2,
      title: "Activity 2: Painting a Bedroom",
      desc: "Leo's bedroom is 5 m long, 4 m wide and 3 m high. He paints the 4 walls and the ceiling, but NOT the floor. Tap the faces to paint, then find the area.",
      icon: "🎨",
      unit: "m",
      solid: 'cuboid',
      dims: { L: 5, W: 4, H: 3 },
      need: ['top', 'front', 'back', 'left', 'right'],
      why: "Paint the ceiling (top) and the 4 walls — the floor stays unpainted!",
      groups: [
        { label: 'Ceiling', formula: '5 × 4', answer: 20 },
        { label: 'Long walls', formula: '2 × 5 × 3', answer: 30 },
        { label: 'Short walls', formula: '2 × 4 × 3', answer: 24 }
      ],
      hint: "Leave out the floor (bottom). Ceiling + 2 long walls + 2 short walls."
    },
    {
      id: 3,
      title: "Activity 3: Pencil Holder Tin",
      desc: "A pencil holder is a cylinder with radius 7 cm and height 10 cm, open at the top. Tap the surfaces that need metal, then find the total area (π = 22/7).",
      icon: "✏️",
      unit: "cm",
      solid: 'cylinder',
      dims: { r: 7, h: 10 },
      need: ['bottom', 'curved'],
      why: "Pencils go in through the top — so only the base and the curved side need metal!",
      groups: [
        { label: 'Base circle', formula: '22/7 × 7 × 7', answer: 154 },
        { label: 'Curved surface', formula: '2 × 22/7 × 7 × 10', answer: 440 }
      ],
      hint: "Base = πr². Curved surface = 2πr × h. No lid!"
    }
  ],
  3: [
    {
      id: 1,
      title: "Activity 1: Mystery Puzzle Cube",
      desc: "A puzzle cube has a total surface area of 294 cm². How long is each edge?",
      icon: "🧊",
      unit: "cm",
      solid: 'cuboid',
      known: { L: 7, W: 7, H: 7 },
      unknownKey: 'all',
      start: 4,
      steps: [
        { text: "Area of one face = 294 ÷ 6 =", answer: 49, unit: "cm²" },
        { text: "Edge s = √49 =", answer: 7, unit: "cm" }
      ],
      hint: "A cube has 6 equal faces. Share 294 equally, then find the square root."
    },
    {
      id: 2,
      title: "Activity 2: Shoebox Height",
      desc: "A shoebox is 30 cm long and 18 cm wide. Its total surface area is 2232 cm². How tall is the box?",
      icon: "👟",
      unit: "cm",
      solid: 'cuboid',
      known: { L: 30, W: 18, H: 12 },
      unknownKey: 'H',
      start: 5,
      steps: [
        { text: "Half of 2232 (one of each pair) =", answer: 1116, unit: "cm²" },
        { text: "Top face = 30 × 18 =", answer: 540, unit: "cm²" },
        { text: "Sides: (30 + 18) × h = 1116 − 540 =", answer: 576, unit: "cm²" },
        { text: "h = 576 ÷ 48 =", answer: 12, unit: "cm" }
      ],
      hint: "lw + lh + wh = 1116. The two side faces share h: lh + wh = (l + w) × h = 48h."
    },
    {
      id: 3,
      title: "Activity 3: Paint Tin Height",
      desc: "A paint tin has radius 7 cm and a total surface area of 748 cm². How tall is the tin? (π = 22/7)",
      icon: "🥫",
      unit: "cm",
      solid: 'cylinder',
      known: { r: 7, h: 10 },
      unknownKey: 'h',
      start: 4,
      steps: [
        { text: "Two lids = 2 × 22/7 × 7 × 7 =", answer: 308, unit: "cm²" },
        { text: "Curved surface = 748 − 308 =", answer: 440, unit: "cm²" },
        { text: "Circumference 2πr = 2 × 22/7 × 7 =", answer: 44, unit: "cm" },
        { text: "h = 440 ÷ 44 =", answer: 10, unit: "cm" }
      ],
      hint: "Take away the two circles first. What's left is the label: circumference × height."
    }
  ]
};

const facesFor = act =>
  act.solid === 'prism'
    ? prismFaces(act.dims.L, act.dims.b, act.dims.h, act.dims.s)
    : cuboidFaces(act.dims.L, act.dims.W, act.dims.H);

const faceDims = (f, unit) => (f.kind === 'tri' ? `½ × ${f.a} × ${f.b}` : `${f.a} × ${f.b}`);

/* ------------------------------------------------------------------------
   STATION 1 — UNFOLDING NET CANVAS
   ------------------------------------------------------------------------ */
function UnfoldCanvas({ act, t, revealed, onReveal }) {
  const VW = 400, VH = 300;
  const faces = facesFor(act);
  const fit3 = makeFit(faces.flatMap(f => f.p3.map(iso)), VW, VH, 40);
  const fitN = makeFit(faces.flatMap(f => f.net), VW, VH, 26);
  const order = t < 0.5 ? [...faces].sort((a, b) => Number(a.visible) - Number(b.visible)) : faces;
  const done = t >= 0.98;

  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full h-full drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
      <defs>
        <pattern id="s1grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0H0V16" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width={VW} height={VH} fill="url(#s1grid)" rx="14" />
      {order.map(f => {
        const pts = f.p3.map((p, i) => lerpPt(fit3(iso(p)), fitN(f.net[i]), t));
        const c = PAIR_COLORS[f.key];
        const hidden = !f.visible;
        const fillOp = revealed[f.key] ? 0.55 : hidden ? 0.08 + 0.27 * t : 0.32;
        const [cx, cy] = centroid(pts);
        return (
          <g key={f.key} onClick={() => done && onReveal(f.key)} className={done ? 'cursor-pointer' : ''}>
            <polygon
              points={ptsAttr(pts)}
              fill={c}
              fillOpacity={fillOp}
              stroke={c}
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeDasharray={hidden && t < 0.35 ? '6 5' : 'none'}
            />
            {done && (
              <>
                <text x={cx} y={cy - 7} fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle" dominantBaseline="middle">{f.name}</text>
                <text x={cx} y={cy + 8} fill={revealed[f.key] ? '#fde047' : '#e2e8f0'} fontSize="11" fontWeight="900" textAnchor="middle" dominantBaseline="middle">
                  {revealed[f.key] ? `${fmt(f.area)} ${act.unit}²` : 'tap'}
                </text>
              </>
            )}
          </g>
        );
      })}
      {t < 0.02 && (
        <text x={VW / 2} y={VH - 14} fill="rgba(255,255,255,0.6)" fontSize="13" fontWeight="900" textAnchor="middle">Dashed faces are hidden at the back</text>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------------
   CYLINDER DRAWING (shared by stations 2 & 3)
   ------------------------------------------------------------------------ */
function Cylinder({ r, h, VW = 400, VH = 300, sel = {}, onToggle, label, wrapped }) {
  const scale = Math.min(150 / r, 200 / (h + r * 0.7));
  const rx = r * scale, ry = rx * 0.32, hp = h * scale;
  const cx = VW / 2, top = (VH - hp) / 2, bot = top + hp;
  const gold = '#facc15';
  const fillOf = k => (wrapped ? gold : sel[k] ? gold : 'transparent');
  const opOf = k => (wrapped || sel[k] ? 0.4 : 0);
  const click = k => onToggle && onToggle(k);
  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full h-full drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
      {/* bottom ellipse */}
      <ellipse cx={cx} cy={bot} rx={rx} ry={ry} fill={fillOf('bottom')} fillOpacity={opOf('bottom')} stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 5" onClick={() => click('bottom')} className={onToggle ? 'cursor-pointer' : ''} />
      {/* curved surface */}
      <path
        d={`M${cx - rx} ${top} L${cx - rx} ${bot} A${rx} ${ry} 0 0 0 ${cx + rx} ${bot} L${cx + rx} ${top} A${rx} ${ry} 0 0 1 ${cx - rx} ${top} Z`}
        fill={wrapped || sel.curved ? '#f472b6' : 'rgba(244,114,182,0.08)'}
        fillOpacity={wrapped || sel.curved ? 0.4 : 1}
        stroke="#f472b6" strokeWidth="3"
        onClick={() => click('curved')} className={onToggle ? 'cursor-pointer' : ''}
      />
      <path d={`M${cx - rx} ${bot} A${rx} ${ry} 0 0 0 ${cx + rx} ${bot}`} fill="none" stroke="#38bdf8" strokeWidth="3" />
      {/* top ellipse */}
      <ellipse cx={cx} cy={top} rx={rx} ry={ry} fill={fillOf('top')} fillOpacity={wrapped || sel.top ? 0.45 : 0.06} stroke="#facc15" strokeWidth="3" onClick={() => click('top')} className={onToggle ? 'cursor-pointer' : ''} />
      <line x1={cx} y1={top} x2={cx + rx} y2={top} stroke="#ffffff" strokeWidth="2.5" />
      <circle cx={cx} cy={top} r="3" fill="#fff" />
      <text x={cx + rx / 2} y={top - 8} fill="#fde047" fontSize="14" fontWeight="900" textAnchor="middle">r = {r}</text>
      <line x1={cx + rx + 14} y1={top} x2={cx + rx + 14} y2={bot} stroke="#e2e8f0" strokeWidth="2" />
      <text x={cx + rx + 22} y={(top + bot) / 2} fill="#e2e8f0" fontSize="14" fontWeight="900" dominantBaseline="middle">{label || `h = ${h}`}</text>
    </svg>
  );
}

/* ------------------------------------------------------------------------
   CUBOID "GLASS" DRAWING (stations 2 & 3)
   ------------------------------------------------------------------------ */
function GlassCuboid({ L, W, H, sel = {}, onToggle, labels, wrapped, VW = 400, VH = 300 }) {
  const faces = cuboidFaces(L, W, H);
  const fit = makeFit(faces.flatMap(f => f.p3.map(iso)), VW, VH, 44);
  const P = p => fit(iso(p));
  const order = [...faces].sort((a, b) => Number(a.visible) - Number(b.visible));
  const mid = (a, b) => { const p = P(a), q = P(b); return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]; };
  const lb = labels || { L: `${L}`, W: `${W}`, H: `${H}` };
  const pL = mid([0, W, 0], [L, W, 0]);
  const pW = mid([L, W, 0], [L, 0, 0]);
  const pH = mid([L, 0, 0], [L, 0, H]);
  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full h-full drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
      {order.map(f => {
        const on = wrapped || sel[f.key];
        const c = PAIR_COLORS[f.key];
        return (
          <polygon
            key={f.key}
            points={ptsAttr(f.p3.map(P))}
            fill={on ? c : '#38bdf8'}
            fillOpacity={on ? (f.visible ? 0.5 : 0.3) : 0.05}
            stroke={on ? c : '#94a3b8'}
            strokeWidth={f.visible ? 2.5 : 1.8}
            strokeDasharray={f.visible ? 'none' : '6 5'}
            strokeLinejoin="round"
            onClick={() => onToggle && f.visible && onToggle(f.key)}
            className={onToggle && f.visible ? 'cursor-pointer' : ''}
          />
        );
      })}
      <text x={pL[0] - 8} y={pL[1] + 20} fill="#fde047" fontSize="14" fontWeight="900" textAnchor="middle">{lb.L}</text>
      <text x={pW[0] + 18} y={pW[1] + 16} fill="#fde047" fontSize="14" fontWeight="900" textAnchor="middle">{lb.W}</text>
      <text x={pH[0] + 10} y={pH[1]} fill="#fde047" fontSize="14" fontWeight="900" dominantBaseline="middle">{lb.H}</text>
    </svg>
  );
}

/* ------------------------------------------------------------------------
   MAIN COMPONENT
   ------------------------------------------------------------------------ */
export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Station 1
  const [unfold, setUnfold] = useState(0);
  const [revealed, setRevealed] = useState({});
  const [totalAns, setTotalAns] = useState('');
  const animRef = useRef(null);

  // Station 2
  const [sel, setSel] = useState({});
  const [selOk, setSelOk] = useState(false);
  const [groupAns, setGroupAns] = useState({});
  const [groupOk, setGroupOk] = useState({});

  // Station 3
  const [stepIdx, setStepIdx] = useState(0);
  const [stepAns, setStepAns] = useState('');
  const [stepWrong, setStepWrong] = useState(false);
  const [grow, setGrow] = useState(0); // 0 = placeholder size, 1 = true size

  const currentActivity = STATION_ACTIVITIES[station][actIdx];
  const say = list => narrate(list, !muted);

  useEffect(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setShowHint(false);
    setFeedback(null);
    setUnfold(0);
    setRevealed({});
    setTotalAns('');
    setSel({});
    setSelOk(false);
    setGroupAns({});
    setGroupOk({});
    setStepIdx(0);
    setStepAns('');
    setStepWrong(false);
    setGrow(0);
  }, [station, actIdx]);

  useEffect(() => {
    stopNarration();
    const introSegs = actIdx === 0 ? simulateStationIntro(station) : [];
    const guidanceSegs = simulateActivityGuidance(station, actIdx);
    narrate([...introSegs, ...guidanceSegs], !muted);

    return () => {
      stopNarration();
    };
  }, [station, actIdx, muted]);

  const animate = (from, to, setter, ms = 900) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const start = performance.now();
    const step = now => {
      const k = Math.min(1, (now - start) / ms);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      setter(from + (to - from) * e);
      if (k < 1) animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
  };

  /* ---------- Station 1 ---------- */
  const s1Faces = station === 1 ? facesFor(currentActivity) : [];
  const s1Total = s1Faces.reduce((a, f) => a + f.area, 0);
  const unfolded = unfold >= 0.98;
  const nRevealed = Object.keys(revealed).length;

  const checkNet = () => {
    if (close(parseFloat(totalAns), s1Total)) {
      setRevealed(Object.fromEntries(s1Faces.map(f => [f.key, true])));
      setFeedback({ success: true, text: `🎉 ${s1Faces.map(f => fmt(f.area)).join(' + ')} = ${fmt(s1Total)} ${currentActivity.unit}². That's the surface area!` });
      say(feedbackNarration.splitDone());
    } else {
      setFeedback({ success: false, text: `Not quite! Make sure you add ALL ${s1Faces.length} faces — tap each one to reveal its area.` });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 2 ---------- */
  const s2Keys = currentActivity.solid === 'cylinder' ? ['top', 'bottom', 'curved'] : ['top', 'bottom', 'front', 'back', 'left', 'right'];
  const s2Names = { top: currentActivity.solid === 'cylinder' ? 'Top circle' : 'Top', bottom: currentActivity.solid === 'cylinder' ? 'Bottom circle' : 'Bottom', front: 'Front', back: 'Back', left: 'Left', right: 'Right', curved: 'Curved side' };
  const toggleFace = k => {
    if (selOk) return;
    setSel(s => ({ ...s, [k]: !s[k] }));
    setFeedback(null);
  };
  const checkSelection = () => {
    const chosen = s2Keys.filter(k => sel[k]).sort().join();
    const need = [...currentActivity.need].sort().join();
    if (chosen === need) {
      setSelOk(true);
      setFeedback({ success: true, text: `✅ Correct faces! ${currentActivity.why}` });
    } else {
      setFeedback({ success: false, text: `🤔 Not quite — ${currentActivity.why}` });
      say(feedbackNarration.tryAgain());
    }
  };
  const s2Total = station === 2 ? currentActivity.groups.reduce((a, g) => a + g.answer, 0) : 0;
  const checkAreas = () => {
    const ok = {};
    currentActivity.groups.forEach((g, i) => { ok[i] = close(parseFloat(groupAns[i]), g.answer); });
    ok.total = close(parseFloat(groupAns.total), s2Total);
    setGroupOk(ok);
    if (Object.values(ok).every(Boolean)) {
      setFeedback({ success: true, text: `🎉 ${currentActivity.groups.map(g => g.answer).join(' + ')} = ${s2Total} ${currentActivity.unit}². Job done!` });
      say(feedbackNarration.buildDone());
    } else {
      setFeedback({ success: false, text: "Some boxes are red — check those calculations again!" });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 3 ---------- */
  const s3Done = station === 3 && stepIdx >= currentActivity.steps.length;
  const checkStep = () => {
    const st = currentActivity.steps[stepIdx];
    if (close(parseFloat(stepAns), st.answer)) {
      const next = stepIdx + 1;
      setStepIdx(next);
      setStepAns('');
      setStepWrong(false);
      if (next >= currentActivity.steps.length) {
        animate(0, 1, setGrow, 1100);
        setFeedback({ success: true, text: `🎉 Solved! The missing measurement is ${st.answer} ${st.unit}. Watch the solid snap to its real size!` });
        say(feedbackNarration.reverseDone());
      } else {
        setFeedback(null);
      }
    } else {
      setStepWrong(true);
      setFeedback({ success: false, text: "Not quite — check this step. Use the 💡 Hint if you're stuck!" });
      say(feedbackNarration.tryAgain());
    }
  };

  const s3Visual = () => {
    const a = currentActivity;
    const lerp = (p, q) => p + (q - p) * grow;
    const ans = a.steps[a.steps.length - 1].answer;
    if (a.solid === 'cylinder') {
      const hNow = lerp(a.start, a.known.h);
      return <Cylinder r={a.known.r} h={hNow} label={s3Done && grow > 0.95 ? `h = ${ans}` : 'h = ?'} wrapped={s3Done && grow > 0.95} />;
    }
    if (a.unknownKey === 'all') {
      const s = lerp(a.start, a.known.L);
      const lb = s3Done && grow > 0.95 ? `${ans} cm` : '?';
      return <GlassCuboid L={s} W={s} H={s} labels={{ L: lb, W: lb, H: lb }} wrapped={s3Done && grow > 0.95} />;
    }
    const hNow = lerp(a.start, a.known.H);
    return (
      <GlassCuboid
        L={a.known.L} W={a.known.W} H={hNow}
        labels={{ L: `${a.known.L} cm`, W: `${a.known.W} cm`, H: s3Done && grow > 0.95 ? `${ans} cm` : 'h = ?' }}
        wrapped={s3Done && grow > 0.95}
      />
    );
  };

  /* ---------- Navigation ---------- */
  const nextActivity = () => {
    if (actIdx < 2) {
      setActIdx(i => i + 1);
    } else if (station < 3) {
      setStation(s => s + 1);
      setActIdx(0);
    } else {
      onNext();
    }
  };

  const prevActivity = () => {
    if (actIdx > 0) {
      setActIdx(i => i - 1);
    } else if (station > 1) {
      setStation(s => s - 1);
      setActIdx(2);
    }
  };

  const STATIONS = [
    { n: 1, icon: '📦', name: 'Station 1: Net Unfolder', sub: 'Unfold solids & add faces' },
    { n: 2, icon: '🎨', name: 'Station 2: Paint Shop', sub: 'Pick the faces & calculate' },
    { n: 3, icon: '🧭', name: 'Station 3: Reverse Packager', sub: 'Find the missing size' }
  ];

  const inputCls = ok =>
    `bg-[#14082c] border-2 rounded-xl px-3 py-2 text-white font-display font-900 text-base text-center outline-none w-24 shadow-inner ${
      ok === true ? 'border-emerald-400' : ok === false ? 'border-rose-400' : 'border-cyan-400/70 focus:border-amber-400'
    }`;

  const handleToggleHint = () => {
    setShowHint(h => {
      const next = !h;
      if (next) {
        stopNarration();
        narrate(simulateActivityHint(station, actIdx), !muted);
      } else {
        stopNarration();
      }
      return next;
    });
  };

  const hintBtn = (
    <button
      onClick={handleToggleHint}
      className={`border font-display font-900 text-xs px-3 py-2 rounded-xl transition cursor-pointer ${
        showHint
          ? 'bg-amber-400 text-slate-950 border-amber-300'
          : 'bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200'
      }`}
    >
      💡 Hint
    </button>
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Simulation Stations Glass Card Container */}
      <div className="w-full max-w-6xl max-h-[94vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Cyan Accent Bar */}
        <div className="w-24 h-2 bg-cyan-400 rounded-full mb-2.5 shadow-[0_0_18px_rgba(56,189,248,0.85)] shrink-0" />

        {/* Card Header Title */}
        <h2 className="font-display font-900 text-2xl sm:text-3xl text-white flex items-center gap-3 mb-3.5 shrink-0">
          <span className="text-3xl sm:text-4xl">🧪</span>
          <span>Simulation Stations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-3 shrink-0">
            <div className="flex flex-col gap-3.5">
              {STATIONS.map(s => (
                <button
                  key={s.n}
                  onClick={() => {
                    setStation(s.n);
                    setActIdx(0);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    station === s.n
                      ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]'
                      : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${
                      station === s.n ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'
                    }`}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-display font-900 text-base sm:text-lg leading-tight">{s.name}</p>
                      <p className="text-xs font-extrabold text-slate-300 mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                  <span className="text-base">🔓</span>
                </button>
              ))}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={onNext}
              className="btn-gold font-display font-900 text-base sm:text-lg py-4 px-6 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:scale-105 transition mt-2 w-full flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Simulation Box */}
          <div className="md:col-span-8 bg-[#13092e]/95 border-2 border-purple-400/35 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0 gap-3">
                <h3 className="font-display font-900 text-xl sm:text-2xl text-cyan-300 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{currentActivity.icon}</span>
                  <span>{currentActivity.title}</span>
                </h3>
                <span className="font-display font-900 text-xs sm:text-sm text-slate-200 bg-white/10 px-4 py-1 rounded-full border border-white/15 shrink-0">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              {/* Activity Description */}
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-extrabold mb-3 shrink-0">
                {currentActivity.desc}
              </p>

              {/* ===================== STATION 1: NET UNFOLDER ===================== */}
              {station === 1 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex items-center justify-center">
                    <UnfoldCanvas act={currentActivity} t={unfold} revealed={revealed} onReveal={k => setRevealed(r => ({ ...r, [k]: true }))} />
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-2.5 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Unfold the solid</p>
                    <div className="flex items-center gap-2 bg-[#14082c] px-3 py-2 rounded-xl border border-cyan-400/30">
                      <span className="text-sm">📦</span>
                      <input
                        type="range" min="0" max="100" value={Math.round(unfold * 100)}
                        onChange={e => setUnfold(Number(e.target.value) / 100)}
                        className="flex-1 accent-cyan-400 cursor-pointer"
                      />
                      <span className="text-sm">🗺️</span>
                    </div>
                    <button
                      onClick={() => animate(unfold, unfolded ? 0 : 1, setUnfold, 1200)}
                      className="bg-cyan-500/20 hover:bg-cyan-500/30 border-2 border-cyan-400/60 text-cyan-200 font-display font-900 text-sm py-2 rounded-xl cursor-pointer transition"
                    >
                      {unfolded ? '◀ Fold it back' : '▶ Unfold into a net'}
                    </button>

                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider mt-1">② Tap each face ({nRevealed}/{s1Faces.length})</p>
                    {!unfolded ? (
                      <p className="text-xs font-bold text-slate-400 italic">Unfold the net fully to start tapping faces.</p>
                    ) : (
                      <div className="grid grid-cols-2 gap-1.5">
                        {s1Faces.map(f => (
                          <button
                            key={f.key}
                            onClick={() => setRevealed(r => ({ ...r, [f.key]: true }))}
                            className="bg-[#14082c] rounded-lg px-2 py-1 border-2 text-[11px] font-900 cursor-pointer text-left leading-tight"
                            style={{ borderColor: PAIR_COLORS[f.key] + '99' }}
                          >
                            <span style={{ color: PAIR_COLORS[f.key] }}>{f.name}</span>
                            <span className="block text-slate-300">
                              {faceDims(f)} = <span className="text-amber-300">{revealed[f.key] ? fmt(f.area) : '?'}</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    )}

                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider mt-1">③ Add every face</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number" placeholder="Total" disabled={!unfolded} value={totalAns}
                        onChange={e => setTotalAns(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && unfolded && checkNet()}
                        className={inputCls(feedback ? feedback.success : null) + ' flex-1 disabled:opacity-40'}
                      />
                      <span className="text-sm font-900 text-slate-300">{currentActivity.unit}²</span>
                    </div>
                    <div className="flex gap-2">
                      <button disabled={!unfolded || totalAns === ''} onClick={checkNet} className="btn-gold flex-1 text-sm font-900 px-3 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed">
                        Check ✨
                      </button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== STATION 2: PAINT SHOP ===================== */}
              {station === 2 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex items-center justify-center">
                    {currentActivity.solid === 'cylinder' ? (
                      <Cylinder r={currentActivity.dims.r} h={currentActivity.dims.h} sel={sel} onToggle={toggleFace} />
                    ) : (
                      <GlassCuboid
                        {...currentActivity.dims} sel={sel} onToggle={toggleFace}
                        labels={{ L: `${currentActivity.dims.L} ${currentActivity.unit}`, W: `${currentActivity.dims.W} ${currentActivity.unit}`, H: `${currentActivity.dims.H} ${currentActivity.unit}` }}
                      />
                    )}
                  </div>

                  <div className="w-64 sm:w-72 shrink-0 flex flex-col gap-2.5 min-h-0 overflow-y-auto">
                    {!selOk ? (
                      <>
                        <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Tap the faces that need material</p>
                        <div className="grid grid-cols-2 gap-2">
                          {s2Keys.map(k => (
                            <button
                              key={k}
                              onClick={() => toggleFace(k)}
                              className={`px-2 py-2 rounded-xl text-xs font-900 border-2 transition cursor-pointer ${
                                sel[k] ? 'bg-amber-400 text-slate-950 border-amber-300 scale-105' : 'bg-[#14082c] text-white border-purple-400/40 hover:border-cyan-400'
                              } ${k === 'curved' ? 'col-span-2' : ''}`}
                            >
                              {sel[k] ? '✔ ' : ''}{s2Names[k]}
                            </button>
                          ))}
                        </div>
                        <p className="text-xs font-bold text-slate-400 italic">Hidden faces are dashed — use the buttons to pick them.</p>
                        <div className="flex gap-2">
                          <button onClick={checkSelection} className="btn-gold flex-1 text-sm font-900 px-3 py-2.5">Check faces ✨</button>
                          {hintBtn}
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Find each area {currentActivity.solid === 'cylinder' ? '(π = 22/7)' : ''}</p>
                        {currentActivity.groups.map((g, i) => (
                          <div key={i} className="bg-[#14082c] rounded-xl p-2.5 border-2 border-amber-400/40">
                            <p className="text-xs font-900 text-amber-300">{g.label}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs font-900 text-slate-200 flex-1">{g.formula} =</span>
                              <input type="number" value={groupAns[i] || ''} onChange={e => setGroupAns(s => ({ ...s, [i]: e.target.value }))} className={inputCls(groupOk[i])} />
                            </div>
                          </div>
                        ))}
                        <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">③ Total</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-900 text-slate-200 flex-1">Total =</span>
                          <input type="number" value={groupAns.total || ''} onChange={e => setGroupAns(s => ({ ...s, total: e.target.value }))} onKeyDown={e => e.key === 'Enter' && checkAreas()} className={inputCls(groupOk.total)} />
                          <span className="text-sm font-900 text-slate-300">{currentActivity.unit}²</span>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={checkAreas} className="btn-gold flex-1 text-sm font-900 px-3 py-2.5">Check ✨</button>
                          {hintBtn}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* ===================== STATION 3: REVERSE PACKAGER ===================== */}
              {station === 3 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col items-center justify-center gap-2">
                    <div className="flex-1 min-h-0 w-full flex items-center justify-center">{s3Visual()}</div>
                    <div className="w-full">
                      <div className="flex justify-between text-xs font-900 text-slate-300 mb-1">
                        <span>Steps solved</span>
                        <span className="text-amber-300">{Math.min(stepIdx, currentActivity.steps.length)} / {currentActivity.steps.length}</span>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/15">
                        <div className="h-full bg-emerald-400 rounded-full transition-all duration-500" style={{ width: `${(Math.min(stepIdx, currentActivity.steps.length) / currentActivity.steps.length) * 100}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="w-64 sm:w-72 shrink-0 flex flex-col gap-2 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">Solve it step by step</p>
                    {currentActivity.steps.map((st, i) => {
                      const doneStep = i < stepIdx;
                      const active = i === stepIdx;
                      return (
                        <div
                          key={i}
                          className={`rounded-xl p-2.5 border-2 transition ${
                            doneStep ? 'bg-emerald-950/70 border-emerald-400/60' : active ? 'bg-[#14082c] border-amber-400/70' : 'bg-[#14082c]/50 border-white/10 opacity-40'
                          }`}
                        >
                          <p className="text-xs font-900 text-slate-100">{i + 1}. {st.text}</p>
                          <div className="flex items-center gap-2 mt-1.5">
                            {doneStep ? (
                              <span className="text-sm font-900 text-emerald-300">✔ {st.answer} {st.unit}</span>
                            ) : (
                              <>
                                <input
                                  type="number" disabled={!active} value={active ? stepAns : ''} placeholder="?"
                                  onChange={e => { setStepAns(e.target.value); setStepWrong(false); }}
                                  onKeyDown={e => e.key === 'Enter' && active && checkStep()}
                                  className={inputCls(active && stepWrong ? false : null) + ' flex-1 disabled:opacity-50'}
                                />
                                <span className="text-xs font-900 text-slate-300">{st.unit}</span>
                                {active && (
                                  <button onClick={checkStep} disabled={stepAns === ''} className="btn-gold text-xs font-900 px-3 py-2 disabled:opacity-40">✓</button>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex">{hintBtn}</div>
                  </div>
                </div>
              )}

              {/* Hint + feedback strip */}
              {showHint && (
                <div className="p-2.5 mt-2 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs sm:text-sm font-bold w-full text-center fade-in-up shrink-0">
                  💡 {currentActivity.hint}
                </div>
              )}
              {feedback && (
                <div className={`p-2.5 mt-2 rounded-2xl text-sm font-900 w-full text-center shadow-xl shrink-0 fade-in-up ${
                  feedback.success ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
                }`}>
                  {feedback.text}
                </div>
              )}
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-3 mt-3 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
              >
                ← Previous Activity
              </button>

              <button
                onClick={nextActivity}
                className="btn-gold text-sm sm:text-base font-900 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
