import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Sample stats data - replace with your actual STATS constant
const STATS = [
  { value: "500+", label: "Students Coached" },
  { value: "95%", label: "Success Rate" },
  { value: "50+", label: "Expert Trainers" },
  { value: "15+", label: "Years Experience" },
];

const Stats = () => {
  // Create refs for parallax elements
  const containerRef = React.useRef(null);

  // Get scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create individual movement values for each card
  const cardMovements = STATS.map((_, index) => {
    // Different movement speeds based on index
    const factor = 0.8 + index * 0.15;
    return useTransform(scrollYProgress, [0, 1], [120 * factor, -120 * factor]);
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/about-1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        {/* School Description */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Excellence in{" "}
            <span className="text-green-500">Academic Coaching</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
          >
            At our academy, we believe every student has the potential to excel.
            Our expert coaches provide personalized guidance, innovative
            teaching methods, and comprehensive support to help students achieve
            their academic dreams and unlock their full potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-4 font-weight: 700; font-bold text-2xl text-green-500"
          >
            <span>🎓</span>
            <span>Transforming Lives Through Education</span>
            <span>📚</span>
          </motion.div>
        </div>

        {/* Stats Grid - With individual card parallax effects */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              style={{ y: cardMovements[index] }} // Individual parallax for each card
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300"
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-green-400 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
      />
    </section>
  );
};

export default Stats;
