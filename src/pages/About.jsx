
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
      img: "https://media.gettyimages.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg=",
      alt: "Omkar"
    },
    {
      name: "Harry",
      desc: "Creative powerhouse crafting viral campaigns that blend culture and storytelling.",
      img: "https://media.gettyimages.com/id/1338145486/photo/businessman-working-on-a-laptop-computer-in-the-office.jpg?s=612x612&w=0&k=20&c=CNvAyzWFbYLzZsRHRxNbs8o-Sb8va1ullAJdm-JLPp0=",
      alt: "Harry"
    },
    {
      name: "Hermione",
      desc: "Data science expert turning insights into measurable ROI.",
      img: "https://media.gettyimages.com/id/1456194324/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=az0Bfz3H9lFHDCzidKi6o1D_N07aTORXDlpyE0zuHaw=",
      alt: "Hermione"
    }
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
        className="relative text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat bg-center overflow-hidden bg-black"
        style={{ backgroundImage: `url(${background})` ,
       loading: "lazy"}}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto">
           <h1 className="text-4xl lg:text-6xl  font-semibold mb-6 text-white  animate-fade-in-up text-left">
            Transforming Brands<br/>
Through Digital<br/>
Excellence
          </h1>
           <p className="text-xl lg:text-2xl text-white/80 mb-8 animate-fade-in-up animation-delay-300 text-left">
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
              <h1 className="font-inter font-bold text-xl lg:text-3xl tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
                What we do?
              </h1>
               <p className="text-xl  text-gray-600 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
               The modern digital landscape is quite dynamic and the brand’s needs are constantly evolving. One day it's SEO, the next it's AI Search and you need a guide who can pivot instantly.
              </p>
            <p className="text-xl  text-gray-600 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                At Zentrix Media, we are versatile by design and more than happy to partner with you and help you accomplish your goals. We don't just "do digital marketing" but we act as your external growth engine. Whether you are a startup looking for your first 10,000 users or a legacy brand needing a digital facelift, we have the tools, the data, and the energy and the right mettle to make it happen.
              </p>
              <p className="text-xl  text-gray-600 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                We are a team of digital natives, data geeks, and creative rebels on a mission to rewrite the rules of modern marketing.
              </p>
             
            </div>
          </div>
        </div>
      </section>

{/* value Code */}
      <section className="relative overflow-hidden py-5" >
        <div className="absolute inset-0"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">
         <h1 className="font-inter font-bold text-xl lg:text-4xl tracking-normal  mb-4 animate-fade-in-up">
       Our Values
          </h1>
            <p className="font-inter  text-xl  tracking-normal  mb-10  animate-fade-in-up text-gray-600">
     These core principles guide everything we do and shape the way we work with our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group space-y-4 p-1 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-500 ease-out transform hover:-translate-y-2">
                  <Icon
                    className="text-6xl text-[#292B97] mx-auto
                      transition-all duration-500 ease-out"
                  />
                  <h2 className="text-xl font-medium
                    transition-all duration-500
                    group-hover:translate-y-[-2px]">
                    {value.title}
                  </h2>
                  <p className="text-xl 
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
      <section className="relative overflow-hidden py-13 bg-[#292B97]/5">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center space-y-12">
          <div>
             <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] text-center  tracking-normal  mb-3 animate-fade-in-up">
              Meet the Founders</h1>
             <h2 className="text-xl  font-medium mb-2  leading-tight animate-fade-in-up">Young Blood. Old Souls. Sharp Minds.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-10">
            {founders.map((founder, index) => (
              <div key={index} className="space-y-4 group">
                <div className="rounded-full md:rounded-xl  overflow-hidden shadow-2xl mx-auto w-72 h-72 md:w-100 md:h-80 lg:w-72 lg:h-72 ">
                  <img 
                    src={founder.img} 
                    alt={founder.alt} 
                    className="w-full h-full object-left group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <h2 className="text-xl font-medium mb-2  leading-tight animate-fade-in-up">{founder.name}</h2>
                <p className="text-xl  mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">{founder.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Final CTA */}
      <section className="py-10 text-center bg-gray-900">
          <h1 className="text-4xl   font-semibold mb-6 text-white leading-tight animate-fade-in-up">
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
           <button
          onClick={openEnquiry}
          className="inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-full border border-white "
        >
          View Our Work 
        </button>
      </div>
      </section>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
    </div>
  );
}

      {/* Founder’s Story – Mobile: Image first, then text 
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl ">
              <img
                src="https://www.shutterstock.com/image-photo/professionals-diverse-group-collaborate-boardroom-600nw-2431976515.jpg"
                alt="Zentrix founders and team"
                className="w-full h-auto md:h-[400px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-5 ">
             <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
                The Founder’s Story
              </h1>
              <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                We didn't start Zentrix Media to be another agency with a foosball table and vague promises. We started it because we saw a gap. The digital landscape was changing faster than traditional agencies could keep up.
              </p>
               <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                AI was rising. Attention spans were shrinking. Data was everywhere, but nobody knew how to read it. So, we built Zentrix Media — a collective of young, dynamic professionals who grew up on the internet.
              </p>
              <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                We understand the memes, the algorithms, and the culture because we live in it. But we back that intuition with hardcore data science and deliver results every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      */}



      {/* Updated "What Makes Us Different?" Section
      <section className="py-15 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] text-center tracking-normal  mb-6 text-gray-900 animate-fade-in-up">
            What Makes Us Different?
          </h1>

          {/* Large screens (md+): Horizontal 3-column grid
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl  shadow-xl transition-all duration-500 bg-white hover:scale-105 hover:shadow-2xl ${
            index === activeIndex
              ? "ring-2 ring-[#292B97]ring-offset-2 "
              : " hover:shadow-2xl"
          }`}
              >
                {/* Full height image on top 
                <div className="overflow-hidden h-50">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content below image 
                 <div className="px-4 py-2 text-left space-y-2">
            <h3
              className={`  transition-colors duration-300 text-xl  font-medium mb-2  leading-tight animate-fade-in-up ${
                index === activeIndex ? "text-[#F16D34]" : "text-gray-800 group-hover:text-[#F16D34]"
              }`}
            >
              {item.title}
            </h3>
           <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              {item.desc}
            </p>
          </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

             {/* Indicator dots for large screens (same as original)
    <div className="hidden md:flex justify-center mt-10 gap-4">
      {differentiators.map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-500 ${
            index === activeIndex ? "w-12 bg-[#F16D34]" : "w-2 bg-gray-300"
          }`}
        />
      ))}
    </div>

          {/* Small screens (<md): Full-width horizontal carousel (one card at a time)
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {differentiators.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="group relative overflow-hidden rounded-3xl shadow-xl bg-white">
                      {/* Full height image on top
                      <div className="overflow-hidden h-50">
                        <img
                          src={item.img}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content below image
                      <div className="p-4 text-left space-y-2">
                        <h3 className="text-xl  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
                          {item.title}
                        </h3>
                       <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel indicators
            <div className="flex justify-center mt-8 gap-4">
              {differentiators.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === activeIndex ? "w-12 bg-[#F16D34]" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

           
          </div>
        </div>
      </section>*/}