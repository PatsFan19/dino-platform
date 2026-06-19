import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { theme } from '@dinasour/ui';

// ─── Canvas ────────────────────────────────────────────────────────────────
// viewBox 0 0 300 120. Ground at y=112. Max silhouette height = 104px.
// Left half  (dino):   centre x = 72
// Right half (object): centre x = 228
const VW = 300;
const VH = 120;
const GROUND = 112;
const MAX_H = 104; // tallest element in a pair fills this many pixels
const DINO_CX = 72;
const OBJ_CX = 228;

// ─── Size configs (real-world heights, normalised so taller object = 1.0) ──
type ObjKind = 'school-bus' | 'car' | 'person';
interface Config { obj: ObjKind; objLabel: string; dinoFrac: number; objFrac: number; }

const CONFIGS: Record<string, Config> = {
  't-rex':         { obj: 'school-bus', objLabel: 'School Bus', dinoFrac: 1.00, objFrac: 0.53 },
  'brachiosaurus': { obj: 'school-bus', objLabel: 'School Bus', dinoFrac: 1.00, objFrac: 0.25 },
  'triceratops':   { obj: 'car',        objLabel: 'Car',         dinoFrac: 1.00, objFrac: 0.50 },
  'stegosaurus':   { obj: 'car',        objLabel: 'Car',         dinoFrac: 1.00, objFrac: 0.37 },
  'velociraptor':  { obj: 'person',     objLabel: 'Person',      dinoFrac: 0.29, objFrac: 1.00 },
  'pteranodon':    { obj: 'person',     objLabel: 'Person',      dinoFrac: 0.78, objFrac: 1.00 },
};

// ─── Comparison object silhouettes ─────────────────────────────────────────
// All take (cx, bottom, h) — h = display height in px, feet at y=bottom.

function SchoolBusSil({ cx, bottom, h }: { cx: number; bottom: number; h: number }) {
  const bodyH = h * 0.70;
  const wr = h * 0.16; // wheel radius
  const w = Math.min(h * 2.8, 118);
  const bodyTop = bottom - wr - bodyH;
  const winW = w * 0.13;
  const winH = bodyH * 0.38;
  const winY = bodyTop + bodyH * 0.14;
  const winOffsets = [-0.38, -0.20, -0.02]; // fraction of half-width from centre

  return (
    <G>
      <Rect x={cx - w / 2} y={bodyTop} width={w} height={bodyH} rx={h * 0.05} fill="#F5C518" />
      <Rect x={cx + w / 2 - w * 0.16} y={bodyTop} width={w * 0.16} height={bodyH} rx={h * 0.04} fill="#D4A000" />
      {winOffsets.map((xf, i) => (
        <Rect key={i} x={cx + w * xf - winW / 2} y={winY} width={winW} height={winH} rx={2} fill="#9DCEDF" />
      ))}
      <Rect x={cx + w * 0.36} y={winY} width={winW * 0.8} height={winH} rx={2} fill="#9DCEDF" />
      <Circle cx={cx - w * 0.28} cy={bottom} r={wr} fill="#2A2A2A" />
      <Circle cx={cx - w * 0.28} cy={bottom} r={wr * 0.44} fill="#555" />
      <Circle cx={cx + w * 0.26} cy={bottom} r={wr} fill="#2A2A2A" />
      <Circle cx={cx + w * 0.26} cy={bottom} r={wr * 0.44} fill="#555" />
    </G>
  );
}

function CarSil({ cx, bottom, h }: { cx: number; bottom: number; h: number }) {
  const wr = h * 0.22;
  const w = Math.min(h * 2.2, 92);
  const lowerH = h * 0.34;
  const cabH = h * 0.32;
  const lowerY = bottom - wr * 0.55 - lowerH;
  const cabY = lowerY - cabH;

  return (
    <G>
      <Rect x={cx - w / 2} y={lowerY} width={w} height={lowerH} rx={h * 0.05} fill="#888" />
      <Rect x={cx - w * 0.34} y={cabY} width={w * 0.68} height={cabH} rx={h * 0.09} fill="#9A9A9A" />
      <Rect x={cx + w * 0.10} y={cabY + cabH * 0.14} width={w * 0.19} height={cabH * 0.54} rx={3} fill="#9DCEDF" />
      <Rect x={cx - w * 0.30} y={cabY + cabH * 0.14} width={w * 0.19} height={cabH * 0.54} rx={3} fill="#9DCEDF" />
      <Circle cx={cx - w * 0.28} cy={bottom} r={wr} fill="#2A2A2A" />
      <Circle cx={cx - w * 0.28} cy={bottom} r={wr * 0.44} fill="#555" />
      <Circle cx={cx + w * 0.28} cy={bottom} r={wr} fill="#2A2A2A" />
      <Circle cx={cx + w * 0.28} cy={bottom} r={wr * 0.44} fill="#555" />
    </G>
  );
}

