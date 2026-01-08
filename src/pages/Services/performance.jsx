// Performance.jsx - Place this in your components or pages directory, e.g., src/pages/services/Performance.jsx
// Ensure you add a route in your router: <Route path="/services/performance" element={<Performance />} />
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFunnelDollar, FaSearchDollar, FaChartPie, FaRocket } from "react-icons/fa";
import Seo from "../../components/seo/Seo";
import { useInView } from "react-intersection-observer";
import Performancemarketing from '../../assets/imagesuse/performance1.jpg';
import Contactcomp from "../../components/Contactcomp";
import EnquiryModal from '../../components/Enquiry'; // Adjust the path if needed
import Background from '../../assets/imagesuse/performancebg.jpg';
const Performance = () => {
  const location = useLocation();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    console.log("Performance Marketing Service Loaded");
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: `Performance Marketing Services | Data-Driven Ads Agency - Zentrix Media`,
    description: `Turn ₹1 into ₹4 with Zentrix Media's performance marketing. Creative strategy + first-party data for maximum ROI on Meta, Google, LinkedIn, and more.`,
    keywords: ["performance marketing", "paid ads agency", "PPC services", "conversion rate optimization", "Zentrix Media", "ROI focused marketing"],
    href: `https://zentrix.media${location.pathname}`,
  };

  const headline = "We Turn ₹1 into ₹4. It’s Not Magic, It’s Math.";
  const subheadline = "Performance marketing is often treated like a slot machine. At Zentrix Media, we treat it like the stock market.";

  const whatWeDeliver = [
    {
      icon: FaFunnelDollar,
      title: "Paid Social",
      description: "Architect funnels across online channels, including Meta, Google, LinkedIn that convert cold traffic into loyal fans."
    },
    {
      icon: FaSearchDollar,
      title: "PPC & Google Ads",
      description: "Capturing high-intent users exactly when they are ready to buy."
    },
    {
      icon: FaChartPie,
      title: "Conversion Rate Optimisation (CRO)",
      description: "Tweaking your landing pages because a 1% increase in conversion can double your profit."
    }
  ];

  const zentrixEdge = "Our bidding scripts work 24/7, optimizing your budget every single second. While your competitors sleep, we lower Cost Per Acquisition (CPA).";

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
    className="relative text-center py-20 lg:py-20 lg:pt-15 lg:pb-25 px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden"
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
            Scale Your ROI <FaRocket className="ml-2" />
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
                src={Performancemarketing}
                alt="Performance Marketing in Action"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Text content */}
            <div className="space-y-8 md:order-1">
             <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
              ROAS (Returns on Ad Spend), Conversions, and Data Precision
              </h1>
              <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                With third-party cookies crumbling, the "spray and pray" method is dead. We focus on Creative Strategy + First-Party Data. The algorithm favours the best creative; we build the ads the algorithm wants to show.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver - Exactly matches Social.jsx (light gray overlay, 5-column grid on lg) */}
      <section className="relative overflow-hidden py-14 md:py-10 bg-blue-900/10">
        <div className="absolute inset-0 bg-gray-100"></div>
        <div className="relative px-4 md:px-8 space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
               <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal text-center mb-3 text-white animate-fade-in-up">
              What We Deliver?
            </h1>
          </div>
          <div className="grid  lg:px-20 grid-cols-1 md:grid-cols-3  gap-4 md:gap-2 divide-y-2 md:divide-x-2 lg:divide-y-0 divide-black/20">
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
        <h1 className="text-4xl  font-semibold mb-4 text-white leading-tight animate-fade-in-up">
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

export default Performance;