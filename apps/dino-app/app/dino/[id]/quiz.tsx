import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { theme } from '@dinasour/ui';
import { DINOSAURS, DINO_QUIZ_MAP } from '@dinasour/content';
import type { QuizOption, QuizQuestion } from '@dinasour/content';
import { eraColor } from '../../../utils/eraColor';
import { useSpeech } from '../../../hooks/useSpeech';

const OPTION_LETTERS = ['A', 'B', 'C'];

type OptionStatus = 'default' | 'correct' | 'incorrect' | 'reveal';

function optionStatus(
  option: QuizOption,
  selected: string | null,
  correctId: string,
): OptionStatus {
  if (selected === null) return 'default';
  if (option.id === selected) return option.id === correctId ? 'correct' : 'incorrect';
  if (option.id === correctId) return 'reveal';
  return 'default';
}

function OptionButton({
  option,
  index,
  status,
  onPress,
}: {
  option: QuizOption;
  index: number;
  status: OptionStatus;
  onPress: () => void;
}) {
  const isCorrect = status === 'correct' || status === 'reveal';
  const isIncorrect = status === 'incorrect';

  return (
    <Pressable
      onPress={onPress}
      disabled={status !== 'default'}
      accessibilityRole="button"
      accessibilityLabel={`Option ${OPTION_LETTERS[index]}: ${option.label}`}
      accessibilityState={{ selected: status === 'correct' || status === 'incorrect' }}
      style={[
        styles.option,
        isCorrect && styles.optionCorrect,
        isIncorrect && styles.optionIncorrect,
        status === 'default' && styles.optionDefault,
      ]}
    >
      <View
        style={[
          styles.optionLetter,
          isCorrect && styles.optionLetterCorrect,
          isIncorrect && styles.optionLetterIncorrect,
        ]}
      >
        <Text
          style={[
            styles.optionLetterText,
            (isCorrect || isIncorrect) && styles.optionLetterTextActive,
          ]}
        >
          {OPTION_LETTERS[index]}
        </Text>
      </View>
      <Text style={[styles.optionLabel, (isCorrect || isIncorrect) && styles.optionLabelActive]}>
        {option.label}
      </Text>
    </Pressable>
  );
}

function scoreMessage(score: number, total: number): string {
  const pct = score / total;
  if (pct === 1) return 'Amazing! You are a dino expert!';
  if (pct >= 0.67) return 'Great job! You really know your dinosaurs!';
  if (pct >= 0.34) return 'Good try! Keep exploring to learn more!';
  return 'Keep reading and try again — you will get there!';
}

