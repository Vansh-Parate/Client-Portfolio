import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [budget, setBudget] = useState(3000);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Submitting…');
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('Thanks! You\'ll receive a confirmation email shortly.');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormStatus('');
        setIsSubmitting(false);
        (e.target as HTMLFormElement).reset();
        setBudget(3000);
        setSelectedFiles(null);
      }, 3000);
    } catch (error) {
      setFormStatus('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const formatBudget = (value: number) => {
    return new Intl.NumberFormat('de-DE', { 
      style: 'currency', 
      currency: 'EUR', 
      maximumFractionDigits: 0 
    }).format(value);
  };

  const getFileInfo = () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      return '.zip, .pdf, images — up to 25 MB';
    }
    if (selectedFiles.length === 1) {
      return selectedFiles[0].name;
    }
    return `${selectedFiles.length} files selected`;
  };

  return (
    <section id="contact" className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Let's work together</h2>
              <p className="text-xs text-neutral-400">Ready to bring your 3D vision to life?</p>
            </div>
            <div className="space-y-4">
              <div className="group flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-neutral-900/40 hover:bg-neutral-800/40 transition-all duration-300 transform hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">Email</div>
                  <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">hello@aidenk.com</div>
                </div>
              </div>
              <div className="group flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-neutral-900/40 hover:bg-neutral-800/40 transition-all duration-300 transform hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">Location</div>
                  <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">San Francisco, CA</div>
                </div>
              </div>
              <div className="group flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-neutral-900/40 hover:bg-neutral-800/40 transition-all duration-300 transform hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">Response Time</div>
                  <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <label htmlFor="name" className="block text-xs font-medium text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 ${
                    focusedField === 'name' ? 'bg-neutral-800/60 shadow-lg shadow-cyan-400/25' : ''
                  }`}
                  placeholder="Your name"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 ${
                    focusedField === 'email' ? 'bg-neutral-800/60 shadow-lg shadow-cyan-400/25' : ''
                  }`}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-xs font-medium text-neutral-300 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={`w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 resize-none ${
                  focusedField === 'message' ? 'bg-neutral-800/60 shadow-lg shadow-cyan-400/25' : ''
                }`}
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="space-y-4">
              <label className="block text-xs font-medium text-neutral-300">
                Budget Range
              </label>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>$1,000</span>
                  <span className="text-cyan-300 font-medium">${budget.toLocaleString()}</span>
                  <span>$10,000+</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>Small project</span>
                  <span>Large project</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <label htmlFor="files" className="block text-xs font-medium text-neutral-300 mb-2">
                Reference Files (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="files"
                  name="files"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="files"
                  className="group flex items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-lg bg-neutral-900/40 hover:bg-neutral-800/40 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <svg className="mx-auto h-8 w-8 text-neutral-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mt-2 text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                      {selectedFiles ? `${selectedFiles.length} file(s) selected` : 'Drop files here or click to upload'}
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group relative overflow-hidden inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-cyan-200 active:bg-cyan-400/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-300/25"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4 group-hover:animate-bounce transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Request
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <div className="text-xs text-neutral-400" aria-live="polite">
                {formStatus && (
                  <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    formStatus.includes('Thanks') 
                      ? 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/20' 
                      : formStatus.includes('wrong') 
                        ? 'bg-red-400/10 text-red-300 border border-red-400/20'
                        : 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/20'
                  }`}>
                    {formStatus.includes('Thanks') && (
                      <svg className="h-4 w-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {formStatus}
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22d3ee, #3b82f6);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
          transition: all 0.3s ease;
        }
        
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22d3ee, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
          transition: all 0.3s ease;
        }
        
        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Contact;
