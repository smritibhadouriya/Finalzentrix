import { useEffect } from "react";
import Agility from '../assets/imagesuse/agelity.jpg'; // Agile tech team
import AiNative from '../assets/imagesuse/ai1.jpg'; // Developer using AI tools
import LaserPrecision from '../assets/imagesuse/laser.jpg'; // Analytics dashboard

export default function WhyDifferent() {
  const steps = [
    {
      number: "01",
      title: "100% Agility",
      desc: "We are young, fast, and allergic to “the way it’s always been done.”",
      image: Agility, // Agile tech team
    },
    {
      number: "02",
      title: "AI-Native",
      desc: "While others are still figuring out AI tools, we’re are quite adept at it and use it to streamline our workflows that improve our efficiency time by 40%.",
      image: AiNative, // Developer using AI tools
    },
    {
      number: "03",
      title: "Laser Precision",
      desc: "We don't throw darts in the dark. Our campaigns are backed by proprietary data analysis that typically improves ROI.",
      image: LaserPrecision, // Analytics dashboard
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-flyIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".step-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-10 pb-16 bg-blue-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 ">
           <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal text-center mb-3 text-gray-900 animate-fade-in-up">
            Why We’re Different
          </h1>
          <p className="text-xl  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
            We speak Human fluently, but we constantly think in code, data, and trends
          </p>
        </div>

        {/* Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="step-card opacity-0 group"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
             <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-full transform transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
                {/* Image First */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-50 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-7xl md:text-8xl font-extrabold text-white/30">
                    {item.number}
                  </div>
                </div>

                {/* Text Below */}
                <div className="p-2 flex flex-col flex-grow justify-start">
                  <h3 className="text-xl  font-bold mb-2 text-gray-800 leading-tight animate-fade-in-up">
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

      {/* Animations */}
      <style jsx>{`
        @keyframes flyIn {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-flyIn {
          animation: flyIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}