function ResultsScreen({
  score,
  total,
  color,
  onRetry,
  onBack,
}: {
  score: number;
  total: number;
  color: string;
  onRetry: () => void;
  onBack: () => void;
}) {
  return (
    <View style={styles.results}>
      <View style={[styles.scoreCircle, { borderColor: color }]}>
        <Text style={[styles.scoreNumber, { color }]}>{score}</Text>
        <Text style={styles.scoreOf}>out of {total}</Text>
      </View>
      <Text style={styles.scoreMessage}>{scoreMessage(score, total)}</Text>
      <View style={styles.resultButtons}>
        <Pressable
          onPress={onRetry}
          style={({ pressed }) => [
            styles.resultBtn,
            { backgroundColor: color },
            pressed && styles.resultBtnPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Try the quiz again"
        >
          <Text style={styles.resultBtnText}>Try Again</Text>
        </Pressable>
        <Pressable
          onPress={onBack}
          style={({ pressed }) => [
            styles.resultBtn,
            styles.resultBtnOutline,
            { borderColor: color },
            pressed && styles.resultBtnPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Go back to dinosaur details"
        >
          <Text style={[styles.resultBtnText, { color }]}>Back to Dino</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { speak, stop } = useSpeech();

  const dino = DINOSAURS.find((d) => d.id === id);
  const questions: QuizQuestion[] = DINO_QUIZ_MAP[id ?? ''] ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const color = eraColor(dino?.category ?? '');
  const dinoName = dino?.name ?? 'Dinosaur';
  const total = questions.length;

  // Auto-read each question when it appears
  useEffect(() => {
    if (done || questions.length === 0) return;
    const timer = setTimeout(() => {
      speak(questions[currentIndex].narration.script);
    }, 350);
    return () => clearTimeout(timer);
  }, [currentIndex, done]);

  // Speak verbal feedback when the child answers
  useEffect(() => {
    if (selected === null || questions.length === 0) return;
    const q = questions[currentIndex];
    const isCorrect = selected === q.correctOptionId;
    const correctLabel = q.options.find((o) => o.id === q.correctOptionId)?.label ?? '';
    const explanation = q.explanationNarration?.script ?? q.explanation ?? '';

    const prefix = isCorrect
      ? "That's right! "
      : `Not quite! The right answer was ${correctLabel}. `;

    speak(prefix + explanation, {
      pitch: isCorrect ? 1.25 : 0.88,
    });
  }, [selected]);

  // Speak results when the quiz is finished
  useEffect(() => {
    if (!done) return;
    speak(scoreMessage(score, total), { pitch: score === total ? 1.3 : 1.0 });
  }, [done]);

  function selectOption(optionId: string) {
    if (selected !== null) return;
    stop(); // cut off the question read-aloud if still playing
    setSelected(optionId);
    if (optionId === questions[currentIndex].correctOptionId) {
      setScore((s) => s + 1);
    }
  }

  function advance() {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  }

  function retry() {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (!dino || questions.length === 0) {
    return (
      <View style={styles.notFound}>
        <Stack.Screen options={{ title: 'Quiz' }} />
        <Text style={styles.notFoundText}>No quiz available yet!</Text>
      </View>
    );
  }

  const question = questions[currentIndex];
  const isAnswered = selected !== null;
  const isLast = currentIndex === total - 1;

  return (
    <>
      <Stack.Screen options={{ title: `${dinoName} Quiz`, headerStyle: { backgroundColor: color } }} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {done ? (
          <ResultsScreen
            score={score}
            total={total}
            color={color}
            onRetry={retry}
            onBack={() => router.back()}
          />
        ) : (
          <>
            {/* Progress */}
            <View style={styles.progressRow}>
              {questions.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.progressDot,
                    { backgroundColor: i <= currentIndex ? color : theme.colors.surface },
                  ]}
                />
              ))}
              <Text style={styles.progressLabel}>
                Question {currentIndex + 1} of {total}
              </Text>
            </View>

            {/* Question row: text + re-read button */}
            <View style={styles.questionRow}>
              <Text style={styles.question} accessibilityRole="header">
                {question.question}
              </Text>
              <Pressable
                onPress={() => speak(question.narration.script)}
                style={({ pressed }) => [
                  styles.rereadBtn,
                  { borderColor: color },
                  pressed && styles.rereadBtnPressed,
                ]}
                accessibilityRole="button"
                accessibilityLabel="Read question aloud again"
              >
                <Text style={[styles.rereadBtnText, { color }]}>Listen</Text>
              </Pressable>
            </View>

            {/* Options */}
            <View style={styles.options}>
              {question.options.map((opt, i) => (
                <OptionButton
                  key={opt.id}
                  option={opt}
                  index={i}
                  status={optionStatus(opt, selected, question.correctOptionId)}
                  onPress={() => selectOption(opt.id)}
                />
              ))}
            </View>

            {/* Explanation */}
            {isAnswered && question.explanation ? (
              <View style={[styles.explanation, { borderLeftColor: color }]}>
                <Text style={styles.explanationText}>{question.explanation}</Text>
              </View>
            ) : null}

            {/* Next / Finish button */}
            {isAnswered ? (
              <Pressable
                onPress={advance}
                style={({ pressed }) => [
                  styles.nextButton,
                  { backgroundColor: color },
                  pressed && styles.nextButtonPressed,
                ]}
                accessibilityRole="button"
                accessibilityLabel={isLast ? 'See your results' : 'Next question'}
              >
                <Text style={styles.nextButtonText}>{isLast ? 'See Results' : 'Next Question'}</Text>
              </Pressable>
            ) : null}
          </>
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
    flexGrow: 1,
  },

  // Progress
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.lg,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  progressLabel: {
    marginLeft: theme.spacing.xs,
    fontSize: theme.typography.captionSize,
    color: theme.colors.textMuted,
    fontWeight: theme.typography.bold,
  },

  // Question
  questionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  question: {
    flex: 1,
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
    lineHeight: theme.typography.subheadingSize * theme.typography.lineHeightMultiplier,
  },
  rereadBtn: {
    minHeight: theme.touchTarget.min,
    minWidth: theme.touchTarget.min,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.full,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  rereadBtnPressed: {
    opacity: 0.75,
  },
  rereadBtnText: {
    fontSize: theme.typography.captionSize,
    fontWeight: theme.typography.bold,
  },

  // Options
  options: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: theme.touchTarget.recommended,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 2,
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.md,
  },
  optionDefault: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.surface,
    ...theme.shadow.card,
  },
  optionCorrect: {
    backgroundColor: '#E8F8EE',
    borderColor: '#27AE60',
  },
  optionIncorrect: {
    backgroundColor: '#FEF0EE',
    borderColor: '#E74C3C',
  },
  optionLetter: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionLetterCorrect: {
    backgroundColor: '#27AE60',
  },
  optionLetterIncorrect: {
    backgroundColor: '#E74C3C',
  },
  optionLetterText: {
    fontSize: 14,
    fontWeight: theme.typography.bold,
    color: theme.colors.textMuted,
  },
  optionLetterTextActive: {
    color: theme.colors.white,
  },
  optionLabel: {
    flex: 1,
    fontSize: theme.typography.bodySize,
    color: theme.colors.text,
  },
  optionLabelActive: {
    fontWeight: theme.typography.bold,
  },

  // Explanation
  explanation: {
    borderLeftWidth: 4,
    paddingLeft: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    paddingRight: theme.spacing.md,
  },
  explanationText: {
    fontSize: theme.typography.bodySize,
    color: theme.colors.text,
    lineHeight: theme.typography.bodySize * theme.typography.lineHeightMultiplier,
  },

  // Next button
  nextButton: {
    minHeight: theme.touchTarget.recommended,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
  },
  nextButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  nextButtonText: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.white,
    letterSpacing: 0.3,
  },

  // Results
  results: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.xxxl,
    gap: theme.spacing.xl,
  },
  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    ...theme.shadow.card,
  },
  scoreNumber: {
    fontSize: 56,
    fontWeight: theme.typography.bold,
    lineHeight: 60,
  },
  scoreOf: {
    fontSize: theme.typography.captionSize,
    color: theme.colors.textMuted,
    fontWeight: theme.typography.bold,
  },
  scoreMessage: {
    fontSize: theme.typography.subheadingSize,
    fontWeight: theme.typography.bold,
    color: theme.colors.text,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  resultButtons: {
    width: '100%',
    gap: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  resultBtn: {
    minHeight: theme.touchTarget.recommended,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
  },
  resultBtnOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  resultBtnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  resultBtnText: {
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
