import { useCallback } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Stack, useFocusEffect, useRouter } from 'expo-router';
import { theme, DinoIllustration } from '@dinasour/ui';
import { DINOSAURS } from '@dinasour/content';
import type { TopicEntry } from '@dinasour/content';
import { eraColor } from '../utils/eraColor';
import { useProgress } from '../hooks/useProgress';
import type { QuizResult } from '../hooks/useProgress';

const IS_WEB = Platform.OS === 'web';
const WEB_CARD_WIDTH = 220;

function ScoreBadge({ result }: { result: QuizResult }) {
  const isPerfect = result.score === result.total;
  return (
    <View
      style={[styles.badge, { backgroundColor: isPerfect ? '#27AE60' : '#F5A623' }]}
      accessibilityLabel={`Quiz score: ${result.score} out of ${result.total}`}
    >
      <Text style={styles.badgeText}>{result.score}/{result.total}</Text>
    </View>
  );
}

function DinoCard({
  entry,
  width,
  result,
  onPress,
}: {
  entry: TopicEntry;
  width: number;
  result: QuizResult | undefined;
  onPress: () => void;
}) {
  const color = eraColor(entry.category);
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, { width }, pressed && styles.cardPressed]}
      accessibilityRole="button"
      accessibilityLabel={`${entry.name}, ${entry.category} period. Tap to learn more.`}
    >
      <View style={[styles.imagePlaceholder, { backgroundColor: color + '18' }]}>
        <DinoIllustration imageKey={entry.imageKey} width={width} height={100} />
        {result ? (
          <View style={styles.badgeContainer}>
            <ScoreBadge result={result} />
          </View>
        ) : null}
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardName} numberOfLines={2}>
          {entry.name}
        </Text>
        <Text style={styles.pronunciation} numberOfLines={1}>
          {entry.pronunciation}
        </Text>
        <View style={[styles.eraBadge, { backgroundColor: color + '22', borderColor: color }]}>
          <Text style={[styles.eraLabel, { color }]}>{entry.category}</Text>
        </View>
      </View>
    </Pressable>
  );
}

function ProgressBanner({ completed, total }: { completed: number; total: number }) {
  if (completed === 0) return null;
  const allDone = completed === total;
  return (
    <View
      style={[styles.banner, allDone && styles.bannerComplete]}
      accessible
      accessibilityRole="text"
      accessibilityLabel={`You have completed ${completed} out of ${total} quizzes`}
    >
      <Text style={styles.bannerText}>
        {allDone
          ? 'You completed all quizzes — dino expert!'
          : `${completed} of ${total} quizzes done`}
      </Text>
      <View style={styles.bannerDots}>
        {DINOSAURS.map((d) => (
          <View
            key={d.id}
            style={[styles.bannerDot, completed > DINOSAURS.indexOf(d) && styles.bannerDotFilled]}
          />
        ))}
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const { progress, load, completedCount } = useProgress();

  // Refresh whenever the home screen comes back into focus
  useFocusEffect(useCallback(() => { load(); }, [load]));

  const cardWidth = IS_WEB
    ? WEB_CARD_WIDTH
    : (width - theme.spacing.lg * 2 - theme.spacing.md) / 2;

  return (
    <>
      <Stack.Screen options={{ title: 'Dino World' }} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        accessibilityLabel="Dino World home screen"
      >
        <Text style={styles.heading} accessibilityRole="header">
          Pick a Dinosaur!
        </Text>

        <ProgressBanner completed={completedCount} total={DINOSAURS.length} />

        {IS_WEB ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroller}
            contentContainerStyle={styles.horizontalList}
            accessibilityLabel="Dinosaur card carousel, scroll left and right"
          >
            {DINOSAURS.map((dino) => (
              <DinoCard
                key={dino.id}
                entry={dino}
                width={WEB_CARD_WIDTH}
                result={progress[dino.id]}
                onPress={() => router.push(`/dino/${dino.id}`)}
              />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.grid}>
            {DINOSAURS.map((dino) => (
              <DinoCard
                key={dino.id}
                entry={dino}
                width={cardWidth}
                result={progress[dino.id]}
                onPress={() => router.push(`/dino/${dino.id}`)}
              />
            ))}
          </View>
        )}
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
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxxl,
  },
  heading: {
    fontSize: theme.typography.headingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },

  // Progress banner
  banner: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  bannerComplete: {
    backgroundColor: '#E8F8EE',
  },
  bannerText: {
    fontSize: theme.typography.captionSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
  },
  bannerDots: {
    flexDirection: 'row',
    gap: theme.spacing.xs,
  },
  bannerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.background,
    borderWidth: 1.5,
    borderColor: theme.colors.textMuted,
  },
  bannerDotFilled: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },

  // Score badge overlaid on the card image
  badgeContainer: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs,
  },
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.full,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: theme.typography.bold,
    color: theme.colors.white,
  },

  // Layout
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  horizontalScroller: {
    marginHorizontal: -theme.spacing.lg,
  },
  horizontalList: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.sm,
    gap: theme.spacing.md,
  },

  // Cards
  card: {
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    ...theme.shadow.card,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  imagePlaceholder: {
    height: 100,
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInfo: {
    padding: theme.spacing.md,
    gap: theme.spacing.xs,
  },
  cardName: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
  },
  pronunciation: {
    fontSize: theme.typography.captionSize,
    color: theme.colors.textMuted,
    fontStyle: 'italic',
  },
  eraBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 3,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    marginTop: theme.spacing.xs,
  },
  eraLabel: {
    fontSize: 12,
    fontWeight: theme.typography.bold,
    letterSpacing: 0.5,
  },
});
