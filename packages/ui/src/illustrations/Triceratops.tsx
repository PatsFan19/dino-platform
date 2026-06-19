import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { width?: number; height?: number; }

const c = '#4A90D9'; // sky blue
const d = '#2E73C5'; // dark accent
const h = '#1A5C9A'; // horn dark

export function TriceratopsIllustration({ width = 200, height = 160 }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 160">
      <Rect x="0" y="0" width="200" height="160" fill="#EEF4FD" />
      {/* Tail */}
      <Path d="M 158 106 Q 181 95 194 116 L 160 117 Z" fill={c} />
      {/* Body */}
      <Ellipse cx="113" cy="107" rx="50" ry="33" fill={c} />
      {/* Neck frill — fan shape behind/above head */}
      <Ellipse cx="78" cy="63" rx="36" ry="32" fill={d} />
      {/* Head */}
      <Ellipse cx="52" cy="82" rx="24" ry="20" fill={c} />
      {/* Brow horn 1 (upper) */}
      <Polygon points="40,67 46,62 18,38" fill={h} />
      {/* Brow horn 2 (lower brow) */}
      <Polygon points="34,74 40,68 10,52" fill={h} />
      {/* Nose horn */}
      <Polygon points="30,88 35,93 6,81" fill={h} />
      {/* Eye */}
      <Circle cx="44" cy="77" r="7" fill="white" />
      <Circle cx="42" cy="77" r="4" fill="#2C2C2C" />
      <Circle cx="41" cy="76" r="1.5" fill="white" />
      {/* Mouth */}
      <Path d="M 32 88 Q 40 94 50 91 Q 46 98 32 93 Z" fill={d} />
      {/* Legs (4) */}
      <Rect x="76" y="136" width="18" height="21" rx="6" fill={d} />
      <Rect x="98" y="138" width="16" height="19" rx="6" fill={d} />
      <Rect x="120" y="136" width="18" height="21" rx="6" fill={d} />
      <Rect x="141" y="138" width="16" height="19" rx="6" fill={d} />
      {/* Feet */}
      <Ellipse cx="85" cy="157" rx="15" ry="6" fill={d} />
      <Ellipse cx="106" cy="157" rx="14" ry="6" fill={d} />
      <Ellipse cx="129" cy="157" rx="15" ry="6" fill={d} />
      <Ellipse cx="149" cy="157" rx="13" ry="6" fill={d} />
    </Svg>
  );
}
