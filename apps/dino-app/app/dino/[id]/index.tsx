import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { theme, DinoIllustration } from '@dinasour/ui';
import { DINOSAURS } from '@dinasour/content';
import { eraColor } from '../../../utils/eraColor';
import { useSpeech } from '../../../hooks/useSpeech';
import { SizeComparison } from '../../../components/SizeComparison';

// Simple speaker icon (Material Design paths)
function SpeakerIcon({ size = 22, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M3 9v6h4l5 5V4L7 9H3z" fill={color} />
      <Path d="M16.5 12A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-3.97z" fill={color} opacity={0.7} />
      <Path d="M14 3.23v2.06A6.5 6.5 0 0119 12a6.5 6.5 0 01-5 6.71v2.06A8.5 8.5 0 0021 12 8.5 8.5 0 0014 3.23z" fill={color} opacity={0.4} />
    </Svg>
  );
}

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

  function speakPronunciation() {
    speak(dino.pronunciation);
  }

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

          {/* Pronunciation "Say it!" button */}
          <Pressable
            onPress={speakPronunciation}
            style={({ pressed }) => [
              styles.sayItBtn,
              { backgroundColor: color },
              pressed && styles.sayItBtnPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={`Hear how to say ${dino.name}: ${dino.pronunciation}`}
          >
            <SpeakerIcon size={22} color={theme.colors.white} />
            <Text style={styles.sayItText}>Say it!</Text>
          </Pressable>

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

        {/* Size comparison — visual + caption */}
        <View style={[styles.section, styles.sizeSection]}>
          <Text style={styles.sectionHeading}>How big was it?</Text>
          <SizeComparison dinoId={dino.id} dinoName={dino.name} color={color} />
          <Text style={styles.sizeCaption}>{dino.sizeComparison}</Text>
        </View>

        {/* CTAs */}
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

          <Pressable
            onPress={() => router.push(`/dino/${id}/dig`)}
            style={({ pressed }) => [
              styles.quizButton,
              styles.digButton,
              pressed && styles.quizButtonPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={`Dig for the ${dino.name} fossil`}
          >
            <Text style={[styles.quizButtonText, styles.digButtonText]}>Dig for Fossils!</Text>
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
  sayItBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    alignSelf: 'flex-start',
    minHeight: theme.touchTarget.min,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.full,
  },
  sayItBtnPressed: {
    opacity: 0.80,
    transform: [{ scale: 0.97 }],
  },
  sayItText: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.white,
    letterSpacing: 0.3,
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
  sizeCaption: {
    fontSize: theme.typography.captionSize,
    color: theme.colors.textMuted,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  quizSection: {
    padding: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    gap: theme.spacing.md,
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
  digButton: {
    backgroundColor: '#7A5C0F',
  },
  digButtonText: {
    color: theme.colors.white,
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
