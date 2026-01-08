// PR.jsx - Place this in your components or pages directory, e.g., src/pages/services/PR.jsx
// Ensure you add a route in your router: <Route path="/services/pr" element={<PR />} />
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaNewspaper, FaFireAlt, FaUserTie, FaRocket } from "react-icons/fa";
import Seo from "../../components/seo/Seo";
import { useInView } from "react-intersection-observer";
import Prmanage from '../../assets/imagesuse/pr.jpg';
import Contactcomp from "../../components/Contactcomp";
import EnquiryModal from '../../components/Enquiry'; // Adjust the path if needed
import Background from '../../assets/imagesuse/prbg.jpg';
const PR = () => {
  const location = useLocation();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    console.log("PR Service Loaded");
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: `Public Relations (PR) Services | Digital PR Agency - Zentrix Media`,
    description: `Get famous for the right reasons. Modern digital PR focused on narrative control, SEO-driven storytelling, and real-time brand protection.`,
    keywords: ["digital PR", "public relations agency", "crisis management", "influencer relations", "brand narrative", "Zentrix Media"],
    href: `https://zentrix.media${location.pathname}`,
  };

  const headline = "Get Famous For the Right Reasons and Be the Talk of the Town";
  const subheadline = "The days of the dusty press release have become rather obsolete. Modern PR is about Digital Footprint and Narrative Control.";

  const whatWeDeliver = [
    {
      icon: FaNewspaper,
      title: "Digital Storytelling",
      description: "Crafting angles journalists actually want to read."
    },
    {
      icon: FaFireAlt,
      title: "Crisis Management",
      description: "Putting out fires before they burn the house down."
    },
    {
      icon: FaUserTie,
      title: "Influencer Relations",
      description: "Connecting you with voices that matter, not just faces that look pretty."
    }
  ];

  const zentrixEdge = "We monitor brand sentiment in real-time across the web. If the vibe shifts, we know instantly and pivot the strategy before Monday morning.";

  return (
    <div className="bg-white">
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        href={seoData.href}
      />
        <link rel="preload" href={Background} as="image" />

      {/* Hero Header - Exactly matches Social.jsx */}
      <header
        className="relative text-center py-20 lg:pt-10 lg:pb-25 lg:py-0 px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${Background})`,
          loading:'lazy',
        }}
      >
        <div className="absolute inset-0 bg-gray-800/60 z-0"></div>
        <div className="relative max-w-6xl mx-auto pt-30 z-10">
          <h1 className="text-4xl md:text-5xl  font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            {headline}
          </h1>
         <p className="text-xl  text-white/80 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            {subheadline}
          </p>
          <Link
            onClick={openEnquiry}
            className="inline-flex items-center px-8 py-4 bg-[#F16D34] text-white font-bold text-lg rounded-full hover:bg-[#F16D34]/90 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow relative z-10"
          >
            Control Your Narrative <FaRocket className="ml-2" />
          </Link>
        </div>
      </header>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />

      {/* Detailed Intro Section - Exactly matches Social.jsx */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - moves to top on mobile */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] lg:h-[350px] md:order-2">
              <img
                src={Prmanage}
                alt="Digital PR in Action"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Text content */}
            <div className="space-y-8 md:order-1">
               <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
               Authority, Trust and Media Presence
              </h1>
              <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                It's not just about getting featured in the top publication and becoming the headlines, it's about what shows up when a potential investor or customer Googles your name. We blend traditional storytelling with SEO-driven PR to ensure your brand isn't just heard but understood correctly and respected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver - Exactly matches Social.jsx (grid with 5 columns on lg, light gray bg overlay) */}
      <section className="relative overflow-hidden py-14 md:py-10 bg-blue-900/10">
        <div className="absolute inset-0 bg-gray-100"></div>
        <div className="relative px-4 md:px-8 space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal text-center mb-3 text-gray-900 animate-fade-in-up">
              What We Deliver?
            </h1>
          </div>
          <div className="grid lg:px-20 grid-cols-1 md:grid-cols-3  gap-4 md:gap-2 divide-y-2 md:divide-x-2 lg:divide-y-0 divide-black/20">
            {whatWeDeliver.map((item, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              });
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`p-4 md:p-6 transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="text-center space-y-3 group h-full flex flex-col justify-center">
                    <div className="flex justify-center">
                      <Icon className="text-3xl md:text-4xl text-[#F16D34] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h2 className="text-xl  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
                      {item.title}
                    </h2>
                    <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zentrix Edge - Exactly matches Social.jsx */}
      <section
        className="p-12 md:p-16 text-center animate-slide-in bg-blue-900/10"
        style={{
          background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)',
        }}
      >
           <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal text-center mb-3 text-white animate-fade-in-up">
          The Zentrix Edge
        </h1>
          <p className="text-xl  text-white/80 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
          {zentrixEdge}
        </p>
      </section>

      <Contactcomp />
    </div>
  );
};

export default PR;