function PersonSil({ cx, bottom, h }: { cx: number; bottom: number; h: number }) {
  const c = '#6B7280';
  return (
    <G fill={c}>
      <Circle cx={cx} cy={bottom - h * 0.88} r={h * 0.11} />
      <Rect x={cx - h * 0.09} y={bottom - h * 0.74} width={h * 0.18} height={h * 0.34} rx={h * 0.04} />
      <Rect x={cx - h * 0.18} y={bottom - h * 0.73} width={h * 0.08} height={h * 0.26} rx={h * 0.03} />
      <Rect x={cx + h * 0.10} y={bottom - h * 0.73} width={h * 0.08} height={h * 0.26} rx={h * 0.03} />
      <Rect x={cx - h * 0.10} y={bottom - h * 0.40} width={h * 0.08} height={h * 0.40} rx={h * 0.03} />
      <Rect x={cx + h * 0.02} y={bottom - h * 0.40} width={h * 0.08} height={h * 0.40} rx={h * 0.03} />
    </G>
  );
}

// ─── Dinosaur silhouettes ───────────────────────────────────────────────────
// All coordinates expressed as fractions of h so they scale cleanly.

function TRexSil({ cx, bottom: b, h, fill }: { cx: number; bottom: number; h: number; fill: string }) {
  return (
    <G fill={fill}>
      {/* Tail */}
      <Path d={`M ${cx - 8} ${b - h * 0.36} L ${cx - 56} ${b - h * 0.02} L ${cx - 36} ${b} L ${cx - 2} ${b - h * 0.26} Z`} />
      {/* Body */}
      <Ellipse cx={cx + 6} cy={b - h * 0.52} rx={h * 0.27} ry={h * 0.25} />
      {/* Neck */}
      <Path d={`M ${cx + 20} ${b - h * 0.68} Q ${cx + 30} ${b - h * 0.82} ${cx + 34} ${b - h * 0.88} L ${cx + 44} ${b - h * 0.86} Q ${cx + 40} ${b - h * 0.80} ${cx + 30} ${b - h * 0.66} Z`} />
      {/* Head */}
      <Ellipse cx={cx + 40} cy={b - h * 0.92} rx={h * 0.21} ry={h * 0.10} />
      {/* Lower jaw */}
      <Path d={`M ${cx + 20} ${b - h * 0.88} L ${cx + 58} ${b - h * 0.83} L ${cx + 56} ${b - h * 0.78} L ${cx + 18} ${b - h * 0.84} Z`} />
      {/* Left leg */}
      <Path d={`M ${cx - 10} ${b - h * 0.30} L ${cx - 20} ${b} L ${cx - 6} ${b} L ${cx + 2} ${b - h * 0.28} Z`} />
      {/* Right leg */}
      <Path d={`M ${cx + 12} ${b - h * 0.28} L ${cx + 8} ${b} L ${cx + 22} ${b} L ${cx + 24} ${b - h * 0.26} Z`} />
      {/* Tiny arm */}
      <Ellipse cx={cx + 26} cy={b - h * 0.60} rx={h * 0.05} ry={h * 0.09} />
    </G>
  );
}

function BrachiosaurusSil({ cx, bottom: b, h, fill }: { cx: number; bottom: number; h: number; fill: string }) {
  return (
    <G fill={fill}>
      {/* Tail */}
      <Path d={`M ${cx + 24} ${b - h * 0.26} L ${cx + 62} ${b - h * 0.06} L ${cx + 46} ${b} L ${cx + 20} ${b - h * 0.18} Z`} />
      {/* Body */}
      <Ellipse cx={cx + 12} cy={b - h * 0.28} rx={h * 0.26} ry={h * 0.22} />
      {/* Neck tube */}
      <Path d={`M ${cx + 4} ${b - h * 0.46} Q ${cx - 8} ${b - h * 0.68} ${cx - 24} ${b - h * 0.88} L ${cx - 12} ${b - h * 0.92} Q ${cx + 0} ${b - h * 0.72} ${cx + 16} ${b - h * 0.50} Z`} />
      {/* Head */}
      <Ellipse cx={cx - 20} cy={b - h * 0.95} rx={h * 0.09} ry={h * 0.06} />
      {/* Front legs */}
      <Path d={`M ${cx - 6} ${b - h * 0.10} L ${cx - 12} ${b} L ${cx - 4} ${b} L ${cx + 2} ${b - h * 0.08} Z`} />
      <Path d={`M ${cx + 4} ${b - h * 0.08} L ${cx} ${b} L ${cx + 8} ${b} L ${cx + 12} ${b - h * 0.06} Z`} />
      {/* Rear legs */}
      <Path d={`M ${cx + 20} ${b - h * 0.10} L ${cx + 16} ${b} L ${cx + 24} ${b} L ${cx + 28} ${b - h * 0.08} Z`} />
      <Path d={`M ${cx + 30} ${b - h * 0.08} L ${cx + 27} ${b} L ${cx + 36} ${b} L ${cx + 38} ${b - h * 0.06} Z`} />
    </G>
  );
}

