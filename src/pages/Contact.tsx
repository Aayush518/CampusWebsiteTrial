import { PageHeader } from '../components/common/PageHeader';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { CampusLocation } from '../components/Sections/CampusLocation';

const contactInfo = {
  address: "P.O. Box : 46, Lamachaur-16, Pokhara, Gandaki Province, Nepal",
  phone: [
    "Tel: 061-443457, 443463",
    "Fax: 061-443158"
  ],
  email: "info@wrc.edu.np",
  hours: [
    "Sunday - Friday: 10:00 AM - 5:00 PM",
    "Saturday: Closed"
  ]
};

const departments = [
  {
    name: "Admission Office",
    contact: "+977-061-440457",
    email: "admission@wrc.edu.np"
  },
  {
    name: "Examination Section",
    contact: "+977-061-440458",
    email: "exam@wrc.edu.np"
  },
  {
    name: "Library",
    contact: "+977-061-440459",
    email: "library@wrc.edu.np"
  }
];

export function Contact() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-700 mt-1 mr-4" />
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-700 mt-1 mr-4" />
                  <div className="text-gray-600">
                    {contactInfo.phone.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-700 mt-1 mr-4" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-primary-700 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-700 mt-1 mr-4" />
                  <div className="text-gray-600">
                    {contactInfo.hours.map((hours, index) => (
                      <p key={index}>{hours}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Department Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {departments.map((dept) => (
                <div key={dept.name} className="glass-card p-4 hover-lift">
                  <h4 className="font-semibold text-gray-900 mb-2">{dept.name}</h4>
                  <p className="text-sm text-gray-600">{dept.contact}</p>
                  <a href={`mailto:${dept.email}`} className="text-sm text-primary-700 hover:text-primary-800 transition-colors">
                    {dept.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input type="text" className="input-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input type="email" className="input-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input type="text" className="input-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea rows={4} className="input-primary" />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <CampusLocation />
    </div>
  );
}