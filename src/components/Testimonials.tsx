import React, { useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  project: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Lena Vogt",
      role: "Art Director",
      company: "VertexWorks",
      avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=240&auto=format&fit=crop",
      content: "Aiden delivered immaculate assets that dropped straight into Unreal. Clean topology, perfect bakes, and a strong eye for materials. Hit every milestone.",
      project: "Modular Sci‑Fi Kitbash",
      rating: 5
    },
    {
      id: 2,
      name: "Marco Estevez",
      role: "Producer",
      company: "AA Games",
      avatar: "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80",
      content: "Outstanding partner. He anticipated engine constraints and delivered LODs, collisions, and documentation that saved our team days.",
      project: "Vehicle Pack (Unity)",
      rating: 5
    },
    {
      id: 3,
      name: "Aya Tan",
      role: "Creative Lead",
      company: "HyperViz",
      avatar: "https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80",
      content: "Our product visuals looked incredible. Accurate materials, subtle lighting, and fast iterations. Marketing CTR jumped 18%.",
      project: "Product Viz (V‑Ray)",
      rating: 5
    },
    {
      id: 4,
      name: "Jonas Müller",
      role: "Lead Env Artist",
      company: "NeonForge",
      avatar: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80",
      content: "Environment delivery was flawless. Modular kit, trim sheets, and foliage optimized for real‑time—exactly what we needed.",
      project: "Urban Alley (UE)",
      rating: 5
    }
  ];

  const scrollTrack = (direction: number) => {
    if (!trackRef.current) return;
    const amount = Math.min(600, trackRef.current.clientWidth * 0.8);
    trackRef.current.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg key={i} className="h-4 w-4 fill-current" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Client Testimonials</h2>
          <div className="text-xs text-neutral-400">What collaborators say</div>
        </div>

        <div 
          ref={trackRef}
          className="mt-6 flex snap-x snap-mandatory overflow-x-auto gap-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-4"
        >
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="min-w-[280px] sm:min-w-[360px] snap-center rounded-xl border border-white/10 bg-neutral-950/60 p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} avatar`} 
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" 
                />
                <div>
                  <div className="text-sm font-medium">{testimonial.name}</div>
                  <div className="text-[11px] text-neutral-400">{testimonial.role}, {testimonial.company}</div>
                </div>
                <div className="ml-auto inline-flex items-center gap-0.5 text-amber-300" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-300">
                {testimonial.content}
              </p>
              <div className="mt-3 text-[11px] text-neutral-400">Project: {testimonial.project}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button 
            onClick={() => scrollTrack(-1)}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Prev
          </button>
          <button 
            onClick={() => scrollTrack(1)}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800"
          >
            Next
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
