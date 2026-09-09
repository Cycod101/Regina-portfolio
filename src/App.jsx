'use client';

import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect
    setTheme(getInitialTheme());
    // oxlint-disable-next-line react/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : '';
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  return (
    <>
      <Nav theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
