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
      name: "Sarah Chen",
      role: "Art Director",
      company: "AA Games",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=1080&q=80",
      content: "Aiden delivered exceptional character models that perfectly matched our vision. The attention to detail and technical optimization was outstanding.",
      project: "Character Pack (ZBrush)",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Technical Director",
      company: "VertexWorks",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1080&q=80",
      content: "The environment assets were game-ready and optimized. Great communication throughout the project. Highly recommended.",
      project: "Sci-Fi Environment (Blender)",
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
      <svg 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-current' : 'fill-none'}`} 
        viewBox="0 0 24 24"
      >
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
          {testimonials.map(({ id, name, role, company, avatar, content, project, rating }) => (
            <div key={id} className="min-w-[280px] sm:min-w-[360px] snap-center rounded-xl border border-white/10 bg-neutral-950/60 p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <img 
                  src={avatar} 
                  alt={`${name} avatar`} 
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" 
                />
                <div>
                  <div className="text-sm font-medium">{name}</div>
                  <div className="text-[11px] text-neutral-400">{role}, {company}</div>
                </div>
                <div className="ml-auto inline-flex items-center gap-0.5 text-amber-300" aria-label={`${rating} out of 5 stars`}>
                  {renderStars(rating)}
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-300">
                {content}
              </p>
              <div className="mt-3 text-[11px] text-neutral-400">Project: {project}</div>
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
