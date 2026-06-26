import s from './SiteChrome.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <span className={s.footerLogo}>🦕 Dino World</span>
        <ul className={s.footerLinks}>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        <p className={s.footerCopy}>© {new Date().getFullYear()} Dino World. Built with love for curious kids.</p>
      </div>
    </footer>
  );
}
