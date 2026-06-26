import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { G, Ellipse, Circle, Path, Polygon } from 'react-native-svg';

interface DinoIllustrationProps {
  imageKey: string;
  width?: number;
  height?: number;
}

// ── Shared style constants ────────────────────────────────────────────────────
const B  = '#FFFFFF';          // body fill
const S  = 'rgba(0,0,0,0.18)';// stroke (subtle outline between white parts)
const SW = 1.5;                // stroke width
const EY = '#1A1A2E';          // eye fill
const MO = 'rgba(0,0,0,0.22)';// mouth / dark detail

// Helpers to reduce repetition
const e  = (cx: number, cy: number, rx: number, ry: number, rot = 0) =>
  ({ cx, cy, rx, ry, fill: B, stroke: S, strokeWidth: SW,
     transform: rot ? `rotate(${rot} ${cx} ${cy})` : undefined });
const ek = (cx: number, cy: number, r: number) =>
  ({ cx, cy, r, fill: EY });

// ── T-Rex ─────────────────────────────────────────────────────────────────────
// Signature: enormous head, comically tiny arms, upright stance
function TRex() {
  return (
    <G>
      <Ellipse {...e(72, 65, 18, 8, -20)} />
      <Ellipse {...e(50, 56, 15, 22)} />
      <Ellipse {...e(42, 40, 10, 13)} />
      <Ellipse {...e(34, 26, 19, 13)} />
      <Ellipse {...e(29, 34, 14, 7, 12)} />
      <Path d="M22 33 L33 30 L32 36 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Ellipse {...e(37, 52, 7, 4, -28)} />
      <Ellipse {...e(43, 74, 9, 14)} />
      <Ellipse {...e(57, 74, 9, 14)} />
      <Circle {...ek(28, 22, 3)} />
    </G>
  );
}

// ── Triceratops ───────────────────────────────────────────────────────────────
// Signature: large circular frill, three horns (two long brow + short nose)
function Triceratops() {
  return (
    <G>
      <Ellipse {...e(50, 55, 32, 20)} />
      <Ellipse {...e(25, 45, 22, 24)} fill={B} stroke={S} strokeWidth={SW} />
      <Ellipse {...e(18, 52, 15, 17, -5)} />
      {/* frill */}
      <Ellipse cx={18} cy={38} rx={22} ry={26} fill={B} stroke={S} strokeWidth={SW} />
      {/* nose horn */}
      <Path d="M6 50 L14 46 L12 56 Z" fill={B} stroke={S} strokeWidth={SW} />
      {/* left brow horn */}
      <Path d="M8 28 L16 22 L14 35 Z" fill={B} stroke={S} strokeWidth={SW} />
      {/* right brow horn */}
      <Path d="M24 24 L30 18 L30 32 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Ellipse {...e(35, 73, 8, 15)} />
      <Ellipse {...e(49, 73, 8, 15)} />
      <Ellipse {...e(64, 73, 8, 15)} />
      <Ellipse {...e(78, 73, 8, 15)} />
      <Circle {...ek(25, 40, 3)} />
    </G>
  );
}

// ── Stegosaurus ───────────────────────────────────────────────────────────────
// Signature: row of diamond plates along the spine, tail spikes
function Stegosaurus() {
  return (
    <G>
      <Ellipse {...e(50, 58, 33, 20)} />
      <Ellipse {...e(18, 54, 17, 16)} />
      {/* back plates — tallest in the middle */}
      <Polygon points="30,47 36,22 42,47" fill={B} stroke={S} strokeWidth={SW} />
      <Polygon points="42,46 49,16 56,46" fill={B} stroke={S} strokeWidth={SW} />
      <Polygon points="56,47 62,24 68,47" fill={B} stroke={S} strokeWidth={SW} />
      <Polygon points="68,50 73,32 78,50" fill={B} stroke={S} strokeWidth={SW} />
      {/* tail */}
      <Ellipse {...e(82, 66, 14, 9, 20)} />
      {/* tail spikes */}
      <Polygon points="90,58 96,50 96,63" fill={B} stroke={S} strokeWidth={SW} />
      <Polygon points="90,68 98,63 95,75" fill={B} stroke={S} strokeWidth={SW} />
      <Ellipse {...e(31, 72, 8, 15)} />
      <Ellipse {...e(44, 72, 8, 15)} />
      <Ellipse {...e(60, 72, 8, 15)} />
      <Ellipse {...e(72, 72, 8, 15)} />
      <Circle {...ek(14, 50, 3)} />
    </G>
  );
}

