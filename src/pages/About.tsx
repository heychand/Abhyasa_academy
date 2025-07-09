import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Heart,
  BookOpen,
  Globe,
  Quote,
  Star,
  Shield,
  Lightbulb,
} from "lucide-react";
import Section from "../components/Common/Section";
import { ACADEMY_INFO } from "../utils/constants";

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to maintaining the highest standards in education and student development.",
      color: "bg-blue-100 text-blue-600",
      hoverColor: "hover:bg-blue-200",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a supportive learning community that fosters collaboration and growth.",
      color: "bg-purple-100 text-purple-600",
      hoverColor: "hover:bg-purple-200",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Embracing new technologies and methodologies to enhance learning experiences.",
      color: "bg-red-100 text-red-600",
      hoverColor: "hover:bg-red-200",
    },
    {
      icon: Heart,
      title: "Care",
      description:
        "Providing personalized attention and support to every student's unique needs.",
      color: "bg-pink-100 text-pink-600",
      hoverColor: "hover:bg-pink-200",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Upholding the highest ethical standards in all our educational practices and interactions.",
      color: "bg-indigo-100 text-indigo-600",
      hoverColor: "hover:bg-indigo-200",
    },
    {
      icon: Lightbulb,
      title: "Wisdom",
      description:
        "Fostering critical thinking and practical wisdom that guides students throughout their lives.",
      color: "bg-yellow-100 text-yellow-600",
      hoverColor: "hover:bg-yellow-200",
    },
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
            className="text-4xl md:text-5xl font-display font-bold text-green-700 mb-6"
          >
            About {ACADEMY_INFO.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Established in {ACADEMY_INFO.established}, we have been at the
            forefront of educational excellence in {ACADEMY_INFO.location},
            nurturing minds and shaping futures for over a decade.
          </motion.p>
        </div>
      </Section>

      {/* Chairman Section */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Chairman Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mrs. Gaanashri Ravikumar - Chairman"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-100 to-orange-100 rounded-full opacity-30 transition-opacity duration-500 group-hover:opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-full opacity-20 transition-opacity duration-500 group-hover:opacity-40"></div>

              {/* Achievement badges */}
              <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-amber-500" />
                  <span className="text-sm font-semibold text-gray-800">
                    20+ Years
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Educational Leadership
                </p>
              </div>

              {/* Trust Badge */}
              <div className="absolute bottom-6 left-6 bg-gradient-to-r from-green-600 to-orange-600 rounded-2xl p-4 shadow-lg">
                <div className="text-white text-center">
                  <Globe className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-xs font-semibold">
                    Kumarashri Educational Trust
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chairman Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-orange-600"></div>
                <span className="text-green-600 font-medium text-sm uppercase tracking-wide">
                  Our Visionary Leader
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Mrs. Gaanashri Ravikumar
              </h2>

              <div className="space-y-2">
                <p className="text-xl text-orange-600 font-semibold">
                  Chairman, Kumarashri Educational Trust
                </p>
                <p className="text-lg text-gray-600">M.Sc, B.Ed</p>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Master of Science (M.Sc)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700">
                  Bachelor of Education (B.Ed)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">
                  Founder & Chairman - Kumarashri Educational Trust
                </span>
              </div>
            </div>

            {/* Institutions */}
            <div className="bg-gradient-to-r from-green-50 to-orange-50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Our Institutions
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Abhyasa Academy */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700 font-medium">
                      Abhyasa Academy
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 ml-8">
                    Banaswadi, Bangalore
                  </span>
                </div>

                {/* Akshara Academy */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700 font-medium">
                      Akshara Academy
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 ml-8">
                    Kasturi Nagar, Bangalore
                  </span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500 relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-green-200" />
              <div className="ml-6">
                <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
                  "Education is the foundation upon which we build our future.
                  Through Kumarashri Educational Trust, we are committed to
                  providing quality education that transforms lives and
                  communities."
                </p>
                <p className="text-gray-600 leading-relaxed">
                  "Our dual academies - Abhyasa and Akshara - represent our
                  dedication to holistic education that nurtures not just
                  academic excellence, but also character, values, and life
                  skills that prepare students for success in an ever-changing
                  world."
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4000+</div>
                <div className="text-sm text-gray-600">Students Educated</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">
                  Awards & Recognition
                </div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-sm text-gray-600">Premier Academies</div>
              </div>
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
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The fundamental principles that guide our educational philosophy and
            shape the character of our students across both Abhyasa and Akshara
            Academies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:scale-[1.05] hover:-translate-y-2 ${value.hoverColor}`}
            >
              <div
                className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              >
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
