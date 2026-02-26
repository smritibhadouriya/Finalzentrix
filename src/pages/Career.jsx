import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRocket, FaUsers, FaBrain, FaChartLine } from "react-icons/fa";
import background from '../assets/imagesuse/career.jpg';
import EnquiryModal from '../components/Enquiry';
import gpt from '../assets/imagesuse/gpt.jpg';
import party from '../assets/imagesuse/party.jpg';
import careerup from '../assets/imagesuse/careerup.jpg';
import hybrid from '../assets/imagesuse/hybrid.jpg';
import {openPositions} from '../Data/Openpositions.js';
import { useNavigate } from "react-router-dom";
import SEO from "../components/seo/Seo";
import Background from "../assets/imagesuse/background1.jpg";


export default function Careers() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const openPositionsRef = useRef(null);
  const location = useLocation();

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToPositions && openPositionsRef.current) {
      openPositionsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
  if (location.state?.scrollToPositions && openPositionsRef.current) {
    openPositionsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    window.history.replaceState({}, document.title);
  }
}, [location.state]);


  const benefits = [
    {
      title: "The Best Toys",
      desc: "Access to premium AI tools (Google Gemini, GPT-7, Custom Enterprise Tools) to supercharge your workflow.",
      img: gpt,
      alt: "AI-Powered Marketing Dashboard Interface",
    },
    {
      title: "High-Octane Fuel",
      desc: "Coffee, snacks, and the occasional pizza brainstorm.",
      img: party,
      alt: "Diverse team enjoying pizza during office break",
    },
    {
      title: "Hybrid Flex",
      desc: "We value output, not chair time.",
      img: hybrid,
      alt: "Person working remotely with laptop in a cafe",
    },
    {
      title: "Career Velocity",
      desc: "We are growing fast. Perform well, and you’ll rise faster here than anywhere else.",
      img: careerup,
      alt: "Rocket launching symbolizing fast career growth",
    },
  ];

  const seoData = {
    title: "Careers at Zentrix Media | Join the Intelligence Revolution",
    description: "Join Zentrix Media. Work with AI, data, and creativity. Zero ego. High velocity. Real impact.",
    keywords: ["careers at zentrix media", "digital marketing jobs", "performance marketing careers", "creative agency jobs"],
    href: "https://zentrix.media/career",
  };

  const cultureItems = [
    { icon: FaUsers, title: "Zero Ego", desc: "The intern’s good idea beats the founder’s bad idea. Every time." },
    { icon: FaBrain, title: "Always Beta", desc: "We are constantly learning. If you aren't upgrading your skills weekly, you're falling behind." },
    { icon: FaChartLine, title: "Data-Backed Creativity", desc: "We don't guess. We test." },
  ];


  const [isTransitioning, setIsTransitioning] = useState(false);
