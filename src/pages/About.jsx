import React, { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import background from '../assets/imagesuse/aboutbg.jpg';
import Seo from "../components/seo/Seo";
import EnquiryModal from '../components/Enquiry';
import Tech from '../assets/imagesuse/tech.jpg'
import vision from '../assets/imagesuse/vision.jpg'
import fun from '../assets/imagesuse/fun.jpg'
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

  return (
    
    <div className="font-sans bg-white">
        <link rel="preload" href={background} as="image" />
      <Seo title={seoData.title} description={seoData.description} keywords={seoData.keywords} href={seoData.href} />

      {/* Hero Header */}
      <header
        className="relative text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat bg-center overflow-hidden"
        style={{ backgroundImage: `url(${background})` ,
       loading: "lazy"}}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto">
           <h1 className="text-4xl md:text-5xl  font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            About Zentrix Media
          </h1>
           <p className="text-xl  text-white/80 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            We are the bridge between "Viral Creativity" and "Business Logic."
          </p>
        </div>
      </header>

      {/* Intro Section – Mobile: Image first, then text */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/6913338/pexels-photo-6913338.jpeg"
                alt="Zentrix Media team brainstorming"
                className="w-full h-auto md:h-[400px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-8 order-2 lg:order-1">
              <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
                What we do?
              </h1>
               <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
               The modern digital landscape is quite dynamic and the brand’s needs are constantly evolving. One day it's SEO, the next it's AI Search and you need a guide who can pivot instantly.
              </p>
            <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                At Zentrix Media, we are versatile by design and more than happy to partner with you and help you accomplish your goals. We don't just "do digital marketing" but we act as your external growth engine. Whether you are a startup looking for your first 10,000 users or a legacy brand needing a digital facelift, we have the tools, the data, and the energy and the right mettle to make it happen.
              </p>
              <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                We are a team of digital natives, data geeks, and creative rebels on a mission to rewrite the rules of modern marketing.
              </p>
             
            </div>
          </div>
        </div>
      </section>



      {/* Founder’s Story – Mobile: Image first, then text */}
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

            {/* Meet the Founders */}
      <section className="relative overflow-hidden py-13" style={{ background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)' }}>
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center space-y-12">
          <div>
             <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] text-center  tracking-normal  mb-3 text-white animate-fade-in-up">
              Meet the Founders</h1>
             <h2 className="text-xl  font-medium mb-2 text-white/80 leading-tight animate-fade-in-up">Young Blood. Old Souls. Sharp Minds.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-10">
            <div className="space-y-4 group">
              <div className="rounded-full md:rounded-xl lg:rounded-full overflow-hidden shadow-2xl mx-auto w-72 h-72 md:w-100 md:h-80 lg:w-72 lg:h-72 ">
                <img src="https://media.gettyimages.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg="
                 alt="Omkar" className="w-full h-full object-left group-hover:scale-110 transition-transform duration-500" />
              </div>
               <h2 className="text-xl  font-medium mb-2 text-white leading-tight animate-fade-in-up">Omkar</h2>
             <p className="text-xl  text-white/80 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">Visionary leader with a passion for scaling brands through innovative digital strategies.</p>
            </div>
            <div className="space-y-4 group">
              <div className="rounded-full md:rounded-xl lg:rounded-full overflow-hidden shadow-2xl mx-auto w-72 h-72 md:w-100 md:h-80 lg:w-72 lg:h-72 ">
                <img src="https://media.gettyimages.com/id/1338145486/photo/businessman-working-on-a-laptop-computer-in-the-office.jpg?s=612x612&w=0&k=20&c=CNvAyzWFbYLzZsRHRxNbs8o-Sb8va1ullAJdm-JLPp0="
                alt="Co-founder" className="w-full h-full object-center group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h2 className="text-xl  font-medium mb-2 text-white leading-tight animate-fade-in-up"> Harry</h2>
             <p className="text-xl  text-white/80 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">Creative powerhouse crafting viral campaigns that blend culture and storytelling.</p>
            </div>
            <div className="space-y-4 group">
              <div className="rounded-full md:rounded-xl lg:rounded-full overflow-hidden shadow-2xl mx-auto w-72 h-72 md:w-100 md:h-80 lg:w-72 lg:h-72 ">
                <img src="https://media.gettyimages.com/id/1456194324/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=az0Bfz3H9lFHDCzidKi6o1D_N07aTORXDlpyE0zuHaw="
                alt="Co-founder" className="w-full h-full object-left group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h2 className="text-xl  font-medium mb-2 text-white leading-tight animate-fade-in-up">Hermione</h2>
            <p className="text-xl  text-white/80 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">Data science expert turning insights into measurable ROI.</p>
            </div>
          </div>
        </div>
      </section>



{/* Updated "What Makes Us Different?" Section */}
      <section className="py-15 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] text-center tracking-normal  mb-6 text-gray-900 animate-fade-in-up">
            What Makes Us Different?
          </h1>

          {/* Large screens (md+): Horizontal 3-column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl  shadow-xl transition-all duration-500 bg-white hover:scale-105 hover:shadow-2xl ${
            index === activeIndex
              ? "ring-2 ring-[#F16D34] ring-offset-2 "
              : " hover:shadow-2xl"
          }`}
              >
                {/* Full height image on top */}
                <div className="overflow-hidden h-50">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content below image */}
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

             {/* Indicator dots for large screens (same as original) */}
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

          {/* Small screens (<md): Full-width horizontal carousel (one card at a time) */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {differentiators.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="group relative overflow-hidden rounded-3xl shadow-xl bg-white">
                      {/* Full height image on top */}
                      <div className="overflow-hidden h-50">
                        <img
                          src={item.img}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content below image */}
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

            {/* Carousel indicators */}
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
      </section>

      {/* Final CTA */}
      <section className="pt-20 pb-2 text-center bg-[#2D2D2D]">
          <h1 className="text-4xl   font-semibold mb-6 text-white leading-tight animate-fade-in-up">
          Enough about us.<br className="sm:hidden  " /> Let’s talk about you.
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-semibold mb-10">
          Ready to turn creativity into measurable growth?
        </p>
        <button
          onClick={openEnquiry}
          className="inline-flex items-center px-8 py-4 bg-[#F16D34] text-white font-bold text-lg rounded-full hover:bg-[#F16D34]/90 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
        >
          Get in Touch <FaRocket className="ml-2" />
        </button>
      </section>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
    </div>
  );
}