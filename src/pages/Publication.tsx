import { PageHeader } from '../components/common/PageHeader';
import { JournalSection } from '../components/Sections/JournalSection';
import { FileText, Download, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: "Journal of Engineering and Science",
    volumes: [
      {
        number: "Vol. 12, No. 2",
        date: "December 2023",
        articles: 8,
        link: "#"
      },
      {
        number: "Vol. 12, No. 1",
        date: "June 2023",
        articles: 10,
        link: "#"
      }
    ]
  },
  {
    title: "Research Bulletin",
    volumes: [
      {
        number: "Vol. 5",
        date: "2023",
        articles: 12,
        link: "#"
      },
      {
        number: "Vol. 4",
        date: "2022",
        articles: 15,
        link: "#"
      }
    ]
  }
];

export function Publication() {
  return (
    <div>
      <PageHeader
        title="Publications"
        subtitle="Explore our academic journals and research publications"
      />

      <JournalSection />

      <div className="container mx-auto px-4 py-16">
        {publications.map((pub) => (
          <div key={pub.title} className="mb-12">
            <h2 className="text-2xl font-bold gradient-text mb-6">{pub.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pub.volumes.map((volume) => (
                <div key={volume.number} className="glass-card p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{volume.number}</h3>
                      <p className="text-gray-600">{volume.date}</p>
                    </div>
                    <FileText className="h-6 w-6 text-primary-700" />
                  </div>
                  <div className="text-gray-600 mb-6">
                    {volume.articles} articles published
                  </div>
                  <div className="flex space-x-4">
                    <button className="btn-primary flex-1 flex items-center justify-center group">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </button>
                    <button className="btn-outline flex-1 flex items-center justify-center group">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
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