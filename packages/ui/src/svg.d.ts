declare module '*.svg' {
  import React from 'react';
  import type { SvgProps } from 'react-native-svg';
  const SVGComponent: React.FC<SvgProps>;
  export default SVGComponent;
}
