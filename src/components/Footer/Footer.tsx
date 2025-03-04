import React from 'react';
import { Search, ChevronDown, Send, BarChart3, FileText, GraduationCap, Calendar, Bell, Globe, Users, BookOpen, ExternalLink, Mail, Phone, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#facebook', name: 'Facebook' },
  { icon: Twitter, href: '#twitter', name: 'Twitter' },
  { icon: Youtube, href: '#youtube', name: 'Youtube' },
  { icon: Instagram, href: '#instagram', name: 'Instagram' },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Meta Bar */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+977-061-440457" className="flex items-center hover:text-blue-200">
              <Phone className="h-4 w-4 mr-2" />
              +977-061-440457
            </a>
            <a href="mailto:info@wrc.edu.np" className="flex items-center hover:text-blue-200">
              <Mail className="h-4 w-4 mr-2" />
              info@wrc.edu.np
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-200">IQAC</a>
            <a href="#" className="hover:text-blue-200">E-Resources</a>
            <Globe className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="text-red-700 h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Tribhuvan University</h1>
              <p className="text-sm text-gray-600">Institute of Engineering - Paschimanchal Campus, Pokhara</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Search website..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Academic', 'Staff', 'News & Notices', 'Research', 'Publication', 'Reports', 'Gallery', 'Downloads', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="inline-block py-4 text-gray-700 hover:text-red-700 border-b-2 border-transparent hover:border-red-700 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000"
          alt="Campus"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-900/50 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <span className="inline-block bg-red-700 text-white px-4 py-1 rounded-full text-sm mb-4">Admissions Open</span>
              <h2 className="text-5xl font-bold mb-4">MSc Admission Open for Batch 2081</h2>
              <p className="text-xl mb-8 leading-relaxed">Join one of Nepal's premier engineering institutions. Applications are now open for various programs—secure your spot today!</p>
              <button className="bg-white text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition flex items-center">
                Apply Now <ExternalLink className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Students', value: '3,500+' },
              { icon: GraduationCap, label: 'Alumni', value: '15,000+' },
              { icon: BookOpen, label: 'Programs', value: '12+' },
              { icon: Users, label: 'Faculty', value: '150+' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon className="h-10 w-10 text-red-700 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Updates */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
            <div className="space-y-4">
              <a href="#" className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <Send className="h-6 w-6 text-red-700 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Strategic Plan</h3>
                  <p className="text-sm text-gray-600">2018-22</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <BarChart3 className="h-6 w-6 text-red-700 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Annual Report</h3>
                  <p className="text-sm text-gray-600">2075/76</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <FileText className="h-6 w-6 text-red-700 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Audit Report</h3>
                  <p className="text-sm text-gray-600">2075/76</p>
                </div>
              </a>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Updates</h2>
              <button className="text-red-700 hover:text-red-800 flex items-center">
                View All <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: 'RMC 4th Research Mini Grant Final Presentation',
                  date: 'March 15, 2024',
                  category: 'Research'
                },
                {
                  title: 'MSc Entrance Result 2081',
                  date: 'March 12, 2024',
                  category: 'Academic'
                },
                {
                  title: 'National Conference on Recent Trends in Science',
                  date: 'March 10, 2024',
                  category: 'Events'
                },
                {
                  title: 'Invitation For Bids',
                  date: 'March 8, 2024',
                  category: 'Notice'
                }
              ].map((update) => (
                <div key={update.title} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{update.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-red-700">{update.category}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 hover:text-red-700 transition">{update.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <GraduationCap className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-4">Tribhuvan University</h3>
              <p className="text-gray-400">Institute of Engineering<br />Paschimanchal Campus<br />Pokhara, Nepal</p>
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map(({ icon: Icon, href, name }) => (
                  <a
                    key={name}
                    href={href}
                    className="bg-gray-700 p-2 rounded-full hover:bg-red-700 transition"
                    aria-label={name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition">Academic Programs</a></li>
                <li><a href="#" className="hover:text-white transition">Research</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">E-Library</a></li>
                <li><a href="#" className="hover:text-white transition">Student Portal</a></li>
                <li><a href="#" className="hover:text-white transition">Faculty Portal</a></li>
                <li><a href="#" className="hover:text-white transition">Downloads</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +977-061-440457
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@wrc.edu.np
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Tribhuvan University - Institute of Engineering, Paschimanchal Campus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;