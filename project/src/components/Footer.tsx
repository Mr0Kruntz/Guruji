import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">GuruJi</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Connecting passionate learners with expert tutors. Transform your learning journey with personalized education.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@guriji.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/browse"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Find Tutors
              </Link>
              <Link
                to="/signup"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Become a Tutor
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Help Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                FAQ
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 GuruJi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;