import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {/* Big trailing circle: larger, lighter, with longer delay */}
      <div
        className="fixed w-8 h-8 bg-pink-200 opacity-60 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-40 transition-all duration-800 ease-out"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      
      {/* Original small circle: follows with original timing */}
      <div
        className="fixed w-2 h-2 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 transition-transform duration-300"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CursorEffect;