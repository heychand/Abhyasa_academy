import React from "react";
import {
  Trophy,
  Star,
  Phone,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";
import Section from "../components/Common/Section";
import { motion } from "framer-motion";

const Growth = () => {
  // Only 2023-2024 and 2024-2025 toppers data
  const yearlyToppers = [
    {
      year: "2024-2025",
      title: "CBSE Grade X Toppers",
      subtitle: "Academic Year 2024-2025",
      students: [
        {
          name: "Lakshya",
          percentage: "95%",
          image:
            "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Yashwin",
          percentage: "93%",
          image:
            "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Adhiban",
          percentage: "92%",
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Pratheeksha Prasad",
          percentage: "90%",
          image:
            "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Pranav",
          percentage: "95%",
          image:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Sai Tanmay",
          percentage: "94%",
          image:
            "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Sagarika",
          percentage: "88%",
          image:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Pavithra K",
          percentage: "92%",
          image:
            "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
      ],
    },
    {
      year: "2023-2024",
      title: "CBSE Grade X Toppers",
      subtitle: "Academic Year 2023-2024",
      students: [
        {
          name: "Arjun Patel",
          percentage: "98%",
          image:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Sneha Sharma",
          percentage: "96%",
          image:
            "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Rahul Kumar",
          percentage: "94%",
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Priya Reddy",
          percentage: "93%",
          image:
            "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Vikram Singh",
          percentage: "97%",
          image:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Kavya Nair",
          percentage: "95%",
          image:
            "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Aditya Gupta",
          percentage: "91%",
          image:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
        {
          name: "Meera Iyer",
          percentage: "89%",
          image:
            "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
        },
      ],
    },
  ];

  const handleCallClick = () => {
    window.location.href = "tel:9844643434";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Section background="primary" padding="xl">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-green-700 mb-4 md:mb-6"
          >
            Our Star Performers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Celebrating excellence and academic achievements of our dedicated
            students
          </motion.p>
        </div>
      </Section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Congratulations Header with Golden Trophy - Made Responsive */}
        <div
          className="text-center mb-10 md:mb-16 opacity-0 animate-fadeIn"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <Trophy
              className="h-8 w-8 md:h-12 md:w-12 text-yellow-500 mr-2 md:mr-3 animate-bounce-slow"
              style={{ color: "#FFD700" }}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              CONGRATULATIONS!
            </h1>
            <Trophy
              className="h-8 w-8 md:h-12 md:w-12 text-yellow-500 ml-2 md:ml-3 animate-bounce-slow"
              style={{ color: "#FFD700" }}
            />
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full inline-block shadow-lg mb-4 md:mb-6">
            <span className="font-bold text-sm sm:text-base md:text-lg">
              🏆 OUTSTANDING ACADEMIC ACHIEVEMENTS 🏆
            </span>
          </div>
        </div>

        {/* Toppers Section */}
        <div className="space-y-10 md:space-y-16">
          {yearlyToppers.map((yearData, index) => (
            <div
              key={yearData.year}
              className="bg-white font-semibold rounded-3xl shadow-xl overflow-hidden opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
            >
              {/* Year Header - Improved responsiveness */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 md:p-8">
                <div className="flex items-center justify-center mb-2">
                  <Trophy
                    className="h-6 w-6 md:h-8 md:w-8 mr-2 md:mr-3"
                    style={{ color: "#FFD700" }}
                  />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300">
                    CONGRATULATIONS!
                  </h3>
                  <Trophy
                    className="h-6 w-6 md:h-8 md:w-8 ml-2 md:ml-3"
                    style={{ color: "#FFD700" }}
                  />
                </div>
                <div className="flex items-center justify-center mb-2 md:mb-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {yearData.title}
                  </h3>
                </div>
                <p className="text-center text-base md:text-lg opacity-90">
                  {yearData.subtitle}
                </p>
              </div>

              {/* Students Grid - Made fully responsive */}
              <div className="p-4 md:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
                  {yearData.students.map((student, studentIndex) => (
                    <div
                      key={studentIndex}
                      className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-2 md:p-4 text-center hover:shadow-lg transition-all duration-300 opacity-0 animate-fadeIn"
                      style={{
                        animationDelay: `${
                          index * 0.2 + studentIndex * 0.1 + 0.6
                        }s`,
                      }}
                    >
                      <div className="relative mb-3 md:mb-4">
                        <img
                          src={student.image}
                          alt={student.name}
                          className="w-16 h-20 sm:w-20 sm:h-28 md:w-28 md:h-36 lg:w-32 lg:h-40 rounded-lg object-cover mx-auto border-2 md:border-4 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">
                            {student.percentage}
                          </div>
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">
                        {student.name}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* 100% Result Badge - Made responsive */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full px-4 sm:px-6 md:px-8 py-2 md:py-3 font-bold text-sm sm:text-base md:text-lg shadow-lg">
                    <Award className="inline h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-1 md:mr-2 text-yellow-500" />
                    100% RESULT ACHIEVED
                    <Star className="inline h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ml-1 md:ml-2 text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Made responsive */}
        <div
          className="text-center mt-10 md:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 opacity-0 animate-fadeIn"
          style={{ animationDelay: "1s" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90 px-2">
            Transform your academic journey with our proven teaching methods and
            achieve your dreams
          </p>
          <button
            onClick={handleCallClick}
            className="bg-white text-blue-600 px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg flex items-center mx-auto"
          >
            <Phone className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
            Enroll Now - Call Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Growth;
