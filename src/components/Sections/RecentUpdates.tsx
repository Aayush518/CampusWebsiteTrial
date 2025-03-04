import { Calendar, ChevronDown } from 'lucide-react';

const updates = [
  {
    title: 'RMC 4th Research Mini Grant Final Presentation',
    date: 'March 15, 2024',
    category: 'Research',
  },
  {
    title: 'MSc Entrance Result 2081',
    date: 'March 12, 2024',
    category: 'Academic',
  },
  {
    title: 'National Conference on Recent Trends in Science',
    date: 'March 10, 2024',
    category: 'Events',
  },
  {
    title: 'Invitation For Bids',
    date: 'March 8, 2024',
    category: 'Notice',
  },
];

export function RecentUpdates() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Recent Updates</h2>
        <button className="btn-secondary py-2 group flex items-center">
          View All <ChevronDown className="h-4 w-4 ml-1" />
        </button>
      </div>
      <div className="space-y-4">
        {updates.map((update) => (
          <div key={update.title} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{update.date}</span>
              <span className="mx-2">•</span>
              <span className="text-primary-700">{update.category}</span>
            </div>
            <h3 className="font-semibold text-gray-900 hover:text-primary-700 transition">
              {update.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}