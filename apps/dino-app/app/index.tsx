import { useCallback } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Stack, useFocusEffect, useRouter } from 'expo-router';
import { theme, DinoIllustration } from '@dinasour/ui';
import { DINOSAURS } from '@dinasour/content';
import type { TopicEntry } from '@dinasour/content';
import { eraColor } from '../utils/eraColor';
import { useProgress } from '../hooks/useProgress';
import type { QuizResult } from '../hooks/useProgress';
import { useAllDigProgress } from '../hooks/useAllDigProgress';

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
  digDone,
  onPress,
}: {
  entry: TopicEntry;
  width: number;
  result: QuizResult | undefined;
  digDone: boolean;
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
        <View style={styles.badgeContainer}>
          {result ? <ScoreBadge result={result} /> : null}
          {digDone ? (
            <View style={styles.digBadge} accessibilityLabel="Fossil dig complete">
              <Text style={styles.digBadgeText}>⛏️</Text>
            </View>
          ) : null}
        </View>
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

function ProgressBanner({
  progress,
  completedDigs,
}: {
  progress: Record<string, QuizResult | undefined>;
  completedDigs: Set<string>;
}) {
  const quizCount = DINOSAURS.filter((d) => progress[d.id]).length;
  const digCount = DINOSAURS.filter((d) => completedDigs.has(d.id)).length;
  if (quizCount === 0 && digCount === 0) return null;
  const total = DINOSAURS.length;
  const allQuizDone = quizCount === total;
  const allDigDone = digCount === total;
  return (
    <View
      style={[styles.banner, allQuizDone && allDigDone && styles.bannerComplete]}
      accessible
      accessibilityRole="text"
      accessibilityLabel={`${quizCount} of ${total} quizzes done, ${digCount} of ${total} fossil digs done`}
    >
      <Text style={styles.bannerText}>
        {allQuizDone && allDigDone
          ? 'All quizzes and digs done — dino expert! 🎉'
          : `🧠 ${quizCount}/${total} quizzes · ⛏️ ${digCount}/${total} digs`}
      </Text>
      <View style={styles.bannerRows}>
        <View style={styles.bannerDots}>
          {DINOSAURS.map((d) => (
            <View
              key={`quiz-${d.id}`}
              style={[styles.bannerDot, progress[d.id] && styles.bannerDotFilled]}
            />
          ))}
        </View>
        <View style={styles.bannerDots}>
          {DINOSAURS.map((d) => (
            <View
              key={`dig-${d.id}`}
              style={[styles.bannerDot, styles.bannerDotDig, completedDigs.has(d.id) && styles.bannerDotDigFilled]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const { progress, load: loadQuiz } = useProgress();
  const { completedDigs, load: loadDigs } = useAllDigProgress();

  useFocusEffect(useCallback(() => {
    loadQuiz();
    loadDigs();
  }, [loadQuiz, loadDigs]));

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

        <ProgressBanner progress={progress} completedDigs={completedDigs} />

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
                digDone={completedDigs.has(dino.id)}
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
                digDone={completedDigs.has(dino.id)}
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
  bannerRows: {
    gap: theme.spacing.xs,
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
  bannerDotDig: {
    borderRadius: 2,
  },
  bannerDotDigFilled: {
    backgroundColor: '#7A5C0F',
    borderColor: '#7A5C0F',
  },

  // Badges overlaid on the card image
  badgeContainer: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs,
    gap: 4,
    alignItems: 'flex-end',
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
  digBadge: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: theme.borderRadius.full,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  digBadgeText: {
    fontSize: 13,
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
