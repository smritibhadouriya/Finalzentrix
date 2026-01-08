// SEO.jsx - Place this in your components or pages directory, e.g., src/pages/services/SEO.jsx
// Ensure you add a route in your router: <Route path="/services/seo" element={<SEO />} />
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaFileAlt, FaMapMarkerAlt, FaChartBar, FaRocket } from "react-icons/fa";
import Seo from "../../components/seo/Seo";
import { useInView } from "react-intersection-observer";
import Seomarketing from '../../assets/imagesuse/seomarketing.jpg';
import Seobackground from '../../assets/imagesuse/seobackground.jpg';
import Contactcomp from "../../components/Contactcomp";
import EnquiryModal from '../../components/Enquiry'; // Adjust the path if needed

const SEO = () => {
  const location = useLocation();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    console.log("SEO Service Loaded");
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: `SEO Services | Search Engine Optimisation Agency - Zentrix Media`,
    description: `Invisible Brands Go Broke. Let’s Get You Found. Topical Authority, Technical SEO, Content Strategy & Local SEO that wins in the age of AI and SGE.`,
    keywords: ["seo services", "search engine optimisation", "topical authority", "technical seo", "local seo", "zentrix media", "AEO", "GEO"],
    href: `https://zentrix.media${location.pathname}`,
  };

  const headline = "Invisible Brands Go Broke. Let’s Get You Found.";
  const subheadline = "SEO isn't just stuffing keywords into a blog post anymore. It has evolved, and continues to do so every day.";

  const whatWeDeliver = [
    {
      icon: FaSearch,
      title: "Technical SEO Audits",
      description: "Fixing the broken code that's killing your ranking."
    },
    {
      icon: FaFileAlt,
      title: "Content Strategy",
      description: "Specifically crafted content to satisfy user intent, and not just for search bots."
    },
    {
      icon: FaMapMarkerAlt,
      title: "Local SEO",
      description: "Dominating your immediate geography."
    },
    {
      icon: FaChartBar,
      title: "Ranking",
      description: "Getting your brand’s website right up there on the Search Engine Results Page (SERP)"
    }
  ];

  const zentrixEdge = "We analyse thousands of SERPs (Search Engine Results Pages) to reverse-engineer exactly what Google rewards in your specific niche right now.";

  return (
    <div className="bg-white">
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        href={seoData.href}
      />

      {/* Hero Header - Matches Social exactly */}
     <header
  className="relative text-center py-15 lg:py-0 lg:pt-15 lg:pb-40  px-4 md:px-8 bg-no-repeat bg-center overflow-hidden"
  style={{
    backgroundImage: `url(${Seobackground})`,
    backgroundSize: 'cover',
    loading:'lazy',
  }}
>

        <div className="absolute inset-0 bg-gray-800/40 z-0"></div>
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
            Get Found Now <FaRocket className="ml-2" />
          </Link>
        </div>
      </header>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />

      {/* Detailed Intro Section - Matches Social exactly */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - moves to top on mobile */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] lg:h-[350px] md:order-2">
              <img
                src={Seomarketing}
                alt="Topical Authority in Action"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Text content */}
            <div className="space-y-8 md:order-1">
               <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
             Visibility, Organic Growth and Rankings
              </h1>
             <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                With the rise of Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), Search Generative Experience (SGE) and AI answers, the game has changed. Today, SEO is all about Topical Authority. You need to prove to Google and the online audience that you are the expert in your domain. We focus on technical health and high-value content that answers the questions AI is asking, allowing your brand to be relevant, visible to every query that users have about your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver - Matches Social (5 columns on lg, with animation) */}
      <section className="relative overflow-hidden py-14 md:py-10 bg-blue-900/10">
        <div className="absolute inset-0 bg-gray-100"></div>
        <div className="relative px-4 md:px-8 space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
             <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal text-center mb-3 text-white animate-fade-in-up">
              What We Deliver?
            </h1>
          </div>
          <div className="grid grid-cols-1  lg:px-20 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2 divide-y-2 md:divide-x-2 lg:divide-y-0 divide-black/20">
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

      {/* Zentrix Edge - Matches Social exactly */}
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

export default SEO;