'use client';

import React from 'react';
import GlobalScene from './components/ui/GlobalScene';
import SectionWatcher from './components/ui/SectionWatcher';
import RightPanel from './components/ui/RightPanel';
import Navigation from './components/ui/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <GlobalScene />
      <Navigation />
      <div className="relative z-10">
        <SectionWatcher />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </div>
      {/* Persistent right-side UI */}
      <div className="relative z-20 pointer-events-auto">
        <RightPanel />
      </div>
    </main>
  );
}
