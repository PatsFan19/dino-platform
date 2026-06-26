import s from './page.module.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className={s.hero}>
        <span className={s.heroEmojis}>🦖🦕</span>
        <h1 className={s.heroHeadline}>
          Dinosaurs come alive<br />
          <span className={s.heroHeadlineAccent}>for little explorers</span>
        </h1>
        <p className={s.heroSubtext}>
          A safe, screen-time-friendly adventure for ages 4–9.
          No ads, no sign-in — just wonder.
        </p>
        <div className={s.heroBadge}>
          📱 Coming soon on iOS &amp; Android
        </div>
      </section>

      {/* Features */}
      <section className={`${s.section} ${s.featuresSection}`}>
        <div className={s.sectionInner}>
          <p className={s.sectionLabel}>Built for kids</p>
          <h2 className={s.sectionHeading}>Safe by design</h2>
          <p className={s.sectionSubtext}>
            Every decision we made was with young children — and their parents — in mind.
          </p>
          <div className={s.featuresGrid}>
            <FeatureCard emoji="🚫📢" title="No ads, ever" desc="We will never show ads to children. Not now, not after launch." />
            <FeatureCard emoji="🔒" title="No sign-in required" desc="Kids can explore without sharing any personal information." />
            <FeatureCard emoji="🔊" title="Audio narration" desc="Everything is read aloud so pre-readers can join the fun." />
            <FeatureCard emoji="✋" title="Big, easy buttons" desc="Touch targets sized for small hands — no fiddly tapping." />
            <FeatureCard emoji="📴" title="Works offline" desc="Learning continues on planes and long car rides, no Wi-Fi needed." />
            <FeatureCard emoji="🌈" title="High contrast colours" desc="Clear, accessible design for all children, including those with visual differences." />
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <p className={s.sectionLabel}>What's inside</p>
          <h2 className={s.sectionHeading}>A world to discover</h2>
          <p className={s.sectionSubtext}>
            Three ways to explore, all designed to spark curiosity in young minds.
          </p>
          <div className={s.insideGrid}>
            <InsideCard
              emoji="🦕"
              title="Meet the dinosaurs"
              desc="Illustrated profiles of T. Rex, Triceratops, Stegosaurus, and more. Fun facts written for young readers — and spoken aloud for pre-readers."
            />
            <InsideCard
              emoji="🧠"
              title="Take the quiz"
              desc="Three questions per dinosaur with instant feedback and a score badge. Kids learn through play, not tests."
            />
            <InsideCard
              emoji="⛏️"
              title="Dig for fossils"
              desc="A tactile mini-game where kids brush away sand to uncover a fossil. Every dinosaur has its own fossil to find."
            />
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className={`${s.section} ${s.safetySection}`}>
        <div className={s.sectionInner}>
          <p className={s.sectionLabel}>For parents</p>
          <h2 className={s.sectionHeading}>Your child's privacy is non-negotiable</h2>
          <p className={s.sectionSubtext}>
            We built Dino World to meet the highest standards for children's apps.
          </p>
          <div className={s.safetyGrid}>
            <SafetyItem emoji="🛡️" title="COPPA compliant" desc="No personal data collected from children — full stop." />
            <SafetyItem emoji="📊" title="No analytics" desc="We don't track what your child does in the app." />
            <SafetyItem emoji="🔗" title="Parental gate on all links" desc="Any external link requires a parent to pass a challenge first." />
            <SafetyItem emoji="🎰" title="No dark patterns" desc="No countdown timers, fake urgency, loot boxes, or manipulative design." />
            <SafetyItem emoji="💾" title="Progress stays on-device" desc="All quiz scores and progress are saved locally — never uploaded." />
            <SafetyItem emoji="🌙" title="No infinite scroll" desc="Every session has a natural end point. No autoplay rabbit holes." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.ctaSection}>
        <h2 className={s.ctaHeading}>Ready to explore?</h2>
        <p className={s.ctaSubtext}>Dino World is coming soon to the App Store and Google Play.</p>
        <div className={s.ctaStores}>
          <StoreBadge emoji="🍎" label="App Store" sub="Download on the" />
          <StoreBadge emoji="▶️" label="Google Play" sub="Get it on" />
        </div>
      </section>

      <Footer />
    </>
  );
}

function FeatureCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className={s.featureCard}>
      <span className={s.featureEmoji}>{emoji}</span>
      <h3 className={s.featureTitle}>{title}</h3>
      <p className={s.featureDesc}>{desc}</p>
    </div>
  );
}

function InsideCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className={s.insideCard}>
      <span className={s.insideCardEmoji}>{emoji}</span>
      <h3 className={s.insideCardTitle}>{title}</h3>
      <p className={s.insideCardDesc}>{desc}</p>
    </div>
  );
}

function SafetyItem({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className={s.safetyItem}>
      <span className={s.safetyItemEmoji}>{emoji}</span>
      <p className={s.safetyItemText}>
        <strong>{title}</strong>
        {desc}
      </p>
    </div>
  );
}

function StoreBadge({ emoji, label, sub }: { emoji: string; label: string; sub: string }) {
  return (
    <div className={s.storeBadge}>
      <span className={s.storeBadgeEmoji}>{emoji}</span>
      <span className={s.storeBadgeLabel}>
        <span className={s.storeBadgeSub}>{sub}</span>
        {label}
      </span>
    </div>
  );
}
