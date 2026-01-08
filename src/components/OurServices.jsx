import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const OurServices = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle dot click to set the selected service
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Handle next
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Determine number of visible services based on screen size
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3; // Large screens (lg)
    if (window.innerWidth >= 768) return 2;  // Medium screens (md)
    return 1;                                // Small screens (sm)
  };

  // Calculate visible services
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleServices = [];
  for (let i = 0; i < Math.min(visibleCount, services.length); i++) {
    const index = (currentIndex + i) % services.length;
    visibleServices.push(services[index]);
  }

  return (
    <div className="px-4 py-8 md:px-8 md:py-12 lg:px-8 lg:py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          WELCOME TO <span className="text-pink-500">ZENTRIX</span> WHERE <br/>
          <span className="text-blue-800">MARKETING </span> <span className="">MOVES</span>
        </h2>
      </div>
      <div className="relative max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto mt-10  bg-gray-100 p-10 rounded-4xl">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-transform duration-500 ease-in-out">
            {visibleServices.map((service, index) => {
              const serviceSlug = service.path.toLowerCase().replace(/\s+/g, '-');
              return (
                <div
                  key={index}
                  onClick={() => navigate(`/service/${serviceSlug}`)}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/service/${serviceSlug}`)}
                  role="button"
                  tabIndex={0}
                  className="hover:bg-white p-6 hover:rounded-xl hover:shadow-lg flex flex-col items-center text-center cursor-pointer"
                >
                  <div>
                    <img
                      src={service.image}
                      alt={`${service.name} service illustration`}
                      className="w-20 h-20  lg:w-24 lg:h-24 object-contain mb-4"
                    />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{service.name}</h3>
                  </div>
                  <Link
                    href={`/service/${serviceSlug}`}
                    className="mt-4 sm:mt-6 inline-block font-medium text-sm sm:text-base md:text-lg hover:text-pink-500 transition-colors"
                    aria-label={`Learn more about our ${service.name.toLowerCase()} services`}
                  >
                    Learn more <span className="ml-2">&rarr;</span>
                  </Link>
                </div>
              );
            })}
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center mt-10 md:mt-12 lg:mt-20 mb-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                onKeyDown={(e) => e.key === 'Enter' && handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-blue-800' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to service group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;