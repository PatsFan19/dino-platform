import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function BrachiosaurusSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Body (at bottom, large) */}
      <Ellipse cx={96} cy={124} rx={50} ry={28} fill={color} />
      {/* Very long neck going UP — the defining feature */}
      {/* Neck as a tapering quadrilateral */}
      <Polygon points="100,98 112,98 124,22 114,18" fill={color} />
      {/* Small head at the very top */}
      <Ellipse cx={118} cy={16} rx={14} ry={10} fill={color} />
      {/* Eye */}
      <Circle cx={124} cy={12} r={5} fill="white" />
      <Circle cx={126} cy={13} r={3} fill="#1A1A2E" />
      {/* Nostril */}
      <Circle cx={130} cy={18} r={2.5} fill={color} fillOpacity={0.5} />
      {/* Tiny mouth */}
      <Path d="M 128,20 Q 134,22 133,26 Q 128,26 128,22 Z" fill={color} fillOpacity={0.7} />
      {/* Tail — short, extends right */}
      <Polygon points="145,118 188,124 145,132" fill={color} />
      {/* Front left leg */}
      <Rect x={60} y={144} width={18} height={14} rx={4} fill={color} />
      {/* Front right leg */}
      <Rect x={82} y={146} width={17} height={12} rx={4} fill={color} fillOpacity={0.85} />
      {/* Back left leg */}
      <Rect x={108} y={146} width={17} height={12} rx={4} fill={color} fillOpacity={0.85} />
      {/* Back right leg */}
      <Rect x={128} y={144} width={18} height={14} rx={4} fill={color} />
      {/* Neck detail — subtle highlight line */}
      <Path
        d="M 103,96 Q 110,60 118,26"
        stroke="white"
        strokeWidth={1.5}
        strokeOpacity={0.25}
        fill="none"
      />
    </Svg>
  );
}
