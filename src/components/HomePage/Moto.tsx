import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const MottoVisionMission = () => {
  const sections = [
    {
      id: "motto",
      title: "MOTTO",
      subtitle: "SAY YES TO EXCELLENCE IN EDUCATION",
      description:
        "Our motto reflects the dedication and commitment that goes into shaping every student's future. We believe in nurturing minds through quality education.",
      bgColor: "bg-gradient-to-br from-lime-200 to-yellow-200",
      textColor: "text-gray-800",
      image: "/images/moto.jpg",
    },
    {
      id: "vision",
      title: "VISION",
      subtitle: "SAY YES TO HOLISTIC DEVELOPMENT",
      description:
        "Our academy envisions creating future leaders through comprehensive education that combines academic excellence with moral values.",
      bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100",
      textColor: "text-gray-800",
      image: "/images/vision.jpg",
    },
    {
      id: "mission",
      title: "MISSION",
      subtitle: "SAY YES TO TRANSFORMATIVE LEARNING",
      description:
        "Our mission is to provide innovative teaching methods and comprehensive support to help every student achieve their potential.",
      bgColor: "bg-gradient-to-br from-emerald-100 to-teal-200",
      textColor: "text-gray-800",
      image: "/images/mission.webp",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      {/* Parallax Background Elements */}
      <motion.div
        animate={{
          y: [-30, 30, -30],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [30, -30, 30],
          rotate: [360, 0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-xl"
      />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-0 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div
                className={`relative h-[600px] ${section.bgColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
              >
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex-1">
                    <h3
                      className={`text-4xl md:text-5xl font-black ${section.textColor} mb-6 tracking-tight`}
                    >
                      {section.title}
                    </h3>

                    <h4
                      className={`text-lg md:text-xl font-bold ${section.textColor} mb-6 leading-tight`}
                    >
                      {section.subtitle}
                    </h4>

                    <p
                      className={`text-sm ${section.textColor} opacity-80 leading-relaxed mb-8 max-w-sm`}
                    >
                      {section.description}
                    </p>
                  </div>

                  {/* Student Image */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-64 rounded-2xl overflow-hidden shadow-lg"
                    >
                      <motion.img
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        src={section.image}
                        alt={`${section.title} student`}
                        className="w-full h-full object-cover"
                        style={{
                          backgroundAttachment: "fixed",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Parallax Decorative Elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"
                />

                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Floating Elements for Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/30 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-3/4 right-1/3 w-4 h-4 bg-purple-400/30 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-400/30 rounded-full"
        />
      </div>
    </section>
  );
};

export default MottoVisionMission;
