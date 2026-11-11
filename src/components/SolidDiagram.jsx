import React from 'react';
import { iso, makeFit, ptsAttr, cuboidFaces } from './iso.js';

/* =========================================================================
   SOLID DIAGRAM — isometric drawing for each practice question.
   Gold = top/ends, pink = front/curved, blue = sides. Hidden edges dashed.
   ========================================================================= */
const VW = 360;
const VH = 210;
const COL = { top: '#facc15', bottom: '#facc15', front: '#f472b6', back: '#f472b6', left: '#38bdf8', right: '#38bdf8' };

function Label({ x, y, children, anchor = 'middle', color = '#facc15', size = 14 }) {
  return (
    <text x={x} y={y} fill={color} fontSize={size} fontWeight="900" textAnchor={anchor} dominantBaseline="middle"
      style={{ paintOrder: 'stroke', stroke: '#0c0520', strokeWidth: 4 }}>
      {children}
    </text>
  );
}

function face(pts, color, visible, key, extra = {}) {
  return (
    <polygon key={key} points={ptsAttr(pts)} fill={color} fillOpacity={visible ? 0.3 : 0.06}
      stroke={visible ? color : '#94a3b8'} strokeWidth={visible ? 2.5 : 1.5} strokeDasharray={visible ? 'none' : '5 4'}
      strokeLinejoin="round" {...extra} />
  );
}

function CuboidSolid({ d }) {
  const { L, W, H, unit: un } = d;
  // Keep very flat/tall boxes readable
  const faces = cuboidFaces(L, W, H);
  const fit = makeFit(faces.flatMap(f => f.p3.map(iso)), VW, VH, 30);
  const P = p => fit(iso(p));
  const order = [...faces].sort((a, b) => Number(a.visible) - Number(b.visible));
  const mid = (a, b) => { const p = P(a), q = P(b); return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]; };
  const pL = mid([0, W, 0], [L, W, 0]);
  const pW = mid([L, W, 0], [L, 0, 0]);
  const pH = mid([L, 0, 0], [L, 0, H]);
  const cube = L === W && W === H;
  const lab = v => (d.unknown === 'all' ? '?' : `${v} ${un}`);
  return (
    <g>
      {order.map(f => {
        if (d.open && f.key === 'top') {
          return <polygon key="top" points={ptsAttr(f.p3.map(P))} fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="7 5" />;
        }
        return face(f.p3.map(P), COL[f.key], f.visible, f.key);
      })}
      <Label x={pL[0] - 8} y={pL[1] + 16}>{lab(L)}</Label>
      {!cube || d.unknown === 'all' ? <Label x={pW[0] + 14} y={pW[1] + 14}>{lab(W)}</Label> : null}
      {!cube || d.unknown === 'all' ? (
        <Label x={pH[0] + 8} y={pH[1]} anchor="start" color={d.unknown === 'H' ? '#f472b6' : '#facc15'}>{d.unknown === 'H' ? 'h = ?' : lab(H)}</Label>
      ) : null}
      {d.open && <Label x={P([L / 2, W / 2, H])[0]} y={P([L / 2, W / 2, H])[1]} color="#e2e8f0" size={12}>no lid</Label>}
      {d.total && <Label x={VW / 2} y={VH - 10} color="#f472b6" size={13}>SA = {d.total} {un}²</Label>}
    </g>
  );
}

function PrismSolid({ d }) {
  const { a, b, c, L, unit: un } = d;
  // right triangle in the y–z plane: legs a (along y) and b (along z)
  const T = x => [[x, 0, 0], [x, a, 0], [x, 0, b]];
  const faces = [
    { key: 'base', p3: [[0, 0, 0], [L, 0, 0], [L, a, 0], [0, a, 0]], vis: false, col: '#38bdf8' },
    { key: 'back', p3: [[0, 0, 0], [L, 0, 0], [L, 0, b], [0, 0, b]], vis: false, col: '#38bdf8' },
    { key: 'end0', p3: T(0), vis: false, col: '#facc15' },
    { key: 'slope', p3: [[0, a, 0], [L, a, 0], [L, 0, b], [0, 0, b]], vis: true, col: '#f472b6' },
    { key: 'end1', p3: T(L), vis: true, col: '#facc15' }
  ];
  const fit = makeFit(faces.flatMap(f => f.p3.map(iso)), VW, VH, 30);
  const P = p => fit(iso(p));
  const m = (p, q) => { const A = P(p), B = P(q); return [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]; };
  const pa = m([L, 0, 0], [L, a, 0]), pb = m([L, 0, 0], [L, 0, b]), pc = m([L, a, 0], [L, 0, b]), pL = m([0, a, 0], [L, a, 0]);
  return (
    <g>
      {faces.map(f => face(f.p3.map(P), f.col, f.vis, f.key))}
      <Label x={pa[0] + 10} y={pa[1] + 12}>{a}</Label>
      <Label x={pb[0] + 10} y={pb[1]} anchor="start">{b}</Label>
      <Label x={pc[0] - 14} y={pc[1] - 10} anchor="end" color="#f472b6">{c}</Label>
      <Label x={pL[0] - 10} y={pL[1] + 16}>{L} {un}</Label>
    </g>
  );
}

