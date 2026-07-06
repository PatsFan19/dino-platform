import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function TriceratopsSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Short tail left */}
      <Polygon points="10,108 42,100 42,118" fill={color} />
      {/* Body */}
      <Ellipse cx={88} cy={110} rx={52} ry={34} fill={color} />
      {/* Neck connecting to head */}
      <Ellipse cx={140} cy={102} rx={18} ry={20} fill={color} />
      {/* Frill — large decorative plate behind head */}
      <Ellipse cx={148} cy={80} rx={30} ry={26} fill={color} fillOpacity={0.55} />
      {/* Frill detail spots */}
      <Circle cx={138} cy={66} r={4} fill={color} fillOpacity={0.3} />
      <Circle cx={152} cy={60} r={4} fill={color} fillOpacity={0.3} />
      <Circle cx={164} cy={66} r={4} fill={color} fillOpacity={0.3} />
      {/* Head */}
      <Ellipse cx={170} cy={100} rx={24} ry={18} fill={color} />
      {/* Snout/beak */}
      <Ellipse cx={192} cy={106} rx={11} ry={9} fill={color} fillOpacity={0.8} />
      {/* Horn — nose (pointing forward-right) */}
      <Polygon points="192,98 200,80 197,104" fill="white" />
      {/* Horn — above left eye */}
      <Polygon points="174,84 178,64 181,84" fill="white" />
      {/* Horn — above right eye (slightly smaller) */}
      <Polygon points="163,82 167,62 170,82" fill="white" />
      {/* Eye */}
      <Circle cx={178} cy={94} r={6} fill="white" />
      <Circle cx={180} cy={95} r={3.5} fill="#1A1A2E" />
      {/* Four legs */}
      <Rect x={48} y={136} width={18} height={20} rx={5} fill={color} />
      <Rect x={75} y={138} width={18} height={18} rx={5} fill={color} fillOpacity={0.85} />
      <Rect x={106} y={138} width={18} height={18} rx={5} fill={color} fillOpacity={0.85} />
      <Rect x={128} y={136} width={18} height={20} rx={5} fill={color} />
    </Svg>
  );
}
