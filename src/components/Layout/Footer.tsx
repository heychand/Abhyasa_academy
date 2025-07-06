import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp
} from 'lucide-react';
import { ACADEMY_INFO, NAVIGATION_ITEMS } from '../../utils/constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Academy Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="h-10 w-10 text-primary-400" />
                <div>
                  <h3 className="text-2xl font-display font-bold">{ACADEMY_INFO.name}</h3>
                  <p className="text-primary-400 text-sm">{ACADEMY_INFO.tagline}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                {ACADEMY_INFO.description}. Nurturing minds, building futures, and creating leaders for tomorrow's world.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {ACADEMY_INFO.contact.address}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    {ACADEMY_INFO.contact.phone}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    {ACADEMY_INFO.contact.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {ACADEMY_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-40"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;