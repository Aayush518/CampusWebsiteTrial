import { GraduationCap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MainHeader() {
  return (
    <div className="bg-white/80 backdrop-blur-glass border-b border-white/20 shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-400/30 rounded-lg blur-xl animate-pulse-slow shadow-neon"></div>
            <GraduationCap className="text-primary-700 h-8 w-8 md:h-10 md:w-10 animate-bounce-subtle relative" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold gradient-text">
              Nepal Engineering Institute
            </h1>
            <p className="text-sm text-gray-600">Center of Excellence - Pokhara Campus</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search courses, research..."
              className="input-primary pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <Link to="/apply" className="btn-primary text-center inline-flex items-center group">
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">
            Apply Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}