export const profile = {
  firstName: 'Afi Régine Madoé',
  name: 'Régine Occansey',
  role: 'Administratrice Systèmes & Réseaux',
  location: 'Avédji, Lomé — Togo',
  email: 'regineoccansey6@gmail.com',
  phone: '+228 96 19 46 10',
  phoneHref: '+22896194610',
  whatsapp: 'https://wa.me/22896194610',
  linkedin: 'https://www.linkedin.com/in/r%C3%A9gine-occansey-2237a4257/',
  availability: 'Disponible pour de nouvelles opportunités',
  bio: [
    "Diplômée en informatique de l'IAI-TOGO (2023), je conçois, administre et sécurise des infrastructures systèmes et réseaux : gestion de parc, serveurs Windows et Linux, virtualisation VMware, sauvegarde et réseaux d'accès.",
    "Aujourd'hui technicienne système d'information à l'ANID, je mets mes compétences au service de projets technologiques exigeants, avec un goût marqué pour l'automatisation et la fiabilité des systèmes.",
  ],
  aptitudes: ['Travail en équipe', 'Autonomie', "Capacité d'adaptation"],
  languages: [
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Intermédiaire' },
  ],
  interests: ['Formation continue', 'Automatisation & scripting', 'Lecture', 'Sport'],
};

export const marqueeItems = [
  'Windows Server 2019',
  'Active Directory',
  'VMware ESXi',
  'vCenter Server',
  'Veeam Backup',
  'MikroTik',
  'Nagios',
  'OPNsense',
  'Nginx',
  'HPE Storage',
  'PowerShell',
  'Bash',
  'DNS / DHCP / GPO',
  'FortiGate',
];

export const experience = [
  {
    role: "Technicienne Système d'Information",
    org: "ANID — Agence Nationale d'Identification",
    period: 'Mai 2024 → Aujourd’hui',
    current: true,
    bullets: [
      'Gestion d’Active Directory, DNS, DHCP, vCenter Server et Veeam Backup & Replication',
      'Configuration et administration d’hôtes VMware ESXi',
      'Configuration et câblage d’une baie de stockage HPE',
    ],
  },
  {
    role: 'Assistante IT — Stage pratique',
    org: 'Nano-Techno',
    period: 'Nov 2023 → Mars 2024',
    current: false,
    bullets: [
      'Administration d’un parc informatique sous Active Directory',
      'Maintenance matérielle et logicielle des postes',
      'Administration et gestion des imprimantes en réseau',
    ],
  },
  {
    role: 'Technicienne Réseau & Système — Stage pratique',
    org: 'BETEIE',
    period: 'Juil 2023 → Oct 2023',
    current: false,
    bullets: [
      'Initiation au système de gâche (contrôle d’accès)',
      'Câblage de baie de brassage',
    ],
  },
  {
    role: 'Administratrice Système & Réseau — Stage pratique',
    org: 'OAPI',
    period: 'Avr 2023 → Août 2023',
    current: false,
    bullets: [
      'Mise en place d’un point d’échange Internet — projet de mémoire',
    ],
  },
  {
    role: 'Technicienne Réseau — Stage pratique',
    org: 'T&M · Technologie Réseau Télécom',
    period: 'Juin 2022 → Août 2022',
    current: false,
    bullets: [
      'Configuration MikroTik : routeurs, antennes Wi-Fi, répéteurs',
      'Déploiement d’une zone Wi-Fi — projet de stage pratique',
    ],
  },
];

export const skillGroups = [
  {
    icon: 'Server',
    title: 'Administration systèmes',
    items: [
      'Windows Server 2019 — AD, DNS, DHCP, GPO',
      'VMware ESXi & vCenter Server',
      'Baies de stockage HPE',
      'Veeam Backup & Replication',
      'Nginx · Let’s Encrypt · OPNsense',
      'Serveurs LAMP · Imprimantes réseau',
      'Supervision avec Nagios · MRemoteNG',
      'OS : Linux & Windows',
    ],
  },
  {
    icon: 'Network',
    title: 'Administration réseaux',
    items: [
      'Routeurs MikroTik',
      'Points d’accès & répéteurs',
      'Antennes Wi-Fi',
      'Déploiement de zones Wi-Fi',
    ],
  },
  {
    icon: 'Wrench',
    title: 'Maintenance & support',
    items: [
      'Diagnostic et résolution de pannes',
      'Remplacement de composants',
      'Support utilisateurs',
      'Bureautique : Word, Excel, PowerPoint',
    ],
  },
  {
    icon: 'TerminalSquare',
    title: 'Scripting & automatisation',
    items: ['PowerShell', 'Bash', 'Automatisation de tâches d’administration'],
  },
];

export const certifications = [
  {
    issuer: 'Google · Coursera',
    title: 'Google IT Support',
    tag: 'Certificat professionnel',
    courses: [
      'Technical Support Fundamentals',
      'The Bits and Bytes of Computer Networking',
      'Operating Systems and You: Becoming a Power User',
      'System Administration and IT Infrastructure Services',
      'IT Security: Defense Against the Digital Dark Arts',
    ],
  },
  {
    issuer: 'Google',
    title: 'Google AI Essentials',
    tag: 'Certification',
    courses: [
      'Introduction to AI',
      'Maximize Productivity With AI Tools',
      'Discover the Art of Prompt Engineering',
      'Use AI Responsibly',
      'Stay Ahead of the AI Curve',
    ],
  },
  {
    issuer: 'Fortinet',
    title: 'FCF — Getting Started in Cybersecurity 2.0',
    tag: 'Self-paced',
    courses: [],
  },
  {
    issuer: 'Fortinet',
    title: 'FCA — FortiGate 7.4 Operator',
    tag: 'Self-paced',
    courses: [],
  },
  {
    issuer: 'Formation',
    title: 'ISO/IEC 27035 — Lead Incident Manager',
    tag: 'Gestion d’incidents',
    courses: [],
  },
];

export const education = [
  {
    period: '2020 → 2023',
    title: 'Licence professionnelle — Administration des Systèmes & Réseaux Informatiques',
    org: 'IAI-TOGO, Lomé',
  },
  {
    period: '2019 → 2020',
    title: 'Biologie & Physiologie Animale — Faculté des Sciences',
    org: 'Université de Lomé',
  },
  {
    period: '2018 → 2019',
    title: 'Baccalauréat série C',
    org: 'Notre Dame de l’Église (NDE)',
  },
];
