import { Platform } from "react-native";

export const Colors = {
  light: {
    text: "#0A0B10",
    background: "#F5F6FF",
    backgroundElement: "#FFFFFF",
    backgroundSelected: "#E8EAF6",
    textSecondary: "#5C5F7A",
    accent: "#7B61FF",
    accentMuted: "#9D8FFF",
    border: "#E0E3F0",
    card: "#FFFFFF",
    gradientStart: "#7B61FF",
    gradientEnd: "#5B8DEF",
  },
  dark: {
    text: "#FFFFFF",
    background: "#0A0B10",
    backgroundElement: "#141522",
    backgroundSelected: "#1E2035",
    textSecondary: "#8B8FA8",
    accent: "#7B61FF",
    accentMuted: "#9D8FFF",
    border: "#252838",
    card: "#161825",
    gradientStart: "#7B61FF",
    gradientEnd: "#5B8DEF",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
} as const;

export const BottomTabInset = Platform.select({ ios: 88, android: 72 }) ?? 72;
export const MaxContentWidth = 480;
