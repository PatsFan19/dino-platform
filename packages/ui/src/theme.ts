/**
 * Kid-friendly design tokens.
 * All sizes and colours chosen for ages 4-9:
 *  - High contrast (4.5:1 minimum)
 *  - Large touch targets (56 pt minimum; 72 pt recommended for primary actions)
 *  - Large type (body 20 pt, headings 28 pt)
 */
export const theme = {
  colors: {
    primary: '#1A8C4E',     // deep green — main brand
    primaryLight: '#52C17A',
    secondary: '#D9530F',   // warm orange-red — accents / CTAs
    secondaryLight: '#F28B5A',
    accent: '#F5C518',      // yellow — highlights, stars, badges
    background: '#FFFDF5',
    surface: '#F0FAF0',
    text: '#1A1A2E',
    textMuted: '#5A5A78',
    correct: '#1A8C4E',
    incorrect: '#C0392B',
    white: '#FFFFFF',
    black: '#000000',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  },
  typography: {
    displaySize: 40,
    headingSize: 28,
    subheadingSize: 22,
    bodySize: 20,
    captionSize: 16,
    lineHeightMultiplier: 1.45,
    bold: '700' as const,
    regular: '400' as const,
  },
  touchTarget: {
    /** WCAG 2.5.8 minimum; use `recommended` for primary actions */
    min: 56,
    recommended: 72,
  },
  borderRadius: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    full: 9999,
  },
  shadow: {
    card: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
  },
} as const;

export type Theme = typeof theme;
