import React from 'react';
import { Compass, ArrowRight, Home, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface NotFoundPageProps {
  navigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto space-y-6">
        
        <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto shadow-2xl">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-500/30">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-4 leading-tight">
            Looks Like This Page Took a Different Route.
          </h1>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            The link you followed might be broken, or the page may have been relocated. Let's get you back on track to explore Pixelrise Media's growth services.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/')}
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Back to Home
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={() => navigate('/services')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Services
          </Button>
        </div>

      </div>
    </div>
  );
};
