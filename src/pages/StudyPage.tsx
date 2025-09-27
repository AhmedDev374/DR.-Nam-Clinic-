import React from 'react';
import { ArrowRight, CheckCircle, Clock, Shield, Users, Award, Eye, Brain } from 'lucide-react';
import { PageProps } from '../types';

const StudyPage: React.FC<PageProps> = ({ onBookingClick }) => {
  const services = [
    {
      title: 'Comprehensive Dental Exam',
      description: 'Thorough examination of teeth, gums, and oral health',
      duration: '60 minutes',
      price: 'From $150',
      features: ['Visual examination', 'Gum health check', 'Oral cancer screening', 'Treatment recommendations']
    },
    {
      title: 'Digital X-Rays',
      description: 'Advanced digital imaging for accurate diagnosis',
      duration: '30 minutes',
      price: 'From $100',
      features: ['Low radiation', 'Instant results', 'High resolution', 'Easy sharing']
    },
    {
      title: '3D Imaging & CT Scans',
      description: 'Three-dimensional imaging for complex cases',
      duration: '45 minutes',
      price: 'From $300',
      features: ['3D visualization', 'Surgical planning', 'Implant placement', 'Detailed analysis']
    },
    {
      title: 'Oral Cancer Screening',
      description: 'Early detection of oral cancer and precancerous conditions',
      duration: '30 minutes',
      price: 'From $80',
      features: ['Visual examination', 'Tissue analysis', 'Early detection', 'Peace of mind']
    }
  ];

  const diagnosticTools = [
    {
      title: 'Digital X-Ray System',
      description: 'Latest digital radiography for clear, detailed images',
      benefits: ['90% less radiation', 'Instant results', 'Better diagnosis']
    },
    {
      title: '3D Cone Beam CT',
      description: 'Advanced 3D imaging for complex dental cases',
      benefits: ['Complete 3D view', 'Surgical planning', 'Implant placement']
    },
    {
      title: 'Intraoral Camera',
      description: 'High-resolution camera for detailed examination',
      benefits: ['Magnified view', 'Patient education', 'Documentation']
    },
    {
      title: 'Laser Diagnostics',
      description: 'Non-invasive laser technology for early detection',
      benefits: ['Pain-free', 'Early detection', 'Precise diagnosis']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Discussion of concerns and medical history',
      duration: '30 minutes'
    },
    {
      step: 2,
      title: 'Visual Examination',
      description: 'Thorough examination of teeth and gums',
      duration: '30 minutes'
    },
    {
      step: 3,
      title: 'Diagnostic Imaging',
      description: 'X-rays, photos, and other diagnostic tests',
      duration: '30-60 minutes'
    },
    {
      step: 4,
      title: 'Analysis & Report',
      description: 'Detailed analysis and treatment recommendations',
      duration: '30 minutes'
    },
    {
      step: 5,
      title: 'Treatment Planning',
      description: 'Custom treatment plan based on findings',
      duration: '30 minutes'
    }
  ];

  const benefits = [
    {
      icon: Eye,
      title: 'Early Detection',
      description: 'Identify problems before they become serious'
    },
    {
      icon: Brain,
      title: 'Accurate Diagnosis',
      description: 'Precise diagnosis with advanced technology'
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Prevent future problems with early intervention'
    },
    {
      icon: Award,
      title: 'Peace of Mind',
      description: 'Comprehensive assessment for complete confidence'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-600 to-dental-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920&q=80"
            alt="Dental examination and study"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Study
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-dental-100">
              Comprehensive dental examinations and diagnostic services to plan your best treatment
            </p>
            <button
              onClick={onBookingClick}
              className="btn-primary bg-white text-dental-600 hover:bg-dental-50 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Schedule Examination</span>
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
              Advanced Diagnostic Services
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our comprehensive study services use the latest technology to provide accurate diagnosis 
              and treatment planning. Early detection and proper assessment are key to maintaining optimal oral health.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-600 mb-2">99%</div>
                <div className="text-gray-600">Diagnostic Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-600 mb-2">1000+</div>
                <div className="text-gray-600">Cases Studied</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Study Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive diagnostic services using state-of-the-art technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-dental-600">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
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
                  Schedule Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Tools */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Diagnostic Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest diagnostic equipment for accurate and comprehensive assessment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diagnosticTools.map((tool, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {tool.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-dental-600 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-dental-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Examination Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ensure a thorough and comfortable examination experience
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
              Why Regular Dental Studies Matter
            </h2>
            <p className="text-xl text-gray-600">
              Regular examinations help maintain optimal oral health
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
            Schedule Your Dental Examination
          </h2>
          <p className="text-xl text-dental-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards optimal oral health with our comprehensive study services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookingClick}
              className="btn-primary bg-white text-dental-600 hover:bg-dental-50 flex items-center justify-center space-x-2"
            >
              <span>Schedule Examination</span>
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

export default StudyPage;
