import { Mail, Phone, MapPin } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import { profile } from '../data';

export default function About() {
  return (
    <section id="apropos">
      <div className="wrap">
        <FadeInWhenVisible className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">À propos</h2>
        </FadeInWhenVisible>

        <div className="about-grid">
          <FadeInWhenVisible className="about-text">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-aptitudes">
              {profile.aptitudes.map((a) => (
                <span key={a} className="chip">
                  {a}
                </span>
              ))}
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible className="about-side" delay={120}>
            <div className="info-card">
              <h3>Contact</h3>
              <div className="info-row">
                <span className="k">
                  <Mail size={14} /> E-mail
                </span>
                <a
                  className="v mono"
                  href={`mailto:${profile.email}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '0.78rem' }}
                >
                  {profile.email}
                </a>
              </div>
              <div className="info-row">
                <span className="k">
                  <Phone size={14} /> Téléphone
                </span>
                <a className="v mono" href={`tel:${profile.phoneHref}`} style={{ fontSize: '0.82rem' }}>
                  {profile.phone}
                </a>
              </div>
              <div className="info-row">
                <span className="k">
                  <MapPin size={14} /> Localisation
                </span>
                <span className="v">{profile.location}</span>
              </div>
            </div>

            <div className="info-card">
              <h3>Langues</h3>
              {profile.languages.map((l) => (
                <div className="info-row" key={l.name}>
                  <span className="k">{l.name}</span>
                  <span className="v">{l.level}</span>
                </div>
              ))}
            </div>

            <div className="info-card">
              <h3>Centres d'intérêt</h3>
              <div className="about-aptitudes" style={{ marginTop: 0 }}>
                {profile.interests.map((i) => (
                  <span key={i} className="chip">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
