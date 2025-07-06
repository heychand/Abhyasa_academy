import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import Section from '../components/Common/Section';
import Button from '../components/Common/Button';
import { ACADEMY_INFO } from '../utils/constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: ACADEMY_INFO.contact.address,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: ACADEMY_INFO.contact.phone,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: ACADEMY_INFO.contact.email,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM\nSun: 10:00 AM - 4:00 PM',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const departments = [
    'General Inquiry',
    'Admissions',
    'Academic Support',
    'Technical Support',
    'Career Guidance',
    'Alumni Relations'
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We're here to help you with any questions about our programs, admissions, 
            or any other inquiries. Reach out to us and we'll respond promptly.
          </motion.p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <info.icon className={`h-8 w-8 ${info.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {info.content}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Form & Map */}
      <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                icon={Send}
                iconPosition="right"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive map would be here</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {ACADEMY_INFO.contact.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>MG Road, Bangalore</span>
                <span>Karnataka 560001</span>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 opacity-80" />
                  <span>{ACADEMY_INFO.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 opacity-80" />
                  <span>{ACADEMY_INFO.contact.email}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 opacity-80 flex-shrink-0" />
                  <span className="text-sm opacity-90 leading-relaxed">
                    {ACADEMY_INFO.contact.address}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-primary-500">
                <p className="text-sm opacity-90">
                  For urgent inquiries, call us directly or visit our campus during office hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Find answers to common questions about our academy
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: 'What are the admission requirements?',
              answer: 'Admission requirements vary by program. Generally, we require completed application, academic transcripts, and entrance exam scores.'
            },
            {
              question: 'Do you offer scholarships?',
              answer: 'Yes, we offer merit-based scholarships and need-based financial aid. Contact our admissions office for more details.'
            },
            {
              question: 'What is the student-to-faculty ratio?',
              answer: 'We maintain a low student-to-faculty ratio of 15:1 to ensure personalized attention and quality education.'
            },
            {
              question: 'Are there placement opportunities?',
              answer: 'Yes, we have a dedicated placement cell with 95% placement record and partnerships with leading companies.'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Contact;