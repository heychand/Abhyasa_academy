import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, BookOpen, Globe } from 'lucide-react';
import Section from '../components/Common/Section';
import { ACADEMY_INFO } from '../utils/constants';

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to maintaining the highest standards in education and student development.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive learning community that fosters collaboration and growth.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Embracing new technologies and methodologies to enhance learning experiences.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Providing personalized attention and support to every student\'s unique needs.'
    }
  ];

  const milestones = [
    { year: '2010', event: 'Academy Founded', description: 'Started with a vision to transform education' },
    { year: '2012', event: 'First Batch Success', description: '100% placement rate achieved' },
    { year: '2015', event: 'Research Center', description: 'Established state-of-the-art research facilities' },
    { year: '2018', event: 'International Recognition', description: 'Received global education excellence award' },
    { year: '2020', event: 'Digital Transformation', description: 'Pioneered online learning platforms' },
    { year: '2023', event: 'Expansion', description: 'Opened new campus with modern facilities' }
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
            About {ACADEMY_INFO.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Established in {ACADEMY_INFO.established}, we have been at the forefront of educational excellence 
            in {ACADEMY_INFO.location}, nurturing minds and shaping futures for over a decade.
          </motion.p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Students in classroom"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class education that empowers students with knowledge, skills, and values 
                necessary to excel in their chosen fields and contribute meaningfully to society.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a premier educational institution that shapes global leaders, 
                innovators, and responsible citizens through excellence in teaching, research, and service.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            The principles that guide everything we do
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Journey */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Milestones that mark our path to excellence
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
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

      {/* Leadership Team */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Meet the visionaries leading our institution
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Dr. Rajesh Kumar',
              role: 'Principal & Director',
              image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
              bio: 'Ph.D. in Education, 25+ years of experience in academic leadership.'
            },
            {
              name: 'Prof. Sunitha Nair',
              role: 'Academic Director',
              image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
              bio: 'Former IIT professor, expert in curriculum development and research.'
            },
            {
              name: 'Mr. Vikram Shetty',
              role: 'Operations Director',
              image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
              bio: 'MBA from IIM, specialist in educational technology and operations.'
            }
          ].map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{leader.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;