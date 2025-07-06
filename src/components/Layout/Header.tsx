import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS, ACADEMY_INFO } from "../../utils/constants";
import assets from "../../assets/assets";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img
                src={assets.Logo}
                alt="Abhyasa Academy Logo"
                className="h-20 w-24 lg:h-24 lg:w-28 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-700 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg lg:text-xl font-sans text-green-700 tracking-wide">
                {ACADEMY_INFO.name}
              </span>
              <span className="text-xs text-green-700 -mt-1 font-semibold tracking-wider">
                {ACADEMY_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-m  font-bold tracking-wider transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-green-700"
                    : "text-green-700 hover:text-teal-600"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-green-700 hover:text-green-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "text-green-700 bg-teal-50"
                        : "text-green-700 hover:text-green-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
