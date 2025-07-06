import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Section from '../Common/Section';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at Google',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      content: 'Abhyasa Academy transformed my career. The faculty\'s dedication and the comprehensive curriculum prepared me for the competitive tech industry.',
      rating: 5
    },
    {
      name: 'Rahul Krishnan',
      role: 'Medical Resident at AIIMS',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      content: 'The practical approach to learning and excellent infrastructure at Abhyasa Academy gave me the confidence to pursue my medical dreams.',
      rating: 5
    },
    {
      name: 'Anitha Reddy',
      role: 'Research Scientist',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      content: 'The research opportunities and mentorship at Abhyasa Academy shaped my analytical thinking and research methodology.',
      rating: 5
    }
  ];

  return (
    <Section background="white" padding="xl">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
        >
          What Our Alumni Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Hear from our successful graduates who are making their mark in various industries
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <Quote className="h-8 w-8 text-primary-200 mb-4" />
            
            <p className="text-gray-600 mb-6 leading-relaxed italic">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;