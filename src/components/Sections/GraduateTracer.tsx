import { ExternalLink } from 'lucide-react';

export function GraduateTracer() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg p-6 md:p-8 text-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Graduate Tracer Study</h2>
        <span className="text-blue-300">2023</span>
      </div>
      
      <div className="space-y-6">
        <p className="text-blue-100">
          Help us improve our programs by participating in our graduate tracer study. Your feedback is valuable for enhancing the quality of education at IOE.
        </p>
        
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-3xl font-bold mb-1">2000+</div>
          <div className="text-sm text-blue-200">Graduates Tracked</div>
        </div>
        
        <button className="w-full bg-white text-blue-900 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center">
          Submit Online Form <ExternalLink className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}