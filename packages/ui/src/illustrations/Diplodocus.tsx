import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function DiplodocusSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* VERY LONG TAIL — extends right, narrowing to a whip tip */}
      <Path d="M 134,118 Q 162,114 188,122 Q 196,128 192,134 Q 168,128 134,128 Z" fill={color} />
      {/* Tail whip tip */}
      <Polygon points="188,122 200,128 188,130" fill={color} fillOpacity={0.7} />
      {/* Body — compact, in the center */}
      <Ellipse cx={100} cy={118} rx={42} ry={26} fill={color} />
      {/* LONG HORIZONTAL NECK going to the LEFT — distinguishes from Brachiosaurus */}
      <Path d="M 60,108 Q 36,100 14,108 Q 12,116 18,118 Q 40,110 62,118 Z" fill={color} />
      {/* Small head at far left */}
      <Ellipse cx={12} cy={108} rx={10} ry={8} fill={color} />
      {/* Tiny mouth */}
      <Path d="M 4,110 Q 2,114 6,116 Q 10,114 10,112 Z" fill={color} fillOpacity={0.7} />
      {/* Eye */}
      <Circle cx={14} cy={104} r={4} fill="white" />
      <Circle cx={15} cy={105} r={2.5} fill="#1A1A2E" />
      {/* Four legs */}
      <Rect x={62} y={136} width={18} height={18} rx={5} fill={color} />
      <Rect x={85} y={138} width={16} height={16} rx={5} fill={color} fillOpacity={0.85} />
      <Rect x={110} y={138} width={16} height={16} rx={5} fill={color} fillOpacity={0.85} />
      <Rect x={130} y={136} width={18} height={18} rx={5} fill={color} />
      {/* Neck detail — slight arched line to show its horizontal low-slung posture */}
      <Path
        d="M 20,108 Q 38,104 60,108"
        stroke="white"
        strokeWidth={1.5}
        strokeOpacity={0.25}
        fill="none"
      />
    </Svg>
  );
}
