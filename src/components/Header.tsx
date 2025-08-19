import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Track active section based on scroll position
      const sections = ['main', 'work', 'about', 'skills', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Clients' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-neutral-950/95 backdrop-blur-md border-b border-white/10 shadow-2xl' 
        : 'bg-neutral-950/80 backdrop-blur-sm'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('main')}
              className="flex items-center gap-3 group relative overflow-hidden"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300 shadow-lg group-hover:scale-110 transition-all duration-300 ease-out">
                <span className="text-lg font-bold tracking-tight group-hover:scale-110 transition-transform duration-300">AK</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">Aiden K</div>
                <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">3D Model Designer</div>
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs sm:text-sm font-medium transition-all duration-300 relative group whitespace-nowrap ${
                  activeSection === item.id 
                    ? 'text-cyan-300' 
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-out ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                {/* Active indicator */}
                {activeSection === item.id && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className={`relative overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-lg hover:shadow-cyan-500/25 ${
                activeSection === 'contact' ? 'ring-2 ring-cyan-300/50' : ''
              }`}
            >
              <span className="relative z-10">Get a Quote</span>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
