import { PageHeader } from '../components/common/PageHeader';
import { Book, Users, FileText, ChevronRight } from 'lucide-react';

const researchCenters = [
  {
    name: "Center for Applied Research in Engineering",
    description: "Focuses on practical applications of engineering solutions",
    projects: 12,
    publications: 45
  },
  {
    name: "Renewable Energy Research Lab",
    description: "Research on sustainable energy solutions",
    projects: 8,
    publications: 23
  },
  {
    name: "Smart Infrastructure Research Center",
    description: "Innovation in infrastructure technology",
    projects: 15,
    publications: 34
  }
];

const publications = [
  {
    title: "Seismic Performance of Traditional Buildings in Nepal",
    authors: "K.P. Sharma, R.K. Thapa",
    journal: "Journal of Engineering and Science",
    year: 2024
  },
  {
    title: "Machine Learning Applications in Hydropower",
    authors: "S.D. Poudel, H.P. Shrestha",
    journal: "International Journal of Energy",
    year: 2023
  }
];

export function Research() {
  return (
    <div>
      <PageHeader
        title="Research"
        subtitle="Advancing knowledge through innovative research"
        image="https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {researchCenters.map((center) => (
            <div key={center.name} className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{center.name}</h3>
              <p className="text-gray-600 mb-6">{center.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary-700">{center.projects}</div>
                  <div className="text-sm text-gray-600">Active Projects</div>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary-700">{center.publications}</div>
                  <div className="text-sm text-gray-600">Publications</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold gradient-text mb-6">Recent Publications</h2>
          <div className="space-y-6">
            {publications.map((pub) => (
              <div key={pub.title} className="glass-card p-6 hover-lift">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-4">{pub.authors}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{pub.journal}</span>
                  <span className="text-primary-700">{pub.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}