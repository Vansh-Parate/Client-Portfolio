import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAccents from './components/BackgroundAccents';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <BackgroundAccents />
      <Header />
      <main id="main">
        <Hero />
        <Portfolio />
        <About />
        <Skills />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
