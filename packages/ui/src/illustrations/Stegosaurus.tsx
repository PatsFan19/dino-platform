import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

interface Props { width?: number; height?: number; }

const c = '#5CBC6E'; // leaf green
const d = '#3DA44E'; // dark accent

export function StegosaurusIllustration({ width = 200, height = 160 }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 160">
      <Rect x="0" y="0" width="200" height="160" fill="#EEFAF2" />
      {/* Tail body */}
      <Path d="M 48 112 Q 22 102 10 122 L 46 120 Z" fill={c} />
      {/* Thagomizer — 4 spikes at tail tip, alternating up/down */}
      <Polygon points="32,108 38,108 35,84"  fill={d} />
      <Polygon points="26,113 32,113 29,136" fill={d} />
      <Polygon points="20,110 26,110 23,86"  fill={d} />
      <Polygon points="14,116 20,116 17,140" fill={d} />
      {/* Body */}
      <Ellipse cx="96" cy="114" rx="56" ry="26" fill={c} />
      {/* Back plates — 5 triangles, tallest in middle */}
      <Polygon points="57,90  69,90  63,64" fill={d} />
      <Polygon points="73,84  86,84  79,51" fill={d} />
      <Polygon points="89,80 102,80  95,44" fill={d} />
      <Polygon points="104,82 117,82 110,56" fill={d} />
      <Polygon points="119,86 132,86 125,65" fill={d} />
      {/* Small head */}
      <Ellipse cx="148" cy="106" rx="19" ry="14" fill={c} />
      {/* Mouth */}
      <Path d="M 156 110 Q 163 114 165 112 Q 163 118 156 115 Z" fill={d} />
      {/* Eye */}
      <Circle cx="153" cy="100" r="6" fill="white" />
      <Circle cx="154" cy="101" r="3.5" fill="#2C2C2C" />
      <Circle cx="155" cy="100" r="1.5" fill="white" />
      {/* Legs (4) */}
      <Rect x="72"  y="136" width="16" height="21" rx="5" fill={d} />
      <Rect x="90"  y="138" width="15" height="19" rx="5" fill={d} />
      <Rect x="108" y="136" width="16" height="21" rx="5" fill={d} />
      <Rect x="124" y="138" width="14" height="19" rx="5" fill={d} />
      {/* Feet */}
      <Ellipse cx="80"  cy="157" rx="14" ry="6" fill={d} />
      <Ellipse cx="97"  cy="157" rx="13" ry="6" fill={d} />
      <Ellipse cx="116" cy="157" rx="14" ry="6" fill={d} />
      <Ellipse cx="131" cy="157" rx="12" ry="6" fill={d} />
    </Svg>
  );
}
