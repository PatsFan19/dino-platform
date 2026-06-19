import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { width?: number; height?: number; }

const c = '#E8533F'; // coral red
const d = '#C23D2B'; // dark accent

export function TRexIllustration({ width = 200, height = 160 }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 160">
      <Rect x="0" y="0" width="200" height="160" fill="#FFF0EE" />
      {/* Tail */}
      <Path d="M 50 108 Q 22 96 8 120 L 46 120 Z" fill={c} />
      {/* Body */}
      <Ellipse cx="90" cy="104" rx="46" ry="32" fill={c} />
      {/* Head (overlaps body for natural neck connection) */}
      <Ellipse cx="150" cy="68" rx="31" ry="24" fill={c} />
      {/* Upper snout extension */}
      <Path d="M 145 74 Q 170 64 184 68 Q 184 76 145 77 Z" fill={c} />
      {/* Mouth interior */}
      <Path
        d="M 145 77 Q 172 80 184 76 Q 184 89 172 93 Q 157 98 145 89 Q 143 84 145 77 Z"
        fill="#9B2417"
      />
      {/* Upper teeth */}
      <Polygon points="151,77 155,77 153,70" fill="white" />
      <Polygon points="160,76 164,76 162,69" fill="white" />
      <Polygon points="169,75 173,75 171,68" fill="white" />
      {/* Lower jaw */}
      <Path d="M 145 89 Q 162 97 172 94 Q 164 105 145 97 Z" fill={d} />
      {/* Eye */}
      <Circle cx="158" cy="62" r="8" fill="white" />
      <Circle cx="160" cy="63" r="4.5" fill="#2C2C2C" />
      <Circle cx="161" cy="62" r="1.5" fill="white" />
      {/* Tiny arm */}
      <Path d="M 118 96 L 130 106 L 118 108 Z" fill={d} />
      {/* Legs */}
      <Rect x="79" y="132" width="21" height="22" rx="7" fill={d} />
      <Rect x="103" y="134" width="18" height="20" rx="6" fill={d} />
      {/* Feet */}
      <Ellipse cx="90" cy="154" rx="19" ry="7" fill={d} />
      <Ellipse cx="112" cy="154" rx="16" ry="7" fill={d} />
    </Svg>
  );
}
