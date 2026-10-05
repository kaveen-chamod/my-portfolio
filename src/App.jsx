import React from 'react';
import BackgroundGlobe from './components/BackgroundGlobe';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Coursework from './components/Coursework';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-slate-100 antialiased selection:bg-blue-500 selection:text-white">
      {/* 3D Interactive Network Globe Canvas in Background */}
      <BackgroundGlobe />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Dark Transparent Hero Section */}
        <Hero />

        {/* Crisp Light Theme Section (About, Coursework, Skills) */}
        <div className="bg-slate-50 text-slate-900 shadow-2xl relative z-10">
          <About />
          <Coursework />
          <TechStack />
        </div>

        {/* Deep Dark Theme Section (Projects, Leadership) */}
        <div className="bg-[#0A0D14] text-white relative z-10">
          <Projects />
          <Leadership />
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
