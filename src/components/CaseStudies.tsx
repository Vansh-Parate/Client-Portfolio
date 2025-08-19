import React, { useState } from 'react';

const CaseStudies: React.FC = () => {
  const [slider1Value, setSlider1Value] = useState(50);
  const [slider2Value, setSlider2Value] = useState(50);

  return (
    <section className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Case Studies</h2>
        <p className="text-xs text-neutral-400">Process breakdown and before/after comparisons</p>

        {/* Case 1 */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">Product Visualization Pipeline</h3>
              <span className="text-[11px] text-neutral-400">Client: Nova Audio</span>
            </div>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/5 bg-neutral-950">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1600&auto=format&fit=crop" 
                  alt="Wireframe" 
                  className="pointer-events-none block h-64 w-full object-cover opacity-70" 
                />
                <div 
                  className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${slider1Value}%` }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1600&auto=format&fit=crop" 
                    alt="Rendered product" 
                    className="block h-64 w-full object-cover" 
                  />
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={slider1Value}
                  onChange={(e) => setSlider1Value(Number(e.target.value))}
                  aria-label="Before After slider" 
                  className="absolute inset-x-4 bottom-4 h-1 w-[calc(100%-2rem)] cursor-ew-resize appearance-none rounded-full bg-white/10" 
                />
              </div>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-xs text-neutral-300">
              <li className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Subdivision + bevel control
              </li>
              <li className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                PBR texturing
              </li>
              <li className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                HDRI lighting
              </li>
              <li className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                9 days total
              </li>
            </ul>
          </div>

          {/* Case 2 */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">Game Asset Optimization</h3>
              <span className="text-[11px] text-neutral-400">Client: Red Rift</span>
            </div>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/5 bg-neutral-950">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" 
                  alt="High poly asset" 
                  className="pointer-events-none block h-64 w-full object-cover opacity-70" 
                />
                <div 
                  className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${slider2Value}%` }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" 
                    alt="Optimized in-game asset" 
                    className="block h-64 w-full object-cover" 
                  />
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={slider2Value}
                  onChange={(e) => setSlider2Value(Number(e.target.value))}
                  aria-label="Before After slider" 
                  className="absolute inset-x-4 bottom-4 h-1 w-[calc(100%-2rem)] cursor-ew-resize appearance-none rounded-full bg-white/10" 
                />
              </div>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-xs text-neutral-300">
              <li className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                Retopo + baking
              </li>
              <li className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                LODs + collisions
              </li>
              <li className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                60+ FPS targets
              </li>
              <li className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                6 days total
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
