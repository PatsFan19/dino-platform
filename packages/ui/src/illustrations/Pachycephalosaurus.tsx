import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function PachycephalosaurusSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Tail (counterbalance, left) */}
      <Polygon points="10,118 58,96 58,114" fill={color} />
      {/* Body */}
      <Ellipse cx={98} cy={104} rx={44} ry={32} fill={color} />
      {/* Neck */}
      <Polygon points="128,80 146,60 158,70 138,86" fill={color} />
      {/* HEAD — the key feature: very large, dome-shaped */}
      {/* Lower face */}
      <Ellipse cx={158} cy={74} rx={20} ry={14} fill={color} />
      {/* DOME — huge rounded dome on top, much bigger than the face below */}
      <Path
        d="M 134,68 Q 136,38 158,36 Q 182,36 184,60 Q 184,68 178,72 Q 168,60 148,60 Q 138,60 134,68 Z"
        fill={color}
      />
      {/* Dome texture — bumps on dome indicating thickness */}
      <Circle cx={148} cy={48} r={5} fill={color} fillOpacity={0.55} />
      <Circle cx={160} cy={42} r={5} fill={color} fillOpacity={0.55} />
      <Circle cx={172} cy={48} r={5} fill={color} fillOpacity={0.55} />
      {/* Snout */}
      <Path d="M 174,74 Q 186,76 185,82 Q 180,86 174,80 Z" fill={color} fillOpacity={0.8} />
      {/* Eye */}
      <Circle cx={172} cy={68} r={6} fill="white" />
      <Circle cx={174} cy={69} r={3.5} fill="#1A1A2E" />
      {/* Small arms */}
      <Path d="M 130,94 Q 116,104 114,114 L 124,116 Q 126,108 136,100 Z" fill={color} fillOpacity={0.8} />
      {/* Two stout hind legs */}
      <Rect x={76} y={128} width={22} height={28} rx={6} fill={color} />
      <Rect x={102} y={130} width={20} height={26} rx={6} fill={color} fillOpacity={0.85} />
    </Svg>
  );
}
