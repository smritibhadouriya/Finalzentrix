import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../Data/FooterData'; // Ensure the path and file name are correct
import Logo from  '../assets/logowhite.png'
const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Subscribed:', email); // Replace with API call in production
    e.target.reset();
  };

  const handleUnsubscribe = (e) => {
    e.preventDefault();
    console.log('Unsubscribed'); // Replace with API call in production
  };

  return (
    <footer
      className="bg-[#2D2D2D] px-3 py-12 md:px-8 md:py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl md:mx-auto lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Section */}
          <div>
  <img
    src={Logo}
    alt="company logo"
    className="h-10 w-auto object-contain"
  />

  <div className="flex space-x-5 mt-8 md:mt-7 lg:mt-30">
    {footerData.company.socialLinks.map((link, index) => {
      const Icon = link.icon;
      return (
        <Link
          key={index}
          href={link.href}
          className="text-white hover:text-[#F16D34] transform hover:scale-110 transition-all duration-300"
          aria-label={`Visit our ${link.label}`}
        >
          <Icon className="w-5 h-5 lg:w-7 lg:h-7" />
        </Link>
      );
    })}
  </div>
</div>


          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4 tracking-tight border-b border-[#F16D34]/30 pb-2">
              Services
            </h3>
            <ul className="text-sm space-y-3">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.to}
                    className="text-white hover:text-[#F16D34] hover:translate-x-1 transition-all duration-200"
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
            <h3 className="text-white text-xl font-semibold mb-4 tracking-tight border-b border-[#F16D34]/30 pb-2">
              Company
            </h3>
            <ul className="text-sm space-y-3">
              {footerData.companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white hover:text-[#F16D34] hover:translate-x-1 transition-all duration-200"
                    aria-label={link.label}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Subscribe Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4 tracking-tight border-b border-[#F16D34]/30 pb-2">
              Contact & Subscribe
            </h3>
            <ul className="text-sm space-y-4">
              {footerData.contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index} className="flex items-center">
                    <span className="text-[#F16D34] mr-3">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-white">{info.text}</span>
                  </li>
                );
              })}
            </ul>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-xs  mt-6">
             <div className="flex rounded-full border border-[#F16D34]/50
focus-within:ring-1 focus-within:ring-[#F16D34] focus-within:border-[#F16D34]">

  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    className="flex-1 px-4 py-2.5 bg-gray-900/50 text-gray-200 rounded-l-full
    focus:outline-none focus:ring-0 text-sm"
    required
    aria-label="Email for subscription"
  />

  <button
    type="submit"
    className="px-4 py-2.5 bg-[#F16D34] text-white rounded-r-full
    hover:bg-[#F16D34]/90 transition-all duration-300"
  >
    Subscribe
  </button>
</div>

            </form>
            <div className="text-sm text-gray-400 mt-4 text-center">
              <Link
                href="#"
                onClick={handleUnsubscribe}
                className="text-white hover:text-[#F16D34]transition-all duration-200"
                aria-label="Unsubscribe from newsletter"
              >
                Unsubscribe
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-[#F16D34]/20 text-center text-sm text-gray-400 md:flex md:justify-between md:items-center">
          <div className="md:text-left">
            © 2025 {footerData.company.name}. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 md:flex space-x-3 md:space-x-6">
            {footerData.footerLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-white hover:text-[#F16D34]transition-all duration-200"
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