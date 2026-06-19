import React from 'react';
import { TRexIllustration } from './TRex';
import { TriceratopsIllustration } from './Triceratops';
import { StegosaurusIllustration } from './Stegosaurus';
import { VelociraptorIllustration } from './Velociraptor';
import { BrachiosaurusIllustration } from './Brachiosaurus';
import { PteranodonIllustration } from './Pteranodon';

interface IllustrationProps {
  width?: number;
  height?: number;
}

const REGISTRY: Record<string, React.ComponentType<IllustrationProps>> = {
  'dinosaurs/t-rex':        TRexIllustration,
  'dinosaurs/triceratops':  TriceratopsIllustration,
  'dinosaurs/stegosaurus':  StegosaurusIllustration,
  'dinosaurs/velociraptor': VelociraptorIllustration,
  'dinosaurs/brachiosaurus':BrachiosaurusIllustration,
  'dinosaurs/pteranodon':   PteranodonIllustration,
};

interface DinoIllustrationProps extends IllustrationProps {
  imageKey: string;
}

export function DinoIllustration({ imageKey, width = 200, height = 160 }: DinoIllustrationProps) {
  const Component = REGISTRY[imageKey];
  if (!Component) return null;
  return <Component width={width} height={height} />;
}
