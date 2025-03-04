import { Send, BarChart3, FileText } from 'lucide-react';

const links = [
  {
    icon: Send,
    title: 'Strategic Plan',
    subtitle: '2018-22',
  },
  {
    icon: BarChart3,
    title: 'Annual Report',
    subtitle: '2075/76',
  },
  {
    icon: FileText,
    title: 'Audit Report',
    subtitle: '2075/76',
  },
];

export function QuickLinks() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
      <div className="space-y-4">
        {links.map(({ icon: Icon, title, subtitle }) => (
          <a
            key={title}
            href="#"
            className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <Icon className="h-6 w-6 text-primary-700 mr-3" />
            <div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}