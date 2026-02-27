
import React, { useEffect, useState } from "react";
import { FaBrain, FaBullseye, FaLightbulb, FaRocket, FaUps, FaUsers } from "react-icons/fa";
import background from '../assets/imagesuse/aboutbg.jpg';
import Seo from "../components/seo/Seo";
import EnquiryModal from '../components/Enquiry';
import Tech from '../assets/imagesuse/tech.jpg'
import vision from '../assets/imagesuse/vision.jpg'
import fun from '../assets/imagesuse/fun.jpg'
import { FaChartGantt, FaUser } from "react-icons/fa6";

export default function AboutUs() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: "About Zentrix Media | Your External Growth Engine",
    description: "We are digital natives, data geeks, and creative rebels building sustainable growth for brands in a fast-changing digital world.",
    keywords: ["about zentrix media", "digital marketing agency", "performance marketing", "creative strategy", "data-driven marketing"],
    href: "https://zentrix.media/about-us",
  };

  const differentiators = [
    {
      title: "The Visionaries",
      desc: "We don't just look at 1 quarter at a time. We build long-term, sustainable growth strategies that evolve with your brand.",
      img: vision,
      alt: "Strategic roadmap for long-term business vision",
    },
    {
      title: "The Tech",
      desc: "We use AI not to replace humans, but to give them superpowers. This allows our team to focus 80% of their time on creative strategy rather than repetitive tasks.",
      img: Tech,
      alt: "AI unlocking creativity in marketing",
    },
    {
      title: "The Vibe",
      desc: "Professional? Yes. Boring? Never. We believe the best work happens when you’re genuinely having fun solving hard problems.",
      img: fun,
      alt: "Energetic and fun team culture",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % differentiators.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      icon: FaBullseye,
      title: "Zero Ego",
      desc: "The intern’s good idea beats the founder’s bad idea. Every time."
    },
    {
      icon: FaUsers,
      title: "Team First",
      desc: "We prioritize collaboration and collective success over individual achievements."
    },
    {
      icon: FaLightbulb,
      title: "Always Beta",
      desc: "We are constantly learning. If you aren't upgrading your skills weekly, you're falling behind."
    },
    {
      icon: FaUps,
      title: "Data-Backed Creativity",
      desc: "We don't guess. We test."
    }
  ];

  const founders = [
    {
      name: "Omkar",
      desc: "Visionary leader with a passion for scaling brands through innovative digital strategies.",
      role:"ceo",
      img: "https://media.gettyimages.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg=",
      alt: "Omkar"
    },
    {
      name: "Harry",
      desc: "Creative powerhouse crafting viral campaigns that blend culture and storytelling.",
           role:"ceo",
      img: "https://media.gettyimages.com/id/1338145486/photo/businessman-working-on-a-laptop-computer-in-the-office.jpg?s=612x612&w=0&k=20&c=CNvAyzWFbYLzZsRHRxNbs8o-Sb8va1ullAJdm-JLPp0=",
      alt: "Harry"
    },
    {
      name: "Hermione",
      desc: "Data science expert turning insights into measurable ROI.",
           role:"ceo",
      img: "https://media.gettyimages.com/id/1456194324/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=az0Bfz3H9lFHDCzidKi6o1D_N07aTORXDlpyE0zuHaw=",
      alt: "Hermione"
    },
        {
      name: "Harry",
      desc: "Creative powerhouse crafting viral campaigns that blend culture and storytelling.",
           role:"ceo",
      img: "https://media.gettyimages.com/id/1338145486/photo/businessman-working-on-a-laptop-computer-in-the-office.jpg?s=612x612&w=0&k=20&c=CNvAyzWFbYLzZsRHRxNbs8o-Sb8va1ullAJdm-JLPp0=",
      alt: "Harry"
    },
  ];

  return (
    
    <div className="font-sans bg-white">
        <link rel="preload" href={background} as="image" />
      <Seo
       title={seoData.title}
        description={seoData.description}
         keywords={seoData.keywords} 
         canonicalUrl={seoData.href}
         ogImage={background}
  author="Zentrix Media"
          />

      {/* Hero Header */}
      <header
        className="relative text-center py-20 md:py-20 px-4 md:px-8 bg-cover bg-no-repeat bg-center overflow-hidden bg-black"
        style={{ backgroundImage: `url(${background})` ,
       loading: "lazy"}}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto">
           <h1 className="text-4xl lg:text-5xl  font-bold mb-6 text-white  animate-fade-in-up text-left">
            Transforming Brands<br/>
Through Digital<br/>
Excellence
          </h1>
           <p className="text-xl  text-white/80 mb-8 animate-fade-in-up animation-delay-300 text-left">
            Were a team of passionate digital marketers, strategists, and creatives<br/>  
dedicated to helping businesses thrive in the digital a
          </p>
        </div>
      </header>

      {/* Intro Section – Mobile: Image first, then text */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/6913338/pexels-photo-6913338.jpeg"
                alt="Zentrix Media team brainstorming"
                className="w-full h-auto md:h-[400px] object-cover hover:scale-105 transition-transform duration-1000 shadow-2xl"
              />
            </div>
            <div className="space-y-8 order-2 lg:order-1">
              <h1 className="font-inter font-bold text-3xl tracking-normal  mb-3 text-gray-800 animate-fade-in-up">
                What we do?
              </h1>
               <p className="text-xl  text-gray-600 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
               The modern digital landscape is quite dynamic and the brand’s needs are constantly evolving. One day it's SEO, the next it's AI Search and you need a guide who can pivot instantly.
             <br/>
                At Zentrix Media, we are versatile by design and more than happy to partner with you and help you accomplish your goals. We don't just "do digital marketing" but we act as your external growth engine. Whether you are a startup looking for your first 10,000 users or a legacy brand needing a digital facelift, we have the tools, the data, and the energy and the right mettle to make it happen.
             <br/>
                We are a team of digital natives, data geeks, and creative rebels on a mission to rewrite the rules of modern marketing.
              </p>
             
            </div>
          </div>
        </div>
      </section>

{/* value Code */}
      <section className="relative overflow-hidden pt-7 pb-20" >
        <div className="absolute inset-0"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">
         <h1 className="font-inter  text-3xl tracking-normal text-gray-800 font-bold mb-3 animate-fade-in-up">
       Our Values
          </h1>
            <p className="font-inter  max-w-lg mx-auto text-xl  tracking-normal  mb-10  animate-fade-in-up text-gray-600">
     These core principles guide everything we do and shape the way we work with our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group space-y-4 p-2 rounded-2xl bg-white/5 hover:bg-[#292B97]/5 transition-all duration-500 ease-out transform hover:-translate-y-2">
                 <div className="w-15 h-15 mx-auto flex items-center justify-center 
                rounded-full bg-[#292B97]/5 
                group-hover:bg-[#292B97]/10
                transition-all duration-500">

  <Icon
    className="text-3xl text-[#292B97] 
               transition-all duration-500 
               group-hover:scale-110"
  />
</div>
                  <h2 className="text-xl font-medium
                    transition-all duration-500
                    group-hover:translate-y-[-2px]">
                    {value.title}
                  </h2>
                  <p className="text-lg text-gray-700
                    transition-all duration-500
                    ">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


            {/* Meet the Founders */}
<section className="py-15 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-15">
      <h2 className="text-3xl font-bold text-gray-800">
        Meet the Founders
      </h2>
      <p className="text-lg text-gray-700 ">
        Young Blood. Old Souls. Sharp Minds.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto  gap-8">
      {founders.map((founder, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl  transition-all duration-300 overflow-hidden group"
        >
          {/* Image */}
          <div className="h-64 overflow-hidden">
            <img
              src={founder.img}
              alt={founder.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {founder.name}
            </h3>

            <p className="text-sm text-[#292B97] font-medium mt-1">
              {founder.role}
            </p>

            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              {founder.desc}
            </p>


          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Final CTA */}
      <section className="py-10 text-center bg-gray-900">
          <h1 className="text-3xl   font-semibold mb-4 text-white leading-tight animate-fade-in-up">
         Ready to Grow Your Brand?
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-semibold mb-10">
        Let's work together to create a digital strategy that drives real results for
your business.
        </p>
      <div className="flex  justify-center gap-4">
          <button
          onClick={openEnquiry}
          className="inline-flex items-center px-8 py-4 text-[#292B97] bg-white font-bold text-lg rounded-full  "
        >
          Get Strated
        </button>
          
      </div>
      </section>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
    </div>
  );
}




