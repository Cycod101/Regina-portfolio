import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Mail } from 'lucide-react';

const LINKS = [
  { href: '#apropos', label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#competences', label: 'Compétences' },
  { href: '#certifications', label: 'Certifications' },
];

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
          ~/regine.occansey<span className="cursor">▌</span>
        </a>

        <nav aria-label="Navigation principale">
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href="#contact"
            className="btn btn-primary nav-cta"
            onClick={() => setOpen(false)}
          >
            <Mail size={16} strokeWidth={1.75} />
            <span className="nav-cta-label">Me contacter</span>
          </a>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {theme === 'dark' ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
          </button>
          <button
            type="button"
            className="icon-btn nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>
    </header>
  );
}