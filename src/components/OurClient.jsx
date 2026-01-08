import React, { useEffect, useRef } from 'react';
import { Clients } from '../Data/ClientData';

const OurClient = () => {
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

  // Duplicate clients for seamless looping
  const extendedClients = [...Clients, ...Clients];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Auto-scroll animation
    let scrollSpeed = 1; // Pixels per frame
    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    // Start auto-scroll
    animationRef.current = requestAnimationFrame(scroll);

    // Cursor interaction
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const centerX = rect.width / 2;
      const distanceFromCenter = mouseX - centerX;
      
      // Adjust scroll speed based on cursor position
      scrollSpeed = (distanceFromCenter / centerX) * 2; // Scale speed based on cursor position
      scrollSpeed = Math.max(-2, Math.min(2, scrollSpeed)); // Limit speed range
    };

    // Pause on hover and handle mouse movement
    container.addEventListener('mouseenter', () => {
      cancelAnimationFrame(animationRef.current);
      container.addEventListener('mousemove', handleMouseMove);
    });

    // Resume auto-scroll on mouse leave
    container.addEventListener('mouseleave', () => {
      container.removeEventListener('mousemove', handleMouseMove);
      animationRef.current = requestAnimationFrame(scroll);
    });

    return () => {
      cancelAnimationFrame(animationRef.current);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-16 lg:py-16 xl:px-24 xl:py-20">
      <h2 className="max-w-7xl mx-auto text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 md:mb-10">
        We <span className="text-pink-500">Worked</span> With Over <br className="sm:hidden" />
        350+ Happy <span className="text-blue-800">Client</span>
      </h2>
      <div
        ref={scrollContainerRef}
        className="overflow-x-hidden hide-scrollbar snap-x snap-mandatory relative"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex gap-4 sm:gap-6 md:gap-8" style={{ minWidth: 'fit-content' }}>
          {extendedClients.map((Client, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-md flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 h-20 sm:h-24 md:h-28 lg:h-32 snap-center"
            >
              <img
                src={Client.image}
                alt={`Client ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;