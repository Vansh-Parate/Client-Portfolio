import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl blur-2xl" style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,0.2), transparent 70%)' }}></div>
            <div className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Portrait of Aiden K" className="h-28 w-28 rounded-xl object-cover ring-1 ring-white/10" />
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">About</h2>
                <p className="mt-2 text-sm text-neutral-300 max-w-md">
                  I specialize in real‑time game assets, photoreal product visualization, and cinematic environment modeling. I prioritize efficient topology and texture fidelity for high performance.
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-neutral-400">
                  <span className="inline-flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Berlin, CET
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Responds in 24h
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="text-xl font-semibold tracking-tight">Blender</div>
                <div className="text-[11px] text-neutral-400">Primary tool</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="text-xl font-semibold tracking-tight">Unreal</div>
                <div className="text-[11px] text-neutral-400">Game engine</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="text-xl font-semibold tracking-tight">V‑Ray</div>
                <div className="text-[11px] text-neutral-400">Renderer</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Capabilities</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-200">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Game‑ready assets
                </div>
                <p className="mt-2 text-xs text-neutral-400">Optimized, clean topology, LODs, collision, PBR.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-200">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Photoreal rendering
                </div>
                <p className="mt-2 text-xs text-neutral-400">Lighting, materials, HDRI, color pipeline.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-200">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Hard‑surface + Organic
                </div>
                <p className="mt-2 text-xs text-neutral-400">Precise control for products and characters.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-200">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  End‑to‑end pipeline
                </div>
                <p className="mt-2 text-xs text-neutral-400">From blockout to final, including retopo and UVs.</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-lg border border-white/10 bg-neutral-900/60 p-4 text-center">
                <div className="text-2xl font-semibold tracking-tight">3000+</div>
                <div className="text-[11px] text-neutral-400">Assets shipped</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-neutral-900/60 p-4 text-center">
                <div className="text-2xl font-semibold tracking-tight">28</div>
                <div className="text-[11px] text-neutral-400">Platforms</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-neutral-900/60 p-4 text-center">
                <div className="text-2xl font-semibold tracking-tight">7</div>
                <div className="text-[11px] text-neutral-400">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
