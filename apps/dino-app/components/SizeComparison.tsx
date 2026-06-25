import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@dinasour/ui';

const MAX_BOX_H = 100; // tallest box height in pts

interface Config { objEmoji: string; objLabel: string; dinoFrac: number; objFrac: number; }

const CONFIGS: Record<string, Config> = {
  't-rex':         { objEmoji: '🚌', objLabel: 'School Bus', dinoFrac: 1.00, objFrac: 0.53 },
  'brachiosaurus': { objEmoji: '🚌', objLabel: 'School Bus', dinoFrac: 1.00, objFrac: 0.25 },
  'triceratops':   { objEmoji: '🚗', objLabel: 'Car',         dinoFrac: 1.00, objFrac: 0.50 },
  'stegosaurus':   { objEmoji: '🚌', objLabel: 'School Bus',   dinoFrac: 1.00, objFrac: 0.80 },
  'velociraptor':  { objEmoji: '🧑', objLabel: 'Person',      dinoFrac: 0.29, objFrac: 1.00 },
  'pteranodon':    { objEmoji: '🚗', objLabel: 'Car',          dinoFrac: 1.00, objFrac: 0.60 },
};

const DINO_EMOJIS: Record<string, string> = {
  't-rex': '🦖', 'triceratops': '🦕', 'stegosaurus': '🦕',
  'velociraptor': '🦖', 'brachiosaurus': '🦕', 'pteranodon': '🦅',
};

interface SizeComparisonProps {
  dinoId: string;
  dinoName: string;
  color: string;
}

export function SizeComparison({ dinoId, dinoName, color }: SizeComparisonProps) {
  const cfg = CONFIGS[dinoId];
  if (!cfg) return null;

  const dinoH = Math.round(cfg.dinoFrac * MAX_BOX_H);
  const objH  = Math.round(cfg.objFrac  * MAX_BOX_H);
  const dinoEmoji = DINO_EMOJIS[dinoId] ?? '🦕';

  return (
    <View
      style={styles.wrapper}
      accessible
      accessibilityLabel={`Size comparison: ${dinoName} next to a ${cfg.objLabel}`}
    >
      {/* Bottom-aligned so bases line up like they are standing on the ground */}
      <View style={styles.row}>
        <View style={styles.col}>
          <View style={[styles.box, { height: dinoH, backgroundColor: color + '28', borderColor: color }]}>
            <Text style={[styles.boxEmoji, { fontSize: dinoH * 0.52 }]}>{dinoEmoji}</Text>
          </View>
          <Text style={[styles.label, { color }]}>{dinoName}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.col}>
          <View style={[styles.box, { height: objH, backgroundColor: theme.colors.surface, borderColor: theme.colors.textMuted }]}>
            <Text style={[styles.boxEmoji, { fontSize: objH * 0.52 }]}>{cfg.objEmoji}</Text>
          </View>
          <Text style={styles.label}>{cfg.objLabel}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: theme.spacing.lg,
  },
  col: {
    alignItems: 'center',
    gap: theme.spacing.xs,
    minWidth: 80,
  },
  box: {
    width: 80,
    borderRadius: theme.borderRadius.md,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxEmoji: {
    textAlign: 'center',
  },
  label: {
    fontSize: theme.typography.captionSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
  divider: {
    width: 1,
    height: MAX_BOX_H,
    backgroundColor: theme.colors.surface,
    marginBottom: theme.spacing.xl,
  },
});
