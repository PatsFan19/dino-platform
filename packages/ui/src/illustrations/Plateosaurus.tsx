import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

// Plateosaurus: one of the first large dinosaurs — medium-sized prosauropod,
// bulkier than Coelophysis, longer neck than T-Rex, plant-eater
export function PlateosaurusSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Medium-length tail (left) */}
      <Polygon points="10,114 54,88 54,110" fill={color} />
      {/* Body — bulkier than Coelophysis, this is a larger animal */}
      <Ellipse cx={96} cy={102} rx={44} ry={30} fill={color} />
      {/* Neck — medium-long, angled up-right (prosauropod neck) */}
      <Polygon points="124,78 146,50 158,60 134,84" fill={color} />
      {/* Head — small relative to body (plant-eater) */}
      <Ellipse cx={158} cy={46} rx={20} ry={14} fill={color} />
      {/* Lower jaw */}
      <Path d="M 144,52 Q 168,56 174,52 Q 172,62 144,60 Z" fill={color} fillOpacity={0.75} />
      {/* Eye */}
      <Circle cx={162} cy={40} r={6} fill="white" />
      <Circle cx={164} cy={41} r={3.5} fill="#1A1A2E" />
      {/* Nostril */}
      <Circle cx={176} cy={48} r={2.5} fill={color} fillOpacity={0.5} />
      {/* Arms — medium length, used to reach plants */}
      <Path d="M 126,88 Q 112,100 110,112 L 120,114 Q 122,104 132,94 Z" fill={color} fillOpacity={0.8} />
      {/* Clawed hand */}
      <Polygon points="110,112 104,118 112,120" fill={color} fillOpacity={0.7} />
      {/* Two hind legs — powerful, can carry the body upright */}
      <Rect x={72} y={124} width={22} height={30} rx={6} fill={color} />
      <Rect x={98} y={126} width={20} height={28} rx={6} fill={color} fillOpacity={0.85} />
      {/* Foot detail */}
      <Polygon points="72,152 68,160 80,156" fill={color} />
      <Polygon points="86,152 83,160 94,156" fill={color} />
      <Polygon points="98,152 94,160 106,156" fill={color} />
    </Svg>
  );
}