// ── Velociraptor ──────────────────────────────────────────────────────────────
// Signature: sleek upright stance, feathered arms outstretched, raised sickle claw
function Velociraptor() {
  return (
    <G>
      {/* tail held horizontal for balance */}
      <Ellipse {...e(76, 55, 20, 7, -15)} />
      <Ellipse {...e(50, 54, 14, 20)} />
      <Ellipse {...e(43, 37, 9, 14)} />
      <Ellipse {...e(36, 24, 16, 11)} />
      {/* snout — pointed */}
      <Path d="M22 24 L36 20 L36 28 Z" fill={B} stroke={S} strokeWidth={SW} />
      {/* feathered arm L (outstretched) */}
      <Ellipse {...e(34, 55, 16, 6, 20)} />
      <Ellipse {...e(22, 60, 10, 4, 20)} />
      {/* feathered arm R */}
      <Ellipse {...e(58, 54, 12, 5, -20)} />
      <Ellipse {...e(43, 72, 8, 14)} />
      <Ellipse {...e(56, 72, 8, 14)} />
      {/* sickle claw — raised off ground */}
      <Path d="M40 83 Q36 90 43 92 Q50 90 46 83 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Circle {...ek(30, 20, 3)} />
    </G>
  );
}

// ── Brachiosaurus ─────────────────────────────────────────────────────────────
// Signature: enormously long neck rising to upper-left, tiny head, huge body
function Brachiosaurus() {
  return (
    <G>
      <Ellipse {...e(56, 60, 36, 26)} />
      {/* long neck (angled up) */}
      <Ellipse {...e(32, 42, 10, 28, -20)} />
      <Ellipse {...e(22, 18, 10, 18, -10)} />
      {/* tiny head */}
      <Ellipse {...e(16, 6, 13, 9)} />
      {/* snout */}
      <Path d="M5 8 L16 4 L16 12 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Ellipse {...e(36, 82, 9, 16)} />
      <Ellipse {...e(50, 82, 9, 16)} />
      <Ellipse {...e(66, 82, 9, 16)} />
      <Ellipse {...e(78, 82, 9, 16)} />
      {/* tail */}
      <Ellipse {...e(88, 68, 12, 7, 22)} />
      <Circle {...ek(12, 4, 3)} />
    </G>
  );
}

// ── Pteranodon ────────────────────────────────────────────────────────────────
// Signature: wide V-wings spread to edges, long beak, swept-back head crest
function Pteranodon() {
  return (
    <G>
      {/* left wing */}
      <Ellipse {...e(22, 38, 26, 14, -20)} />
      <Path d="M2 50 L24 30 L36 48 Z" fill={B} stroke={S} strokeWidth={SW} />
      {/* right wing */}
      <Ellipse {...e(78, 38, 26, 14, 20)} />
      <Path d="M98 50 L76 30 L64 48 Z" fill={B} stroke={S} strokeWidth={SW} />
      {/* body */}
      <Ellipse {...e(50, 55, 14, 22)} />
      {/* head */}
      <Ellipse {...e(50, 32, 14, 12)} />
      {/* long beak */}
      <Path d="M38 32 L50 27 L50 37 Z" fill={B} stroke={S} strokeWidth={SW} />
      {/* head crest (swept back) */}
      <Path d="M56 28 L72 16 L62 30 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Circle {...ek(44, 29, 3)} />
    </G>
  );
}

