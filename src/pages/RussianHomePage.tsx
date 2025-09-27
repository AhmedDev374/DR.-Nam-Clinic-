import React from 'react';
import { ArrowRight, Star, Shield, Clock, Users, Award, CheckCircle, Phone, MapPin, Mail } from 'lucide-react';
import { PageProps } from '../types';
import { clinicInfo, services, doctors, testimonials, galleryImages } from '../data/russianData';

const RussianHomePage: React.FC<PageProps> = ({ onBookingClick }) => {
  const serviceCategories = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  const featuredServices = [
    {
      title: "ПРЕМИАЛЬНЫЕ АВТОРСКИЕ ВИНИРЫ",
      price: "от 25,000 ₽",
      description: "ручной работы",
      image: "https://picsum.photos/800/600?random=1",
      features: ["Ручная работа", "Премиальные материалы", "Естественный вид"]
    },
    {
      title: "ПРОФЕССИОНАЛЬНАЯ ИМПЛАНТАЦИЯ",
      price: "от 19,000 ₽",
      description: "любой сложности",
      image: "https://picsum.photos/800/600?random=2",
      features: ["Современные импланты", "Быстрое восстановление", "Пожизненная гарантия"]
    },
    {
      title: "ВСЕ НА 4 И ВСЕ НА 6",
      price: "от 130,000 ₽",
      description: "имплантах",
      image: "https://picsum.photos/800/600?random=3",
      features: ["Быстрое восстановление", "Минимальная травматичность", "Немедленная нагрузка"]
    },
    {
      title: "ЭСТЕТИЧЕСКАЯ РЕСТАВРАЦИЯ",
      price: "от 15,000 ₽",
      description: "по новейшим технологиям",
      image: "https://picsum.photos/800/600?random=4",
      features: ["Современные материалы", "Естественный вид", "Долговечность"]
    }
  ];

  const stats = [
    { number: '15+', label: 'Лет опыта' },
    { number: '5000+', label: 'Довольных пациентов' },
    { number: '4', label: 'Врача-специалиста' },
    { number: '100%', label: 'Качество услуг' }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Современное оборудование',
      description: 'Новейшее немецкое стоматологическое оборудование с сертификатами'
    },
    {
      icon: Users,
      title: 'Лучшие врачи',
      description: 'Высококвалифицированные специалисты с многолетним опытом'
    },
    {
      icon: Award,
      title: 'Первая консультация бесплатно',
      description: 'Бесплатная диагностика и консультация для новых пациентов'
    },
    {
      icon: Clock,
      title: 'Гибкая система оплаты',
      description: 'Возможность оплаты в кредит и скидки для льготных категорий'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Language Selector Button */}
      <div className="fixed top-4 right-4 z-50">
        <a
          href="/select-language"
          className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200 flex items-center space-x-2"
        >
          <span>🌐</span>
          <span>Язык</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddceee95?auto=format&fit=crop&w=1920&q=80"
            alt="Стоматологическая клиника доктора Нам"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Стоматологическая клиника<br />
              <span className="text-yellow-300">доктора Нам</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
              {clinicInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button
                onClick={onBookingClick}
                className="btn-primary bg-yellow-500 text-blue-900 hover:bg-yellow-400 flex items-center justify-center space-x-2"
              >
                <span>Получить скидку</span>
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
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем нашим клиентам все виды эстетической и лечебной стоматологии
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="card group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-1 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={onBookingClick}
                    className="w-full btn-primary bg-blue-600 text-white hover:bg-blue-700 text-sm py-2"
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ number, label }, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {number}
                </div>
                <div className="text-gray-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctor - Dr. Nam */}
      <section className="bg-gradient-to-r from-blue-50 to-yellow-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Основатель клиники
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Доктор Нам Лариса Вячеславовна - кандидат медицинских наук с 15+ летним опытом
            </p>
          </div>
          <div className="card max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <img
                  src="/images/doctor-nam.jpg"
                  alt="Нам Лариса Вячеславовна"
                  className="w-full h-80 lg:h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                  loading="lazy"
                />
              </div>
              <div className="lg:w-2/3 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-900">Н</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Нам Лариса Вячеславовна</h3>
                    <p className="text-blue-600 font-semibold text-lg">Основатель и главный врач клиники</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Кандидат медицинских наук с более чем 15-летним опытом работы в стоматологии. 
                  Специализируется на протезировании винирами, коронками и тотальном протезировании. 
                  Регулярно проходит обучение в ведущих медицинских центрах России.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Специализация:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>Протезирование винирами</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>Тотальное протезирование</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>Протезирование на имплантах</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>Лечение и реставрация зубов</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Достижения:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>Кандидат медицинских наук</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>15+ лет опыта работы</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>5000+ довольных пациентов</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>Постоянное повышение квалификации</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={onBookingClick}
                  className="btn-primary bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3"
                >
                  Записаться к доктору Нам
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Регулярно проходят обучение по новейшим методикам лечения в Москве и Санкт-Петербурге
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="card text-center group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{doctor.position}</p>
                  <p className="text-sm text-gray-600 mb-4">{doctor.experience} опыта</p>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold mb-2">Специализация:</p>
                    <ul className="space-y-1">
                      {doctor.specialization.slice(0, 3).map((spec, index) => (
                        <li key={index} className="flex items-center space-x-1">
                          <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши преимущества
            </h2>
            <p className="text-xl text-gray-600">
              Почему пациенты выбирают нашу клинику
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white group-hover:text-blue-900 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы наших пациентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши пациенты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-blue-600">{testimonial.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-gray-600">
              Примеры наших работ и достижений
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg group">
                <img
                  src={image}
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Записаться на консультацию
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Позвоните нам! Запишитесь или задайте вопрос.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`tel:${clinicInfo.phone}`}
              className="btn-primary bg-yellow-500 text-blue-900 hover:bg-yellow-400 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>{clinicInfo.phone}</span>
            </a>
            <button
              onClick={onBookingClick}
              className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600"
            >
              Записаться
            </button>
          </div>
          <div className="text-blue-100 space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{clinicInfo.address}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>{clinicInfo.email}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RussianHomePage;
