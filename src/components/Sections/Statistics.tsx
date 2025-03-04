import { Users, GraduationCap, BookOpen } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Students', value: '3,500+' },
  { icon: GraduationCap, label: 'Alumni', value: '15,000+' },
  { icon: BookOpen, label: 'Programs', value: '12+' },
  { icon: Users, label: 'Faculty', value: '150+' },
];

export function Statistics() {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <Icon className="h-10 w-10 text-primary-700 mx-auto mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{value}</div>
              <div className="text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}