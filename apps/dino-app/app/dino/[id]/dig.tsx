import { useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { theme, DinoIllustration } from '@dinasour/ui';
import { DINOSAURS } from '@dinasour/content';
import { eraColor } from '../../../utils/eraColor';
import { useSpeech } from '../../../hooks/useSpeech';
import { useDigProgress } from '../../../hooks/useDigProgress';

const COLS = 5;
const ROWS = 4;
const TOTAL = COLS * ROWS;
const TILE_GAP = 3;
const PADDING = 16;

// Earthy dirt colors that vary slightly per tile for visual texture
const DIRT_SHADES = ['#7A5C0F', '#8B6914', '#6B5012', '#9C7820', '#826010'];

function DirtTile({ size, seed }: { size: number; seed: number }) {
  const bg = DIRT_SHADES[seed % DIRT_SHADES.length];
  const pebble = '#5A420A';
  return (
    <View style={{ width: size, height: size, backgroundColor: bg, borderRadius: 4, overflow: 'hidden' }}>
      <View style={{ position: 'absolute', top: size * 0.18, left: size * 0.28, width: size * 0.14, height: size * 0.10, borderRadius: 3, backgroundColor: pebble, opacity: 0.50 }} />
      <View style={{ position: 'absolute', top: size * 0.55, left: size * 0.62, width: size * 0.10, height: size * 0.08, borderRadius: 2, backgroundColor: pebble, opacity: 0.40 }} />
      <View style={{ position: 'absolute', top: size * 0.68, left: size * 0.16, width: size * 0.12, height: size * 0.08, borderRadius: 2, backgroundColor: pebble, opacity: 0.45 }} />
      <View style={{ position: 'absolute', top: size * 0.30, left: size * 0.72, width: size * 0.08, height: size * 0.06, borderRadius: 2, backgroundColor: pebble, opacity: 0.35 }} />
    </View>
  );
}

export default function DigScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { speak } = useSpeech();
  const { width } = useWindowDimensions();

  const dino = DINOSAURS.find((d) => d.id === id);
  const color = eraColor(dino?.category ?? '');

  const gridW = width - PADDING * 2;
  const tileSize = Math.floor((gridW - TILE_GAP * (COLS - 1)) / COLS);
  const gridH = tileSize * ROWS + TILE_GAP * (ROWS - 1);

  const { revealed, load, revealTile, reset, revealedCount, isComplete, loaded } =
    useDigProgress(id ?? '', TOTAL);

  // Load saved progress on mount, then speak appropriate instruction
  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    if (isComplete) {
      speak(`Amazing! You dug up the ${dino?.name} fossil! You are a real palaeontologist!`, { pitch: 1.2 });
    } else {
      speak('Tap the dirt squares to find the hidden fossil!', { rate: 0.9 });
    }
  }, [loaded]);

  // Celebrate when the last tile is revealed during this session
  useEffect(() => {
    if (!loaded || !isComplete) return;
    speak(`You found it! The ${dino?.name}!`, { pitch: 1.3 });
  }, [isComplete]);

  if (!dino) {
    return (
      <View style={styles.notFound}>
        <Stack.Screen options={{ title: 'Fossil Dig' }} />
        <Text style={styles.notFoundText}>Dinosaur not found!</Text>
      </View>
    );
  }

  // ─── Celebration screen ───────────────────────────────────────────────────
  if (isComplete) {
    return (
      <>
        <Stack.Screen
          options={{
            title: `${dino.name} Found!`,
            headerStyle: { backgroundColor: color },
          }}
        />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.celebrateContainer}
        >
          <View
            style={[styles.fossilFrame, { backgroundColor: color + '18' }]}
            accessible
            accessibilityRole="image"
            accessibilityLabel={`Full illustration of ${dino.name} you just uncovered`}
          >
            <DinoIllustration imageKey={dino.imageKey} width={300} height={240} />
          </View>

          <Text style={[styles.celebrateTitle, { color }]}>You found it!</Text>

          <Text style={styles.celebrateSubtitle}>
            You dug up the {dino.name} fossil!
          </Text>

          <Text style={styles.celebrateBody}>
            You are a real palaeontologist!
          </Text>

          <View style={styles.celebrateButtons}>
            <Pressable
              onPress={() => reset()}
              style={({ pressed }) => [
                styles.celebrateBtn,
                { backgroundColor: color },
                pressed && styles.celebrateBtnPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Dig for this fossil again"
            >
              <Text style={styles.celebrateBtnText}>Dig Again!</Text>
            </Pressable>

            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [
                styles.celebrateBtn,
                styles.celebrateBtnOutline,
                { borderColor: color },
                pressed && styles.celebrateBtnPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={`Back to ${dino.name} details`}
            >
              <Text style={[styles.celebrateBtnText, { color }]}>Back to Dino</Text>
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }

  // ─── Dig screen ───────────────────────────────────────────────────────────
  const pct = revealedCount / TOTAL;

  return (
    <>
      <Stack.Screen
        options={{
          title: `${dino.name} Fossil Dig`,
          headerStyle: { backgroundColor: color },
        }}
      />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
        <Text style={styles.instruction}>Tap the dirt to find the fossil!</Text>

        {/* Progress bar */}
        <View style={styles.progressRow} accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: TOTAL, now: revealedCount }}>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { backgroundColor: color, width: `${pct * 100}%` as any }]} />
          </View>
          <Text style={[styles.progressLabel, { color }]}>
            {revealedCount}/{TOTAL}
          </Text>
        </View>

        {/* Grid */}
        <View style={[styles.gridWrapper, { width: gridW, height: gridH }]}>
          {/* Fossil illustration — revealed as tiles are removed */}
          <View style={[StyleSheet.absoluteFill, { overflow: 'hidden' }]}>
            <DinoIllustration imageKey={dino.imageKey} width={gridW} height={gridH} />
          </View>

          {/* Dirt tile overlay */}
          <View style={[styles.dirtLayer, { width: gridW, height: gridH, gap: TILE_GAP }]}>
            {Array.from({ length: TOTAL }, (_, i) => {
              if (revealed[i]) {
                // Transparent slot — shows fossil beneath
                return <View key={i} style={{ width: tileSize, height: tileSize }} />;
              }
              return (
                <Pressable
                  key={i}
                  onPress={() => revealTile(i)}
                  style={({ pressed }) => [{ opacity: pressed ? 0.65 : 1 }]}
                  accessibilityRole="button"
                  accessibilityLabel={`Dig tile ${i + 1} of ${TOTAL}`}
                >
                  <DirtTile size={tileSize} seed={i} />
                </Pressable>
              );
            })}
          </View>
        </View>

        <Text style={styles.hintText}>
          {revealedCount === 0
            ? 'Tap any square to start digging!'
            : revealedCount < TOTAL / 2
            ? 'Keep going — the fossil is in there!'
            : revealedCount < TOTAL - 3
            ? "Almost there — you're doing great!"
            : 'Just a few more tiles!'}
        </Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    padding: PADDING,
    paddingBottom: theme.spacing.xxxl,
    alignItems: 'center',
    gap: theme.spacing.lg,
  },

  // Instruction
  instruction: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
    textAlign: 'center',
  },
  hintText: {
    fontSize: theme.typography.captionSize,
    color: theme.colors.textMuted,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  // Progress
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    width: '100%',
  },
  progressBarBg: {
    flex: 1,
    height: 12,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.surface,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: theme.borderRadius.full,
  },
  progressLabel: {
    fontSize: theme.typography.captionSize,
    fontWeight: theme.typography.bold,
    minWidth: 44,
    textAlign: 'right',
  },

  // Grid
  gridWrapper: {
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
    ...theme.shadow.card,
  },
  dirtLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  // Celebration
  celebrateContainer: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxxl,
    alignItems: 'center',
    gap: theme.spacing.lg,
  },
  fossilFrame: {
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  celebrateTitle: {
    fontSize: theme.typography.displaySize,
    fontWeight: theme.typography.bold,
    textAlign: 'center',
  },
  celebrateSubtitle: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
    textAlign: 'center',
  },
  celebrateBody: {
    fontSize: theme.typography.bodySize,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
  celebrateButtons: {
    width: '100%',
    gap: theme.spacing.md,
    marginTop: theme.spacing.sm,
  },
  celebrateBtn: {
    minHeight: theme.touchTarget.recommended,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
  },
  celebrateBtnOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  celebrateBtnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  celebrateBtnText: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.white,
    letterSpacing: 0.3,
  },

  // Error
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundText: {
    fontSize: theme.typography.bodySize,
    color: theme.colors.textMuted,
  },
});
