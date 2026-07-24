import * as Speech from 'expo-speech';
import { useCallback, useEffect } from 'react';

// Ms Rachel-style delivery: unhurried, bright, and warm.
const DEFAULT_RATE = 0.78; // slower, so young children can follow along
const DEFAULT_PITCH = 1.15; // brighter, friendlier tone

// Warm female en-US voices to prefer when available, best first.
// (iOS ships several of these; Android voice names vary by device.)
const PREFERRED_VOICE_NAMES = ['samantha', 'ava', 'zoe', 'allison', 'susan', 'nicky'];

let cachedVoiceId: string | null | undefined; // undefined = not looked up yet

async function findFriendlyVoice(): Promise<string | null> {
  if (cachedVoiceId !== undefined) return cachedVoiceId;
  try {
    const voices = await Speech.getAvailableVoicesAsync();
    const english = voices.filter((v) => v.language?.toLowerCase().startsWith('en'));
    const enhanced = english.filter((v) => v.quality === Speech.VoiceQuality.Enhanced);
    const pool = enhanced.length > 0 ? enhanced : english;

    let pick: string | null = null;
    for (const name of PREFERRED_VOICE_NAMES) {
      const match = pool.find((v) => v.name?.toLowerCase().includes(name));
      if (match) {
        pick = match.identifier;
        break;
      }
    }
    // No preferred name found — any enhanced-quality voice still beats the default.
    if (!pick && enhanced.length > 0) pick = enhanced[0].identifier;

    cachedVoiceId = pick ?? null;
  } catch {
    cachedVoiceId = null; // fall back to the system default voice
  }
  return cachedVoiceId;
}

export function useSpeech() {
  // Stop any in-progress speech when the screen unmounts
  useEffect(() => () => { Speech.stop(); }, []);

  const speak = useCallback((text: string, opts?: Speech.SpeechOptions) => {
    Speech.stop();
    void findFriendlyVoice().then((voice) => {
      Speech.speak(text, {
        language: 'en-US',
        rate: DEFAULT_RATE,
        pitch: DEFAULT_PITCH,
        ...(voice ? { voice } : {}),
        ...opts,
      });
    });
  }, []);

  const stop = useCallback(() => { Speech.stop(); }, []);

  return { speak, stop };
}
