import type { Metadata } from 'next';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import s from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — Dino World',
  description: 'How Dino World handles (and protects) your child\'s privacy.',
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className={s.page}>
        <p className={s.eyebrow}>Legal</p>
        <h1 className={s.title}>Privacy Policy</h1>
        <p className={s.updated}>Last updated: June 2026</p>

        <div className={s.summary}>
          <p className={s.summaryTitle}>The short version</p>
          <ul className={s.summaryList}>
            <li>We do not collect any personal information from children.</li>
            <li>We do not show ads — ever.</li>
            <li>We do not use analytics or tracking SDKs.</li>
            <li>All progress and preferences are stored on-device only.</li>
            <li>No account or sign-in is required to use Dino World.</li>
          </ul>
        </div>

        <div className={s.section}>
          <h2 className={s.sectionHeading}>1. Who we are</h2>
          <div className={s.body}>
            <p>
              Dino World is a children's educational app designed for ages 4–9. This Privacy Policy
              explains how we handle information in connection with the Dino World mobile application
              and this website.
            </p>
            <p>
              We are committed to complying with the Children's Online Privacy Protection Act
              (<strong>COPPA</strong>) in the United States and the EU General Data Protection
              Regulation as it applies to children (<strong>GDPR-K</strong>).
            </p>
          </div>
        </div>

        <div className={s.section}>
          <h2 className={s.sectionHeading}>2. Information we collect</h2>
          <div className={s.body}>
            <p><strong>We do not collect personal information from children.</strong></p>
            <p>
              Dino World does not ask for — and has no mechanism to receive — a child's name,
              age, email address, location, photo, or any other personally identifiable
              information (PII).
            </p>
            <p>
              No account creation or sign-in is required. Children can use the full app
              without providing any information about themselves.
            </p>
          </div>
        </div>

        <div className={s.section}>
          <h2 className={s.sectionHeading}>3. On-device storage</h2>
          <div className={s.body}>
            <p>
              The app saves quiz scores, fossil-dig progress, and user preferences
              (such as audio settings) locally on the device using standard on-device
              storage (AsyncStorage / MMKV). This data:
            </p>
            <ul>
              <li>Never leaves the device.</li>
              <li>Is never transmitted to our servers or any third party.</li>
              <li>Can be cleared at any time by deleting the app.</li>
            </ul>
          </div>
        </div>

        <div className={s.section}>
          <h2 className={s.sectionHeading}>4. Advertising</h2>
          <div className={s.body}>
            <p>
              <strong>Dino World contains no advertising of any kind.</strong> We have not
              integrated any advertising SDK (such as AdMob, Unity Ads, or similar), and we
              will not do so. There are no banner ads, video ads, sponsored content, or
              in-app purchase prompts directed at children.
            </p>
          </div>
        </div>

        <div className={s.section}>
          <h2 className={s.sectionHeading}>5. Analytics and tracking</h2>
          <div className={s.body}>
            <p>
              We do not use any third-party analytics or behavioural tracking SDKs
              (such as Firebase Analytics, Mixpanel, Amplitude, or similar). We do not
              track what your child does inside the app, which screens they visit, or
              how long they spend in the app.
            </p>
            <p>
              This website does not use cookies for tracking or advertising purposes.
            </p>
          </div>
        </div>

        <div className={s.section}>
          <h2 className={s.sectionHeading}>6. External links and parental gate</h2>
          <div className={s.body}>
            <p>
              Any link that would take a user outside of Dino World — including links to
              websites, social media, or other apps — is protected by a <strong>parental
              gate</strong>. The gate presents a simple challenge (such as an arithmetic
              question) that is designed to be answerable by an adult but not a young child.
            </p>
            <p>
              Children cannot access external content without a parent or guardian completing
              the gate first.
            </p>
          </div>
        </div>

        <div className={s.section}>
          <h2 className={s.sectionHeading}>7. Children's privacy (COPPA)</h2>
          <div className={s.body}>
            <p>
              Dino World is directed to children under 13. In accordance with COPPA, we do
              not knowingly collect personal information from children under 13. Because we
              collect no personal information at all, no parental consent is required to use
              the app.
            </p>
            <p>
              If you believe we have inadvertently collected information from a child, please
              contact us immediately using the details below and we will delete it promptly.
            </p>
          </div>
        </div>

        <div className={s.section}>
          <h2 className={s.sectionHeading}>8. Changes to this policy</h2>
          <div className={s.body}>
            <p>
              If we make material changes to this Privacy Policy, we will update the
              "Last updated" date at the top of this page. We encourage parents to review
              this policy periodically.
            </p>
          </div>
        </div>

        <div className={s.section}>
          <h2 className={s.sectionHeading}>9. Contact us</h2>
          <div className={s.contactBox}>
            If you have any questions or concerns about this Privacy Policy, please reach
            out to us at{' '}
            <a href="mailto:privacy@dinoworld.app">privacy@dinoworld.app</a>.
            We will respond within 30 days.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
