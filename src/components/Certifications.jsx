import { BadgeCheck } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import AnimatedCard from './AnimatedCard';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <FadeInWhenVisible className="section-head">
          <span className="section-index">04</span>
          <h2 className="section-title">Certifications</h2>
        </FadeInWhenVisible>

        <div className="certs">
          {certifications.map((cert, i) => (
            <AnimatedCard
              key={cert.title}
              className={`cert ${cert.courses.length > 0 ? 'wide' : ''}`}
              delay={i * 70}
            >
              <div className="cert-head">
                <div>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <h3>{cert.title}</h3>
                </div>
                <span className="cert-tag">{cert.tag}</span>
              </div>
              {cert.courses.length > 0 && (
                <ul className="cert-courses">
                  {cert.courses.map((c) => (
                    <li key={c}>
                      <BadgeCheck size={13} />
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
