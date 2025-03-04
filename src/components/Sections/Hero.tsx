import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000"
        alt="Campus"
        className="w-full h-[400px] md:h-[600px] object-cover transform scale-110 motion-safe:animate-subtle-zoom group-hover:scale-105 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/50 flex items-center backdrop-blur-sm transition-opacity duration-500 group-hover:backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white motion-safe:animate-fade-in-up">
            <span className="inline-block bg-primary-600/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm mb-4 animate-bounce-subtle">
              Admissions Open
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-shine">
              MSc Admission Open for Batch 2081
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Join one of Nepal's premier engineering institutions. Applications are now open for various programs—secure your spot today!
            </p>
            <Link 
              to="/apply" 
              className="gradient-border animate-gradient-border px-6 md:px-8 py-3 md:py-4 font-semibold transition-all duration-300 flex items-center w-fit group relative hover:scale-105"
            >
              <span className="relative z-10 text-primary-900">Apply Now <ExternalLink className="ml-2 h-5 w-5 inline-block transform group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}