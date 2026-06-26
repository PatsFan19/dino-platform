import { View } from 'react-native';

interface DinoIllustrationProps {
  imageKey: string;
  width?: number;
  height?: number;
}

// All coordinates are in a 0–100 unit space, scaled to actual dimensions.
// br = border radius in the same 0–100 space (scaled by min(sx,sy)).
interface Rect {
  l: number; t: number; w: number; h: number;
  br?: number;
  rot?: string;
  tint?: 'primary' | 'dark' | 'mid' | 'white';
}

interface DinoSpec {
  color: string;
  mid: string;   // slightly darker shade for depth
  shapes: Rect[];
}

const SPECS: Record<string, DinoSpec> = {

  // ── T-Rex ──────────────────────────────────────────────────────────────
  // Iconic: upright stance, massive head, comically tiny arms
  'dinosaurs/t-rex': {
    color: '#C0392B', mid: '#96281B',
    shapes: [
      // tail
      { l:60, t:50, w:30, h:11, br:5, rot:'-18deg' },
      // torso
      { l:35, t:33, w:30, h:40, br:12 },
      // upper jaw / head
      { l:24, t:9,  w:46, h:30, br:14 },
      // lower jaw
      { l:28, t:30, w:36, h:16, br:6, tint:'mid' },
      // teeth strip
      { l:32, t:33, w:22, h:5,  br:3, tint:'white' },
      // tiny left arm
      { l:24, t:46, w:14, h:7,  br:4, rot:'-25deg' },
      // left leg
      { l:33, t:68, w:12, h:28, br:6 },
      // right leg
      { l:50, t:68, w:12, h:28, br:6 },
      // eye
      { l:47, t:14, w:8,  h:8,  br:4, tint:'dark' },
    ],
  },

  // ── Triceratops ────────────────────────────────────────────────────────
  // Iconic: large circular frill, three horns
  'dinosaurs/triceratops': {
    color: '#27AE60', mid: '#1E8449',
    shapes: [
      // frill (big circle behind head)
      { l:2,  t:14, w:44, h:60, br:40, tint:'mid' },
      // body
      { l:30, t:29, w:58, h:40, br:14 },
      // head
      { l:6,  t:26, w:36, h:38, br:12 },
      // nose horn
      { l:0,  t:40, w:12, h:7,  br:3,  rot:'-8deg' },
      // left brow horn
      { l:9,  t:15, w:8,  h:20, br:4,  rot:'-8deg' },
      // right brow horn
      { l:25, t:12, w:8,  h:20, br:4,  rot:'8deg'  },
      // front leg L
      { l:35, t:65, w:11, h:28, br:5 },
      // front leg R
      { l:49, t:65, w:11, h:28, br:5 },
      // back leg L
      { l:63, t:65, w:11, h:28, br:5 },
      // back leg R
      { l:76, t:65, w:11, h:28, br:5 },
      // eye
      { l:23, t:34, w:7,  h:7,  br:4, tint:'dark' },
    ],
  },

  // ── Stegosaurus ────────────────────────────────────────────────────────
  // Iconic: diamond-shaped plates along back, spiked tail
  'dinosaurs/stegosaurus': {
    color: '#2980B9', mid: '#21618C',
    shapes: [
      // body
      { l:22, t:42, w:56, h:36, br:14 },
      // head (small)
      { l:3,  t:40, w:24, h:24, br:10 },
      // back plates (tallest in the middle)
      { l:30, t:18, w:10, h:26, br:4 },
      { l:42, t:11, w:13, h:34, br:5 },
      { l:57, t:16, w:11, h:28, br:4 },
      { l:70, t:23, w:9,  h:22, br:4 },
      // tail
      { l:73, t:52, w:24, h:14, br:6, rot:'16deg' },
      // tail spikes
      { l:90, t:40, w:6,  h:15, br:3, rot:'22deg',  tint:'mid' },
      { l:88, t:57, w:6,  h:15, br:3, rot:'-14deg', tint:'mid' },
      // legs
      { l:28, t:74, w:11, h:24, br:5 },
      { l:42, t:74, w:11, h:24, br:5 },
      { l:58, t:74, w:11, h:24, br:5 },
      { l:70, t:74, w:11, h:24, br:5 },
      // eye
      { l:12, t:44, w:6,  h:6,  br:3, tint:'dark' },
    ],
  },

  // ── Velociraptor ───────────────────────────────────────────────────────
  // Iconic: upright but smaller/sleeker than T-Rex, long feathered arms, sickle foot-claw
  'dinosaurs/velociraptor': {
    color: '#8E44AD', mid: '#6C3483',
    shapes: [
      // tail (held horizontal for balance)
      { l:57, t:45, w:32, h:9,  br:4, rot:'-18deg' },
      // torso (slimmer than T-Rex)
      { l:38, t:32, w:24, h:36, br:10 },
      // head (smaller, more pointed)
      { l:36, t:12, w:28, h:23, br:10 },
      // snout extension
      { l:34, t:22, w:22, h:12, br:5, tint:'mid' },
      // long feathered arm L
      { l:19, t:42, w:22, h:9,  br:5, rot:'22deg' },
      // feather tip L
      { l:12, t:49, w:14, h:6,  br:4, rot:'22deg', tint:'mid' },
      // arm R
      { l:60, t:44, w:17, h:8,  br:5, rot:'-18deg' },
      // left leg
      { l:38, t:64, w:10, h:28, br:5 },
      // right leg
      { l:52, t:64, w:10, h:28, br:5 },
      // sickle claw (raised off ground)
      { l:35, t:86, w:10, h:10, br:5, rot:'25deg', tint:'mid' },
      // eye
      { l:44, t:16, w:7,  h:7,  br:4, tint:'dark' },
    ],
  },

  // ── Brachiosaurus ──────────────────────────────────────────────────────
  // Iconic: enormously long neck reaching up, tiny head up high
  'dinosaurs/brachiosaurus': {
    color: '#E67E22', mid: '#CA6F1E',
    shapes: [
      // body (large, low)
      { l:18, t:44, w:64, h:38, br:14 },
      // long neck (angled up-left)
      { l:16, t:6,  w:14, h:50, br:7  },
      // head (small, up top)
      { l:10, t:1,  w:24, h:16, br:8  },
      // snout
      { l:8,  t:9,  w:14, h:9,  br:5, tint:'mid' },
      // legs
      { l:24, t:78, w:12, h:20, br:5 },
      { l:40, t:78, w:12, h:20, br:5 },
      { l:57, t:78, w:12, h:20, br:5 },
      { l:71, t:78, w:12, h:20, br:5 },
      // tail
      { l:78, t:60, w:20, h:10, br:5, rot:'22deg' },
      // eye
      { l:17, t:5,  w:6,  h:6,  br:3, tint:'dark' },
    ],
  },

  // ── Pteranodon ─────────────────────────────────────────────────────────
  // Iconic: wide V-shaped wings, long beak, pointed head crest
  'dinosaurs/pteranodon': {
    color: '#16A085', mid: '#117A65',
    shapes: [
      // left wing (upper)
      { l:2,  t:22, w:40, h:24, br:8, rot:'-12deg' },
      // left wing (lower membrane)
      { l:4,  t:36, w:34, h:18, br:6, rot:'6deg', tint:'mid' },
      // right wing (upper)
      { l:58, t:22, w:40, h:24, br:8, rot:'12deg' },
      // right wing (lower membrane)
      { l:62, t:36, w:34, h:18, br:6, rot:'-6deg', tint:'mid' },
      // body
      { l:36, t:28, w:28, h:38, br:12 },
      // head
      { l:34, t:13, w:26, h:22, br:10 },
      // long beak
      { l:30, t:22, w:32, h:8,  br:4, tint:'mid' },
      // head crest (pointing backward-up)
      { l:54, t:5,  w:8,  h:16, br:4, rot:'20deg' },
      // eye
      { l:40, t:16, w:7,  h:7,  br:4, tint:'dark' },
    ],
  },
};

export function DinoIllustration({ imageKey, width = 200, height = 160 }: DinoIllustrationProps) {
  const spec = SPECS[imageKey];
  if (!spec) return null;

  const sx = width / 100;
  const sy = height / 100;
  const sr = Math.min(sx, sy);

  return (
    <View style={{ width, height, overflow: 'hidden' }}>
      {spec.shapes.map((shape, i) => {
        const bg =
          shape.tint === 'dark'  ? '#1A1A2E' :
          shape.tint === 'white' ? '#FFFFFF'  :
          shape.tint === 'mid'   ? spec.mid   :
          spec.color;
        return (
          <View
            key={i}
            style={{
              position: 'absolute',
              left:   shape.l * sx,
              top:    shape.t * sy,
              width:  shape.w * sx,
              height: shape.h * sy,
              borderRadius: (shape.br ?? 0) * sr,
              backgroundColor: bg,
              transform: shape.rot ? [{ rotate: shape.rot }] : undefined,
            }}
          />
        );
      })}
    </View>
  );
}