function CylinderSolid({ d }) {
  const { r, h, unit: un } = d;
  const s = Math.min(110 / r, 150 / (h + r * 0.7));
  const rx = r * s, ry = rx * 0.32, hp = h * s;
  const cx = VW / 2, top = (VH - hp) / 2, bot = top + hp;
  const pink = d.labelOnly ? 0.45 : 0.25;
  return (
    <g>
      <ellipse cx={cx} cy={bot} rx={rx} ry={ry} fill="#facc15" fillOpacity={d.labelOnly ? 0 : 0.08} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 4" />
      <path d={`M${cx - rx} ${top} L${cx - rx} ${bot} A${rx} ${ry} 0 0 0 ${cx + rx} ${bot} L${cx + rx} ${top} A${rx} ${ry} 0 0 1 ${cx - rx} ${top} Z`}
        fill="#f472b6" fillOpacity={pink} stroke="#f472b6" strokeWidth="2.5" />
      <ellipse cx={cx} cy={top} rx={rx} ry={ry} fill={d.open || d.labelOnly ? 'none' : '#facc15'} fillOpacity="0.3"
        stroke={d.open ? '#e2e8f0' : '#facc15'} strokeWidth="2.5" strokeDasharray={d.open ? '7 5' : 'none'} />
      <line x1={cx} y1={top} x2={cx + rx} y2={top} stroke="#fff" strokeWidth="2" />
      <Label x={cx + rx / 2} y={top - 12}>r = {r}</Label>
      <line x1={cx + rx + 12} y1={top} x2={cx + rx + 12} y2={bot} stroke="#e2e8f0" strokeWidth="2" />
      <Label x={cx + rx + 20} y={(top + bot) / 2} anchor="start" color={d.unknown ? '#f472b6' : '#facc15'}>{d.unknown ? 'h = ?' : `${h} ${un}`}</Label>
      {d.open && <Label x={cx} y={top} color="#e2e8f0" size={12}>no lid</Label>}
      {d.labelOnly && <Label x={cx} y={(top + bot) / 2} color="#ffffff" size={13}>label</Label>}
    </g>
  );
}

function PyramidSolid({ d }) {
  const { b, l, unit: un } = d;
  const H = Math.sqrt(Math.max(l * l - (b / 2) * (b / 2), 1));
  const apex = [b / 2, b / 2, H];
  const B = [[0, 0, 0], [b, 0, 0], [b, b, 0], [0, b, 0]];
  const all = [...B, apex].map(iso);
  const fit = makeFit(all, VW, VH, 30);
  const P = p => fit(iso(p));
  const tri = (i, j, col, vis, k) => face([P(B[i]), P(B[j]), P(apex)], col, vis, k);
  const mFront = (() => { const A = P([b / 2, b, 0]); const Q = P(apex); return [A, Q]; })();
  return (
    <g>
      {face(B.map(P), '#38bdf8', false, 'base')}
      {tri(0, 1, '#f472b6', false, 'b0')}
      {tri(3, 0, '#f472b6', false, 'b1')}
      {tri(2, 3, '#f472b6', true, 'f0')}
      {tri(1, 2, '#facc15', true, 'f1')}
      <line x1={mFront[0][0]} y1={mFront[0][1]} x2={mFront[1][0]} y2={mFront[1][1]} stroke="#fff" strokeWidth="2" strokeDasharray="5 4" />
      <Label x={(mFront[0][0] + mFront[1][0]) / 2 - 8} y={(mFront[0][1] + mFront[1][1]) / 2} anchor="end" color="#ffffff">l = {l}</Label>
      <Label x={(P(B[3])[0] + P(B[2])[0]) / 2 - 6} y={(P(B[3])[1] + P(B[2])[1]) / 2 + 14}>{b} {un}</Label>
      <Label x={(P(B[2])[0] + P(B[1])[0]) / 2 + 12} y={(P(B[2])[1] + P(B[1])[1]) / 2 + 12}>{b} {un}</Label>
    </g>
  );
}

