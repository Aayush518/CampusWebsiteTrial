import { useState, useEffect } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { FileText, Download, Calendar, Users, ChevronRight } from 'lucide-react';

function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.parallax');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = scrolled * 0.05;
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          (element as HTMLElement).style.transform = `translateY(${rate}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

const reports = [
  {
    category: "Annual Reports",
    items: [
      {
        title: "Annual Report 2079/80",
        date: "July 2023",
        size: "2.5 MB",
        downloads: 234
      },
      {
        title: "Annual Report 2078/79",
        date: "July 2022",
        size: "2.3 MB",
        downloads: 456
      }
    ]
  },
  {
    category: "Academic Reports",
    items: [
      {
        title: "Academic Progress Report 2080",
        date: "December 2023",
        size: "1.8 MB",
        downloads: 189
      },
      {
        title: "Research Activity Report 2080",
        date: "January 2024",
        size: "1.5 MB",
        downloads: 145
      }
    ]
  }
];

export function Reports() {
  useParallax();
  const [selectedCategory, setSelectedCategory] = useState(reports[0].category);

  return (
    <div>
      <PageHeader
        title="Reports"
        subtitle="Access our institutional reports and documents"
        image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="relative bg-gradient-to-b from-white to-gray-50 py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-30 animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-12 parallax">
            {reports.map((category) => (
              <button
                key={category.category}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.category
                    ? 'btn-primary scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 hover:scale-105'
                }`}
                onClick={() => setSelectedCategory(category.category)}
              >
                {category.category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.find(c => c.category === selectedCategory)?.items.map((report) => (
              <div
                key={report.title} 
                className="glass-card overflow-hidden hover-lift parallax transition-all duration-700 opacity-0 hover:opacity-100"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <FileText className="h-8 w-8 text-primary-700 animate-bounce-subtle" />
                    <span className="text-sm text-gray-500">{report.size}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{report.title}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600 group">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="group-hover:text-primary-700 transition-colors">{report.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 group">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="group-hover:text-primary-700 transition-colors">{report.downloads} downloads</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 p-4">
                  <button className="btn-primary w-full flex items-center justify-center group">
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      Download Report
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}