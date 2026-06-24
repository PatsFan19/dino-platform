import React, { Suspense } from 'react';
import { View } from 'react-native';

interface IllustrationProps {
  width?: number;
  height?: number;
}

// Each entry is a React.lazy() wrapper.
// The dynamic import() is NOT evaluated until the component first renders,
// which defers the `import Svg from 'react-native-svg'` inside each file
// until after the New Architecture native runtime is fully initialised.
// Calling React.lazy() itself at module level is safe — it only stores
// a factory function; it never calls it until render time.
const REGISTRY: Record<string, React.LazyExoticComponent<React.ComponentType<IllustrationProps>>> = {
  'dinosaurs/t-rex':
    React.lazy(() => import('./TRex').then(m => ({ default: m.TRexIllustration }))),
  'dinosaurs/triceratops':
    React.lazy(() => import('./Triceratops').then(m => ({ default: m.TriceratopsIllustration }))),
  'dinosaurs/stegosaurus':
    React.lazy(() => import('./Stegosaurus').then(m => ({ default: m.StegosaurusIllustration }))),
  'dinosaurs/velociraptor':
    React.lazy(() => import('./Velociraptor').then(m => ({ default: m.VelociraptorIllustration }))),
  'dinosaurs/brachiosaurus':
    React.lazy(() => import('./Brachiosaurus').then(m => ({ default: m.BrachiosaurusIllustration }))),
  'dinosaurs/pteranodon':
    React.lazy(() => import('./Pteranodon').then(m => ({ default: m.PteranodonIllustration }))),
};

interface DinoIllustrationProps extends IllustrationProps {
  imageKey: string;
}

export function DinoIllustration({ imageKey, width = 200, height = 160 }: DinoIllustrationProps) {
  const Component = REGISTRY[imageKey];
  if (!Component) return null;
  // Suspense boundary lives here so screens need no changes.
  // Fallback is a transparent View with identical dimensions to prevent
  // layout shift while the SVG module initialises.
  return (
    <Suspense fallback={<View style={{ width, height }} />}>
      <Component width={width} height={height} />
    </Suspense>
  );
}
