import { PageHeader } from '../components/common/PageHeader';
import { FileText, Download, Calendar, Users } from 'lucide-react';

const categories = [
  {
    name: "Forms & Applications",
    items: [
      {
        title: "Student Registration Form",
        format: "PDF",
        size: "156 KB",
        downloads: 1234,
        lastUpdated: "2024-02-15"
      },
      {
        title: "Scholarship Application",
        format: "PDF",
        size: "245 KB",
        downloads: 890,
        lastUpdated: "2024-02-10"
      }
    ]
  },
  {
    name: "Academic Documents",
    items: [
      {
        title: "Academic Calendar 2080/81",
        format: "PDF",
        size: "1.2 MB",
        downloads: 2345,
        lastUpdated: "2024-01-20"
      },
      {
        title: "Course Syllabus - BE Civil",
        format: "PDF",
        size: "3.5 MB",
        downloads: 1567,
        lastUpdated: "2024-01-15"
      }
    ]
  }
];

export function Downloads() {
  return (
    <div>
      <PageHeader
        title="Downloads"
        subtitle="Access important documents and resources"
      />

      <div className="container mx-auto px-4 py-16">
        {categories.map((category) => (
          <div key={category.name} className="mb-12">
            <h2 className="text-2xl font-bold gradient-text mb-6">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div key={item.title} className="glass-card overflow-hidden hover-lift">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <FileText className="h-8 w-8 text-primary-700" />
                      <div className="text-sm">
                        <span className="text-gray-500">{item.format}</span>
                        <span className="mx-2">•</span>
                        <span className="text-gray-500">{item.size}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Updated: {new Date(item.lastUpdated).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{item.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 p-4">
                    <button className="btn-primary w-full flex items-center justify-center group">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}