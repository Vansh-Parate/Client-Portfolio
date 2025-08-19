import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simple bar chart implementation
    const data = [
      { label: 'Blender', value: 95, color: '#22d3ee' },
      { label: 'Maya', value: 80, color: '#60a5fa' },
      { label: 'ZBrush', value: 85, color: '#34d399' },
      { label: 'Substance', value: 88, color: '#22d3ee' },
      { label: 'Unreal', value: 82, color: '#60a5fa' },
      { label: 'Unity', value: 75, color: '#34d399' },
      { label: 'V‑Ray', value: 78, color: '#22d3ee' },
      { label: 'Arnold', value: 72, color: '#60a5fa' }
    ];

    const width = canvas.width;
    const height = canvas.height;
    const barWidth = (width - 100) / data.length;
    const maxValue = 100;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw bars
    data.forEach((item, index) => {
      const x = 50 + index * barWidth;
      const barHeight = (item.value / maxValue) * (height - 60);
      const y = height - 30 - barHeight;

      // Bar
      ctx.fillStyle = item.color;
      ctx.fillRect(x, y, barWidth - 10, barHeight);

      // Label
      ctx.fillStyle = '#9ca3af';
      ctx.font = '11px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(item.label, x + barWidth / 2 - 5, height - 10);
    });
  }, []);

  return (
    <section id="skills" className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Skills & Software</h2>
          <div className="text-xs text-neutral-400">Tooling proficiency and focus areas</div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Charts */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
            <h3 className="text-lg font-semibold tracking-tight">Software Proficiency</h3>
            <p className="mt-1 text-xs text-neutral-400">Relative comfort across core DCCs and renderers.</p>
            <div className="mt-4">
              <div className="relative rounded-lg border border-white/5 bg-neutral-950/60 p-3">
                <div>
                  <canvas ref={chartRef} aria-label="Software proficiency chart" role="img" height="180" width="400"></canvas>
                </div>
              </div>
            </div>
          </div>
          {/* Skill badges */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
            <h3 className="text-lg font-semibold tracking-tight">Core Competencies</h3>
            <p className="mt-1 text-xs text-neutral-400">Pipeline from sculpt to deploy.</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="group rounded-lg border border-white/10 bg-neutral-950/60 p-3 hover:border-cyan-400/40">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Modeling
                </div>
                <p className="mt-1 text-[11px] text-neutral-400">Hard/organic</p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-neutral-950/60 p-3 hover:border-cyan-400/40">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Texturing
                </div>
                <p className="mt-1 text-[11px] text-neutral-400">PBR, UDIM</p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-neutral-950/60 p-3 hover:border-cyan-400/40">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Retopology
                </div>
                <p className="mt-1 text-[11px] text-neutral-400">Clean quads</p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-neutral-950/60 p-3 hover:border-cyan-400/40">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  UV Mapping
                </div>
                <p className="mt-1 text-[11px] text-neutral-400">Layout, packing</p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-neutral-950/60 p-3 hover:border-cyan-400/40">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Rendering
                </div>
                <p className="mt-1 text-[11px] text-neutral-400">V‑Ray, Arnold</p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-neutral-950/60 p-3 hover:border-cyan-400/40">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Rigging
                </div>
                <p className="mt-1 text-[11px] text-neutral-400">FK/IK, skinning</p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-neutral-950/60 p-3 hover:border-cyan-400/40">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                  Animation
                </div>
                <p className="mt-1 text-[11px] text-neutral-400">Keyframing</p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-neutral-950/60 p-3 hover:border-cyan-400/40">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Game Engines
                </div>
                <p className="mt-1 text-[11px] text-neutral-400">Unity/Unreal</p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-neutral-950/60 p-3 hover:border-cyan-400/40">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Optimization
                </div>
                <p className="mt-1 text-[11px] text-neutral-400">LODs, baking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Software tags */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">Blender</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">Maya</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">3ds Max</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">Cinema 4D</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">ZBrush</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">V‑Ray</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">Arnold</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">Cycles</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">Octane</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">Substance 3D</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">Unity</span>
          <span className="rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1">Unreal Engine</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
