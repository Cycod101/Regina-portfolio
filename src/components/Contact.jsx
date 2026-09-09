import { Mail, Phone, MessageCircle } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import { profile } from '../data';

function LinkedinIcon({ size = 16, strokeWidth = 1.75 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <FadeInWhenVisible>
          <h2 className="section-title">Travaillons ensemble</h2>
          <p>
            Un projet d'infrastructure, un poste en administration systèmes et réseaux, ou une
            question ? Ma boîte mail est toujours ouverte.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Mail size={16} strokeWidth={1.75} />
              Me contacter
            </a>
            <a href={`tel:${profile.phoneHref}`} className="btn btn-ghost">
              <Phone size={16} strokeWidth={1.75} />
              {profile.phone}
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <MessageCircle size={16} strokeWidth={1.75} />
              WhatsApp
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <LinkedinIcon size={16} strokeWidth={1.75} />
              LinkedIn
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
