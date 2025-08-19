import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackgroundAccents from './components/BackgroundAccents';

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 antialiased selection:bg-cyan-300 selection:text-neutral-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-neutral-800 focus:px-3 focus:py-2">
        Skip to content
      </a>

      <Preloader />
      <BackgroundAccents />
      <Header />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <CaseStudies />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
