import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function VelociraptorSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Long balancing tail (extends far left) */}
      <Polygon points="8,120 72,96 72,108" fill={color} />
      {/* Feather tuft on tail */}
      <Polygon points="8,120 14,112 18,122" fill={color} fillOpacity={0.6} />
      {/* Body (smaller and slimmer than T-Rex) */}
      <Ellipse cx={104} cy={100} rx={30} ry={20} fill={color} />
      {/* Feathers on back */}
      <Polygon points="88,82 80,74 96,80" fill={color} fillOpacity={0.7} />
      <Polygon points="100,78 92,70 108,76" fill={color} fillOpacity={0.7} />
      <Polygon points="112,80 104,72 118,78" fill={color} fillOpacity={0.6} />
      {/* Neck */}
      <Polygon points="122,88 144,66 156,74 132,94" fill={color} />
      {/* Head — relatively large for a small body */}
      <Ellipse cx={158} cy={62} rx={22} ry={16} fill={color} />
      {/* Lower jaw */}
      <Path d="M 142,68 Q 162,72 178,68 Q 176,78 142,76 Z" fill={color} fillOpacity={0.75} />
      {/* Teeth */}
      <Polygon points="150,68 153,64 156,68" fill="white" />
      <Polygon points="160,68 163,64 166,68" fill="white" />
      {/* Eye */}
      <Circle cx={162} cy={56} r={7} fill="white" />
      <Circle cx={164} cy={57} r={4} fill="#1A1A2E" />
      {/* Nostril */}
      <Circle cx={178} cy={62} r={2.5} fill={color} fillOpacity={0.5} />
      {/* Arms (bigger relative to body than T-Rex) */}
      <Path d="M 126,96 Q 114,106 110,114 L 118,116 Q 122,108 130,100 Z" fill={color} fillOpacity={0.8} />
      {/* Clawed hand */}
      <Polygon points="110,114 104,120 112,118" fill={color} />
      {/* Right leg (weight-bearing) */}
      <Rect x={100} y={115} width={18} height={36} rx={5} fill={color} />
      {/* Left leg (forward stride) */}
      <Path d="M 118,110 Q 130,120 128,148 L 140,148 Q 140,118 126,108 Z" fill={color} fillOpacity={0.85} />
      {/* SICKLE CLAW on right foot — raised off ground, pointing up */}
      <Path d="M 102,118 Q 90,108 86,114 Q 88,120 100,122 Z" fill="white" />
      {/* Foot (left leg) */}
      <Polygon points="128,148 122,156 136,154" fill={color} />
      <Polygon points="134,148 130,156 142,154" fill={color} />
    </Svg>
  );
}
