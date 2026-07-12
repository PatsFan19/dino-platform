import { StyleSheet, View } from 'react-native';
import TRexSVG from '../../assets/dinosaurs/selected/t-rex.svg';
import TriceratopsSVG from '../../assets/dinosaurs/selected/triceratops.svg';
import StegosaurusSVG from '../../assets/dinosaurs/selected/stegosaurus.svg';
import VelociraptorSVG from '../../assets/dinosaurs/selected/velociraptor.svg';
import BrachiosaurusSVG from '../../assets/dinosaurs/selected/brachiosaurus.svg';
import PteranodonSVG from '../../assets/dinosaurs/selected/pteranodon.svg';
import SpinosaurusSVG from '../../assets/dinosaurs/selected/spinosaurus.svg';
import AnkylosaurusSVG from '../../assets/dinosaurs/selected/ankylosaurus.svg';
import ParasaurolophusSVG from '../../assets/dinosaurs/selected/parasaurolophus.svg';
import PachycephalosaurusSVG from '../../assets/dinosaurs/selected/pachycephalosaurus.svg';
import DiplodocusSVG from '../../assets/dinosaurs/selected/diplodocus.svg';
import CoelophysisSVG from '../../assets/dinosaurs/selected/coelophysis.svg';
import PlateosaurusSVG from '../../assets/dinosaurs/selected/plateosaurus.svg';

interface DinoIllustrationProps {
  imageKey: string;
  width?: number;
  height?: number;
}

type SVGComponent = React.ComponentType<{ width: number; height: number }>;

const SVG_MAP: Record<string, SVGComponent> = {
  'dinosaurs/t-rex':              TRexSVG,
  'dinosaurs/triceratops':        TriceratopsSVG,
  'dinosaurs/stegosaurus':        StegosaurusSVG,
  'dinosaurs/velociraptor':       VelociraptorSVG,
  'dinosaurs/brachiosaurus':      BrachiosaurusSVG,
  'dinosaurs/pteranodon':         PteranodonSVG,
  'dinosaurs/spinosaurus':        SpinosaurusSVG,
  'dinosaurs/ankylosaurus':       AnkylosaurusSVG,
  'dinosaurs/parasaurolophus':    ParasaurolophusSVG,
  'dinosaurs/pachycephalosaurus': PachycephalosaurusSVG,
  'dinosaurs/diplodocus':         DiplodocusSVG,
  'dinosaurs/coelophysis':        CoelophysisSVG,
  'dinosaurs/plateosaurus':       PlateosaurusSVG,
};

export function DinoIllustration({
  imageKey,
  width = 200,
  height = 160,
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
      <SVGComponent width={width} height={height} />
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
