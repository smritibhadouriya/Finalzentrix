// src/pages/Blog.jsx
import React, { useEffect, useState } from 'react';
import Background from '../assets/imagesuse/Blog.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsEye } from 'react-icons/bs';
import { caseStudies, toSlug } from '../Data/Blog';

const Blog = () => {
  const services = ['All', ...new Set(caseStudies.map((s) => s.service))];
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'All');

  const filteredStudies = activeTab === 'All'
    ? caseStudies
    : caseStudies.filter((s) => s.service === activeTab);

  const handleCardClick = (title) => {
    const slug = toSlug(title);
    navigate(`/blog/${slug}`);
  };

  // Scroll behavior on route change
  useEffect(() => {
    const shouldScrollToTop = !location.state?.scrollToBlogs;
    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to blogs grid after a short delay to allow render
      setTimeout(() => {
        const el = document.getElementById('blogs-grid');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, location.state]);
  return (
    <>
 
      {/* Hero Header */}
      <header
        className="relative text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat bg-center overflow-hidden"
        style={{ backgroundImage: `url(${Background})` ,
        loading: "lazy"
      }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl  font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            Delivering measurable results<br />with creative digital solutions.
          </h1>
          <p className="text-xl  text-white/80 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            Elevate your brand with Zentrix - where creativity meets strategy for unparalleled digital success.
          </p>
        </div>
      </header>

      {/* Tabs */}
      <section  className="py-7 overflow-hidden bg-blue-900/10">
        <div className="md:max-w-7xl md:mx-auto px-2 md:px-6">
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex justify-start md:justify-center gap-1 md:gap-3  py-2">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setActiveTab(service)}
                  className={`px-6 py-3 font-medium text-md md:text-lg transition-all duration-300 flex-shrink-0 text-lg md:text-xl mb-2 text-gray-800 leading-tight animate-fade-in-up${
                    activeTab === service
                      ? 'border-b-2 border-[#F16D34] text-[#F16D34]'
                      : 'text-gray-600 hover:text-[#F16D34] hover:border-b-2 hover:border-[#F16D34]'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="blogs-grid" className="pb-10 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          {filteredStudies.length === 0 ? (
            <p className="text-xl  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
              No case studies found for this service.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, idx) => (
                <div
                  key={idx}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleCardClick(study.title)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(study.title)}
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-40 lg:h-96  group"
                  style={{
                    backgroundImage: `url(${study.banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    <div className="flex justify-end">
                      <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full text-xs opacity-80">
                        <BsEye className="w-3.5 h-3.5" />
                        {study.view.toLocaleString()} Views
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;