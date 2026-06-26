import s from './SiteChrome.module.css';

export function Nav() {
  return (
    <nav className={s.nav}>
      <div className={s.navInner}>
        <a href="/" className={s.navLogo}>
          <span className={s.navLogoEmoji}>🦕</span>
          Dino World
        </a>
        <span className={s.navBadge}>Coming soon</span>
      </div>
    </nav>
  );
}
