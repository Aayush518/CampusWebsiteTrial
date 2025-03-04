import { Globe, Mail, Phone } from 'lucide-react';

export function TopMetaBar() {
  return (
    <div className="bg-primary-900 text-white text-sm">
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="tel:+977-061-440457" className="flex items-center hover:text-primary-200">
            <Phone className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">+977-061-440457</span>
          </a>
          <a href="mailto:info@wrc.edu.np" className="flex items-center hover:text-primary-200">
            <Mail className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">info@wrc.edu.np</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-primary-200">IQAC</a>
          <a href="#" className="hover:text-primary-200 hidden sm:inline">E-Resources</a>
          <Globe className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}