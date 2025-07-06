import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Target, Cpu, Heart, FlaskRound as Flask, Smartphone, Building, Wifi, Car, Utensils } from 'lucide-react';
import Section from '../components/Common/Section';
import Button from '../components/Common/Button';

const Academics: React.FC = () => {
  const programs = [
    {
      icon: Cpu,
      title: 'Engineering & Technology',
      duration: '4 Years',
      description: 'Comprehensive engineering programs covering Computer Science, Electronics, Mechanical, and Civil Engineering.',
      features: ['Industry-aligned curriculum', 'Hands-on projects', 'Internship opportunities', 'Placement assistance'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Heart,
      title: 'Medical Sciences',
      duration: '5.5 Years',
      description: 'Advanced medical education with clinical training and research opportunities.',
      features: ['Clinical rotations', 'Research projects', 'Modern laboratories', 'Expert faculty'],
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Flask,
      title: 'Pure Sciences',
      duration: '3 Years',
      description: 'Rigorous programs in Physics, Chemistry, Mathematics, and Biology.',
      features: ['Research opportunities', 'Lab facilities', 'Industry connections', 'Higher studies prep'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Smartphone,
      title: 'Digital Technology',
      duration: '2-4 Years',
      description: 'Cutting-edge programs in AI, Data Science, Cybersecurity, and Software Development.',
      features: ['Latest technology', 'Industry projects', 'Certification programs', 'Job placement'],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const infrastructure = [
    {
      icon: Building,
      title: 'Modern Classrooms',
      description: 'Smart classrooms equipped with latest audio-visual technology and comfortable seating.',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      icon: Flask,
      title: 'Advanced Laboratories',
      description: 'State-of-the-art labs for Physics, Chemistry, Biology, and Computer Science.',
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      icon: BookOpen,
      title: 'Digital Library',
      description: 'Extensive collection of books, journals, and digital resources with 24/7 access.',
      image: 'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Campus-wide Wi-Fi connectivity ensuring seamless access to online resources.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Safe and comfortable bus services connecting all major areas of Bangalore.',
      image: 'https://images.pexels.com/photos/1119973/pexels-photo-1119973.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      icon: Utensils,
      title: 'Cafeteria',
      description: 'Hygienic cafeteria serving nutritious meals and snacks throughout the day.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    }
  ];

  const achievements = [
    { metric: '95%', label: 'Placement Rate' },
    { metric: '50+', label: 'Industry Partners' },
    { metric: '200+', label: 'Research Papers' },
    { metric: '15+', label: 'Awards & Recognition' }
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
            Academic Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our comprehensive academic programs designed to prepare you for success 
            in the competitive global landscape of the 21st century.
          </motion.p>
        </div>
      </Section>

      {/* Academic Programs */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Our Academic Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Choose from our diverse range of programs tailored for your career goals
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 ${program.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <program.icon className={`h-8 w-8 ${program.color}`} />
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {program.duration}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
              
              <div className="space-y-2 mb-6">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Infrastructure */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            World-Class Infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            State-of-the-art facilities designed to enhance your learning experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructure.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <facility.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Academic Achievements */}
      <Section background="primary" padding="lg">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Academic Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Our commitment to excellence reflected in numbers
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {achievement.metric}
              </div>
              <div className="text-lg font-medium text-gray-700">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="white" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have transformed their lives at Abhyasa Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              Schedule Campus Tour
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Academics;