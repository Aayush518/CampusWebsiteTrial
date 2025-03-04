import { PageHeader } from '../components/common/PageHeader';
import { Book, Users, Clock, ChevronRight } from 'lucide-react';

const programs = [
  {
    level: "Bachelor's Programs",
    courses: [
      {
        name: "Civil Engineering",
        duration: "4 years",
        seats: 96,
        description: "Focus on infrastructure design and construction"
      },
      {
        name: "Computer Engineering",
        duration: "4 years",
        seats: 96,
        description: "Software and hardware systems development"
      },
      {
        name: "Electronics Engineering",
        duration: "4 years",
        seats: 48,
        description: "Electronic systems and communication"
      }
    ]
  },
  {
    level: "Master's Programs",
    courses: [
      {
        name: "MSc in Structural Engineering",
        duration: "2 years",
        seats: 20,
        description: "Advanced structural analysis and design"
      },
      {
        name: "MSc in Construction Management",
        duration: "2 years",
        seats: 20,
        description: "Project management and construction technology"
      }
    ]
  }
];

export function Academic() {
  return (
    <div>
      <PageHeader
        title="Academic Programs"
        subtitle="Explore our comprehensive engineering programs"
        image="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="container mx-auto px-4 py-16">
        {programs.map((program) => (
          <div key={program.level} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{program.level}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {program.courses.map((course) => (
                <div key={course.name} className="glass-card overflow-hidden group">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{course.name}</h3>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 mr-2" />
                        <span>Seats: {course.seats}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Book className="h-5 w-5 mr-2" />
                        <span>Full Time</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 p-4">
                    <button className="w-full flex items-center justify-center text-primary-700 hover:text-primary-800 font-semibold group-hover:translate-x-1 transition-transform">
                      View Details <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gray-50 rounded-xl p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Admission Requirements</h3>
          <div className="prose prose-lg text-gray-600">
            <p>
              Admission to our programs is based on merit through entrance examinations conducted by IOE. 
              Candidates must have completed their +2 or equivalent in Science with Mathematics and Physics 
              as major subjects.
            </p>
            <button className="mt-6 btn-primary">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}