function TriceratopsSil({ cx, bottom: b, h, fill }: { cx: number; bottom: number; h: number; fill: string }) {
  return (
    <G fill={fill}>
      {/* Tail */}
      <Path d={`M ${cx + 26} ${b - h * 0.36} L ${cx + 56} ${b - h * 0.08} L ${cx + 42} ${b} L ${cx + 22} ${b - h * 0.26} Z`} />
      {/* Body */}
      <Ellipse cx={cx + 5} cy={b - h * 0.44} rx={h * 0.28} ry={h * 0.30} />
      {/* Neck */}
      <Path d={`M ${cx - 16} ${b - h * 0.60} Q ${cx - 28} ${b - h * 0.66} ${cx - 34} ${b - h * 0.72} L ${cx - 22} ${b - h * 0.78} Q ${cx - 16} ${b - h * 0.72} ${cx - 4} ${b - h * 0.65} Z`} />
      {/* Frill */}
      <Ellipse cx={cx - 32} cy={b - h * 0.74} rx={h * 0.17} ry={h * 0.19} />
      {/* Head */}
      <Ellipse cx={cx - 36} cy={b - h * 0.66} rx={h * 0.14} ry={h * 0.10} />
      {/* Nose horn */}
      <Path d={`M ${cx - 48} ${b - h * 0.68} L ${cx - 60} ${b - h * 0.72} L ${cx - 48} ${b - h * 0.62} Z`} />
      {/* Left brow horn */}
      <Path d={`M ${cx - 36} ${b - h * 0.74} L ${cx - 45} ${b - h * 0.90} L ${cx - 28} ${b - h * 0.75} Z`} />
      {/* Right brow horn */}
      <Path d={`M ${cx - 26} ${b - h * 0.73} L ${cx - 34} ${b - h * 0.88} L ${cx - 18} ${b - h * 0.74} Z`} />
      {/* Front legs */}
      <Path d={`M ${cx - 18} ${b - h * 0.18} L ${cx - 24} ${b} L ${cx - 14} ${b} L ${cx - 8} ${b - h * 0.16} Z`} />
      <Path d={`M ${cx - 4} ${b - h * 0.16} L ${cx - 8} ${b} L ${cx + 2} ${b} L ${cx + 4} ${b - h * 0.14} Z`} />
      {/* Rear legs */}
      <Path d={`M ${cx + 14} ${b - h * 0.18} L ${cx + 10} ${b} L ${cx + 20} ${b} L ${cx + 22} ${b - h * 0.16} Z`} />
      <Path d={`M ${cx + 24} ${b - h * 0.16} L ${cx + 22} ${b} L ${cx + 32} ${b} L ${cx + 34} ${b - h * 0.14} Z`} />
    </G>
  );
}

