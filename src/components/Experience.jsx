import FadeInWhenVisible from './FadeInWhenVisible';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <FadeInWhenVisible className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">Expérience professionnelle</h2>
        </FadeInWhenVisible>

        <div className="timeline">
          {experience.map((job, i) => (
            <FadeInWhenVisible
              key={job.org}
              className={`tl-item ${job.current ? 'current' : ''}`}
              delay={i * 80}
            >
              <span className="tl-node" aria-hidden="true" />
              <span className="tl-period">{job.period}</span>
              <h3 className="tl-role">{job.role}</h3>
              <p className="tl-org">
                {job.org}
                {job.current && <span className="badge-now">poste actuel</span>}
              </p>
              <ul className="tl-points">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
