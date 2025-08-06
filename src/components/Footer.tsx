import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-2 rounded-lg">
                <Smile className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-serif font-bold">Smile Clinic</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Because Every Smile Matters. We provide comprehensive dental care with a focus on comfort, quality, and patient satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/clinic" className="text-gray-400 hover:text-teal-400 transition-colors">Our Clinic</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-teal-400 transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-teal-400 transition-colors">Reviews</Link></li>
              <li><Link to="/appointment" className="text-gray-400 hover:text-teal-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Smile Makeover</li>
              <li className="text-gray-400">Painless Root Canal</li>
              <li className="text-gray-400">Teeth Whitening</li>
              <li className="text-gray-400">Clear Aligners</li>
              <li className="text-gray-400">Kids Dentistry</li>
              <li className="text-gray-400">Emergency Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 Dental Street, Medical District, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-400">(+92) 3240133166</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-400">pdeveloper133@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 4:00 PM</div>
                  <div>Sun: Emergency Only</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Smile Clinic.
            Developed with ❤️ by Developer Pawan.
             All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;