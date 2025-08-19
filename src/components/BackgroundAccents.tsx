import React from 'react';

const BackgroundAccents: React.FC = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.28), transparent 70%)' }}></div>
      <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,0.24), transparent 70%)' }}></div>
      <div className="absolute bottom-0 left-1/2 h-96 w-[42rem] -translate-x-1/2 blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.18), transparent 70%)' }}></div>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '18px 18px' }}></div>
    </div>
  );
};

export default BackgroundAccents;
