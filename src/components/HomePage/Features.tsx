import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  BookOpen,
  Brain,
  BarChart2,
  ClipboardCheck,
  Star,
  GraduationCap,
} from "lucide-react";
import Section from "../Common/Section";

const Features: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Small Batch Sizes",
      description:
        "Limited students per class ensuring personalized attention and better learning outcomes.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: GraduationCap,
      title: "Qualified Teachers",
      description:
        "Expert educators with years of experience teaching CBSE, ICSE and State Board curricula.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Brain,
      title: "Conceptual Learning",
      description:
        "Focus on building strong foundations and deep understanding of core concepts.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: BookOpen,
      title: "Multi-Board Support",
      description:
        "Specialized coaching for CBSE, ICSE, and State Board from grades 3rd to 12th.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: BarChart2,
      title: "Progress Tracking",
      description:
        "Regular assessments and detailed progress reports to monitor improvement.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description:
        "Consistent record of academic excellence and top-performing students.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: ClipboardCheck,
      title: "Homework Support",
      description:
        "Dedicated assistance with assignments and exam preparation materials.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Star,
      title: "Interactive Learning",
      description:
        "Engaging teaching methods using modern technology and practical applications.",
      color: "text-primary-600",
      bgColor: "bg-primary-50",
    },
  ];

  return (
    <Section background="gray" padding="xl">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
        >
          Why Choose Abhyasa Academy?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Discover what makes us the preferred tuition center for students from
          grades 3rd to 12th across CBSE, ICSE, IGSE and State Board
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <motion.div
              className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <feature.icon className={`h-6 w-6 ${feature.color}`} />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
