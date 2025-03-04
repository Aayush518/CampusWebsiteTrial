import { PageHeader } from '../components/common/PageHeader';
import { useState } from 'react';

const categories = [
  "Campus Life",
  "Events",
  "Infrastructure",
  "Research Activities"
];

const images = [
  {
    url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    category: "Infrastructure",
    title: "Main Building"
  },
  {
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
    category: "Campus Life",
    title: "Student Discussion"
  },
  {
    url: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800",
    category: "Research Activities",
    title: "Research Lab"
  },
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    category: "Events",
    title: "Graduation Ceremony"
  }
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredImages = selectedCategory
    ? images.filter(img => img.category === selectedCategory)
    : images;

  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="Visual journey through our campus life and activities"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              !selectedCategory
                ? 'btn-primary'
                : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-700'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'btn-primary'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="glass-card group relative overflow-hidden hover-lift"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-gray-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}