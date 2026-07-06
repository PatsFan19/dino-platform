import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function PteranodonSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Left wing — large triangle sweeping to the left */}
      <Polygon points="92,96 6,78 92,114" fill={color} />
      {/* Right wing — mirror */}
      <Polygon points="108,96 194,78 108,114" fill={color} />
      {/* Wing membrane detail (lighter shade inner wing) */}
      <Polygon points="92,100 30,82 92,108" fill={color} fillOpacity={0.4} />
      <Polygon points="108,100 170,82 108,108" fill={color} fillOpacity={0.4} />
      {/* Body */}
      <Ellipse cx={100} cy={102} rx={16} ry={20} fill={color} />
      {/* Neck going up-right to head */}
      <Polygon points="108,90 126,72 136,80 116,96" fill={color} />
      {/* Head */}
      <Ellipse cx={138} cy={70} rx={18} ry={12} fill={color} />
      {/* Long backward-pointing CREST — the key Pteranodon feature */}
      <Polygon points="122,62 76,46 124,72" fill={color} fillOpacity={0.85} />
      {/* Long forward beak */}
      <Path d="M 152,68 Q 188,65 188,72 Q 185,76 152,74 Z" fill={color} />
      {/* Eye */}
      <Circle cx={140} cy={65} r={6} fill="white" />
      <Circle cx={142} cy={66} r={3.5} fill="#1A1A2E" />
      {/* Feet hanging below */}
      <Polygon points="94,120 88,138 98,136" fill={color} />
      <Polygon points="106,120 112,138 102,136" fill={color} />
    </Svg>
  );
}
