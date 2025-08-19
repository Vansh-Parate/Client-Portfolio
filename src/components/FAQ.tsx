import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What's your typical turnaround time?",
      answer: "Small products: 3–7 days. Characters and large environments: 1–3 weeks depending on scope, reviews, and engine targets."
    },
    {
      id: 2,
      question: "Which deliverables do you provide?",
      answer: "Source files (BLEND/MA/MAX), exported FBX/GLB, texture sets, LODs, collisions, and a short implementation note. AR‑ready on request."
    },
    {
      id: 3,
      question: "Do you work with NDAs and staged payments?",
      answer: "Yes—NDA friendly. Standard terms: 30% deposit to book, 40% mid‑project, 30% on delivery. Flexible for studios."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <div className="text-xs text-neutral-400">Common questions</div>
        </div>

        <div className="mt-6 divide-y divide-white/5 rounded-2xl border border-white/10 bg-neutral-900/60">
          {faqItems.map(item => (
            <details 
              key={item.id} 
              className={`group p-5 ${openItems.includes(item.id) ? 'open:bg-neutral-900/70' : ''}`}
              open={openItems.includes(item.id)}
            >
              <summary 
                className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  toggleItem(item.id);
                }}
              >
                {item.question}
                <svg 
                  className={`h-4 w-4 transition-transform ${openItems.includes(item.id) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-xs text-neutral-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
