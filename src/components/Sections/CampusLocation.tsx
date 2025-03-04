import { MapPin, Navigation, Clock, Bus, Plane, Phone, Mail, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CAMPUS_LOCATION = {
  lat: 28.2622,
  lng: 83.9686,
  name: "IOE Paschimanchal Campus",
  address: "Lamachaur-16, Pokhara, Nepal",
  phone: "+977-061-440457",
  email: "info@wrc.edu.np",
  website: "www.wrc.edu.np"
};

const LANDMARKS = [
  {
    name: "Pokhara Airport",
    distance: "6.2 km",
    time: "15 mins",
    direction: "South-East"
  },
  {
    name: "Lakeside",
    distance: "4.5 km",
    time: "10 mins",
    direction: "South"
  },
  {
    name: "City Center",
    distance: "3.8 km",
    time: "12 mins",
    direction: "South-East"
  },
  {
    name: "Seti River",
    distance: "0.5 km",
    time: "5 mins walk",
    direction: "West"
  }
];

export function CampusLocation() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Visit Our <span className="text-primary-700">Campus</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience our world-class facilities in the heart of Pokhara
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-primary-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-4 rounded-full animate-bounce-subtle">
                    <MapPin className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{CAMPUS_LOCATION.name}</h3>
                    <div className="space-y-3">
                      <p className="text-lg text-gray-600">{CAMPUS_LOCATION.address}</p>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        <a href={`tel:${CAMPUS_LOCATION.phone}`} className="hover:text-primary-700 transition-colors">
                          {CAMPUS_LOCATION.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        <a href={`mailto:${CAMPUS_LOCATION.email}`} className="hover:text-primary-700 transition-colors">
                          {CAMPUS_LOCATION.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Globe className="h-4 w-4 mr-2" />
                        <a href={`https://${CAMPUS_LOCATION.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary-700 transition-colors">
                          {CAMPUS_LOCATION.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Plane, text: "15 mins from Airport", color: "bg-blue-50 text-blue-700" },
                  { icon: Navigation, text: "10 mins from Lakeside", color: "bg-green-50 text-green-700" },
                  { icon: Bus, text: "Regular Bus Service", color: "bg-yellow-50 text-yellow-700" },
                  { icon: Clock, text: "Open 10 AM - 5 PM", color: "bg-purple-50 text-purple-700" }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${item.color} p-4 rounded-xl flex items-center space-x-3 transform hover:scale-105 transition-all duration-300`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full gradient-border animate-gradient-border px-8 py-4 rounded-xl transition-all duration-500 flex items-center justify-center group text-lg font-semibold hover:shadow-xl"
                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${CAMPUS_LOCATION.lat},${CAMPUS_LOCATION.lng}`, '_blank')}
              >
                <span className="relative z-10 text-primary-900 flex items-center">
                  Get Directions
                  <MapPin className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-600 rounded-xl transform translate-x-2 translate-y-2 -z-10 opacity-75" />
              <div className="relative w-full rounded-xl overflow-hidden border-4 border-white shadow-xl">
                <div className="relative h-[400px] overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000"
                    alt="Campus Location"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  
                  {/* Location Marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-primary-600 rounded-full animate-ping absolute inset-0" />
                      <div className="w-6 h-6 bg-primary-600 rounded-full relative z-10" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Nearby Landmarks</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {LANDMARKS.map((landmark) => (
                      <div key={landmark.name} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900">{landmark.name}</h4>
                        <div className="text-sm text-gray-600 mt-1">
                          <p>{landmark.distance}</p>
                          <p className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {landmark.time}
                          </p>
                          <p className="text-primary-600 text-xs mt-1">{landmark.direction}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${CAMPUS_LOCATION.lat},${CAMPUS_LOCATION.lng}`, '_blank')}
                    className="w-full mt-4 flex items-center justify-center text-primary-700 hover:text-primary-800 font-medium"
                  >
                    View on Maps
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}