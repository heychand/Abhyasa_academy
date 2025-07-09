import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  GraduationCap,
  Calendar,
  BookOpen,
} from "lucide-react";
import Section from "../components/Common/Section";
import Button from "../components/Common/Button";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    location: "",
    enquiryType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    // Handle form submission here
    alert("Thank you for your enquiry! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      location: "",
      enquiryType: "",
      message: "",
    });
  };

  const academyLocations = [
    {
      name: "Akshara Academy",
      address: "Kasturinagar, Bangalore",
      phone: "+91 9876543210",
      email: "info@aksharaacademy.com",
      timings: "Mon - Sat: 9:00 AM - 6:00 PM\nSun: 10:00 AM - 4:00 PM",
      color: "from-green-600 to-green-700",
      hoverColor: "hover:from-green-700 hover:to-green-800",
      cardHover: "hover:bg-green-50 hover:border-green-200",
      icon: GraduationCap,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112574.63322298806!2d77.5739954441677!3d13.005756106907176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae11e7573533c1%3A0x5a00a6aa471d65af!2s9%2C%203rd%20D%20Cross%20Rd%2C%20Doctors%20Layout%2C%20East%20of%20NGEF%20Layout%2C%20Bennigana%20Halli%2C%20Bengaluru%2C%20Karnataka%20560043!3m2!1d13.005862299999999!2d77.6564119!5e1!3m2!1sen!2sin!4v1752002328810!5m2!1sen!2sin`,

      directionsUrl: "https://maps.google.com/search/Kasturinagar,%20Bangalore",
    },
    {
      name: "Abhyasa Academy",
      address: "HRBR Layout 1st Block, Banaswadi, Bengaluru",
      fullAddress:
        "4th floor, Abhyasa Academy, No 3C-989, HRBR Layout 1st Block, HRBR Layout, Banaswadi, Bengaluru, Karnataka 560043",
      phone: "+91 9876543211",
      email: "info@abhyasaacademy.com",
      timings: "Mon - Sat: 9:00 AM - 6:00 PM\nSun: 10:00 AM - 4:00 PM",
      color: "from-orange-600 to-orange-700",
      hoverColor: "hover:from-orange-700 hover:to-orange-800",
      cardHover: "hover:bg-orange-50 hover:border-orange-200",
      icon: BookOpen,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112568.76600234742!2d77.57088604440393!3d13.018678394898211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae177b4e469761%3A0x1b02d6d3fa23a001!2s4th%20floor%2C%20Abhyasa%20Academy%20%2CNo%203C-989%2C%20HRBR%20Layout%201st%20Block%2C%20HRBR%20Layout%2C%20Banaswadi%2C%20Bengaluru%2C%20Karnataka%20560043!3m2!1d13.0186914!2d77.6532879!5e1!3m2!1sen!2sin!4v1752001873501!5m2!1sen!2sin",
      directionsUrl:
        "https://maps.google.com/search/4th%20floor%2C%20Abhyasa%20Academy%20%2CNo%203C-989%2C%20HRBR%20Layout%201st%20Block%2C%20HRBR%20Layout%2C%20Banaswadi%2C%20Bengaluru%2C%20Karnataka%20560043",
    },
  ];

  const enquiryTypes = [
    "Course Information",
    "Admission Process",
    "Fee Structure",
    "Scholarship Details",
    "Placement Assistance",
    "Campus Visit",
    "Other",
  ];

  const courses = [
    "Engineering Entrance (JEE/NEET)",
    "Foundation Courses",
    "Competitive Exams",
    "Academic Support",
    "Test Series",
    "Crash Courses",
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
            Make an Enquiry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to start your educational journey? Get in touch with us for
            detailed information about our courses, admissions, and how we can
            help you achieve your goals.
          </motion.p>
        </div>
      </Section>
      {/* Enquiry Form */}
      <Section background="gray" padding="sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Submit Your Enquiry
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and our academic counselors will get
                back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Location *
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select preferred location</option>
                    <option value="Akshara Academy - Kasturinagar">
                      Akshara Academy - Kasturinagar
                    </option>
                    <option value="Abhyasa Academy - Banaswadi">
                      Abhyasa Academy - Banaswadi
                    </option>
                  </select>
                </div>
              </div>

              {/* Course and Enquiry Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Course of Interest *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select enquiry type</option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us more about your requirements or any specific questions you have..."
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Our academic counselors will contact
                  you within 24 hours to discuss your requirements and provide
                  detailed information about our courses and admission process.
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                icon={Send}
                iconPosition="right"
                className="w-full"
              >
                Submit Enquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Academy Locations */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Our Locations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Choose the location that's convenient for you
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {academyLocations.map((academy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${academy.cardHover}`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${academy.color} ${academy.hoverColor} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 transform hover:scale-110`}
              >
                <academy.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                {academy.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">
                      {academy.address}
                    </p>
                    {academy.fullAddress && (
                      <p className="text-sm text-gray-600 mt-1">
                        {academy.fullAddress}
                      </p>
                    )}
                    <p className="text-sm text-gray-600">
                      Bangalore, Karnataka
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-3" />
                  <a
                    href={`tel:${academy.phone}`}
                    className="text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {academy.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-3" />
                  <a
                    href={`mailto:${academy.email}`}
                    className="text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {academy.email}
                  </a>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">Office Hours</p>
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {academy.timings}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map View */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Location Map
                </h4>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <iframe
                    src={academy.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title={`${academy.name} Location Map`}
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(academy.directionsUrl, "_blank")}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in Google Maps
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Why Choose Our Academies?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Expert Faculty",
              description:
                "Learn from experienced educators with proven track records in competitive exam preparation.",
              icon: "👨‍🏫",
            },
            {
              title: "Proven Results",
              description:
                "Consistent success rate with students achieving top ranks in various competitive examinations.",
              icon: "🏆",
            },
            {
              title: "Comprehensive Support",
              description:
                "From admission guidance to career counseling, we support you throughout your educational journey.",
              icon: "🤝",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
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
    </>
  );
};

export default Contact;