function FacesSolid({ d }) {
  const map = {
    'cube': { type: 'cuboid', L: 4, W: 4, H: 4, unit: '' },
    'cuboid': { type: 'cuboid', L: 7, W: 3, H: 4, unit: '' },
    'triangular prism': null,
    'square-based pyramid': null,
    'pentagonal prism': null,
    'triangular pyramid': null
  };
  const name = d.solid;
  let body;
  if (name === 'cube' || name === 'cuboid') {
    const dd = map[name];
    const faces = cuboidFaces(dd.L, dd.W, dd.H);
    const fit = makeFit(faces.flatMap(f => f.p3.map(iso)), VW, VH, 30);
    body = [...faces].sort((a, b) => Number(a.visible) - Number(b.visible)).map(f => face(f.p3.map(p => fit(iso(p))), COL[f.key], f.visible, f.key));
  } else if (name === 'triangular prism') {
    const L = 8, a = 4;
    const T = x => [[x, 0, 0], [x, a, 0], [x, a / 2, 3.4]];
    const F = [
      { p3: [[0, 0, 0], [L, 0, 0], [L, a, 0], [0, a, 0]], vis: false, col: '#38bdf8' },
      { p3: [[0, 0, 0], [L, 0, 0], [L, a / 2, 3.4], [0, a / 2, 3.4]], vis: false, col: '#f472b6' },
      { p3: T(0), vis: false, col: '#facc15' },
      { p3: [[0, a, 0], [L, a, 0], [L, a / 2, 3.4], [0, a / 2, 3.4]], vis: true, col: '#f472b6' },
      { p3: T(L), vis: true, col: '#facc15' }
    ];
    const fit = makeFit(F.flatMap(f => f.p3.map(iso)), VW, VH, 30);
    body = F.map((f, i) => face(f.p3.map(p => fit(iso(p))), f.col, f.vis, i));
  } else if (name === 'square-based pyramid') {
    return <g><PyramidSolid d={{ b: 6, l: 6, unit: '' }} /><Label x={VW / 2} y={VH - 10} color="#e2e8f0" size={13}>{name}</Label></g>;
  } else if (name === 'triangular pyramid') {
    const A = [0, 0, 0], B2 = [6, 0, 0], C = [2, 5, 0], T = [2.6, 1.8, 5.5];
    const fit = makeFit([A, B2, C, T].map(iso), VW, VH, 30);
    const P = p => fit(iso(p));
    body = [
      face([A, B2, C].map(P), '#38bdf8', false, 'b'),
      face([A, B2, T].map(P), '#f472b6', false, 'f0'),
      face([A, C, T].map(P), '#38bdf8', true, 'f1'),
      face([B2, C, T].map(P), '#facc15', true, 'f2')
    ];
  } else {
    // pentagonal prism
    const R = 3, Hh = 6;
    const pent = z => [...Array(5)].map((_, i) => { const t = (i / 5) * Math.PI * 2 - Math.PI / 2; return [R * Math.cos(t) + R, R * Math.sin(t) + R, z]; });
    const bot = pent(0), top = pent(Hh);
    const fit = makeFit([...bot, ...top].map(iso), VW, VH, 30);
    const P = p => fit(iso(p));
    const sides = [...Array(5)].map((_, i) => [bot[i], bot[(i + 1) % 5], top[(i + 1) % 5], top[i]]);
    body = [
      ...sides
        .map((s, i) => { const t = ((i + 0.5) / 5) * Math.PI * 2 - Math.PI / 2; return { s, i, vis: Math.cos(t) + Math.sin(t) > 0 }; })
        .sort((a, b) => Number(a.vis) - Number(b.vis))
        .map(({ s, i, vis }) => face(s.map(P), '#38bdf8', vis, `s${i}`)),
      face(top.map(P), '#facc15', true, 'top')
    ];
  }
  return <g>{body}<Label x={VW / 2} y={VH - 10} color="#e2e8f0" size={13}>{name}</Label></g>;
}

export function SolidDiagram({ diagramData, size = 190 }) {
  if (!diagramData) return null;
  const d = diagramData;
  let body = null;
  if (d.type === 'cuboid') body = <CuboidSolid d={d} />;
  else if (d.type === 'prism') body = <PrismSolid d={d} />;
  else if (d.type === 'cylinder') body = <CylinderSolid d={d} />;
  else if (d.type === 'pyramid') body = <PyramidSolid d={d} />;
  else if (d.type === 'faces') body = <FacesSolid d={d} />;
  if (!body) return null;
  return (
    <div className="flex items-center justify-center my-1">
      <svg width={size * (VW / VH)} height={size} viewBox={`0 0 ${VW} ${VH}`} className="max-w-full drop-shadow-[0_0_18px_rgba(250,204,21,0.25)]">
        {body}
      </svg>
    </div>
  );
}
