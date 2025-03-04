import { Calendar, ChevronRight } from 'lucide-react';

interface Notice {
  title: string;
  date: string;
  category: string;
}

const notices: Notice[] = [
  {
    title: "विद्यार्थी परिचय पत्र सम्बन्धि सूचना",
    date: "February 10, 2025",
    category: "Student"
  },
  {
    title: "सेमेस्टर भर्ना म्याद थप सम्बन्धी सूचना",
    date: "February 7, 2025",
    category: "Admission"
  },
  {
    title: "पुस्तक नवीकरण सम्बन्धी सूचना",
    date: "January 19, 2025",
    category: "Library"
  },
  {
    title: "स्व.वि.यु निर्वाचन सम्बन्धि सूचना",
    date: "November 29, 2024",
    category: "Election"
  },
  {
    title: "RMC 4th Research Mini Grant Final Presentation",
    date: "November 27, 2024",
    category: "Research"
  }
];

const categories = [
  { name: "Admission Notice", color: "bg-blue-100 text-blue-800" },
  { name: "General Notice", color: "bg-green-100 text-green-800" },
  { name: "RMU Updates", color: "bg-primary-100 text-primary-800" },
  { name: "Students Activity", color: "bg-orange-100 text-orange-800" },
  { name: "Vacancy Announcement", color: "bg-blue-100 text-blue-800" }
];

export function NoticeBoard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Notice Board</h2>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium ${category.color} hover:opacity-90 transition whitespace-nowrap`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.title}
            className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition duration-300"
          >
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{notice.date}</span>
              <span className="mx-2">•</span>
              <span className="text-primary-700">{notice.category}</span>
            </div>
            <h3 className="font-medium text-gray-900 hover:text-primary-700 transition cursor-pointer">
              {notice.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="btn-primary group inline-flex items-center">
          View All Notices
          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}