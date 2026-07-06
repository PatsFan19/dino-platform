import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function ParasaurolophsusSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Tail (left) */}
      <Polygon points="8,116 52,90 52,112" fill={color} />
      {/* Body */}
      <Ellipse cx={96} cy={104} rx={48} ry={34} fill={color} />
      {/* Neck */}
      <Polygon points="130,82 150,56 164,66 142,88" fill={color} />
      {/* Head */}
      <Ellipse cx={162} cy={56} rx={22} ry={16} fill={color} />
      {/* HOLLOW CREST — the defining feature, a long curved tube sweeping BACKWARD from head */}
      {/* Crest base connects at back of skull, arches up and backward */}
      <Path
        d="M 150,44 Q 128,18 86,24 Q 78,30 82,38 Q 118,34 140,56 Z"
        fill={color}
        fillOpacity={0.85}
      />
      {/* Crest tip highlight to show the tube shape */}
      <Path
        d="M 150,46 Q 130,22 90,28 Q 86,32 90,36 Q 126,32 146,54 Z"
        fill="white"
        fillOpacity={0.2}
      />
      {/* Duck-billed mouth */}
      <Path d="M 178,58 Q 192,58 192,66 Q 188,72 178,68 Z" fill={color} fillOpacity={0.8} />
      {/* Eye */}
      <Circle cx={166} cy={50} r={6} fill="white" />
      <Circle cx={168} cy={51} r={3.5} fill="#1A1A2E" />
      {/* Nostril */}
      <Circle cx={180} cy={60} r={2.5} fill={color} fillOpacity={0.5} />
      {/* Small front arms */}
      <Path d="M 132,94 Q 118,104 116,114 L 126,116 Q 128,108 138,100 Z" fill={color} fillOpacity={0.8} />
      {/* Two large hind legs */}
      <Rect x={74} y={130} width={22} height={26} rx={6} fill={color} />
      <Rect x={100} y={132} width={20} height={24} rx={6} fill={color} fillOpacity={0.85} />
    </Svg>
  );
}
