import { profile } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>
          © {year} {profile.name} — Lomé, Togo
        </span>
        <span>
          Conçu avec <a href="https://react.dev" target="_blank" rel="noreferrer">React</a> ·{' '}
          <a href="#top">retour en haut ↑</a>
        </span>
      </div>
    </footer>
  );
}
