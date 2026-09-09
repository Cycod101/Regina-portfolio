import { ArrowDown, Mail } from 'lucide-react';
import { profile } from '../data';
import NetworkCanvas from './NetworkCanvas';
import TerminalTyper from './TerminalTyper';

const TERMINAL_LINES = [
  { kind: 'cmd', text: 'Get-ADUser -Identity r.ocansey' },
  { kind: 'out', text: 'Enabled : True   ·   Statut : En poste @ ANID' },
  { kind: 'cmd', text: 'Get-Service veeam, veeambkp | Select Status' },
  { kind: 'out', text: 'Running  Running   —   Sauvegardes : OK' },
  { kind: 'cmd', text: '.\\set-location "Lome, Togo"' },
  { kind: 'out', text: 'Prête pour de nouveaux projets.' },
];

export default function Hero() {
  return (
    <section className="hero" id="top" style={{ paddingBlock: 0 }}>
      <NetworkCanvas />
      <div className="wrap hero-inner" style={{ zIndex: 1 }}>
        <div>
          <p className="hero-eyebrow">
            <span className="dot" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1>
            {profile.firstName}
            <br />
            Occansey
          </h1>
          <p className="hero-role">$ {profile.role}</p>
          <p className="hero-sub">
            Gestion de réseaux, de parcs informatiques et de serveurs, maintenance et sécurité des
            systèmes — au service d'infrastructures fiables.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              <Mail size={16} strokeWidth={1.75} />
              Me contacter
            </a>
            <a href="#experience" className="btn btn-ghost">
              <ArrowDown size={16} strokeWidth={1.75} />
              Voir mon parcours
            </a>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
            <span className="terminal-title">powershell — regine@anid</span>
          </div>
          <div className="terminal-body">
            <TerminalTyper lines={TERMINAL_LINES} loop />
          </div>
          <div className="terminal-foot">
            <span>Windows Server · Linux · VMware</span>
            <span>session sécurisée</span>
          </div>
        </div>
      </div>
    </section>
  );
}
