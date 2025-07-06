import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  padding = 'lg'
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50'
  };

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 lg:py-20',
    xl: 'py-20 lg:py-28'
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;