// ── Spinosaurus ───────────────────────────────────────────────────────────────
// Signature: tall neural-spine sail along back, long narrow crocodilian snout
function Spinosaurus() {
  return (
    <G>
      {/* sail spines — tall ridge along back */}
      <Path d="M38 52 L34 14 L42 52 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Path d="M46 50 L44 8  L54 50 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Path d="M56 52 L56 16 L64 52 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Path d="M65 54 L66 26 L72 54 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Ellipse {...e(72, 64, 18, 8, -18)} />
      <Ellipse {...e(52, 58, 22, 18)} />
      <Ellipse {...e(38, 44, 11, 16)} />
      {/* elongated narrow head */}
      <Ellipse {...e(27, 32, 16, 10)} />
      {/* long crocodilian snout */}
      <Path d="M12 30 L28 27 L28 35 L12 34 Z" fill={B} stroke={S} strokeWidth={SW} />
      {/* tiny arms */}
      <Ellipse {...e(38, 60, 7, 4, -25)} />
      <Ellipse {...e(48, 74, 9, 15)} />
      <Ellipse {...e(62, 74, 9, 15)} />
      <Circle {...ek(22, 29, 3)} />
    </G>
  );
}

// ── Ankylosaurus ─────────────────────────────────────────────────────────────
// Signature: very low wide armored body, rows of scutes, massive tail club
function Ankylosaurus() {
  return (
    <G>
      {/* tail club */}
      <Ellipse {...e(88, 60, 10, 10)} />
      <Ellipse {...e(76, 62, 10, 7, 10)} />
      {/* armoured body — wide and low */}
      <Ellipse {...e(48, 60, 38, 22)} />
      {/* armour scutes */}
      <Ellipse {...e(34, 43, 6, 4, -10)} />
      <Ellipse {...e(47, 40, 7, 4)} />
      <Ellipse {...e(60, 42, 6, 4, 10)} />
      <Ellipse {...e(70, 46, 5, 4, 15)} />
      <Ellipse {...e(38, 52, 5, 3, -5)} />
      <Ellipse {...e(50, 50, 6, 3)} />
      <Ellipse {...e(62, 52, 5, 3, 5)} />
      {/* head */}
      <Ellipse {...e(16, 60, 17, 14)} />
      {/* beak */}
      <Path d="M2 60 L16 55 L16 65 Z" fill={B} stroke={S} strokeWidth={SW} />
      {/* stubby legs */}
      <Ellipse {...e(30, 79, 8, 11)} />
      <Ellipse {...e(44, 79, 8, 11)} />
      <Ellipse {...e(58, 79, 8, 11)} />
      <Ellipse {...e(70, 79, 8, 11)} />
      <Circle {...ek(10, 56, 3)} />
    </G>
  );
}

// ── Parasaurolophus ──────────────────────────────────────────────────────────
// Signature: long hollow crest sweeping back from head, duck-like flat bill
function Parasaurolophus() {
  return (
    <G>
      <Ellipse {...e(52, 57, 32, 20)} />
      <Ellipse {...e(24, 46, 18, 20)} />
      {/* head */}
      <Ellipse {...e(20, 30, 14, 15)} />
      {/* long swept-back hollow crest */}
      <Path d="M22 20 Q50 2 72 18 Q60 22 30 26 Z" fill={B} stroke={S} strokeWidth={SW} />
      {/* duck bill */}
      <Path d="M8 33 L20 28 L20 36 L8 38 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Ellipse {...e(34, 74, 9, 15)} />
      <Ellipse {...e(48, 74, 9, 15)} />
      <Ellipse {...e(64, 74, 9, 15)} />
      <Ellipse {...e(76, 74, 9, 15)} />
      <Circle {...ek(14, 27, 3)} />
    </G>
  );
}

