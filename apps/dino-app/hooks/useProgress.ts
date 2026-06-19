import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';

const STORAGE_KEY = '@dinasour/quiz-progress';

export type QuizResult = { score: number; total: number };
export type ProgressMap = Record<string, QuizResult>;

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>({});

  const load = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      if (raw) setProgress(JSON.parse(raw) as ProgressMap);
    } catch {}
  }, []);

  const saveResult = useCallback(async (dinoId: string, score: number, total: number) => {
    setProgress((prev) => {
      const existing = prev[dinoId];
      // Keep the best score across attempts
      const bestScore = existing ? Math.max(existing.score, score) : score;
      const next: ProgressMap = { ...prev, [dinoId]: { score: bestScore, total } };
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
      return next;
    });
  }, []);

  const completedCount = Object.keys(progress).length;

  return { progress, load, saveResult, completedCount };
}
