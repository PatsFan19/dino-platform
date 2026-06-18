import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, theme } from '@dinasour/ui';
import { dinoFacts } from '../content/dino-facts';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      accessibilityLabel="Dino World home screen"
    >
      <Text style={styles.title} accessibilityRole="header">
        Dino World
      </Text>
      <Text style={styles.subtitle}>
        Explore the amazing age of dinosaurs!
      </Text>

      <View style={styles.cardGrid}>
        {dinoFacts.map((fact) => (
          <View key={fact.id} style={styles.card}>
            <Text style={styles.cardTitle}>{fact.title}</Text>
            <Text style={styles.cardBody}>{fact.body}</Text>
          </View>
        ))}
      </View>

      <Button
        label="Start Learning!"
        onPress={() => {}}
        style={styles.cta}
        accessibilityLabel="Start the dinosaur learning adventure"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    padding: theme.spacing.lg,
    alignItems: 'center',
    paddingBottom: theme.spacing.xxxl,
  },
  title: {
    fontSize: theme.typography.displaySize,
    fontWeight: theme.typography.bold,
    color: theme.colors.primary,
    marginTop: theme.spacing.xl,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: theme.typography.bodySize,
    color: theme.colors.textMuted,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xl,
    textAlign: 'center',
  },
  cardGrid: {
    width: '100%',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadow.card,
  },
  cardTitle: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  cardBody: {
    fontSize: theme.typography.bodySize,
    color: theme.colors.text,
    lineHeight: theme.typography.bodySize * theme.typography.lineHeightMultiplier,
  },
  cta: {
    width: '100%',
    maxWidth: 400,
  },
});
