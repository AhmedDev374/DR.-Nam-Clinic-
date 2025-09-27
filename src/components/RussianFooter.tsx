import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FooterProps } from '../types';
import { clinicInfo } from '../data/russianData';

const RussianFooter: React.FC<FooterProps> = ({ className = '' }) => {
  const quickLinks = [
    { to: "/ru", label: "Главная" },
    { to: "/ru/services", label: "Услуги" },
    { to: "/ru/doctors", label: "Специалисты" },
    { to: "/ru/contact", label: "Контакты" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className={`bg-blue-900 text-blue-100 ${className}`}>
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Н</span>
              </div>
              <span className="text-xl font-bold">Доктор Нам</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              {clinicInfo.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контактная информация</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <p className="text-blue-200 text-sm">{clinicInfo.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a 
                  href={`tel:${clinicInfo.phone}`}
                  className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                  {clinicInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a 
                  href={`mailto:${clinicInfo.email}`}
                  className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                  {clinicInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Время работы</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <p className="text-blue-200 text-sm">{clinicInfo.workingHours.weekdays}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <p className="text-blue-200 text-sm">{clinicInfo.workingHours.saturday}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <p className="text-blue-200 text-sm">{clinicInfo.workingHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-300 text-sm">
              &copy; {new Date().getFullYear()} Стоматологическая клиника доктора Нам. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Условия использования
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Политика cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RussianFooter;
