import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Target, TrendingUp, Users, BookOpen, Medal } from 'lucide-react';
import Section from '../components/Common/Section';

const Growth: React.FC = () => {
  const toppers = [
    {
      name: 'Arjun Patel',
      achievement: 'IIT JEE AIR 42',
      year: '2023',
      course: 'Engineering',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      quote: 'Abhyasa Academy provided me with the perfect foundation and guidance to achieve my dreams.'
    },
    {
      name: 'Priya Sharma',
      achievement: 'NEET AIR 156',
      year: '2023',
      course: 'Medical',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      quote: 'The comprehensive curriculum and dedicated faculty helped me secure my place in medical college.'
    },
    {
      name: 'Rahul Kumar',
      achievement: 'GATE AIR 23',
      year: '2023',
      course: 'Engineering',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      quote: 'The research opportunities and practical approach at Abhyasa shaped my analytical thinking.'
    },
    {
      name: 'Sneha Reddy',
      achievement: 'CAT 99.8 Percentile',
      year: '2023',
      course: 'Management',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      quote: 'The problem-solving skills I developed here were crucial for my CAT success.'
    },
    {
      name: 'Vikram Shetty',
      achievement: 'UPSC AIR 89',
      year: '2023',
      course: 'Civil Services',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      quote: 'The holistic education approach prepared me for the diverse challenges of UPSC.'
    },
    {
      name: 'Anita Nair',
      achievement: 'PhD Scholar MIT',
      year: '2023',
      course: 'Research',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      quote: 'The research culture at Abhyasa ignited my passion for scientific discovery.'
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Best Educational Institution',
      year: '2023',
      organization: 'Karnataka Education Board',
      description: 'Recognized for outstanding academic performance and student development.'
    },
    {
      icon: Award,
      title: 'Excellence in Teaching',
      year: '2022',
      organization: 'National Education Awards',
      description: 'Awarded for innovative teaching methodologies and student outcomes.'
    },
    {
      icon: Star,
      title: 'Top Ranked Academy',
      year: '2023',
      organization: 'Education Today Rankings',
      description: 'Ranked among top 10 academies in South India for quality education.'
    },
    {
      icon: Medal,
      title: 'Research Excellence',
      year: '2022',
      organization: 'Indian Science Congress',
      description: 'Recognized for outstanding contributions to scientific research and innovation.'
    }
  ];

  const stats = [
    { icon: Users, value: '2000+', label: 'Successful Alumni' },
    { icon: Trophy, value: '500+', label: 'Toppers Produced' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' }
  ];

  const milestones = [
    { year: '2010', title: 'Academy Founded', description: 'Started with 50 students and a vision' },
    { year: '2012', title: 'First IIT Success', description: 'First student cleared IIT JEE with top rank' },
    { year: '2015', title: '100% Placement', description: 'Achieved 100% placement record' },
    { year: '2018', title: 'Research Center', description: 'Established dedicated research facility' },
    { year: '2020', title: 'Digital Innovation', description: 'Launched comprehensive online platform' },
    { year: '2023', title: 'National Recognition', description: 'Received national excellence award' }
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
            Our Growth & Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Celebrating our journey of excellence, the achievements of our students, 
            and the recognition we've earned over the years.
          </motion.p>
        </div>
      </Section>

      {/* Statistics */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Toppers */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Our Star Performers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Meet our exceptional students who have achieved remarkable success
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{topper.name}</h3>
                  <p className="text-primary-600 font-medium">{topper.achievement}</p>
                  <p className="text-sm text-gray-500">{topper.course} • {topper.year}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">{topper.achievement}</span>
              </div>
              
              <blockquote className="text-gray-600 italic leading-relaxed">
                "{topper.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Awards & Recognition */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Awards & Recognition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Our commitment to excellence has been recognized by prestigious organizations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8 border border-primary-200"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-primary-600 font-medium mb-1">{achievement.organization}</p>
                  <p className="text-sm text-gray-500 mb-3">{achievement.year}</p>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Growth Timeline */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Our Growth Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Key milestones that mark our journey to excellence
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 md:w-1/2">
                  <div className={`bg-white rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:block w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                
                <div className="flex-1 md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Join Our Success Story
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of our legacy and write your own success story with us
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </Section>
    </>
  );
};

export default Growth;