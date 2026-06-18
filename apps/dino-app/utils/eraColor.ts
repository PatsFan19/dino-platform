import { theme } from '@dinasour/ui';

export const ERA_COLORS: Record<string, string> = {
  Jurassic: '#27AE60',
  Cretaceous: '#D35400',
  Triassic: '#8E44AD',
};

export function eraColor(category: string): string {
  return ERA_COLORS[category] ?? theme.colors.primary;
}
