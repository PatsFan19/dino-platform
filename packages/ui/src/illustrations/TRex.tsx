import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function TRexSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Tail sweeping left */}
      <Polygon points="8,118 48,82 48,114" fill={color} />
      {/* Body */}
      <Ellipse cx={92} cy={96} rx={46} ry={32} fill={color} />
      {/* Neck */}
      <Polygon points="125,72 148,48 163,58 138,78" fill={color} />
      {/* Upper jaw */}
      <Path d="M 148,48 Q 172,24 197,38 Q 200,52 190,60 Q 172,64 148,60 Z" fill={color} />
      {/* Lower jaw — open mouth */}
      <Path d="M 150,60 Q 178,63 193,75 Q 186,83 150,74 Z" fill={color} fillOpacity={0.75} />
      {/* Tiny arm */}
      <Polygon points="122,84 107,94 113,103 126,96" fill={color} fillOpacity={0.8} />
      {/* Teeth */}
      <Polygon points="162,62 165,58 168,62" fill="white" />
      <Polygon points="171,63 174,59 177,63" fill="white" />
      <Polygon points="180,63 183,59 186,63" fill="white" />
      {/* Left leg */}
      <Rect x={70} y={120} width={22} height={34} rx={6} fill={color} />
      {/* Right leg */}
      <Rect x={96} y={123} width={20} height={31} rx={6} fill={color} fillOpacity={0.85} />
      {/* Foot claws */}
      <Polygon points="70,152 65,160 74,155" fill={color} />
      <Polygon points="84,153 81,161 90,156" fill={color} />
      <Polygon points="96,151 92,160 101,155" fill={color} />
      {/* Eye white */}
      <Circle cx={178} cy={40} r={8} fill="white" />
      {/* Eye pupil */}
      <Circle cx={180} cy={42} r={5} fill="#1A1A2E" />
      {/* Nostril */}
      <Circle cx={194} cy={52} r={3} fill={color} fillOpacity={0.55} />
    </Svg>
  );
}
