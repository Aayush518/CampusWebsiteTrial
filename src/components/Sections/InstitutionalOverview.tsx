import { useEffect } from 'react';
import { ChevronRight, Users, GraduationCap, Award, BookOpen } from 'lucide-react';

function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.parallax');
      const viewportHeight = window.innerHeight;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = (viewportHeight / 2) - elementCenter;
        const parallaxOffset = distanceFromCenter * 0.1;
        
        if (rect.top < viewportHeight && rect.bottom > 0) {
          element.style.setProperty('--parallax-offset', `${parallaxOffset}px`);
          element.style.opacity = '1';
        } else {
          element.style.opacity = '0';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

const highlights = [
  {
    title: "UGC Accredited",
    description: "Recognized by University Grants Commission Nepal, 2021",
    icon: Award
  },
  {
    title: "Premier Institution",
    description: "One of Nepal's leading engineering institutions",
    icon: GraduationCap
  },
  {
    title: "Research Excellence",
    description: "Strong focus on research and innovation",
    icon: BookOpen
  },
  {
    title: "Diverse Community",
    description: "Students from all across Nepal and beyond",
    icon: Users
  }
];

const stats = {
  programs: 12,
  students: 2183,
  faculty: 107,
  staff: 73
};

export function InstitutionalOverview() {
  useParallax();

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden perspective-1000">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-[800px] h-[800px] rounded-full bg-primary-100/30 absolute -right-40 -top-40 animate-float"
        />
        <div
          className="w-[600px] h-[600px] rounded-full bg-blue-100/20 absolute -left-20 -bottom-20 animate-float"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 
              className="text-4xl font-bold text-gray-900 mb-8 parallax"
            >
              <span className="text-primary-700">Institutional</span> Overview
            </h2>
            
            <div className="prose prose-lg text-gray-600">
              <p
                className="mb-6 text-lg leading-relaxed parallax transition-all duration-700 opacity-0"
              >
                Nestled in the scenic city of Pokhara, Paschimanchal Campus stands as a beacon of 
                engineering excellence. With the melodious Seti River as our backdrop and the 
                majestic Himalayas watching over us, we've created an environment where innovation 
                meets tradition, and excellence meets opportunity.
              </p>
              
              <p
                className="mb-6 text-lg leading-relaxed parallax transition-all duration-700 opacity-0"
              >
                Since our establishment in 1981, we've been at the forefront of engineering 
                education in Nepal, transforming from a technical training center to a 
                comprehensive engineering institution. Our journey reflects our commitment to 
                evolving with the needs of our nation while maintaining the highest standards 
                of academic excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12 parallax transition-all duration-700 opacity-0">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1"
                >
                  <highlight.icon className="h-8 w-8 text-primary-700 mb-4 animate-bounce-subtle" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative lg:sticky lg:top-24 space-y-8 parallax transition-all duration-700 opacity-0">
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000"
                alt="Campus Building"
                className="w-full h-[500px] object-cover transform transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-2">Our Campus</h3>
                <p className="text-lg text-gray-200">A perfect blend of modern facilities and natural beauty</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 parallax transition-all duration-700 opacity-0">
              {Object.entries(stats).map(([key, value], index) => (
                <div
                  key={key}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
                >
                  <div className="text-4xl font-bold text-primary-700 mb-2 animate-bounce-subtle">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>

            <button
              className="w-full gradient-border animate-gradient-border px-8 py-4 rounded-xl transition-all duration-500 flex items-center justify-center group text-lg font-semibold hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
            >
              <span className="relative z-10 text-primary-900">
                Explore Our Campus
                <ChevronRight className="h-6 w-6 ml-2 inline-block transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}