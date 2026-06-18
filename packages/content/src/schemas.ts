// Topic-agnostic educational content schemas.
// Works for dinosaurs, space, ocean life, or any future topic.

/** BCP-47 locale tag (e.g. "en-US", "es-MX") */
export type Locale = string;

/**
 * Narration is required on all user-facing content —
 * the audience includes pre-readers (ages 4–9).
 */
export interface Narration {
  locale: Locale;
  /** Spoken text (may differ from display text for natural speech) */
  script: string;
  /** Path or URL to a pre-recorded audio asset */
  audioFile?: string;
  durationMs?: number;
}

/** Groups a collection of related educational content (e.g. "Dinosaurs", "Space") */
export interface Topic {
  id: string;
  /** URL-safe identifier used for routing (e.g. "dinosaurs", "solar-system") */
  slug: string;
  title: string;
  description: string;
  /** Alt text for the topic's cover image — required for accessibility */
  coverImageAlt: string;
  ageRange: { min: number; max: number };
}

/** A single educational fact card */
export interface Fact {
  id: string;
  topicId: string;
  title: string;
  /** 1–3 sentences in plain language suitable for the target age */
  body: string;
  /** Alt text for the accompanying illustration — required */
  imageAlt: string;
  /** Narration is required — pre-readers depend on it */
  narration: Narration;
  tags: string[];
}

/** One option within a QuizQuestion */
export interface QuizOption {
  id: string;
  label: string;
  /** Alt text if the option is illustrated */
  imageAlt?: string;
}

/** A multiple-choice quiz question */
export interface QuizQuestion {
  id: string;
  topicId: string;
  question: string;
  narration: Narration;
  options: QuizOption[];
  correctOptionId: string;
  /** Plain-language explanation shown after the child answers */
  explanation?: string;
  explanationNarration?: Narration;
}

/**
 * A complete content bundle consumed by a topic app.
 * Define one of these in apps/<topic>/content/ using data specific to that topic.
 */
export interface ContentBundle {
  topic: Topic;
  facts: Fact[];
  quiz: QuizQuestion[];
  /** Semver string — apps can enforce a minimum content version */
  version: string;
}
