import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Régine Occansey — Administratrice Systèmes & Réseaux',
  description:
    'Portfolio de Régine Occansey — Administratrice Systèmes et Réseaux à Lomé, Togo. Windows Server, Active Directory, VMware, Veeam, MikroTik.',
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  themeColor: '#0b0f14',
};

const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.dataset.theme = t === 'light' ? 'light' : '';
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}