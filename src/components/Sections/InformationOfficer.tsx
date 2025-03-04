import { Phone, Mail } from 'lucide-react';

export function InformationOfficer() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Information Officer</h2>
      <div className="relative">
        <img
          className="w-32 h-32 rounded-full mx-auto ring-4 ring-red-100 mb-6"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
          alt="Information Officer"
        />
        <div className="absolute -bottom-2 -right-2 bg-primary-700 text-white p-2 rounded-full">
          <Phone className="h-4 w-4" />
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="uppercase tracking-wide text-sm text-primary-700 font-semibold mb-1">
          Administration Chief
        </div>
        <h3 className="text-xl font-bold text-gray-900">Mr. Khem Bahadur Pulami</h3>
      </div>
      
      <div className="space-y-4">
        <a
          href="tel:+977-9856031828"
          className="flex items-center justify-center bg-gray-50 p-3 rounded-lg text-gray-600 hover:text-primary-700 hover:bg-primary-50 transition"
        >
          <Phone className="h-5 w-5 mr-2" />
          <span>+977-9856031828</span>
        </a>
        <a
          href="mailto:pulami@wrc.edu.np"
          className="flex items-center justify-center bg-gray-50 p-3 rounded-lg text-gray-600 hover:text-primary-700 hover:bg-primary-50 transition"
        >
          <Mail className="h-5 w-5 mr-2" />
          <span>pulami@wrc.edu.np</span>
        </a>
      </div>

      <div className="mt-6 bg-gray-50 rounded-lg p-4 text-center">
        <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
        <div className="text-sm text-gray-600">
          <p>Sunday - Friday: 10:00 AM - 5:00 PM</p>
          <p>Saturday: Closed</p>
        </div>
      </div>
    </div>
  );
}