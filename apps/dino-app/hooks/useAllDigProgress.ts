import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';

const KEY = '@dinasour/dig-progress';
const TOTAL_TILES = 20; // 5 cols × 4 rows

export function useAllDigProgress() {
  const [completedDigs, setCompletedDigs] = useState<Set<string>>(new Set());

  const load = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(KEY);
      if (!raw) return;
      const store: Record<string, number[]> = JSON.parse(raw);
      const completed = new Set(
        Object.entries(store)
          .filter(([, indices]) => indices.length >= TOTAL_TILES)
          .map(([id]) => id)
      );
      setCompletedDigs(completed);
    } catch {}
  }, []);

  return { completedDigs, load };
}
