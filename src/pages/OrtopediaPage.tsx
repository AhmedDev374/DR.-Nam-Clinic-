import React from 'react';
import { ArrowRight, CheckCircle, Clock, Shield, Users, Award } from 'lucide-react';
import { PageProps } from '../types';

const OrtopediaPage: React.FC<PageProps> = ({ onBookingClick }) => {
  const treatments = [
    {
      title: 'Traditional Braces',
      description: 'Metal brackets and wires for effective teeth straightening',
      duration: '18-24 months',
      price: 'From $3,000',
      features: ['Highly effective', 'Suitable for all ages', 'Customizable colors']
    },
    {
      title: 'Clear Aligners',
      description: 'Invisible, removable aligners for discreet treatment',
      duration: '12-18 months',
      price: 'From $4,000',
      features: ['Nearly invisible', 'Removable', 'Easy maintenance']
    },
    {
      title: 'Lingual Braces',
      description: 'Braces placed behind teeth for complete invisibility',
      duration: '18-24 months',
      price: 'From $5,000',
      features: ['Completely hidden', 'Effective treatment', 'Custom fitted']
    },
    {
      title: 'Retainers',
      description: 'Maintain your new smile after treatment',
      duration: 'Lifetime',
      price: 'From $300',
      features: ['Prevent relapse', 'Custom made', 'Long-lasting']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Comprehensive examination and treatment planning',
      duration: '60 minutes'
    },
    {
      step: 2,
      title: 'Treatment Planning',
      description: 'Custom treatment plan with timeline and cost estimate',
      duration: '30 minutes'
    },
    {
      step: 3,
      title: 'Treatment Begins',
      description: 'Installation of orthodontic appliances',
      duration: '90 minutes'
    },
    {
      step: 4,
      title: 'Regular Adjustments',
      description: 'Monthly visits for adjustments and progress monitoring',
      duration: '30 minutes'
    },
    {
      step: 5,
      title: 'Treatment Completion',
      description: 'Removal of appliances and retention planning',
      duration: '60 minutes'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Improved Oral Health',
      description: 'Straighter teeth are easier to clean and maintain'
    },
    {
      icon: Users,
      title: 'Enhanced Confidence',
      description: 'A beautiful smile boosts self-esteem and confidence'
    },
    {
      icon: Award,
      title: 'Better Function',
      description: 'Improved bite and chewing function'
    },
    {
      icon: Clock,
      title: 'Long-term Results',
      description: 'Results that last a lifetime with proper care'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-600 to-dental-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddceee95?auto=format&fit=crop&w=1920&q=80"
            alt="Orthodontic treatment"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ortopedia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-dental-100">
              Specialized treatments to correct dental and jaw irregularities for improved function and aesthetics
            </p>
            <button
              onClick={onBookingClick}
              className="btn-primary bg-white text-dental-600 hover:bg-dental-50 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Smile with Orthodontics
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our orthodontic specialists use the latest techniques and technology to correct 
              teeth and jaw irregularities, giving you a beautiful, functional smile that lasts a lifetime.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-600 mb-2">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-600 mb-2">1000+</div>
                <div className="text-gray-600">Successful Cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-600 mb-2">98%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Orthodontic Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a variety of orthodontic solutions to meet your specific needs and preferences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{treatment.title}</h3>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-dental-600">{treatment.price}</div>
                    <div className="text-sm text-gray-500">{treatment.duration}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{treatment.description}</p>
                <ul className="space-y-2 mb-6">
                  {treatment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onBookingClick}
                  className="w-full btn-primary"
                >
                  Learn More & Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Treatment Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We guide you through every step of your orthodontic treatment with care and expertise
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-dental-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="text-sm text-dental-600 font-medium">{step.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-dental-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Orthodontic Treatment
            </h2>
            <p className="text-xl text-gray-600">
              Discover how orthodontic treatment can improve your life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-dental-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dental-600 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Orthodontic Journey?
          </h2>
          <p className="text-xl text-dental-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our orthodontic specialists and discover your treatment options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookingClick}
              className="btn-primary bg-white text-dental-600 hover:bg-dental-50 flex items-center justify-center space-x-2"
            >
              <span>Book Consultation</span>
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

export default OrtopediaPage;
