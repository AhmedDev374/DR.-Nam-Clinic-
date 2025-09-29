import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users, Award, Heart } from 'lucide-react';
import { PageProps } from '../types';

const TerapiaPage: React.FC<PageProps> = ({ onBookingClick }) => {
  const treatments = [
    {
      title: 'Root Canal Therapy',
      description: 'Save your natural tooth with advanced root canal treatment',
      duration: '90-120 minutes',
      price: 'From $800',
      features: ['Pain-free procedure', 'Saves natural tooth', 'Long-lasting results', 'Modern techniques']
    },
    {
      title: 'Periodontal Treatment',
      description: 'Comprehensive gum disease treatment and prevention',
      duration: '60-90 minutes',
      price: 'From $300',
      features: ['Deep cleaning', 'Gum health restoration', 'Preventive care', 'Regular maintenance']
    },
    {
      title: 'Pain Management',
      description: 'Immediate relief from dental pain and discomfort',
      duration: '30-60 minutes',
      price: 'From $150',
      features: ['Quick diagnosis', 'Effective treatment', 'Pain relief', 'Follow-up care']
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency dental care for urgent situations',
      duration: '30-120 minutes',
      price: 'From $200',
      features: ['24/7 availability', 'Quick response', 'Pain relief', 'Temporary solutions']
    }
  ];

  const conditions = [
    {
      title: 'Tooth Decay',
      description: 'Cavities and decay treatment with modern fillings',
      symptoms: ['Tooth pain', 'Sensitivity', 'Visible holes', 'Bad breath']
    },
    {
      title: 'Gum Disease',
      description: 'Gingivitis and periodontitis treatment and prevention',
      symptoms: ['Bleeding gums', 'Swelling', 'Receding gums', 'Loose teeth']
    },
    {
      title: 'Tooth Infection',
      description: 'Abscess and infection treatment with antibiotics and therapy',
      symptoms: ['Severe pain', 'Swelling', 'Fever', 'Bad taste']
    },
    {
      title: 'Dental Trauma',
      description: 'Emergency treatment for broken or knocked-out teeth',
      symptoms: ['Broken tooth', 'Knocked-out tooth', 'Bleeding', 'Pain']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Diagnosis',
      description: 'Thorough examination and X-rays to identify the problem',
      duration: '30 minutes'
    },
    {
      step: 2,
      title: 'Treatment Planning',
      description: 'Custom treatment plan with options and costs',
      duration: '15 minutes'
    },
    {
      step: 3,
      title: 'Treatment',
      description: 'Professional treatment using latest techniques',
      duration: '60-120 minutes'
    },
    {
      step: 4,
      title: 'Recovery',
      description: 'Post-treatment care instructions and follow-up',
      duration: '15 minutes'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Pain Relief',
      description: 'Immediate and long-lasting pain relief'
    },
    {
      icon: Shield,
      title: 'Prevent Further Damage',
      description: 'Stop problems from getting worse'
    },
    {
      icon: Users,
      title: 'Expert Care',
      description: 'Experienced therapists and modern equipment'
    },
    {
      icon: Award,
      title: 'Restore Function',
      description: 'Get back to normal eating and speaking'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-600 to-dental-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920&q=80"
            alt="Dental therapy treatment"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terapia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-dental-100">
              Therapeutic dental care including root canals, gum treatments, and pain management
            </p>
            <button
              onClick={onBookingClick}
              className="btn-primary bg-white text-dental-600 hover:bg-dental-50 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Book Treatment</span>
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
              Restore Your Oral Health with Therapy
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our therapeutic treatments focus on healing, pain relief, and restoring your oral health. 
              We use the latest techniques and technology to ensure comfortable, effective treatment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-600 mb-2">24/7</div>
                <div className="text-gray-600">Emergency Care</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
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
              Our Therapeutic Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive therapeutic solutions for various dental problems
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
                  Book Treatment
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide effective treatment for a wide range of dental problems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditions.map((condition, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{condition.title}</h3>
                <p className="text-gray-600 mb-4">{condition.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                  <ul className="space-y-1">
                    {condition.symptoms.map((symptom, symptomIndex) => (
                      <li key={symptomIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-dental-600 rounded-full"></div>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="bg-dental-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ensure a comfortable and effective treatment experience
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
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Therapy Services
            </h2>
            <p className="text-xl text-gray-600">
              We provide compassionate, effective therapeutic care
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

      {/* Emergency CTA */}
      <section className="bg-red-600 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dental Emergency?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait! Contact us immediately for emergency dental care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="btn-primary bg-white text-red-600 hover:bg-red-50 flex items-center justify-center space-x-2"
            >
              <span>Call Emergency Line</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onBookingClick}
              className="btn-secondary border-white text-white hover:bg-white hover:text-red-600"
            >
              Book Emergency Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TerapiaPage;