function StegosaurusSil({ cx, bottom: b, h, fill }: { cx: number; bottom: number; h: number; fill: string }) {
  const plates = [
    { x: cx - 8,  extra: 0.48 },
    { x: cx + 4,  extra: 0.54 },
    { x: cx + 16, extra: 0.50 },
    { x: cx + 26, extra: 0.42 },
  ];
  return (
    <G fill={fill}>
      {/* Tail with thagomizer spikes */}
      <Path d={`M ${cx + 30} ${b - h * 0.28} Q ${cx + 54} ${b - h * 0.16} ${cx + 70} ${b - h * 0.22} L ${cx + 74} ${b - h * 0.30} L ${cx + 64} ${b - h * 0.18} L ${cx + 78} ${b - h * 0.32} L ${cx + 68} ${b - h * 0.22} L ${cx + 60} ${b - h * 0.08} L ${cx + 36} ${b - h * 0.12} L ${cx + 28} ${b - h * 0.22} Z`} />
      {/* Body */}
      <Ellipse cx={cx + 6} cy={b - h * 0.40} rx={h * 0.30} ry={h * 0.26} />
      {/* Back plates */}
      {plates.map((p, i) => (
        <Path key={i} d={`M ${p.x - h * 0.055} ${b - h * 0.58} L ${p.x} ${b - h * p.extra - h * 0.24} L ${p.x + h * 0.055} ${b - h * 0.58} Z`} />
      ))}
      {/* Neck + small head */}
      <Path d={`M ${cx - 22} ${b - h * 0.44} Q ${cx - 36} ${b - h * 0.54} ${cx - 44} ${b - h * 0.60} L ${cx - 34} ${b - h * 0.64} Q ${cx - 26} ${b - h * 0.58} ${cx - 14} ${b - h * 0.48} Z`} />
      <Ellipse cx={cx - 44} cy={b - h * 0.62} rx={h * 0.09} ry={h * 0.06} />
      {/* 4 legs */}
      <Path d={`M ${cx - 20} ${b - h * 0.17} L ${cx - 26} ${b} L ${cx - 16} ${b} L ${cx - 12} ${b - h * 0.15} Z`} />
      <Path d={`M ${cx - 6} ${b - h * 0.15} L ${cx - 10} ${b} L ${cx} ${b} L ${cx + 2} ${b - h * 0.13} Z`} />
      <Path d={`M ${cx + 12} ${b - h * 0.17} L ${cx + 8} ${b} L ${cx + 18} ${b} L ${cx + 20} ${b - h * 0.15} Z`} />
      <Path d={`M ${cx + 22} ${b - h * 0.15} L ${cx + 20} ${b} L ${cx + 30} ${b} L ${cx + 32} ${b - h * 0.13} Z`} />
    </G>
  );
}

function VelociraptorSil({ cx, bottom: b, h, fill }: { cx: number; bottom: number; h: number; fill: string }) {
  return (
    <G fill={fill}>
      {/* Long stiff tail going left */}
      <Path d={`M ${cx - 4} ${b - h * 0.52} L ${cx - 48} ${b - h * 0.54} L ${cx - 48} ${b - h * 0.44} L ${cx - 2} ${b - h * 0.42} Z`} />
      {/* Body (forward-leaning) */}
      <Ellipse cx={cx + 6} cy={b - h * 0.56} rx={h * 0.22} ry={h * 0.16} />
      {/* Neck */}
      <Path d={`M ${cx + 18} ${b - h * 0.66} Q ${cx + 24} ${b - h * 0.76} ${cx + 24} ${b - h * 0.82} L ${cx + 32} ${b - h * 0.80} Q ${cx + 32} ${b - h * 0.74} ${cx + 26} ${b - h * 0.62} Z`} />
      {/* Head */}
      <Ellipse cx={cx + 30} cy={b - h * 0.86} rx={h * 0.13} ry={h * 0.08} />
      {/* Small feathered arm */}
      <Ellipse cx={cx + 16} cy={b - h * 0.62} rx={h * 0.04} ry={h * 0.08} />
      {/* Left leg + killing claw */}
      <Path d={`M ${cx + 2} ${b - h * 0.44} L ${cx - 4} ${b} L ${cx + 4} ${b} L ${cx + 8} ${b - h * 0.40} Z`} />
      <Path d={`M ${cx - 4} ${b} L ${cx - 10} ${b - h * 0.14} L ${cx - 6} ${b} Z`} />
      {/* Right leg */}
      <Path d={`M ${cx + 10} ${b - h * 0.42} L ${cx + 6} ${b} L ${cx + 14} ${b} L ${cx + 18} ${b - h * 0.38} Z`} />
    </G>
  );
}

