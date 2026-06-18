export default function HomePage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 56, color: '#1A8C4E', margin: 0 }}>Dino World</h1>
      <p style={{ fontSize: 22, color: '#5A5A78', marginTop: 16, lineHeight: 1.5 }}>
        A safe, screen-time-friendly adventure for young explorers.
      </p>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 40 }}>
        <FeatureCard
          emoji="🚫📢"
          title="No ads, ever"
          description="We will never show ads to children. Full stop."
        />
        <FeatureCard
          emoji="🔒"
          title="No sign-in required"
          description="Kids can learn without sharing any personal information."
        />
        <FeatureCard
          emoji="🔊"
          title="Audio narration"
          description="Everything is read aloud so pre-readers can join the fun."
        />
      </div>

      <p style={{ marginTop: 48, fontSize: 18, color: '#5A5A78' }}>
        Available soon on iOS &amp; Android.
      </p>
    </main>
  );
}

function FeatureCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: '#F0FAF0',
        borderRadius: 16,
        padding: '24px 20px',
        width: 200,
        textAlign: 'left',
      }}
    >
      <div style={{ fontSize: 32 }}>{emoji}</div>
      <h2 style={{ fontSize: 18, color: '#1A1A2E', margin: '8px 0 4px' }}>{title}</h2>
      <p style={{ fontSize: 15, color: '#5A5A78', margin: 0, lineHeight: 1.4 }}>{description}</p>
    </div>
  );
}
