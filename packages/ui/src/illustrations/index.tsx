import { StyleSheet, View } from 'react-native';
import { TRexSVG } from './TRex';
import { TriceratopsSVG } from './Triceratops';
import { StegosaurusSVG } from './Stegosaurus';
import { VelociraptorSVG } from './Velociraptor';
import { BrachiosaurusSVG } from './Brachiosaurus';
import { PteranodonSVG } from './Pteranodon';
import { SpinosaurusSVG } from './Spinosaurus';
import { AnkylosaurusSVG } from './Ankylosaurus';
import { ParasaurolophsusSVG } from './Parasaurolophus';
import { PachycephalosaurusSVG } from './Pachycephalosaurus';
import { DiplodocusSVG } from './Diplodocus';
import { CoelophysisSVG } from './Coelophysis';
import { PlateosaurusSVG } from './Plateosaurus';

interface DinoIllustrationProps {
  imageKey: string;
  width?: number;
  height?: number;
  /** Era color used as the dino fill — defaults to brand green. */
  color?: string;
}

type SVGComponent = (props: { color: string; width: number; height: number }) => React.JSX.Element | null;

const SVG_MAP: Record<string, SVGComponent> = {
  'dinosaurs/t-rex':              TRexSVG,
  'dinosaurs/triceratops':        TriceratopsSVG,
  'dinosaurs/stegosaurus':        StegosaurusSVG,
  'dinosaurs/velociraptor':       VelociraptorSVG,
  'dinosaurs/brachiosaurus':      BrachiosaurusSVG,
  'dinosaurs/pteranodon':         PteranodonSVG,
  'dinosaurs/spinosaurus':        SpinosaurusSVG,
  'dinosaurs/ankylosaurus':       AnkylosaurusSVG,
  'dinosaurs/parasaurolophus':    ParasaurolophsusSVG,
  'dinosaurs/pachycephalosaurus': PachycephalosaurusSVG,
  'dinosaurs/diplodocus':         DiplodocusSVG,
  'dinosaurs/coelophysis':        CoelophysisSVG,
  'dinosaurs/plateosaurus':       PlateosaurusSVG,
};

const DEFAULT_COLOR = '#1A8C4E';

export function DinoIllustration({
  imageKey,
  width = 200,
  height = 160,
  color = DEFAULT_COLOR,
}: DinoIllustrationProps) {
  const SVGComponent = SVG_MAP[imageKey];
  if (!SVGComponent) return null;

  return (
    <View
      style={[styles.container, { width, height }]}
      accessible
      accessibilityRole="image"
      accessibilityLabel={`${imageKey.replace('dinosaurs/', '')} illustration`}
    >
      <SVGComponent color={color} width={width} height={height} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
