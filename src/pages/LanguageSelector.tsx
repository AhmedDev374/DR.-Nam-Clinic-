import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Стоматологическая клиника
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
            доктора Нам
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Выберите язык для продолжения / Choose language to continue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Russian Version */}
          <Link
            to="/ru"
            className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400 transition-colors">
                <span className="text-2xl font-bold text-blue-900">РУ</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Русский</h3>
              <p className="text-blue-100 mb-6">
                Полная версия сайта на русском языке с информацией о клинике, услугах и специалистах
              </p>
              <div className="flex items-center justify-center space-x-2 text-yellow-300 group-hover:text-yellow-200 transition-colors">
                <span className="font-medium">Перейти</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* English Version */}
          <Link
            to="/"
            className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors">
                <span className="text-2xl font-bold text-white">EN</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">English</h3>
              <p className="text-blue-100 mb-6">
                Full website version in English with clinic information, services and specialists
              </p>
              <div className="flex items-center justify-center space-x-2 text-blue-300 group-hover:text-blue-200 transition-colors">
                <span className="font-medium">Continue</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Контактная информация</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100">
              <div>
                <p className="font-medium">Телефон:</p>
                <a href="tel:+79180912288" className="hover:text-yellow-300 transition-colors">
                  +7 (918) 091-2288
                </a>
              </div>
              <div>
                <p className="font-medium">Адрес:</p>
                <p>Краснодар, ул. В.Н.Мачуги, 82</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
