import React, { useState } from 'react';
import { ArrowRight, Phone, MapPin, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { PageProps } from '../types';
import { clinicInfo } from '../data/russianData';

const RussianContactPage: React.FC<PageProps> = ({ onBookingClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: clinicInfo.phone,
      link: `tel:${clinicInfo.phone}`,
      description: 'Звоните в любое время'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: clinicInfo.address,
      link: 'https://yandex.ru/maps',
      description: 'Краснодар, ул. В.Н.Мачуги, 82'
    },
    {
      icon: Mail,
      title: 'Email',
      value: clinicInfo.email,
      link: `mailto:${clinicInfo.email}`,
      description: 'Напишите нам письмо'
    },
    {
      icon: Clock,
      title: 'Время работы',
      value: 'Пн-Пт: 8:00-20:00',
      link: '#',
      description: 'Сб: 9:00-18:00, Вс: 10:00-16:00'
    }
  ];

  const workingHours = [
    { day: 'Понедельник - Пятница', time: '8:00 - 20:00' },
    { day: 'Суббота', time: '9:00 - 18:00' },
    { day: 'Воскресенье', time: '10:00 - 16:00' }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588776814546-3a7a7a7a7a7a?auto=format&fit=crop&w=1920&q=80"
            alt="Контакты"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Контакты
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Свяжитесь с нами любым удобным способом
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

      {/* Contact Info */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                  <info.icon className="w-8 h-8 text-white group-hover:text-blue-900 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-blue-600 hover:text-blue-800 font-medium block mb-2"
                >
                  {info.value}
                </a>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Оставьте заявку
              </h2>
              <p className="text-gray-600 mb-8">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
              
              {isSubmitted ? (
                <div className="card p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Спасибо!</h3>
                  <p className="text-gray-600">Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="Опишите ваш вопрос или проблему"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Отправить заявку</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Как нас найти
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Карта будет загружена здесь</p>
                  <p className="text-sm text-gray-500">{clinicInfo.address}</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Время работы</h3>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="card p-6 mt-6 bg-red-50 border-red-200">
                <h3 className="text-xl font-semibold text-red-900 mb-2">Экстренная помощь</h3>
                <p className="text-red-700 mb-4">
                  Если у вас острая зубная боль или травма, звоните нам немедленно
                </p>
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="btn-primary bg-red-600 text-white hover:bg-red-700 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Экстренный вызов</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Другие способы связи
            </h2>
            <p className="text-xl text-gray-600">
              Выберите удобный для вас способ общения
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Звонок</h3>
              <p className="text-gray-600 mb-4">Быстрый способ получить ответ на ваши вопросы</p>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="btn-primary bg-green-600 text-white hover:bg-green-700"
              >
                Позвонить сейчас
              </a>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Отправьте нам письмо с подробным описанием</p>
              <a
                href={`mailto:${clinicInfo.email}`}
                className="btn-primary bg-blue-600 text-white hover:bg-blue-700"
              >
                Написать письмо
              </a>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Запись онлайн</h3>
              <p className="text-gray-600 mb-4">Запишитесь на прием через наш сайт</p>
              <button
                onClick={onBookingClick}
                className="btn-primary bg-yellow-500 text-blue-900 hover:bg-yellow-400"
              >
                Записаться онлайн
              </button>
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
            Свяжитесь с нами сегодня и получите бесплатную консультацию
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

export default RussianContactPage;
