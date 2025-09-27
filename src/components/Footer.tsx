import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FooterProps, ContactInfo } from '../types';

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const contactInfo: ContactInfo = {
    address: "123 Smile Street, Happy Town, HT 45678",
    phone: "(123) 456-7890",
    email: "info@dentalclinic.com",
    workingHours: {
      weekdays: "Mon - Fri: 8:00 AM - 6:00 PM",
      saturday: "Saturday: 9:00 AM - 2:00 PM",
      sunday: "Sunday: Closed"
    }
  };

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/ortopedia", label: "Ortopedia" },
    { to: "/terapia", label: "Terapia" },
    { to: "/study", label: "Study" },
    { to: "/surgery", label: "Surgery" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className={`bg-dental-900 text-dental-100 ${className}`}>
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-dental-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold">DentalClinic</span>
            </div>
            <p className="text-dental-200 text-sm leading-relaxed">
              Your smile is our priority. We provide comprehensive dental care with 
              a focus on comfort, quality, and personalized treatment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 bg-dental-800 rounded-full flex items-center justify-center hover:bg-dental-700 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="text-dental-200 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-dental-400" />
                <p className="text-dental-200 text-sm">{contactInfo.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-dental-400" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-dental-200 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-dental-400" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-dental-200 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Working Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-dental-400" />
                <p className="text-dental-200 text-sm">{contactInfo.workingHours.weekdays}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-dental-400" />
                <p className="text-dental-200 text-sm">{contactInfo.workingHours.saturday}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-dental-400" />
                <p className="text-dental-200 text-sm">{contactInfo.workingHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dental-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dental-300 text-sm">
              &copy; {new Date().getFullYear()} DentalClinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-dental-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-dental-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-dental-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
