import { BookOpen, ArrowRight } from 'lucide-react';

export function JournalSection() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="h-8 w-8 text-primary-500" />
              <h2 className="text-3xl font-bold text-white">Journal of Engineering and Science</h2>
            </div>
            <p className="text-gray-300 text-lg mb-8">
              A multidisciplinary journal of science, technology and engineering published by IOE Paschimanchal Campus.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">Volume 12</div>
                <div className="text-sm text-gray-400">Latest Issue</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">2x/Year</div>
                <div className="text-sm text-gray-400">Publication Frequency</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary group">
                Submit Manuscript
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg hover:bg-primary-600/30 transition-all duration-300 group flex items-center backdrop-blur-sm">
                Browse Articles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=2000"
              alt="Journal Cover"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}