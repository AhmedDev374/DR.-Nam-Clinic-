import React from 'react';
import { ArrowRight, Star, Award, GraduationCap, Clock, Phone } from 'lucide-react';
import { PageProps } from '../types';
import { doctors, clinicInfo } from '../data/russianData';

const RussianDoctorsPage: React.FC<PageProps> = ({ onBookingClick }) => {
  const achievements = [
    {
      icon: Award,
      title: '15+ лет опыта',
      description: 'Средний стаж работы наших специалистов'
    },
    {
      icon: GraduationCap,
      title: 'Постоянное обучение',
      description: 'Регулярные курсы в Москве и Санкт-Петербурге'
    },
    {
      icon: Star,
      title: 'Высокая квалификация',
      description: 'Все врачи имеют высшее медицинское образование'
    },
    {
      icon: Clock,
      title: 'Индивидуальный подход',
      description: 'Персональное внимание к каждому пациенту'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1920&q=80"
            alt="Наши специалисты"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Наши специалисты
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Регулярно проходят обучение по новейшим методикам лечения в Москве и Санкт-Петербурге
            </p>
            <button
              onClick={onBookingClick}
              className="btn-primary bg-yellow-500 text-blue-900 hover:bg-yellow-400 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Записаться к врачу</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Высококвалифицированные специалисты с многолетним опытом работы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="card group">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{doctor.position}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Опыт работы: {doctor.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{doctor.education}</span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Специализация:</h4>
                      <ul className="space-y-1">
                        {doctor.specialization.map((spec, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={onBookingClick}
                      className="w-full btn-primary bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Записаться к врачу
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают наших врачей
            </h2>
            <p className="text-xl text-gray-600">
              Мы гордимся профессионализмом нашей команды
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Высокая квалификация</h3>
              <p className="text-gray-600">
                Все наши врачи имеют высшее медицинское образование и регулярно повышают квалификацию
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Постоянное обучение</h3>
              <p className="text-gray-600">
                Регулярные курсы и семинары в ведущих медицинских центрах России
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Индивидуальный подход</h3>
              <p className="text-gray-600">
                Каждый пациент получает персональное внимание и индивидуальный план лечения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education and Certificates */}
      <section className="bg-blue-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Образование и сертификаты
            </h2>
            <p className="text-xl text-gray-600">
              Наши врачи постоянно совершенствуют свои навыки
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Волгоградский медицинский университет',
              'Кубанский государственный медицинский университет',
              'Московский государственный медико-стоматологический университет',
              'Санкт-Петербургский государственный медицинский университет'
            ].map((university, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{university}</h3>
                <p className="text-sm text-gray-600">Высшее медицинское образование</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Запишитесь к нашим специалистам
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите консультацию у опытных врачей и начните путь к здоровой улыбке
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

export default RussianDoctorsPage;
