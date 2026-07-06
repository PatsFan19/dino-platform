import { Platform } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@dinasour/ui';
import Head from 'expo-router/head';

const META_TITLE = 'Dino Explorer — Learn About Dinosaurs!';
const META_DESC =
  'Discover amazing dinosaurs! Learn fun facts, take quizzes, and dig for fossils. Free, safe, and ad-free for kids ages 4–9.';

export default function RootLayout() {
  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>{META_TITLE}</title>
          <meta name="description" content={META_DESC} />
          <meta property="og:title" content={META_TITLE} />
          <meta property="og:description" content={META_DESC} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={META_TITLE} />
          <meta name="twitter:description" content={META_DESC} />
          <meta name="theme-color" content="#1A8C4E" />
        </Head>
      )}
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
