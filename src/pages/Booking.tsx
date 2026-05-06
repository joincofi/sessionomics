import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Booking() {
  useEffect(() => {
    // Load iClosed widget script
    const script = document.createElement('script');
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="font-display font-bold text-xl tracking-tight text-slate-900 hover:text-indigo-600 transition-colors">
              Sessionomics
            </Link>
            <div className="w-24"></div> {/* Spacer for balance */}
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mb-4">
              Book your strategy call
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
              Let's map out a plan to fill your next webinar room with your ideal customer profile.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-slate-200 bg-white p-1 md:p-4 overflow-hidden"
          >
            <div 
              className="iclosed-widget" 
              data-url="https://app.iclosed.io/e/cofi/strategy-call" 
              title="Sessionomics: Strategy Call" 
              style={{ width: '100%', height: '700px' }}
            ></div>
          </motion.div>
          
        </div>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Sessionomics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
