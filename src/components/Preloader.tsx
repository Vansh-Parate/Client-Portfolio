import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950 transition-opacity duration-700">
      <div className="relative">
        <div className="h-14 w-14 rounded-xl border-2 border-cyan-400/30 animate-spin" style={{ borderTopColor: '#22d3ee' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs tracking-tight text-neutral-300">Loading</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
