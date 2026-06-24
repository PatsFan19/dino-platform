import { StyleSheet, Text, View } from 'react-native';

interface DinoIllustrationProps {
  imageKey: string;
  width?: number;
  height?: number;
}

const DINO_MAP: Record<string, { emoji: string; bg: string }> = {
  'dinosaurs/t-rex':         { emoji: '🦖', bg: '#E8533F' },
  'dinosaurs/triceratops':   { emoji: '🦕', bg: '#3B82F6' },
  'dinosaurs/stegosaurus':   { emoji: '🦕', bg: '#22C55E' },
  'dinosaurs/velociraptor':  { emoji: '🦖', bg: '#F97316' },
  'dinosaurs/brachiosaurus': { emoji: '🦕', bg: '#A855F7' },
  'dinosaurs/pteranodon':    { emoji: '🦅', bg: '#14B8A6' },
};

export function DinoIllustration({ imageKey, width = 200, height = 160 }: DinoIllustrationProps) {
  const cfg = DINO_MAP[imageKey];
  if (!cfg) return null;
  const fontSize = Math.min(width, height) * 0.55;
  return (
    <View
      style={[styles.box, { width, height, backgroundColor: cfg.bg }]}
      accessible
      accessibilityRole="image"
      accessibilityLabel={`${imageKey.replace('dinosaurs/', '')} illustration`}
    >
      <Text style={[styles.emoji, { fontSize }]}>{cfg.emoji}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  emoji: {
    lineHeight: undefined,
  },
});
