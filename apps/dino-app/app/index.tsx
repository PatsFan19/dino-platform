import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Stack } from 'expo-router';
import { theme } from '@dinasour/ui';
import { DINOSAURS } from '@dinasour/content';
import type { TopicEntry } from '@dinasour/content';

const ERA_COLORS: Record<string, string> = {
  Jurassic: '#27AE60',
  Cretaceous: '#D35400',
  Triassic: '#8E44AD',
};

function eraColor(category: string): string {
  return ERA_COLORS[category] ?? theme.colors.primary;
}

function DinoCard({ entry, width }: { entry: TopicEntry; width: number }) {
  const color = eraColor(entry.category);
  return (
    <View
      style={[styles.card, { width }]}
      accessible
      accessibilityRole="button"
      accessibilityLabel={`${entry.name}, ${entry.category} period`}
    >
      <View style={[styles.imagePlaceholder, { backgroundColor: color }]} />
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
    </View>
  );
}

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const cardWidth = (width - theme.spacing.lg * 2 - theme.spacing.md) / 2;

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
        <View style={styles.grid}>
          {DINOSAURS.map((dino) => (
            <DinoCard key={dino.id} entry={dino} width={cardWidth} />
          ))}
        </View>
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
  card: {
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    ...theme.shadow.card,
  },
  imagePlaceholder: {
    height: 100,
    width: '100%',
    opacity: 0.8,
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
