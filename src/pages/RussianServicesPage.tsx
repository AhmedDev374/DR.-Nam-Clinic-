import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Shield, Users, Award, Phone } from 'lucide-react';
import { PageProps } from '../types';
import { services, clinicInfo } from '../data/russianData';

const RussianServicesPage: React.FC<PageProps> = ({ onBookingClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const serviceCategories = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  const categories = ['all', ...Object.keys(serviceCategories)];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : serviceCategories[selectedCategory] || [];

  const categoryNames: Record<string, string> = {
    'all': 'Все услуги',
    'Лечение зубов': 'Лечение зубов',
    'Протезирование': 'Протезирование зубов',
    'Имплантация': 'Имплантация зубов',
    'Хирургия': 'Хирургия',
    'Ортодонтия': 'Ортодонтия',
    'Эстетическая стоматология': 'Эстетическая стоматология',
    'Гигиена': 'Гигиена',
    'Диагностика': 'Диагностика'
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920&q=80"
            alt="Наши услуги"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Наши услуги
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Мы предлагаем нашим клиентам все виды эстетической и лечебной стоматологии
            </p>
            <button
              onClick={onBookingClick}
              className="btn-primary bg-yellow-500 text-blue-900 hover:bg-yellow-400 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Записаться</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoryNames[category]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="card group">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={onBookingClick}
                    className="w-full btn-primary bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Специальные предложения
            </h2>
            <p className="text-xl text-gray-600">
              Выгодные условия для наших пациентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center border-2 border-yellow-500">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Первая консультация бесплатно</h3>
              <p className="text-gray-600 mb-6">
                Получите бесплатную диагностику и консультацию у наших специалистов
              </p>
              <button
                onClick={onBookingClick}
                className="btn-primary bg-yellow-500 text-blue-900 hover:bg-yellow-400"
              >
                Записаться на консультацию
              </button>
            </div>
            <div className="card p-8 text-center border-2 border-blue-500">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Гарантия качества</h3>
              <p className="text-gray-600 mb-6">
                Мы предоставляем гарантию на все виды стоматологических услуг
              </p>
              <button
                onClick={onBookingClick}
                className="btn-primary bg-blue-600 text-white hover:bg-blue-700"
              >
                Узнать подробнее
              </button>
            </div>
            <div className="card p-8 text-center border-2 border-green-500">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Семейные скидки</h3>
              <p className="text-gray-600 mb-6">
                Специальные условия для семей и постоянных клиентов
              </p>
              <button
                onClick={onBookingClick}
                className="btn-primary bg-green-600 text-white hover:bg-green-700"
              >
                Получить скидку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-blue-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600">
              Простой и понятный процесс лечения
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Консультация',
                  description: 'Бесплатная диагностика и планирование лечения'
                },
                {
                  step: 2,
                  title: 'План лечения',
                  description: 'Составление индивидуального плана лечения'
                },
                {
                  step: 3,
                  title: 'Лечение',
                  description: 'Профессиональное выполнение всех процедур'
                },
                {
                  step: 4,
                  title: 'Контроль',
                  description: 'Наблюдение и поддержка после лечения'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы начать лечение?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Запишитесь на консультацию и получите индивидуальный план лечения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookingClick}
              className="btn-primary bg-yellow-500 text-blue-900 hover:bg-yellow-400 flex items-center justify-center space-x-2"
            >
              <span>Записаться на консультацию</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${clinicInfo.phone}`}
              className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>{clinicInfo.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RussianServicesPage;
