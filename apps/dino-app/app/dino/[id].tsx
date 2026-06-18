import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { theme } from '@dinasour/ui';
import { DINOSAURS } from '@dinasour/content';
import { eraColor } from '../../utils/eraColor';

export default function DinoDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const dino = DINOSAURS.find((d) => d.id === id);

  if (!dino) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Dinosaur not found!</Text>
      </View>
    );
  }

  const color = eraColor(dino.category);

  return (
    <>
      <Stack.Screen
        options={{
          title: dino.name,
          headerStyle: { backgroundColor: color },
        }}
      />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
        {/* Hero placeholder */}
        <View
          style={[styles.hero, { backgroundColor: color }]}
          accessible
          accessibilityRole="image"
          accessibilityLabel={`Illustration placeholder for ${dino.name}`}
        />

        {/* Identity block */}
        <View style={styles.identity}>
          <Text style={styles.name}>{dino.name}</Text>
          <Text style={styles.pronunciation}>{dino.pronunciation}</Text>
          <View style={[styles.eraBadge, { backgroundColor: color + '22', borderColor: color }]}>
            <Text style={[styles.eraLabel, { color }]}>{dino.category}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Fact */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Did you know?</Text>
          <Text style={styles.factText}>{dino.kidFact}</Text>
        </View>

        {/* Size comparison */}
        <View style={[styles.section, styles.sizeSection]}>
          <Text style={styles.sectionHeading}>How big was it?</Text>
          <Text style={styles.sizeText}>{dino.sizeComparison}</Text>
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
    paddingBottom: theme.spacing.xxxl,
  },
  hero: {
    width: '100%',
    height: 220,
    opacity: 0.85,
  },
  identity: {
    padding: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  name: {
    fontSize: theme.typography.displaySize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
  },
  pronunciation: {
    fontSize: theme.typography.bodySize,
    color: theme.colors.textMuted,
    fontStyle: 'italic',
  },
  eraBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1.5,
  },
  eraLabel: {
    fontSize: theme.typography.captionSize,
    fontWeight: theme.typography.bold,
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.surface,
    marginHorizontal: theme.spacing.lg,
  },
  section: {
    padding: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  sectionHeading: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
  },
  factText: {
    fontSize: theme.typography.bodySize,
    color: theme.colors.text,
    lineHeight: theme.typography.bodySize * theme.typography.lineHeightMultiplier,
  },
  sizeSection: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    marginHorizontal: theme.spacing.lg,
  },
  sizeText: {
    fontSize: theme.typography.bodySize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
  },
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
