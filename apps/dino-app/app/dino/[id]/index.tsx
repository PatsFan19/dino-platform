import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { theme, DinoIllustration } from '@dinasour/ui';
import { DINOSAURS } from '@dinasour/content';
import { eraColor } from '../../../utils/eraColor';
import { useSpeech } from '../../../hooks/useSpeech';

export default function DinoDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { speak, stop } = useSpeech();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const dino = DINOSAURS.find((d) => d.id === id);

  if (!dino) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Dinosaur not found!</Text>
      </View>
    );
  }

  const color = eraColor(dino.category);
  const { width: screenWidth } = useWindowDimensions();

  function handleListen() {
    if (isSpeaking) {
      stop();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      speak(
        `${dino.name}. ${dino.kidFact}. How big was it? ${dino.sizeComparison}.`,
        {
          onDone: () => setIsSpeaking(false),
          onStopped: () => setIsSpeaking(false),
          onError: () => setIsSpeaking(false),
        },
      );
    }
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: dino.name,
          headerStyle: { backgroundColor: color },
        }}
      />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
        {/* Hero illustration */}
        <View
          style={[styles.hero, { backgroundColor: color + '18' }]}
          accessible
          accessibilityRole="image"
          accessibilityLabel={`Illustration of ${dino.name}`}
        >
          <DinoIllustration imageKey={dino.imageKey} width={screenWidth} height={220} />
        </View>

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
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeading}>Did you know?</Text>
            <Pressable
              onPress={handleListen}
              style={({ pressed }) => [
                styles.listenBtn,
                { borderColor: color },
                isSpeaking && { backgroundColor: color },
                pressed && styles.listenBtnPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={isSpeaking ? 'Stop reading aloud' : 'Read this fact aloud'}
            >
              <Text style={[styles.listenBtnText, { color }, isSpeaking && styles.listenBtnTextActive]}>
                {isSpeaking ? 'Stop' : 'Listen'}
              </Text>
            </Pressable>
          </View>
          <Text style={styles.factText}>{dino.kidFact}</Text>
        </View>

        {/* Size comparison */}
        <View style={[styles.section, styles.sizeSection]}>
          <Text style={styles.sectionHeading}>How big was it?</Text>
          <Text style={styles.sizeText}>{dino.sizeComparison}</Text>
        </View>

        {/* Quiz CTA */}
        <View style={styles.quizSection}>
          <Pressable
            onPress={() => router.push(`/dino/${id}/quiz`)}
            style={({ pressed }) => [
              styles.quizButton,
              { backgroundColor: color },
              pressed && styles.quizButtonPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={`Take the ${dino.name} quiz`}
          >
            <Text style={styles.quizButtonText}>Take the Quiz!</Text>
          </Pressable>
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
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionHeading: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
  },
  listenBtn: {
    minHeight: theme.touchTarget.min,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.full,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listenBtnPressed: {
    opacity: 0.75,
  },
  listenBtnText: {
    fontSize: theme.typography.captionSize,
    fontWeight: theme.typography.bold,
    letterSpacing: 0.3,
  },
  listenBtnTextActive: {
    color: theme.colors.white,
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
  quizSection: {
    padding: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
  },
  quizButton: {
    minHeight: theme.touchTarget.recommended,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
  },
  quizButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  quizButtonText: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.white,
    letterSpacing: 0.3,
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
