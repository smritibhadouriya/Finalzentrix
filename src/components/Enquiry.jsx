// components/EnquiryModal.jsx
import { useState, useEffect } from 'react';
import { FaX } from 'react-icons/fa6';

const services = [
  { name: 'Content & Social Media', path: '/service/social' },
  { name: 'SEO Marketing', path: '/service/seo' },
  { name: 'PR (Public Relations)', path: '/service/pr' },
  { name: 'Performance Marketing', path: '/service/performance-marketing' },
];

export default function EnquiryModal({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(false);
      requestAnimationFrame(() => setIsVisible(true));
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log('Enquiry form submitted');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <FaX
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold hover:text-red-500 cursor-pointer"
        />

        <div className="text-center mb-6">
          <h2 className="text-xl  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
            Struggling to Stand Out Online?
          </h2>
          <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            Get an AI-powered digital marketing roadmap designed to scale your brand.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-md  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
                Full Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4B93] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-md  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4B93] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-md  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
                Phone *
              </label>
              <input
                type="tel"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4B93] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="text-md  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
              Interested Service *
            </label>
            <select
              required
              defaultValue=""
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4B93] focus:border-transparent"
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.path} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#111488] text-white py-3 px-6 rounded-full font-medium  transition-colors  text-xl   leading-tight animate-fade-in-up duration-300 hover:bg-[#111488]/90 "
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}