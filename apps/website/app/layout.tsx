import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dino World — Learn About Dinosaurs',
  description:
    'A safe, ad-free educational app for kids aged 4–9 to explore the world of dinosaurs. No ads, no sign-in, just learning.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#FFFDF5' }}>
        {children}
      </body>
    </html>
  );
}
