// Social.jsx - Place this in your components or pages directory, e.g., src/pages/services/Social.jsx
// Ensure you add a route in your router: <Route path="/services/social" element={<Social />} />
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaVideo, FaCommentDots, FaUsers, FaChartLine, FaPen, FaRocket } from "react-icons/fa";
import socialpage from '../../assets/imagesuse/socialpage.jpg'
import Seo from "../../components/seo/Seo";
import { useInView } from "react-intersection-observer";
import Contactcomp from "../../components/Contactcomp";
import ParallaxBackground from "../../components/Parallex";
import EnquiryModal from '../../components/Enquiry'; // Adjust the path if needed
import socialbg from '../../assets/imagesuse/socialbg.jpg';
const Social = () => {
  const location = useLocation();
  const [offsetY, setOffsetY] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);
useEffect(() => {
  const handleScroll = () => setOffsetY(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  useEffect(() => {
    console.log("Social Service Loaded");
    window.scrollTo(0, 0);
  }, []);
  const seoData = {
    title: `Social Media Marketing Services | Expert Social Media Marketing Agency - Zentrix`,
    description: `Stop the scroll and start conversations with Zentrix Media's social media strategies built for the attention economy. Drive resonance, engagement, and growth.`,
    keywords: ["social media marketing services", "social media agency", "attention economy", "Zentrix", "viral content", "brand resonance"],
    href: `https://zentrix.media${location.pathname}`,
  };
  const headline = "Stop the Scroll. Start the Conversation.";
  const subheadline = "Most agencies think social media is about 'posting every day.' At Zentrix Media, we know it’s much beyond writing creative captions and posting fancy pictures.";
  const detailedIntro = "We truly know the truth - It’s about the Attention Economy. In a world where the average human attention span is less than a goldfish (literally), 'good enough' content is invisible and won’t do any good to your brand. You don't need more posts; you need resonance. We understand that Instagram, X, requires raw authenticity while LinkedIn demands polished thought leadership and we never mix the two.";
  const whatWeDeliver = [
    {
      icon: FaVideo,
      title: "Short-Form Video Production",
      description: "Reels that hook viewers in the first 0.03 seconds."
    },
    {
      icon: FaCommentDots,
      title: "Interaction and Engagement",
      description: "We make the audience stop, interact, talk and share about your brand."
    },
    {
      icon: FaUsers,
      title: "Community Management",
      description: "We don’t just reply; we build cult-like followings."
    },
    {
      icon: FaChartLine,
      title: "Trend-Jacking",
      description: "Identifying and leveraging latest trends and memes before they peak."
    },
    {
      icon: FaPen,
      title: "Blogs",
      description: "Highly engaging, relevant, SEO-optimised and share worthy content across all platforms."
    }
  ];
  const zentrixEdge = "We analyse engagement sentiment 24x7 and predict viral potential before we even hit record. This isn't guessing; it's calculated creativity.";
  return (
    <div className="bg-white">
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        href={seoData.href}
      />
    
      {/* Hero Header */}
    <header
  className="relative text-center py-20 px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden"
  style={{
     backgroundImage: `url('${socialbg}')`,
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
            Ignite Your Brand <FaRocket className="ml-2" />
          </Link>
          <div className="mt-12 relative z-10">
  
          </div>
        </div>
      </header>
<EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
      
            <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - moves to top on mobile */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px]  lg:h-[350px] md:order-2">
              <img
                src={socialpage}
                alt="Attention Economy in Action"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Text content */}
            <div className="space-y-8 md:order-1">
                <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">Engagement, Storytelling, and <br/>Scroll-stopping Visuals</h1>
               <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
             We truly know the truth - It’s about the Attention Economy. In a world where the average human attention span is less than a goldfish (literally), 'good enough' content is invisible and won’t do any good to your brand. You don't need more posts; you need resonance. We understand that Instagram, X, requires raw authenticity while LinkedIn demands polished thought leadership and we never mix the two.
              </p>
            </div>
          </div>
        </div>
      </section>
       <section className="relative overflow-hidden py-14 md:py-10 bg-blue-900/10"
      >
        <div className="absolute inset-0 bg-gray-100"></div>
        <div className="relative px-4 md:px-8 space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
           <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal text-center mb-3 text-gray-900 animate-fade-in-up">
              What We Deliver?
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-2 divide-y-2 md:divide-x-2 lg:divide-y-0 divide-black/20">
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
        {/* Zentrix Edge */}
        <section className=" p-12 md:p-16 text-center animate-slide-in bg-blue-900/10"
          style={{
          background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)',
        }}>
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
export default Social;