import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { width?: number; height?: number; }

const c = '#F5A623'; // amber
const d = '#D4841A'; // dark accent

export function VelociraptorIllustration({ width = 200, height = 160 }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 160">
      <Rect x="0" y="0" width="200" height="160" fill="#FEF6E6" />
      {/* Stiff horizontal tail for balance */}
      <Path d="M 74 92 Q 38 82 12 88 Q 36 94 72 98 Z" fill={c} />
      {/* Body (smaller and forward-leaning) */}
      <Ellipse cx="104" cy="96" rx="32" ry="22" fill={c} />
      {/* Neck */}
      <Path d="M 126 80 Q 136 88 122 96 L 132 92 Q 142 82 140 76 Z" fill={c} />
      {/* Head */}
      <Ellipse cx="146" cy="68" rx="22" ry="17" fill={c} />
      {/* Snout extension */}
      <Path d="M 140 72 Q 164 64 172 67 Q 170 74 140 74 Z" fill={c} />
      {/* Mouth line */}
      <Path d="M 140 74 Q 160 77 170 74 Q 168 81 160 80 Q 148 80 140 76 Z" fill={d} />
      {/* Eye (big and friendly) */}
      <Circle cx="150" cy="62" r="8" fill="white" />
      <Circle cx="152" cy="63" r="4.5" fill="#2C2C2C" />
      <Circle cx="153" cy="62" r="1.5" fill="white" />
      {/* Small feathered arms */}
      <Path d="M 118 90 L 132 100 L 124 104 Q 116 102 116 94 Z" fill={d} />
      {/* Feather detail on arm */}
      <Path d="M 124 104 L 134 108" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <Path d="M 122 102 L 130 110" stroke={c} strokeWidth="2" strokeLinecap="round" />
      {/* Left leg */}
      <Rect x="92"  y="114" width="14" height="24" rx="5" fill={d} />
      {/* Right leg */}
      <Rect x="110" y="116" width="13" height="22" rx="5" fill={d} />
      {/* Left foot */}
      <Ellipse cx="99"  cy="138" rx="14" ry="6" fill={d} />
      {/* Right foot */}
      <Ellipse cx="116" cy="138" rx="13" ry="6" fill={d} />
      {/* Killing claw on left foot — raised sickle claw */}
      <Path
        d="M 96 134 Q 88 120 96 114 L 100 116 Q 94 122 100 134 Z"
        fill="#B56E10"
      />
    </Svg>
  );
}
