import { Server, Network, Wrench, SquareTerminal } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import AnimatedCard from './AnimatedCard';
import { skillGroups } from '../data';

const ICONS = { Server, Network, Wrench, TerminalSquare: SquareTerminal };

export default function Skills() {
  return (
    <section id="competences">
      <div className="wrap">
        <FadeInWhenVisible className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">Compétences</h2>
        </FadeInWhenVisible>

        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Server;
            return (
              <AnimatedCard key={group.title} className="skill-card" delay={i * 70}>
                <span className="skill-icon">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
