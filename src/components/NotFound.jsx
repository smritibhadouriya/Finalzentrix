import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 animate-fadeIn">
      <div className="text-center space-y-6">
        {/* 404 Header */}
        <h1 className="text-6xl font-bold text-pink-600 animate-pulse">404</h1>
        <p className="text-xl text-pink-800">Oops! Page Not Found</p>
       
        
        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-block px-6 py-3 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;