import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, Users, Award, CheckCircle } from 'lucide-react';
import { PageProps, Service } from '../types';

const HomePage: React.FC<PageProps> = ({ onBookingClick }) => {
  const services: Service[] = [
    {
      id: 'ortopedia',
      title: 'Ortopedia',
      description: 'Specialized treatments to correct dental and jaw irregularities for improved function and aesthetics.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddceee95?auto=format&fit=crop&w=600&q=80',
      features: ['Braces & Aligners', 'Jaw Alignment', 'Custom Treatment Plans', 'Follow-up Care'],
      price: 'From $150'
    },
    {
      id: 'terapia',
      title: 'Terapia',
      description: 'Therapeutic dental care including root canals, gum treatments, and pain management.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
      features: ['Root Canal Therapy', 'Gum Treatments', 'Pain Management', 'Emergency Care'],
      price: 'From $200'
    },
    {
      id: 'study',
      title: 'Study',
      description: 'Comprehensive dental examinations and diagnostic services to plan your best treatment.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
      features: ['Full Check-ups', '3D Imaging', 'Cancer Screenings', 'Treatment Planning'],
      price: 'From $100'
    },
    {
      id: 'surgery',
      title: 'Surgery',
      description: 'Advanced oral surgeries performed with precision and care for optimal recovery.',
      image: 'https://images.unsplash.com/photo-1588776814546-3a7a7a7a7a7a?auto=format&fit=crop&w=600&q=80',
      features: ['Tooth Extractions', 'Dental Implants', 'Bone Grafting', 'Emergency Surgery'],
      price: 'From $300'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Patients' },
    { number: '20+', label: 'Years Experience' },
    { number: '15+', label: 'Expert Dentists' },
    { number: '98%', label: 'Success Rate' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safe & Sterile',
      description: 'State-of-the-art sterilization and safety protocols'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Convenient appointment times to fit your schedule'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced dentists and caring support staff'
    },
    {
      icon: Award,
      title: 'Quality Care',
      description: 'Committed to providing the highest quality dental care'
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
          <span>Language</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-600 to-dental-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddceee95?auto=format&fit=crop&w=1920&q=80"
            alt="Modern dental clinic"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Your Smile, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-dental-100 animate-fade-in">
              Comprehensive dental care with a focus on comfort, quality, and personalized treatment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button
                onClick={onBookingClick}
                className="btn-primary bg-white text-dental-600 hover:bg-dental-50 flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+1234567890"
                className="btn-secondary border-white text-white hover:bg-white hover:text-dental-600"
              >
                Call (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ number, label }, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-dental-600 mb-2">
                  {number}
                </div>
                <div className="text-gray-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of dental services to meet all your oral health needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-dental-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-dental-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-2">
                    <button
                      onClick={onBookingClick}
                      className="flex-1 btn-primary text-sm py-2"
                    >
                      Book Now
                    </button>
                    <Link
                      to={`/${service.id}`}
                      className="btn-secondary text-sm py-2 px-4"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional dental care with the latest technology and techniques
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-dental-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-dental-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-dental-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                rating: 5,
                text: 'The team at DentalClinic made my dental experience comfortable and stress-free. Highly recommended!'
              },
              {
                name: 'Michael Chen',
                rating: 5,
                text: 'Professional, friendly, and excellent results. My smile has never looked better!'
              },
              {
                name: 'Emily Davis',
                rating: 5,
                text: 'Outstanding care and attention to detail. The staff truly cares about their patients.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dental-600 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-xl text-dental-100 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards better oral health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookingClick}
              className="btn-primary bg-white text-dental-600 hover:bg-dental-50 flex items-center justify-center space-x-2"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+1234567890"
              className="btn-secondary border-white text-white hover:bg-white hover:text-dental-600"
            >
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
