import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { color: string; width: number; height: number }

export function AnkylosaurusSVG({ color, width, height }: Props) {
  return (
    <Svg viewBox="0 0 200 160" width={width} height={height}>
      {/* Tail — narrow strip leading to the CLUB */}
      <Path d="M 38,110 Q 22,110 14,116 Q 14,122 22,122 Q 30,122 38,116 Z" fill={color} />
      {/* TAIL CLUB — the defining feature, a big round knob */}
      <Circle cx={10} cy={116} r={14} fill={color} />
      <Circle cx={10} cy={116} r={8} fill={color} fillOpacity={0.6} />
      {/* Very wide, flat body — Ankylosaurus was like a living tank */}
      <Ellipse cx={108} cy={116} rx={66} ry={30} fill={color} />
      {/* Armored back — rows of bony scutes (lighter bumps on top) */}
      <Circle cx={68} cy={92} r={8} fill={color} fillOpacity={0.7} />
      <Circle cx={86} cy={86} r={9} fill={color} fillOpacity={0.75} />
      <Circle cx={106} cy={84} r={10} fill={color} fillOpacity={0.8} />
      <Circle cx={126} cy={86} r={9} fill={color} fillOpacity={0.75} />
      <Circle cx={144} cy={90} r={8} fill={color} fillOpacity={0.7} />
      {/* Side spikes */}
      <Polygon points="60,110 48,98 58,104" fill={color} fillOpacity={0.6} />
      <Polygon points="60,124 48,132 58,120" fill={color} fillOpacity={0.6} />
      <Polygon points="152,110 164,98 154,104" fill={color} fillOpacity={0.6} />
      <Polygon points="152,124 164,132 154,120" fill={color} fillOpacity={0.6} />
      {/* Wide, low head — small relative to body */}
      <Ellipse cx={168} cy={116} rx={24} ry={16} fill={color} />
      {/* Head armoring knobs */}
      <Circle cx={164} cy={104} r={5} fill={color} fillOpacity={0.7} />
      <Circle cx={176} cy={102} r={5} fill={color} fillOpacity={0.7} />
      {/* Eye */}
      <Circle cx={178} cy={110} r={5} fill="white" />
      <Circle cx={180} cy={111} r={3} fill="#1A1A2E" />
      {/* Snout */}
      <Path d="M 188,114 Q 198,116 197,122 Q 192,124 188,118 Z" fill={color} fillOpacity={0.8} />
      {/* Four SHORT stubby legs */}
      <Rect x={62} y={138} width={20} height={16} rx={5} fill={color} />
      <Rect x={86} y={140} width={18} height={14} rx={5} fill={color} fillOpacity={0.85} />
      <Rect x={114} y={140} width={18} height={14} rx={5} fill={color} fillOpacity={0.85} />
      <Rect x={136} y={138} width={20} height={16} rx={5} fill={color} />
    </Svg>
  );
}
