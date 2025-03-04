import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academic', path: '/academic' },
  { name: 'Staff', path: '/staff' },
  { name: 'News & Notices', path: '/news-and-notices' },
  { name: 'Research', path: '/research' },
  { name: 'Publication', path: '/publication' },
  { name: 'Reports', path: '/reports' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Downloads', path: '/downloads' },
  { name: 'Contact', path: '/contact' }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-white/75 backdrop-blur-glass sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'shadow-lg border-b border-white/20' : 'shadow-md'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between md:hidden py-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-primary-700 transition-all duration-300 transform hover:scale-110 hover:shadow-neon rounded-lg p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        <ul className={`md:flex md:space-x-6 ${isOpen ? 'block animate-fade-down' : 'hidden'} md:block`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block py-2 md:py-4 px-2 md:px-0 text-gray-700 hover:text-primary-700 hover:bg-primary-50/50 
                md:hover:bg-transparent border-l-4 md:border-l-0 border-transparent hover:border-primary-700 md:hover:border-b-2 
                transition-all duration-300 transform hover:translate-y-[-2px] ${
                  location.pathname === item.path ? 'text-primary-700 border-primary-700 md:border-b-2 font-medium' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}