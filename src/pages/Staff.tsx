import { PageHeader } from '../components/common/PageHeader';
import { Mail, Phone, GraduationCap, Award } from 'lucide-react';

const departments = [
  {
    name: "Civil Engineering",
    faculty: [
      {
        name: "Dr. Ram Kumar Sharma",
        position: "Professor",
        qualification: "PhD in Structural Engineering",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        email: "ram.sharma@wrc.edu.np",
        phone: "+977-98XXXXXXXX"
      },
      {
        name: "Er. Sita Devi Poudel",
        position: "Associate Professor",
        qualification: "MSc in Construction Management",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        email: "sita.poudel@wrc.edu.np",
        phone: "+977-98XXXXXXXX"
      }
    ]
  },
  {
    name: "Computer Engineering",
    faculty: [
      {
        name: "Dr. Hari Prasad Shrestha",
        position: "Professor",
        qualification: "PhD in Computer Science",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        email: "hari.shrestha@wrc.edu.np",
        phone: "+977-98XXXXXXXX"
      }
    ]
  }
];

export function Staff() {
  return (
    <div>
      <PageHeader
        title="Our Faculty"
        subtitle="Meet our experienced and dedicated academic staff"
        image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="container mx-auto px-4 py-16">
        {departments.map((department) => (
          <div key={department.name} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{department.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {department.faculty.map((member) => (
                <div key={member.name} className="glass-card overflow-hidden group">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/90 to-transparent p-4">
                      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                      <p className="text-gray-200">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="h-5 w-5 text-primary-700 mr-2" />
                      <span className="text-gray-600">{member.qualification}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Mail className="h-5 w-5 text-gray-400 mr-2" />
                      <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-primary-700 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-2" />
                      <a href={`tel:${member.phone}`} className="text-gray-600 hover:text-primary-700 transition-colors">
                        {member.phone}
                      </a>
                    </div>
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