import { Platform, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { theme, DinoIllustration } from '@dinasour/ui';
import { DINOSAURS } from '@dinasour/content';
import type { TopicEntry } from '@dinasour/content';
import { eraColor } from '../utils/eraColor';

const IS_WEB = Platform.OS === 'web';
const WEB_CARD_WIDTH = 220;

function DinoCard({
  entry,
  width,
  onPress,
}: {
  entry: TopicEntry;
  width: number;
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

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const router = useRouter();
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
    marginBottom: theme.spacing.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  // Web-only horizontal carousel — extends to screen edges by cancelling container padding
  horizontalScroller: {
    marginHorizontal: -theme.spacing.lg,
  },
  horizontalList: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.sm,
    gap: theme.spacing.md,
  },
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
