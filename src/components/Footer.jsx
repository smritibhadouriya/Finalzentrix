import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../Data/FooterData'; // Ensure the path and file name are correct
import Logo from  '../assets/logo.png'
import { FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import useSubscribe from './useSubscribe.js' // Add icons as needed

const Footer = () => {
 const { subscribe, loading, success } = useSubscribe();
const handleSubscribe = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  await subscribe(email);
  e.target.reset();
};
  return (
    <footer className="bg-black px-3 py-12 md:px-8 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl md:mx-auto lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left Column: Logo, Location, Email, Social */}
          <div className="space-y-4">
            <div className='bg-white px-3 py-3 rounded-2xl max-w-40'>
                <img
              src={Logo}
              alt="company logo"
              className="h-10 w-auto object-contain"
            />
            </div>
          
            <div className="text-white text-sm flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Mumbai, India
            </div>
            <div className="text-white text-sm flex items-center">
              <FaEnvelope className="mr-2" />
              hello@zentrix.media
            </div>
           <div className="flex space-x-3 items-center">
  <Link to="#" className="group">
    <img
      src="https://imgs.search.brave.com/REO0l-1oRt6fo-JWh3MBOfQnoO-bek19ji4_U8gkeag/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzEv/NzM3LzIwNi9zbWFs/bC90d2l0dGVyLW5l/dy1sb2dvLXR3aXR0/ZXItaWNvbnMtbmV3/LXR3aXR0ZXItbG9n/by14LTIwMjMteC1z/b2NpYWwtbWVkaWEt/aWNvbi1mcmVlLXBu/Zy5wbmc"
      alt="Twitter"
      className="w-10 h-10 "
    />
  </Link>

  <Link to="#" className="group">
    <img
      src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png"
      alt="Instagram"
      className="w-8 h-8"
    />
  </Link>

  <Link to="#" className="group">
    <img
      src="https://imgs.search.brave.com/Cf1nWrUKy9uFxSKpy2TKsY2Y-YV4EQgIuwTZHacZouI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNTAxNS8xNTAx/NTk3NS5wbmc_c2Vt/dD1haXNfaHlicmlk"
      alt="LinkedIn"
      className="w-7 h-7 "
    />
  </Link>

</div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-medium">
              Services
            </h3>
            <ul className="text-sm space-y-2">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.to}
                    className="text-gray-300 hover:text-white transition-all duration-200"
                    aria-label={service.label}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links Section */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-medium">
              Company
            </h3>
            <ul className="text-sm space-y-2">
              {footerData.companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-all duration-200"
                    aria-label={link.label}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-medium">
              Subscribe
            </h3>
            <form onSubmit={handleSubscribe}  className="flex w-full max-w-md gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 bg-white text-gray-900 rounded-full focus:outline-none text-sm border border-[#292B97]/5"
                required
                aria-label="Email for subscription"
              />
              <button
                 type="submit"
  disabled={loading}
                className="px-4 py-2  text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium"
              >
                {loading ? "Subscribing..." : "Submit"}
              </button>
            </form>
 {success && (
  <p className="text-green-400 text-sm mt-2 animate-fadeIn">
     Successfully Subscribed!
  </p>
)}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 md:flex md:justify-between md:items-center">
          <div className="md:text-left">
            © 2026 Zentrix Digital Agency. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 md:flex space-x-6">
            {footerData.footerLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-gray-500 hover:text-white transition-all duration-200"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;