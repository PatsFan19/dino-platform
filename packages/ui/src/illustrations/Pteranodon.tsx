import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect } from 'react-native-svg';

interface Props { width?: number; height?: number; }

const c = '#2DC4B2'; // teal
const d = '#1FA898'; // dark accent

export function PteranodonIllustration({ width = 200, height = 160 }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 160">
      <Rect x="0" y="0" width="200" height="160" fill="#E8FAFA" />
      {/* Left wing */}
      <Path d="M 82 78 Q 50 34 8 84 Q 38 98 80 88 Z" fill={c} />
      {/* Right wing */}
      <Path d="M 118 78 Q 150 34 192 84 Q 162 98 120 88 Z" fill={c} />
      {/* Wing membrane detail lines */}
      <Path d="M 96 84 Q 56 66 8 84"   stroke={d} strokeWidth="1.5" fill="none" />
      <Path d="M 104 84 Q 144 66 192 84" stroke={d} strokeWidth="1.5" fill="none" />
      {/* Body */}
      <Ellipse cx="100" cy="84" rx="22" ry="13" fill={c} />
      {/* Head */}
      <Ellipse cx="122" cy="68" rx="18" ry="12" fill={c} />
      {/* Head crest (points back-left) */}
      <Path d="M 108 62 Q 88 42 82 50 Q 88 57 110 66 Z" fill={d} />
      {/* Long beak (points right) */}
      <Path d="M 132 68 Q 160 60 186 63 Q 184 70 160 68 Q 136 70 132 68 Z" fill={d} />
      {/* Eye */}
      <Circle cx="128" cy="63" r="5" fill="white" />
      <Circle cx="129" cy="64" r="3" fill="#2C2C2C" />
      <Circle cx="130" cy="63" r="1" fill="white" />
      {/* Hanging legs */}
      <Path d="M 96 96 L 92 120 Q 87 124 85 120 Q 89 117 90 112 L 94 96 Z"  fill={d} />
      <Path d="M 108 96 L 106 120 Q 102 124 100 120 Q 104 117 105 112 L 107 96 Z" fill={d} />
    </Svg>
  );
}
