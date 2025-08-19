import React, { useState, useRef, useEffect } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  software: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSoftware, setActiveSoftware] = useState<string | null>(null);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Sci‑Fi Recon Drone",
      category: "game",
      software: "blender unreal",
      image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1600&auto=format&fit=crop",
      description: "Blender, Substance, Unreal — 2 weeks"
    },
    {
      id: 2,
      title: "Modular Headphones",
      category: "product",
      software: "max vray",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      description: "3ds Max, V‑Ray — 9 days"
    },
    {
      id: 3,
      title: "Neon Alley Environment",
      category: "environment",
      software: "blender cycles",
      image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80",
      description: "Blender, Cycles — 1 week"
    },
    {
      id: 4,
      title: "Minimalist Living Room",
      category: "arch",
      software: "c4d octane",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
      description: "C4D, Octane — 4 days"
    },
    {
      id: 5,
      title: "Desert Nomad",
      category: "character",
      software: "zbrush maya arnold",
      image: "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80",
      description: "ZBrush, Maya, Arnold — 3 weeks"
    },
    {
      id: 6,
      title: "Smartwatch Concept",
      category: "product",
      software: "blender cycles",
      image: "https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80",
      description: "Blender, Cycles — 5 days"
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      game: 'bg-emerald-400/10 text-emerald-300',
      product: 'bg-cyan-400/10 text-cyan-300',
      environment: 'bg-fuchsia-400/10 text-fuchsia-300',
      arch: 'bg-indigo-400/10 text-indigo-300',
      character: 'bg-rose-400/10 text-rose-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-400/10 text-gray-300';
  };

  const filteredItems = portfolioItems.filter(item => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchSoftware = !activeSoftware || item.software.split(' ').includes(activeSoftware);
    return matchCategory && matchSoftware;
  });

  return (
    <section id="work" className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
            <p className="text-xs text-neutral-400">Game assets, environments, products, and characters</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {['all', 'game', 'arch', 'product', 'character', 'environment'].map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`filter-btn rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category ? 'ring-2 ring-cyan-400/50 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-400/25' : ''
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                className={`inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105 ${
                  activeSoftware ? 'ring-2 ring-cyan-400/50 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-400/25' : ''
                }`}
              >
                <svg className={`h-4 w-4 transition-transform duration-300 ${isFilterDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                Software
              </button>
              {isFilterDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-md border border-white/10 bg-neutral-900/95 p-2 text-xs shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
                  {['blender', 'maya', 'max', 'c4d', 'zbrush'].map(software => (
                    <button
                      key={software}
                      onClick={() => {
                        setActiveSoftware(activeSoftware === software ? null : software);
                        setIsFilterDropdownOpen(false);
                      }}
                      className={`soft-btn block w-full rounded px-2 py-1 text-left hover:bg-neutral-800 transition-all duration-200 transform hover:scale-105 ${
                        activeSoftware === software ? 'bg-neutral-800 text-white ring-1 ring-cyan-400/50' : ''
                      }`}
                    >
                      {software.charAt(0).toUpperCase() + software.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => {
            const colorClass = getCategoryColor(item.category);
            return (
              <article 
                key={item.id} 
                className="portfolio-card group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      hoveredItem === item.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
                <div className="p-4 relative">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium tracking-tight group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] ${colorClass} transition-all duration-300 transform group-hover:scale-110`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">{item.description}</p>
                  
                  {/* Hover effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <a href="#" className="group relative overflow-hidden rounded-md border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-neutral-800/25">
            <span className="relative z-10">See More Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
