import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@dinasour/ui';

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTintColor: theme.colors.white,
          headerTitleStyle: {
            fontSize: theme.typography.subheadingSize,
            fontWeight: theme.typography.bold,
          },
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      />
      <StatusBar style="light" />
    </>
  );
}