// ── Pachycephalosaurus ───────────────────────────────────────────────────────
// Signature: enormous thick dome of solid bone crowning the skull
function Pachycephalosaurus() {
  return (
    <G>
      <Ellipse {...e(70, 60, 20, 8, -18)} />
      <Ellipse {...e(48, 56, 14, 22)} />
      <Ellipse {...e(40, 38, 10, 16)} />
      {/* face */}
      <Ellipse {...e(34, 28, 13, 11)} />
      {/* snout */}
      <Path d="M22 28 L34 24 L34 32 Z" fill={B} stroke={S} strokeWidth={SW} />
      {/* DOME — the key feature, prominent hemisphere */}
      <Ellipse cx={38} cy={20} rx={16} ry={14} fill={B} stroke={S} strokeWidth={SW} />
      {/* dome ridge bumps */}
      <Ellipse {...e(32, 12, 4, 3, -20)} />
      <Ellipse {...e(38, 9, 4, 3)} />
      <Ellipse {...e(46, 12, 4, 3, 20)} />
      {/* arms */}
      <Ellipse {...e(36, 58, 10, 5, 20)} />
      <Ellipse {...e(43, 74, 9, 14)} />
      <Ellipse {...e(56, 74, 9, 14)} />
      <Circle {...ek(28, 25, 3)} />
    </G>
  );
}

// ── Diplodocus ────────────────────────────────────────────────────────────────
// Signature: neck held HORIZONTAL (unlike brachio), whip-thin enormously long tail
function Diplodocus() {
  return (
    <G>
      {/* very long whip tail — extends almost to edge */}
      <Ellipse {...e(82, 58, 18, 7, 10)} />
      <Ellipse {...e(94, 52, 8, 4, 5)} />
      {/* body */}
      <Ellipse {...e(52, 60, 32, 22)} />
      {/* neck — horizontal, pointing left */}
      <Ellipse {...e(26, 46, 22, 9, -8)} />
      <Ellipse {...e(10, 42, 14, 7, -5)} />
      {/* small head at end of horizontal neck */}
      <Ellipse {...e(7, 34, 10, 9)} />
      {/* snout */}
      <Path d="M2 34 L8 30 L8 38 Z" fill={B} stroke={S} strokeWidth={SW} />
      <Ellipse {...e(36, 78, 9, 16)} />
      <Ellipse {...e(50, 78, 9, 16)} />
      <Ellipse {...e(64, 78, 9, 16)} />
      <Ellipse {...e(76, 78, 9, 16)} />
      <Circle {...ek(4, 31, 3)} />
    </G>
  );
}

// ── Illustration map ──────────────────────────────────────────────────────────
const DINO_MAP: Record<string, { Component: () => React.ReactElement; bg: string }> = {
  'dinosaurs/t-rex':              { Component: TRex,              bg: '#E8533F' },
  'dinosaurs/triceratops':        { Component: Triceratops,        bg: '#3B82F6' },
  'dinosaurs/stegosaurus':        { Component: Stegosaurus,        bg: '#22C55E' },
  'dinosaurs/velociraptor':       { Component: Velociraptor,       bg: '#F97316' },
  'dinosaurs/brachiosaurus':      { Component: Brachiosaurus,      bg: '#A855F7' },
  'dinosaurs/pteranodon':         { Component: Pteranodon,         bg: '#14B8A6' },
  'dinosaurs/spinosaurus':        { Component: Spinosaurus,        bg: '#0369A1' },
  'dinosaurs/ankylosaurus':       { Component: Ankylosaurus,       bg: '#854D0E' },
  'dinosaurs/parasaurolophus':    { Component: Parasaurolophus,    bg: '#BE185D' },
  'dinosaurs/pachycephalosaurus': { Component: Pachycephalosaurus, bg: '#065F46' },
  'dinosaurs/diplodocus':         { Component: Diplodocus,         bg: '#7C3AED' },
};

export function DinoIllustration({ imageKey, width = 200, height = 160 }: DinoIllustrationProps) {
  const entry = DINO_MAP[imageKey];
  if (!entry) return null;
  const { Component, bg } = entry;
  return (
    <View style={[styles.box, { width, height, backgroundColor: bg }]}>
      <Svg width={width} height={height} viewBox="0 0 100 100">
        <Component />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
