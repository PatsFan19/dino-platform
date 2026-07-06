import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

// Coelophysis: one of the earliest dinosaurs — small, very slim, elegant bipedal runner
export function CoelophysisSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Very long slim tail (counterbalance, extends far left) */}
      <Polygon points="6,122 68,96 68,108" fill={color} />
      {/* Slim body (much smaller than T-Rex) */}
      <Ellipse cx={100} cy={100} rx={28} ry={18} fill={color} />
      {/* Long slender neck — Coelophysis had a notably long neck */}
      <Polygon points="118,88 142,62 152,70 126,94" fill={color} />
      {/* Small, narrow head */}
      <Ellipse cx={154} cy={58} rx={18} ry={12} fill={color} />
      {/* Narrow lower jaw (long narrow snout) */}
      <Path d="M 140,64 Q 162,68 174,64 Q 172,72 140,72 Z" fill={color} fillOpacity={0.75} />
      {/* Eye */}
      <Circle cx={158} cy={52} r={6} fill="white" />
      <Circle cx={160} cy={53} r={3.5} fill="#1A1A2E" />
      {/* Nostril */}
      <Circle cx={172} cy={60} r={2} fill={color} fillOpacity={0.5} />
      {/* Small sharp teeth */}
      <Polygon points="148,64 151,60 154,64" fill="white" />
      <Polygon points="158,65 161,61 164,65" fill="white" />
      {/* Slim arms */}
      <Path d="M 120,94 Q 108,104 106,112 L 114,114 Q 116,108 124,100 Z" fill={color} fillOpacity={0.8} />
      {/* Right leg (support) — long and slender */}
      <Rect x={92} y={114} width={14} height={38} rx={4} fill={color} />
      {/* Left leg (forward stride) — angled */}
      <Path d="M 108,110 Q 118,118 116,148 L 126,148 Q 128,116 116,108 Z" fill={color} fillOpacity={0.85} />
      {/* Feet */}
      <Polygon points="92,150 88,158 98,154" fill={color} />
      <Polygon points="116,148 112,156 122,152" fill={color} />
    </Svg>
  );
}
