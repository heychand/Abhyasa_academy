import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Growth from "./pages/Growth";
import Contact from "./pages/Contact";

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/images/Abhyasa 2025.jpg", "/images/abhyasa phamplet.jpg"];

  const closePopup = () => {
    setShowPopup(false);
  };

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  // Rotate images every 5 seconds
  useEffect(() => {
    if (showPopup) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev === 0 ? 1 : 0));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [showPopup]);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-[90%] max-h-[90%] relative flex flex-col items-center border border-gray-200">
            <div className="relative w-full h-full">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Abhyasa Academy ${
                    index === 0 ? "Topper 2025" : "Pamphlet"
                  }`}
                  className={`max-w-full max-h-[70vh] object-contain transition-opacity duration-500 ${
                    currentImage === index
                      ? "opacity-100"
                      : "opacity-0 absolute top-0 left-0"
                  }`}
                />
              ))}
            </div>

            {/* Close button positioned with z-10 to appear above images */}
            <button
              className="absolute top-2 right-2 bg-white w-8 h-8 rounded-full flex justify-center items-center shadow-md hover:bg-gray-100 transition-colors text-2xl z-10"
              onClick={closePopup}
            >
              &times;
            </button>

            <button
              className="mt-3 px-4 py-1.5 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition-colors"
              onClick={closePopup}
            >
              Enter Website
            </button>
          </div>
        </div>
      )}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="academics" element={<Academics />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="growth" element={<Growth />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
