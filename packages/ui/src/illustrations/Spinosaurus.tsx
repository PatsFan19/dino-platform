import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function SpinosaurusSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Tail (left) */}
      <Polygon points="8,116 48,84 48,112" fill={color} />
      {/* Body */}
      <Ellipse cx={92} cy={96} rx={46} ry={32} fill={color} />
      {/* Sail on back — TALL triangular spine fan, the defining feature */}
      <Polygon points="62,70 100,6 138,68" fill={color} fillOpacity={0.85} />
      {/* Sail spines (vertical lines inside the sail) */}
      <Path d="M 76,66 L 88,18" stroke="white" strokeWidth={1.5} strokeOpacity={0.4} fill="none" />
      <Path d="M 88,64 L 98,10" stroke="white" strokeWidth={1.5} strokeOpacity={0.4} fill="none" />
      <Path d="M 100,64 L 108,10" stroke="white" strokeWidth={1.5} strokeOpacity={0.4} fill="none" />
      <Path d="M 112,64 L 120,18" stroke="white" strokeWidth={1.5} strokeOpacity={0.4} fill="none" />
      {/* Neck */}
      <Polygon points="128,70 148,50 162,60 140,76" fill={color} />
      {/* Head — longer and narrower snout than T-Rex (crocodilian) */}
      <Ellipse cx={170} cy={50} rx={30} ry={17} fill={color} />
      {/* Lower jaw (long crocodile snout) */}
      <Path d="M 148,56 Q 178,60 198,68 Q 190,78 148,70 Z" fill={color} fillOpacity={0.75} />
      {/* Eye */}
      <Circle cx={175} cy={43} r={7} fill="white" />
      <Circle cx={177} cy={44} r={4} fill="#1A1A2E" />
      {/* Nostril (near snout tip) */}
      <Circle cx={197} cy={52} r={3} fill={color} fillOpacity={0.55} />
      {/* Teeth */}
      <Polygon points="158,58 161,54 164,58" fill="white" />
      <Polygon points="168,60 171,56 174,60" fill="white" />
      <Polygon points="178,60 181,56 184,60" fill="white" />
      {/* Arms (slightly longer than T-Rex) */}
      <Path d="M 128,84 Q 114,96 112,106 L 122,108 Q 124,100 134,90 Z" fill={color} fillOpacity={0.8} />
      {/* Left leg */}
      <Rect x={68} y={120} width={22} height={34} rx={6} fill={color} />
      {/* Right leg */}
      <Rect x={94} y={122} width={20} height={32} rx={6} fill={color} fillOpacity={0.85} />
    </Svg>
  );
}