const [targetLink, setTargetLink] = useState(null);
const navigate = useNavigate();

  return (
    <div className="font-sans bg-white">
        <link rel="preload" href={background} as="image" />
     
          <SEO
       title="Careers at Zentrix Media | Join the Intelligence Revolution"
        description="Explore our blog for the latest digital marketing insights, case studies, and industry trends."
         keywords="digital marketing blog, case studies, marketing insights"
         canonicalUrl="https://zentrix.media/career"
         ogImage={background}
  author="Zentrix Media"
          />

      {/* Hero Header */}
      <header
        className="relative text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden bg-black"
        style={{ backgroundImage: `url(${background})` ,
       loading: "lazy"}}

      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl  font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            Join the Intelligence Revolution.<br />
            Warning: We Move Fast, Like, AI-Fast
          </h1>
          <p className="text-xl  text-white/80 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            We are always looking for the misfits, the data-wizards, and the creative rebels who are tired of corporate safe. If you are one, Welcome to a space that feels like home.
          </p>
          <Link
            to="/career"
            state={{ scrollToPositions: true }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#292B97] to-[#6466B6] text-white font-bold text-lg rounded-full hover:bg-[#292B97]/90 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
          >
            Look Available Positions <FaRocket className="ml-2" />
          </Link>
        </div>
      </header>

      {/* Work Smarter Section */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl  order-1">
            <img
               src={Background}
              alt="Zentrix Media team collaborating on intelligent marketing strategies with AI"
              className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="space-y-8 order-2">
             <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
              Work Smarter, Not Harder
            </h1>
           <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              At most agencies, you spend 50% of your time on busy work. At Zentrix Media, we don’t want you to do the boring stuff—reporting, scheduling, basic code.
            </p>
           <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              We encourage automation for all the run-of-the-mill tasks so you can spend 100% of your brainpower on Strategy, Creativity, and Innovation and do things that help you grow personally and professionally.
            </p>
           <p className="text-xl  text-gray-800 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              We don't care about your university grades. We care about your portfolio, your hunger to learn, and your ability to look at a dataset and see a story.
            </p>
          </div>
        </div>
      </section>

{/* Culture Code */}
      <section className="relative overflow-hidden py-10" style={{ background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)' }}>
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">
         <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-10 text-white animate-fade-in-up">
            Our Culture Code
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="group space-y-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-500 ease-out transform hover:-translate-y-2">
  
  <FaUsers
    className="text-6xl text-white mx-auto
               transition-all duration-500 ease-out
               group-hover:scale-110
               group-hover:-translate-y-1
               group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]"
  />

  <h2 className="text-xl font-medium text-white
                 transition-all duration-500
                 group-hover:translate-y-[-2px]">
    Zero Ego
  </h2>

  <p className="text-xl text-white/80
                transition-all duration-500
                group-hover:text-white">
    The intern’s good idea beats the founder’s bad idea. Every time.
  </p>

</div>
<div className="group space-y-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-1000 ease-out transform hover:-translate-y-2">
  
  <FaBrain
    className="text-6xl text-white mx-auto
               transition-all duration-500 ease-out
               group-hover:scale-110
               group-hover:-translate-y-1
               group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]"
  />

  <h2 className="text-xl font-medium text-white
                 transition-all duration-500
                 group-hover:translate-y-[-2px]">
   Always Beta
  </h2>

  <p className="text-xl text-white/80
                transition-all duration-500
                group-hover:text-white">
   We are constantly learning. If you aren't upgrading your skills weekly, you're falling behind.
  </p>

</div>
<div className="group space-y-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-500 ease-out transform hover:-translate-y-2">
  
  <FaChartLine
    className="text-6xl text-white mx-auto
               transition-all duration-500 ease-out
               group-hover:scale-110
               group-hover:-translate-y-1
               group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]"
  />

  <h2 className="text-xl font-medium text-white
                 transition-all duration-500
                 group-hover:translate-y-[-2px]">
   Data-Backed Creativity
  </h2>

  <p className="text-xl text-white/80
                transition-all duration-500
                group-hover:text-white">
    We don't guess. We test.
  </p>

</div>

      
          </div>
        </div>
      </section>

      {/* Why You’ll Love It Here */}
      <section className="py-13 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
           <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal text-center mb-10 text-gray-900 animate-fade-in-up">
            Why You’ll Love It Here?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="rounded-xl overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src={benefit.img}
                    alt={benefit.alt}
                    className="w-32 h-32 md:w-40 md:h-40 object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl  font-medium mb-3 max-w-4xl mx-auto text-gray-800 leading-tight animate-fade-in-up ">
                    {benefit.title}
                  </h2>
              <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
   {/* Open Positions - Dynamic from JSON */}
<section ref={openPositionsRef} className="py-15 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-6 text-white animate-fade-in-up">
      Open Positions</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {openPositions.map((position, index) => {
        const IconComponent = {
          FaBrain: FaBrain,
          FaChartLine: FaChartLine,
          FaRocket: FaRocket,
        }[position.icon];

        return (
          <div
            key={index}
            className="bg-gray-800 rounded-3xl p-8 hover:bg-gray-700 transition-all duration-300 flex flex-col"
          >
            {IconComponent && <IconComponent className="text-5xl text-white mx-auto mb-4" />}
            <h2 className="text-xl  font-medium mb-2 text-white/70 leading-tight animate-fade-in-up">
              {position.title} <span className="block text-lg text-white">({position.subtitle})</span>
            </h2>
            <p p className="text-xl  text-white/80  flex-grow animate-fade-in-up animation-delay-300">{position.description}</p>
          <button
  onClick={() => {
    setIsTransitioning(true);
    setTargetLink(position.applyLink);

    setTimeout(() => {
      navigate(position.applyLink);
    }, 600); // animation duration
  }}
  className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-[#292B97] text-white font-semibold rounded-full hover:bg-[#292B97]/90 transition-all duration-300 transform hover:scale-105"
>
  Apply Now <FaRocket className="ml-2" />
</button>

          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Final CTA */}
      <section className="py-15 text-center bg-blue-900/20">
        <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
          Think you can keep up?<br />Apply to the Future
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-5">
          Let’s build something intelligent together.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#292B97] to-[#6466B6] text-white font-bold text-lg rounded-full hover:bg-[#292B97]/90 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
        >
          Connect Us <FaRocket className="ml-2" />
        </Link>
      </section>
{isTransitioning && (
  <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center animate-fade-out">
      <h1 className="text-2xl font-medium mb-6 text-white leading-tight animate-fade-in-up animate-scale-up">
        Preparing Your Application...
      </h1>
  </div>
)}

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
    </div>
  );
}