function PteranodonSil({ cx, bottom: b, h, fill }: { cx: number; bottom: number; h: number; fill: string }) {
  // Compact flying pose: wings angled upward ~40° from horizontal
  const bodyY = b - h * 0.38;
  return (
    <G fill={fill}>
      {/* Left wing */}
      <Path d={`M ${cx} ${bodyY} Q ${cx - 22} ${bodyY - h * 0.28} ${cx - 46} ${bodyY - h * 0.52} L ${cx - 40} ${bodyY - h * 0.44} Q ${cx - 18} ${bodyY - h * 0.20} ${cx - 4} ${bodyY + h * 0.06} Z`} />
      {/* Right wing */}
      <Path d={`M ${cx} ${bodyY} Q ${cx + 22} ${bodyY - h * 0.28} ${cx + 46} ${bodyY - h * 0.52} L ${cx + 40} ${bodyY - h * 0.44} Q ${cx + 18} ${bodyY - h * 0.20} ${cx + 4} ${bodyY + h * 0.06} Z`} />
      {/* Body */}
      <Ellipse cx={cx} cy={bodyY + h * 0.06} rx={h * 0.10} ry={h * 0.15} />
      {/* Crest + neck */}
      <Path d={`M ${cx - 4} ${bodyY - h * 0.04} L ${cx - 6} ${bodyY - h * 0.24} L ${cx + 16} ${b - h * 0.96} L ${cx + 20} ${b - h * 0.92} L ${cx - 2} ${bodyY - h * 0.20} L ${cx + 2} ${bodyY - h * 0.02} Z`} />
      {/* Beak */}
      <Path d={`M ${cx - 6} ${bodyY - h * 0.22} L ${cx - 36} ${bodyY - h * 0.34} L ${cx - 34} ${bodyY - h * 0.27} L ${cx - 4} ${bodyY - h * 0.16} Z`} />
      {/* Legs */}
      <Path d={`M ${cx - 6} ${bodyY + h * 0.15} L ${cx - 10} ${b} L ${cx - 4} ${b} L ${cx - 2} ${bodyY + h * 0.17} Z`} />
      <Path d={`M ${cx + 2} ${bodyY + h * 0.15} L ${cx - 2} ${b} L ${cx + 4} ${b} L ${cx + 8} ${bodyY + h * 0.17} Z`} />
    </G>
  );
}

// ─── Dispatcher helpers ─────────────────────────────────────────────────────

function renderDino(id: string, cx: number, bottom: number, h: number, fill: string) {
  switch (id) {
    case 't-rex':         return <TRexSil         cx={cx} bottom={bottom} h={h} fill={fill} />;
    case 'brachiosaurus': return <BrachiosaurusSil cx={cx} bottom={bottom} h={h} fill={fill} />;
    case 'triceratops':   return <TriceratopsSil   cx={cx} bottom={bottom} h={h} fill={fill} />;
    case 'stegosaurus':   return <StegosaurusSil   cx={cx} bottom={bottom} h={h} fill={fill} />;
    case 'velociraptor':  return <VelociraptorSil  cx={cx} bottom={bottom} h={h} fill={fill} />;
    case 'pteranodon':    return <PteranodonSil     cx={cx} bottom={bottom} h={h} fill={fill} />;
    default:              return null;
  }
}

function renderObj(kind: ObjKind, cx: number, bottom: number, h: number) {
  switch (kind) {
    case 'school-bus': return <SchoolBusSil cx={cx} bottom={bottom} h={h} />;
    case 'car':        return <CarSil       cx={cx} bottom={bottom} h={h} />;
    case 'person':     return <PersonSil    cx={cx} bottom={bottom} h={h} />;
  }
}

// ─── Public component ───────────────────────────────────────────────────────

interface SizeComparisonProps {
  dinoId: string;
  dinoName: string;
  color: string; // era colour for the dino silhouette
}

export function SizeComparison({ dinoId, dinoName, color }: SizeComparisonProps) {
  const cfg = CONFIGS[dinoId];
  if (!cfg) return null;

  const dinoH = cfg.dinoFrac * MAX_H;
  const objH  = cfg.objFrac  * MAX_H;

  return (
    <View
      accessible
      accessibilityLabel={`Size comparison: ${dinoName} next to a ${cfg.objLabel}`}
    >
      {/* aspectRatio keeps the SVG responsive without knowing screen width */}
      <View style={{ width: '100%', aspectRatio: VW / VH }}>
        <Svg viewBox={`0 0 ${VW} ${VH}`} style={{ flex: 1 }}>
          {/* Subtle divider */}
          <Line x1={150} y1={8} x2={150} y2={GROUND} stroke="#D8D8D8" strokeWidth={1} />
          {/* Ground dashes */}
          <Line x1={12} y1={GROUND} x2={138} y2={GROUND} stroke="#CCCCCC" strokeWidth={1} strokeDasharray="4,3" />
          <Line x1={162} y1={GROUND} x2={288} y2={GROUND} stroke="#CCCCCC" strokeWidth={1} strokeDasharray="4,3" />
          {/* Silhouettes */}
          {renderDino(dinoId, DINO_CX, GROUND, dinoH, color)}
          {renderObj(cfg.obj, OBJ_CX, GROUND, objH)}
        </Svg>
      </View>
      <View style={styles.labels}>
        <Text style={[styles.label, { color }]}>{dinoName}</Text>
        <Text style={styles.label}>{cfg.objLabel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: theme.spacing.xs,
  },
  label: {
    fontSize: theme.typography.captionSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.textMuted,
    textAlign: 'center',
    width: '45%',
  },
});
