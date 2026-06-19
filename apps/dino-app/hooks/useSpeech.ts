import * as Speech from 'expo-speech';
import { useCallback, useEffect } from 'react';

export function useSpeech() {
  // Stop any in-progress speech when the screen unmounts
  useEffect(() => () => { Speech.stop(); }, []);

  const speak = useCallback((text: string, opts?: Speech.SpeechOptions) => {
    Speech.stop();
    Speech.speak(text, {
      language: 'en-US',
      rate: 0.85,   // slightly slower — easier for young children
      pitch: 1.05,  // slightly warm/friendly tone
      ...opts,
    });
  }, []);

  const stop = useCallback(() => { Speech.stop(); }, []);

  return { speak, stop };
}
