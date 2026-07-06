import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function StegosaurusSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Tail (left) with thagomizer spikes */}
      <Path d="M 42,100 Q 25,98 10,110 Q 12,118 42,116 Z" fill={color} />
      {/* Thagomizer — 4 spikes at tail tip */}
      <Polygon points="13,108 6,94 20,100" fill="white" />
      <Polygon points="11,110 3,104 10,118" fill="white" />
      <Polygon points="13,114 5,120 20,118" fill="white" />
      <Polygon points="15,107 10,95 24,102" fill="white" fillOpacity={0.7} />
      {/* Body */}
      <Ellipse cx={100} cy={114} rx={58} ry={30} fill={color} />
      {/* Neck */}
      <Ellipse cx={156} cy={106} rx={16} ry={16} fill={color} />
      {/* Small head (Stegosaurus had a tiny brain and small head) */}
      <Ellipse cx={175} cy={114} rx={18} ry={14} fill={color} />
      {/* Mouth/snout */}
      <Path d="M 185,112 Q 196,114 195,120 Q 190,124 185,118 Z" fill={color} fillOpacity={0.8} />
      {/* Eye */}
      <Circle cx={180} cy={108} r={5} fill="white" />
      <Circle cx={181} cy={109} r={3} fill="#1A1A2E" />
      {/* Back plates — 5 triangular plates running along spine */}
      <Polygon points="66,100 72,62 78,100" fill={color} fillOpacity={0.8} />
      <Polygon points="80,96 87,54 94,96" fill={color} fillOpacity={0.85} />
      <Polygon points="95,84 102,46 109,84" fill={color} />
      <Polygon points="110,88 117,52 124,88" fill={color} fillOpacity={0.85} />
      <Polygon points="124,94 130,62 136,94" fill={color} fillOpacity={0.8} />
      {/* Four legs */}
      <Rect x={54} y={136} width={18} height={20} rx={5} fill={color} />
      <Rect x={78} y={138} width={18} height={18} rx={5} fill={color} fillOpacity={0.85} />
      <Rect x={108} y={138} width={18} height={18} rx={5} fill={color} fillOpacity={0.85} />
      <Rect x={130} y={136} width={18} height={20} rx={5} fill={color} />
    </Svg>
  );
}
