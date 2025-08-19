import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <a href="#contact" className="text-xs text-cyan-300 hover:text-cyan-200">Request a quote</a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-white/10 bg-neutral-900/60 p-5 hover:border-cyan-400/30">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">Character Modeling</h3>
              <svg className="h-5 w-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="mt-2 text-sm text-neutral-300">Stylized to realistic characters, rig‑ready meshes, efficient topology.</p>
            <ul className="mt-3 space-y-1 text-xs text-neutral-400">
              <li>• Sculpting, retopo, UVs</li>
              <li>• Texturing + skin shaders</li>
              <li>• Facial blendshapes</li>
            </ul>
            <div className="mt-4 text-xs text-neutral-400">From €1,200</div>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-neutral-900/60 p-5 hover:border-cyan-400/30">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">Environment Design</h3>
              <svg className="h-5 w-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
              </svg>
            </div>
            <p className="mt-2 text-sm text-neutral-300">Cinematic and real‑time environments for games and film.</p>
            <ul className="mt-3 space-y-1 text-xs text-neutral-400">
              <li>• Modular kits + foliage</li>
              <li>• Lighting + atmosphere</li>
              <li>• Optimization for engines</li>
            </ul>
            <div className="mt-4 text-xs text-neutral-400">From €1,500</div>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-neutral-900/60 p-5 hover:border-cyan-400/30">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">Product Visualization</h3>
              <svg className="h-5 w-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <p className="mt-2 text-sm text-neutral-300">High‑end visuals for marketing, with accurate materials and lighting.</p>
            <ul className="mt-3 space-y-1 text-xs text-neutral-400">
              <li>• Photoreal renders</li>
              <li>• AR‑ready assets</li>
              <li>• Animation loops</li>
            </ul>
            <div className="mt-4 text-xs text-neutral-400">From €900</div>
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
          <h3 className="text-lg font-semibold tracking-tight">Workflow</h3>
          <div className="mt-4 grid items-center gap-3 sm:grid-cols-5">
            <div className="rounded-lg border border-white/10 bg-neutral-950/60 p-4 text-center">
              <div className="text-sm font-medium">Brief</div>
              <div className="mt-1 text-[11px] text-neutral-400">Scope & refs</div>
            </div>
            <div className="flex items-center justify-center text-neutral-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="rounded-lg border border-white/10 bg-neutral-950/60 p-4 text-center">
              <div className="text-sm font-medium">Blockout</div>
              <div className="mt-1 text-[11px] text-neutral-400">Silhouette</div>
            </div>
            <div className="flex items-center justify-center text-neutral-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="rounded-lg border border-white/10 bg-neutral-950/60 p-4 text-center">
              <div className="text-sm font-medium">Detail</div>
              <div className="mt-1 text-[11px] text-neutral-400">Sculpt/model</div>
            </div>
            <div className="flex items-center justify-center text-neutral-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="rounded-lg border border-white/10 bg-neutral-950/60 p-4 text-center">
              <div className="text-sm font-medium">Texture</div>
              <div className="mt-1 text-[11px] text-neutral-400">PBR maps</div>
            </div>
            <div className="flex items-center justify-center text-neutral-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="rounded-lg border border-white/10 bg-neutral-950/60 p-4 text-center">
              <div className="text-sm font-medium">Deliver</div>
              <div className="mt-1 text-[11px] text-neutral-400">Files + doc</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
