import React from "react";
import {
  BookOpen,
  Users,
  Target,
  Calculator,
  Atom,
  GraduationCap,
  Clock,
  Star,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const Academics = () => {
  const programs = [
    {
      icon: Calculator,
      title: "JEE Main & Advanced",
      duration: "1-2 Years",
      description:
        "Comprehensive preparation for engineering entrance exams with expert faculty and proven methods.",
      features: [
        "Mock tests & analysis",
        "Doubt clearing sessions",
        "Study materials",
        "Regular assessments",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Atom,
      title: "NEET Preparation",
      duration: "1-2 Years",
      description:
        "Complete medical entrance coaching with focus on Physics, Chemistry, and Biology.",
      features: [
        "NCERT focused approach",
        "Previous year papers",
        "Weekly tests",
        "Performance tracking",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: GraduationCap,
      title: "Board Exam Coaching",
      duration: "1 Year",
      description:
        "Score maximization programs for Class 11th and 12th board examinations.",
      features: [
        "Board exam pattern",
        "Concept clarity",
        "Practice papers",
        "Exam strategies",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Target,
      title: "Foundation Courses",
      duration: "1-2 Years",
      description:
        "Strong foundation building for Class 9th and 10th students preparing for competitive exams.",
      features: [
        "Conceptual learning",
        "Interactive sessions",
        "Regular practice",
        "Career guidance",
      ],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ];

  const achievements = [
    { metric: "95%", label: "Success Rate" },
    { metric: "4000+", label: "Student" },
    { metric: "15+", label: "Years Experience" },
    { metric: "5+", label: "Awards" },
  ];

  const handleEnrollNow = () => {
    // Redirect to enrollment page
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">
              Academic Excellence
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Achieve your dreams with our comprehensive coaching programs
              designed for JEE, NEET, and Board exam success.
            </p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Coaching Programs
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right program to achieve your academic goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${program.bgColor} rounded-xl flex items-center justify-center mb-6`}
                >
                  <program.icon className={`h-8 w-8 ${program.color}`} />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleEnrollNow}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-20 bg-blue text-green-800 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl opacity-90">
              Success stories that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.metric}
                </div>
                <div className="text-lg font-medium opacity-90">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-green-600 to-orange-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Success Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who achieved their dreams with Abhyasa
              Academy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEnrollNow}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
