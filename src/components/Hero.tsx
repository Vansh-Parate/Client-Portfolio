import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300 hover:bg-neutral-800/60 transition-all duration-300 group">
              <span className="h-2 w-2 rounded-full bg-emerald-400 group-hover:animate-pulse"></span> 
              Available for projects — 2 weeks lead time
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Designing high‑fidelity 3D worlds with precision and style
            </h1>
            <p className="max-w-xl text-neutral-300">
              I craft game‑ready assets, photoreal renders, and cinematic worlds. Blending technical depth with artistic direction to ship models that perform and impress.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => scrollToSection('work')} 
                className="group relative overflow-hidden rounded-md bg-cyan-300 px-5 py-3 text-neutral-950 text-sm font-medium hover:bg-cyan-200 active:bg-cyan-400/80 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-300/25"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="group relative overflow-hidden rounded-md border border-white/10 bg-neutral-900 px-5 py-3 text-sm text-neutral-200 hover:bg-neutral-800 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-neutral-800/25"
              >
                <span className="relative z-10">Let's Collaborate</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a 
                href="#" 
                className="group inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <svg className="h-4 w-4 group-hover:text-cyan-300 transition-colors duration-300 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download My Resume</span>
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
              <div className="group text-center p-4 rounded-lg hover:bg-neutral-900/40 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl font-semibold tracking-tight group-hover:text-cyan-300 transition-colors duration-300">8+</div>
                <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">Years experience</div>
              </div>
              <div className="group text-center p-4 rounded-lg hover:bg-neutral-900/40 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl font-semibold tracking-tight group-hover:text-cyan-300 transition-colors duration-300">120+</div>
                <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">Projects completed</div>
              </div>
              <div className="group text-center p-4 rounded-lg hover:bg-neutral-900/40 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl font-semibold tracking-tight group-hover:text-cyan-300 transition-colors duration-300">65+</div>
                <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">Happy clients</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className={`absolute -inset-6 rounded-2xl opacity-70 blur-2xl transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-110' : 'opacity-70 scale-100'
            }`} style={{ background: 'conic-gradient(from 90deg at 70% 40%, rgba(34,211,238,0.2), rgba(59,130,246,0.14), rgba(16,185,129,0.18), transparent 75%)' }}></div>
            <div 
              className="relative rounded-2xl border border-white/10 bg-neutral-900/60 p-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <model-viewer
                src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                alt="3D Model Preview"
                camera-controls
                auto-rotate
                shadow-intensity="1"
                environment-image="neutral"
                exposure="1"
                style={{
                  width: '100%',
                  height: '460px',
                  borderRadius: '12px',
                  '--poster-color': 'transparent'
                } as React.CSSProperties}
              />
              <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                <div className="inline-flex items-center gap-2 group-hover:text-cyan-300 transition-colors duration-300">
                  <svg className="h-4 w-4 group-hover:animate-spin transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                  Drag to rotate
                </div>
                <div className="inline-flex items-center gap-2 group-hover:text-cyan-300 transition-colors duration-300">
                  <svg className="h-4 w-4 group-hover:animate-pulse transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  Real‑time preview
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero logos / social proof */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-4 lg:grid-cols-6">
            {['AA Games', 'VertexWorks', 'NeonForge', 'RenderLab', 'HyperViz', 'OrbitXR'].map((company, index) => (
              <div 
                key={company}
                className="text-xs text-neutral-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 cursor-default group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="group-hover:animate-pulse">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
