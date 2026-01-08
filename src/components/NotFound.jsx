import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F16D34]/10  animate-fadeIn">
      <div className="text-center space-y-6">
        {/* 404 Header */}
        <h1 className="text-6xl font-bold text-[#F16D34] animate-pulse">404</h1>
        <p className="text-xl text-[#F16D34]">Oops! Page Not Found</p>
       
        
        {/* Back to Home Button */}
        <Link
         to="/"
          className="inline-block px-6 py-3 text-white bg-[#F16D34] rounded-lg transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;