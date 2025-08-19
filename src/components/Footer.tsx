import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e?: React.MouseEvent) => {
    e?.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-neutral-900 text-cyan-300">
                <span className="text-sm font-semibold">AK</span>
              </div>
              <div className="text-sm text-neutral-400">Aiden K — 3D Model Designer</div>
            </div>
            <p className="mt-3 max-w-sm text-xs text-neutral-400">
              High‑fidelity 3D assets and visuals for games, products, and environments. Available worldwide, CET.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-neutral-300">Explore</div>
              <ul className="mt-2 space-y-1 text-neutral-400">
                <li><a href="#work" className="hover:text-white">Work</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#skills" className="hover:text-white">Skills</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
              </ul>
            </div>
            <div>
              <div className="text-neutral-300">Connect</div>
              <ul className="mt-2 space-y-1 text-neutral-400">
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li><a href="https://www.behance.net/username" target="_blank" rel="noopener" className="hover:text-white">Behance</a></li>
                <li><a href="https://www.instagram.com/username" target="_blank" rel="noopener" className="hover:text-white">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </nav>

          <div className="sm:text-right">
            <a 
              href="#main" 
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to top
            </a>
            <div className="mt-4 text-xs text-neutral-500">© {new Date().getFullYear()} Aiden K. All rights reserved.</div>
          </div>
        </div>
      </div>

      {/* Floating to top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 rounded-full border border-white/10 bg-neutral-900/80 p-3 text-neutral-200 backdrop-blur hover:bg-neutral-800 transition-opacity duration-300 ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
