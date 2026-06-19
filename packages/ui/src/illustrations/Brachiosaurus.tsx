import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect } from 'react-native-svg';

interface Props { width?: number; height?: number; }

const c = '#9B6CD4'; // lavender
const d = '#7A4FB8'; // dark accent

export function BrachiosaurusIllustration({ width = 200, height = 160 }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 160">
      <Rect x="0" y="0" width="200" height="160" fill="#F5F0FE" />
      {/* Short tail */}
      <Path d="M 181 106 Q 197 100 198 110 Q 197 118 181 115 Z" fill={c} />
      {/* Body */}
      <Ellipse cx="138" cy="108" rx="46" ry="26" fill={c} />
      {/* Long neck — tube from body top-left up to head */}
      <Path
        d="M 114 92 Q 86 60 60 22 L 70 28 Q 98 68 126 96 Z"
        fill={c}
      />
      {/* Tiny head */}
      <Ellipse cx="58" cy="18" rx="14" ry="10" fill={c} />
      {/* Mouth */}
      <Path d="M 46 18 Q 50 22 58 21 Q 54 26 46 22 Z" fill={d} />
      {/* Eye */}
      <Circle cx="64" cy="14" r="5" fill="white" />
      <Circle cx="65" cy="14" r="3" fill="#2C2C2C" />
      <Circle cx="66" cy="13" r="1" fill="white" />
      {/* Legs (4 thick pillars) */}
      <Rect x="106" y="130" width="20" height="26" rx="6" fill={d} />
      <Rect x="128" y="132" width="18" height="24" rx="6" fill={d} />
      <Rect x="148" y="130" width="20" height="26" rx="6" fill={d} />
      <Rect x="166" y="132" width="17" height="24" rx="6" fill={d} />
      {/* Feet */}
      <Ellipse cx="116" cy="157" rx="17" ry="7" fill={d} />
      <Ellipse cx="137" cy="157" rx="15" ry="7" fill={d} />
      <Ellipse cx="158" cy="157" rx="17" ry="7" fill={d} />
      <Ellipse cx="174" cy="157" rx="14" ry="7" fill={d} />
    </Svg>
  );
}
