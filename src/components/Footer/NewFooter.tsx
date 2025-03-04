import { GraduationCap, Mail, Phone, Facebook, Twitter, Youtube, Instagram, MapPin, Globe } from 'lucide-react';
import { QuickLinks } from './QuickLinks';

const quickLinks = {
  nepal: [
    'Official Portal of Nepal',
    'Office of Prime Minister',
    'Ministry of Education',
    'University Grants Commission',
    'Ministry of Finance'
  ],
  campus: [
    'Tribhuvan University',
    'Institute of Engineering',
    'Pulchowk Campus',
    'Thapathali Campus',
    'Purwanchal Campus'
  ],
  gandaki: [
    'Gandaki Province Portal',
    'Chief Minister Office',
    'Ministry of Economic Affairs',
    'Ministry of Infrastructure',
    'Pokhara Metropolitan'
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#facebook', name: 'Facebook' },
  { icon: Twitter, href: '#twitter', name: 'Twitter' },
  { icon: Youtube, href: '#youtube', name: 'Youtube' },
  { icon: Instagram, href: '#instagram', name: 'Instagram' },
  { icon: Globe, href: '#website', name: 'Website' }
];

export function NewFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Campus Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="h-12 w-12 text-primary-500" />
              <div>
                <h3 className="text-lg font-bold text-white">Nepal Engineering Institute</h3>
                <p className="text-sm text-gray-400">Pokhara, Nepal</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" />
                <p>P.O. Box : 46, Lamachaur-16, Pokhara, Gandaki Province, Nepal</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <div>
                  <p>Tel: 061-443457, 443463</p>
                  <p>Fax: 061-443158</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@wrc.edu.np" className="hover:text-white transition">
                  info@wrc.edu.np
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  className="bg-gray-700 p-2 rounded-full hover:bg-primary-700 transition duration-300"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Sections */}
          <QuickLinks title="Quick Links Nepal Gov" links={quickLinks.nepal} />
          <QuickLinks title="Quick Links TU/IOE" links={quickLinks.campus} />
          <QuickLinks title="Quick Links Gandaki" links={quickLinks.gandaki} />
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Nepal Engineering Institute - Pokhara Campus. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Maintained by: Center for Digital Innovation and Technology
          </p>
        </div>
      </div>
    </footer>
  );
}