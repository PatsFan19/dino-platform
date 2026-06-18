# Dinasour Platform — Claude Code Guide

This monorepo hosts a **children's educational app platform** for ages 4–9. Every session must treat the constraints below as non-negotiable. They are not stylistic preferences — they exist to keep young children safe and to ensure the apps stay approvable by Apple/Google under their kids-category policies.

---

## Hard Constraints

### 1. No advertising or tracking
- **No third-party ad SDKs** (AdMob, MoPub, Unity Ads, etc.).
- **No analytics SDKs** that send data off-device (Firebase Analytics, Mixpanel, Amplitude, Segment, etc.).
- Crash reporting that sends identifiable data is prohibited.
- On-device telemetry for app quality (ANR counts, frame drops) is acceptable only if it never leaves the device without explicit parental opt-in.

### 2. No collection of children's personal data
- **No account creation, sign-in, or authentication** that asks for a child's name, birthdate, email, photo, or any other PII.
- Progress and preferences must be stored locally (AsyncStorage / MMKV / SQLite) — never synced to a server unless a verified parental consent flow exists.
- COPPA (US) and GDPR-K (EU) compliance is required by default; assume no consent has been granted.

### 3. No external links without a parental gate
- **Every outbound URL must be wrapped in a parental gate** (a simple arithmetic or reading challenge appropriate for adults, not kids).
- This includes social-media share buttons, "made by" links, and any "learn more" links.
- Deep links into other apps are treated the same as external URLs.

### 4. Accessible design for pre-readers (ages 4–9)
- **Minimum touch target: 56×56 pt/dp.** Aim for 72×72 on primary actions.
- **Audio narration is required** for all instructional text — assume some users cannot read. Use `@dinasour/ui`'s `Narration` component and always populate the `narration` field in `@dinasour/content` schemas.
- Text must be large enough to read at arm's length on a tablet: body ≥ 20 pt, headings ≥ 28 pt.
- High-contrast colour pairs only. Do not rely on colour alone to convey meaning.
- Animations must respect `prefers-reduced-motion` / `AccessibilityInfo.isReduceMotionEnabled`.

### 5. No dark patterns
- **No countdown timers** designed to create urgency (e.g., "offer expires in 00:30").
- **No fake urgency or scarcity messaging** ("Only 2 left!", "Hurry before it's gone!").
- **No purchase prompts aimed at children.** Any IAP or upgrade screen must be gated behind a parental gate and use neutral, factual language — no manipulative copy.
- No loot boxes, random reward mechanisms, or gacha mechanics.
- No infinite scroll or autoplay sequences that discourage stopping.

---

## Repository Layout

```
.
├── apps/
│   ├── dino-app/        # Expo (React Native) — iOS, Android, Web
│   └── website/         # Next.js marketing site
└── packages/
    ├── ui/              # @dinasour/ui  — shared kid-friendly design system
    └── content/         # @dinasour/content — typed educational content schemas
```

### Package naming convention
All internal packages use the `@dinasour/` scope (e.g., `@dinasour/ui`, `@dinasour/content`). New topic apps (space, ocean, etc.) will be added under `apps/` and consume the same shared packages.

### pnpm workspaces
```bash
pnpm install                         # install all workspaces
pnpm --filter dino-app start         # run Expo dev server
pnpm --filter website dev            # run Next.js dev server
pnpm --filter './packages/**' build  # build all shared packages
```

---

## Content Schema Principle
`@dinasour/content` is **topic-agnostic** — it models educational facts, quiz questions, and narration text for any subject. The dinosaur content lives in `apps/dino-app/content/`, not in the shared package. When adding a new topic app, define a `ContentBundle` in the app's own `content/` directory using the shared types.

---

## Tech Stack Summary
| Layer | Technology |
|---|---|
| Mobile/web app | Expo SDK 52, expo-router, React Native 0.76 |
| Marketing site | Next.js 15, App Router |
| Language | TypeScript (strict) |
| Package manager | pnpm 9 with workspaces |
| Shared UI | `@dinasour/ui` (React Native, works via RN Web) |
| Content schema | `@dinasour/content` (pure TypeScript types + Zod) |
