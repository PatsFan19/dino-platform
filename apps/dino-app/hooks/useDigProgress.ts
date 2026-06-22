import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';

const KEY = '@dinasour/dig-progress';

type DigStore = Record<string, number[]>; // dinoId → array of revealed tile indices

export function useDigProgress(dinoId: string, totalTiles: number) {
  const [revealed, setRevealed] = useState<boolean[]>(() => Array(totalTiles).fill(false));
  const [loaded, setLoaded] = useState(false);

  const load = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(KEY);
      const store: DigStore = raw ? JSON.parse(raw) : {};
      const indices = store[dinoId] ?? [];
      const next = Array(totalTiles).fill(false);
      indices.forEach((i: number) => { if (i >= 0 && i < totalTiles) next[i] = true; });
      setRevealed(next);
    } catch {}
    setLoaded(true);
  }, [dinoId, totalTiles]);

  const revealTile = useCallback((index: number) => {
    setRevealed((prev) => {
      if (prev[index]) return prev;
      const next = [...prev];
      next[index] = true;
      // Derive full index list from updated array and persist
      const indices = next.reduce<number[]>((acc, v, i) => { if (v) acc.push(i); return acc; }, []);
      AsyncStorage.getItem(KEY)
        .then((raw) => {
          const store: DigStore = raw ? JSON.parse(raw) : {};
          return AsyncStorage.setItem(KEY, JSON.stringify({ ...store, [dinoId]: indices }));
        })
        .catch(() => {});
      return next;
    });
  }, [dinoId]);

  const reset = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(KEY);
      const store: DigStore = raw ? JSON.parse(raw) : {};
      delete store[dinoId];
      await AsyncStorage.setItem(KEY, JSON.stringify(store));
    } catch {}
    setRevealed(Array(totalTiles).fill(false));
  }, [dinoId, totalTiles]);

  const revealedCount = revealed.filter(Boolean).length;
  const isComplete = loaded && revealedCount === totalTiles;

  return { revealed, load, revealTile, reset, revealedCount, isComplete, loaded };
}
