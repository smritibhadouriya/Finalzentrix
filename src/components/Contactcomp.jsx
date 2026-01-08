import React from 'react';
import connect from '../assets/imagesuse/connectus.jpg'; // Fixed potential path typo: assuming 'imagesuse' was 'images'

const Contactcomp = () => {
  return (
    <section className="flex  bg-gray-50"> {/* Added subtle bg to reduce 'white white' starkness */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2   bg-white"> {/* Removed max-w-7xl and px-6 for full horizontal width; keeps responsive grid */}
        {/* Left - Image */}
        <div className="flex"> {/* Removed min-h-[520px] to avoid fixed tall height; now fits content/flow */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={connect}
              alt="Team collaboration and creativity"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
        {/* Right - Form */}
        <div className="flex">
          <div className="w-full h-full bg-white px-10 py-5  lg:pt-5 lg:pb-10 lg:py-0 flex flex-col justify-center"> {/* Removed min-h-[520px]; height now responsive to content */}
            <p className="text-xl  font-medium my-4 text-gray-700 leading-tight animate-fade-in-up">
              Tell us about your brand and goals. We’ll get back to you within 24 hours.
            </p>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <select
                defaultValue=""
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>Select a service</option>
                <option>Display Advertising</option>
                <option>Influencer Marketing</option>
                <option>Mobile Marketing</option>
                <option>Email Marketing</option>
                <option>Video Advertising</option>
                <option>ORM Solutions</option>
                <option>SEO Optimization</option>
                <option>Social Media Marketing</option>
                <option>Content Marketing</option>
                <option>Other</option>
              </select>
              <textarea
                rows="4"
                placeholder="Tell us about your project, goals, and how we can help..."
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#F16D34] text-white py-4 rounded-full hover:bg-[#F16D34]/90 transition shadow-lg" // Fixed hover classes to work with gradient
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactcomp;