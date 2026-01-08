import { useState, useEffect } from "react";
import { } from "react-icons/fi"; // From Feather Icons (light & modern)
import Performance1 from "../assets/imagesuse/performance1.jpg";
import social from "../assets/imagesuse/social.jpg";
import web from "../assets/imagesuse/web.jpg";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

export default function Chooseus() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Social & Content",
      description:
        "From scroll-stopping Instagram Reels to LinkedIn thought leadership. We create compelling content that holds your attention and gets your likes.",
      image: social,
    },
    {
      title: "Performance Marketing",
      description:
        "Paid ads that actually pay off. We use predictive algorithms to bid smarter, lowering CPC and increasing ROI.",
      image: Performance1,
    },
    {
      title: "Web & Tech",
      description:
        "Websites that load faster than you can say 'conversion rate.' Modern, scalable, and conversion-optimized tech solutions.",
      image: web,
    },
  ];

  const stats = [
    { value: "50+", label: "Brands Scaled" },
    { value: "1.5M+", label: "Organic Reach Generated Last Month" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "24/7", label: "Real-time Optimization" },
  ];

  // Auto-cycle effect: changes tab every 30 seconds, resets on manual interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => {
        if (prev === -1) return 0;
        return (prev + 1) % tabs.length;
      });
    }, 10000); // 5 seconds

    return () => clearTimeout(timer);
  }, [activeTab, tabs.length]);

  return (
    <section className="relative overflow-hidden bg-blue-900/10">
      {/* 360° Digital Domination Section */}
      <div className="relative z-10 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
          <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal text-center mb-3 text-gray-900 animate-fade-in-up">
  360° Digital Domination
</h1>

            <p className="text-xl  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
              Comprehensive strategies that cover every angle of your digital presence.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
            {/* Tabs */}
            <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveTab(isActive ? -1 : index)} // Toggle open/close
                    className={`cursor-pointer rounded-2xl sm:rounded-3xl p-6  transition-all duration-500 border-gray-400 backdrop-blur-sm border flex items-start gap-5 group ${
                      isActive
                        ? "bg-white/90  shadow-2xl scale-100 lg:scale-105"
                        : "bg-white/40  hover:bg-white/60"
                    }`}
                  >
                  

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl   font-medium mb-4 text-gray-900 leading-tight animate-fade-in-up">
                        {tab.title}
                      </h3>
                      <p
                        className={`  leading-relaxed transition-all duration-500 overflow-hidden 
                          text-xl  text-gray-800 mb-4  animate-fade-in-up animation-delay-300 ${
                          isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {tab.description}
                      </p>
                    </div>

                      {/* Plus / Minus Circle Icon */}
                    <div className="flex-shrink-0 transition-all duration-300">
                      {isActive ? (
                        <BiMinusCircle className="w-5 h-5  text-[#F16D34]" />
                      ) : (
                        <BiPlusCircle className="w-5 h-5  text- group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Image (hidden on mobile) */}
            <div className="hidden md:block relative h-64 sm:h-80 lg:h-96 xl:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src={tabs[activeTab === -1 ? 0 : activeTab].image}
                alt={tabs[activeTab === -1 ? 0 : activeTab].title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 w-full py-16 sm:py-20 bg-[#111488]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl   font-semibold mb-2 text-white leading-tight animate-fade-in-up">
                  {stat.value}
                </div>
                <div className="text-xl  text-white/80 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}