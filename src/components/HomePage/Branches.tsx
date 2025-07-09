import React, { useState, useEffect } from "react";
import { School } from "lucide-react";

const AcademyBranches = () => {
  // Keep the activeImageIndex state
  const [activeImageIndex, setActiveImageIndex] = useState<{
    [key: string]: number;
  }>({});

  const branches = [
    {
      id: "abhyasa",
      name: "Abhyasa Academy",
      location: "Banaswadi",
      fullAddress: "Banaswadi, Bangalore",
      images: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "/images/groupimg-1.jpg",
      ],
      phone: "+91 98765 43211",
      email: "abhyasa@academy.com",
      features: [
        "State-of-art Labs",
        "Personalized Coaching",
        "Digital Learning",
      ],
      established: "2018",
      students: "350+",
      bgGradient: "from-orange-500 to-orange-700",
      cardBg: "from-orange-50 to-orange-100",
    },
    {
      id: "akshara",
      name: "Akshara Academy",
      location: "Kasturi Nagar",
      fullAddress: "Kasturi Nagar, Bangalore",
      images: [
        "/images/moto.jpg",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      ],
      phone: "+91 98765 43210",
      email: "akshara@academy.com",
      features: [
        "Modern Infrastructure",
        "Expert Faculty",
        "Small Batch Sizes",
      ],
      established: "2015",
      students: "500+",
      bgGradient: "from-green-500 to-green-700",
      cardBg: "from-green-50 to-green-100",
    },
  ];

  // Keep the auto-change effect
  useEffect(() => {
    // Initialize active image indices
    const initialIndices: { [key: string]: number } = {};
    branches.forEach((branch) => {
      initialIndices[branch.id] = 0;
    });
    setActiveImageIndex(initialIndices);

    // Create separate intervals for each branch with different timings
    const intervals = branches.map((branch, index) => {
      const interval = setInterval(() => {
        setActiveImageIndex((prev) => ({
          ...prev,
          [branch.id]: (prev[branch.id] + 1) % branch.images.length,
        }));
      }, (index + 1) * 2000 + 3000); // 3s for first, 5s for second

      return interval;
    });

    // Clean up all intervals on unmount
    return () => intervals.forEach(clearInterval);
  }, []);

  const handleBranchClick = (branchId: string) => {
    window.location.href = `/contact?branch=${branchId}`;
  };

  // Keep all the icon components
  const MapPin = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const Phone = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const Mail = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const ArrowRight = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12,5 19,12 12,19" />
    </svg>
  );

  const Building = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12h12" />
      <path d="M6 8h12" />
      <path d="M6 16h12" />
    </svg>
  );

  const Users = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const Award = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
    </svg>
  );

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-green-50 to-orange-50">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-green-400/10 to-orange-400/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-green-400/10 rounded-full animate-pulse"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
            <School />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Branches</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our state-of-the-art academy locations across Bangalore,
            each designed to provide world-class education and personalized
            learning experiences
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {branches.map((branch, index) => (
            <div
              key={branch.id}
              className="group cursor-pointer"
              onClick={() => handleBranchClick(branch.id)}
            >
              <div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${branch.cardBg} shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4`}
              >
                {/* Updated Image Display Section */}
                <div className="relative h-80 overflow-hidden">
                  {/* Show images with fade transition */}
                  {branch.images.map((image, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                        activeImageIndex[branch.id] === idx
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${branch.name} - View ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Light Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${branch.bgGradient} opacity-20`}
                  />

                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 space-y-2">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-gray-800 text-sm font-medium shadow-lg flex items-center">
                      <Users />
                      <span className="ml-2">{branch.students}</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-gray-800 text-sm font-medium shadow-lg flex items-center">
                      <Award />
                      <span className="ml-2">Est. {branch.established}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3
                      className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 ${
                        branch.id === "akshara"
                          ? "text-green-600 group-hover:text-gray-800"
                          : "text-orange-600 group-hover:text-gray-800"
                      }`}
                    >
                      {branch.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin />
                      <span className="text-lg font-medium ml-2">
                        {branch.fullAddress}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {branch.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <div
                            className={`w-2 h-2 rounded-full mr-3 ${
                              branch.id === "akshara"
                                ? "bg-green-500"
                                : "bg-orange-500"
                            }`}
                          />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Phone />
                      <span className="font-medium ml-3">{branch.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail />
                      <span className="font-medium ml-3">{branch.email}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full bg-gradient-to-r ${branch.bgGradient} text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 active:scale-95`}
                  >
                    <span className="flex items-center justify-center">
                      Visit {branch.name}
                      <div className="ml-2">
                        <ArrowRight />
                      </div>
                    </span>
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-12 h-12 border-2 border-white/30 rounded-full animate-spin"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 border-2 border-white/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95"
          >
            <MapPin />
            <span className="mx-2">Find Us on Map</span>
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-green-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-orange-400/20 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default AcademyBranches;
