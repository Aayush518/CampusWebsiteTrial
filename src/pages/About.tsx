import { PageHeader } from '../components/common/PageHeader';
import { GraduationCap, Users, Clock, Award } from 'lucide-react';

const milestones = [
  {
    year: '1981',
    title: 'Establishment',
    description: 'Campus established as Western Region Campus under IOE, TU'
  },
  {
    year: '1994',
    title: 'Bachelor Programs',
    description: 'Started Bachelor level engineering programs'
  },
  {
    year: '2015',
    title: 'Masters Programs',
    description: 'Introduced MSc programs in multiple disciplines'
  },
  {
    year: '2021',
    title: 'UGC Accreditation',
    description: 'Received institutional accreditation from UGC Nepal'
  }
];

const features = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Offering quality education in engineering and technology'
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Highly qualified professors and industry experts'
  },
  {
    icon: Clock,
    title: '40+ Years Legacy',
    description: 'Decades of experience in engineering education'
  },
  {
    icon: Award,
    title: 'Research Focus',
    description: 'Strong emphasis on research and innovation'
  }
];

export function About() {
  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey of excellence in engineering education"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Paschimanchal Campus, established in 1981 as Western Region Campus (WRC), 
                is one of the constituent campuses of Institute of Engineering under Tribhuvan University. 
                Located in the scenic city of Pokhara, the campus has been a center of excellence in 
                engineering education for over four decades.
              </p>
              <p>
                The campus started with certificate level programs and gradually evolved to offer 
                bachelor's and master's degree programs in various engineering disciplines. Today, 
                it stands as one of the premier engineering institutions in Nepal.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass-card p-6 hover-lift">
                <Icon className="h-10 w-10 text-primary-700 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text">Our Journey</h2>
              <p className="text-gray-600 mt-2">Key milestones in our history</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="glass-card p-6 hover-lift">
                  <div className="text-3xl font-bold text-primary-700 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}