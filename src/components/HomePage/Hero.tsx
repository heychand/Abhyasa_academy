import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  GraduationCap,
  Star,
  Target,
  Zap,
  TrendingUp,
  CheckCircle,
  BookOpenCheck,
} from "lucide-react";
import assets from "../../assets/assets";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageY = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  type AnimatedIconProps = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    delay?: number;
    className?: string;
  };

  const AnimatedIcon: React.FC<AnimatedIconProps> = ({
    icon: Icon,
    delay = 0,
    className = "",
  }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: delay * 0.5,
        }}
      >
        <Icon className="h-8 w-8 text-primary-600 opacity-30" />
      </motion.div>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-primary-100">
      {/* Clean Background with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-80 h-80 bg-indigo-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </motion.div>

      {/* Animated Background Icons */}
      <AnimatedIcon
        icon={GraduationCap}
        delay={0.5}
        className="top-20 left-1/4"
      />
      <AnimatedIcon icon={Star} delay={0.7} className="top-32 right-1/3" />
      <AnimatedIcon icon={Target} delay={0.9} className="bottom-40 left-1/5" />
      <AnimatedIcon icon={Zap} delay={1.1} className="bottom-32 right-1/4" />
      <AnimatedIcon icon={TrendingUp} delay={1.3} className="top-1/2 left-10" />
      <AnimatedIcon
        icon={CheckCircle}
        delay={1.5}
        className="top-1/3 right-10"
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 text-sm font-semibold mb-6 shadow-lg"
            >
              <Award className="h-5 w-5 mr-2" />
              Premier Educational Institution
            </motion.div>

            {/* Main Heading with Parallax - FIXED TEXT CLIPPING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              style={{ paddingBottom: "0.25rem" }} // Add padding to prevent clipping
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Welcome to{" "}
              </motion.span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-600 relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  paddingBottom: "0.5rem", // Prevent gradient text from being cut off
                }}
              >
                Abhyasa Academy
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </motion.span>
            </motion.h1>

            {/* Subtitle with Parallax */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              Shaping the future of education in the Silicon Valley of India.
              Experience excellence, innovation, and growth at Bangalore's
              premier academy.
            </motion.p>

            {/* Single CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Admission Enquiry</span>
              </motion.button>
            </motion.div>

            {/* Stats - REPLACED WITH GRADE LEVEL HEADING AND CURRICULUM PILLS */}
            {/* Grade Level Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center justify-center lg:justify-start">
                <GraduationCap className="h-7 w-7 text-primary-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Grades 3rd-12th + NEET
                </h3>
              </div>
            </motion.div>

            {/* Curriculum Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {/* CBSE Pill */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <div className="bg-blue-400 rounded-full p-1 mr-2">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="font-medium">CBSE</span>
              </motion.div>

              {/* ICSE Pill */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <div className="bg-purple-400 rounded-full p-1 mr-2">
                  <Star className="h-5 w-5" />
                </div>
                <span className="font-medium">ICSE</span>
              </motion.div>
              {/* IGSE Pill */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <div className="bg-orange-400 rounded-full p-1 mr-2">
                  <BookOpenCheck className="h-5 w-5" />
                </div>
                <span className="font-medium">IGSE</span>
              </motion.div>

              {/* State Board Pill */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <div className="bg-green-400 rounded-full p-1 mr-2">
                  <Target className="h-5 w-5" />
                </div>
                <span className="font-medium">State Board</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - FIXED IMAGE CROPPING */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <motion.img
                src={assets.heroimg}
                alt="Students studying - Premium education experience"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  objectPosition: "center center", // Better centering
                  minWidth: "100%", // Ensure full width coverage
                }}
              />

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Mouse Follower */}
      {/* <motion.div
        className="fixed w-4 h-4 bg-primary-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      /> */}
    </section>
  );
};

export default Hero;
