import FadeInWhenVisible from './FadeInWhenVisible';
import { education } from '../data';

export default function Education() {
  return (
    <section id="formation">
      <div className="wrap">
        <FadeInWhenVisible className="section-head">
          <span className="section-index">05</span>
          <h2 className="section-title">Formation</h2>
        </FadeInWhenVisible>

        <div className="edu-list">
          {education.map((e, i) => (
            <FadeInWhenVisible key={e.title} className="edu-row" delay={i * 80}>
              <span className="edu-period">{e.period}</span>
              <div>
                <h3 className="edu-title">{e.title}</h3>
                <p className="edu-org">{e.org}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
