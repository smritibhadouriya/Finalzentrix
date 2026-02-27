// src/pages/services/Service.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import EnquiryModal from '../components/Enquiry';
import Contactcomp from '../components/Contactcomp';
import Seo from '../components/seo/Seo';

// Images (unchanged)
import performanceBg from '../assets/performance.png';
import performanceImg from '../assets/imagesuse/performance1.jpg';
import prBg from '../assets/pr.png';
import prImg from '../assets/imagesuse/pr.jpg';
import seo from '../assets/seo.png';
import seoImg from '../assets/imagesuse/seomarketing.jpg';
import socialBg from '../assets/social.png';
import socialImg from '../assets/imagesuse/socialpage.jpg';



// Icons (unchanged)
import {
  FaFunnelDollar, FaSearchDollar, FaChartPie, FaRocket,
  FaNewspaper, FaFireAlt, FaUserTie,
  FaSearch, FaFileAlt, FaMapMarkerAlt, FaChartBar,
  FaVideo, FaCommentDots, FaUsers, FaChartLine, FaPen,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';


const iconMap = {
  FaFunnelDollar, FaSearchDollar, FaChartPie,
  FaNewspaper, FaFireAlt, FaUserTie,
  FaSearch, FaFileAlt, FaMapMarkerAlt, FaChartBar,
  FaVideo, FaCommentDots, FaUsers, FaChartLine, FaPen,
};

// ────────────────────────────────────────────────
// Updated configs – keywords are now arrays (this fixes the crash)
// ────────────────────────────────────────────────
const serviceConfigs = {
  performance: {
    slug: 'performance',
    title: 'Performance Marketing Services',
    headline: 'We Turn ₹1 into ₹4. It’s Not Magic, It’s Math.',
    subheadline: 'Performance marketing is often treated like a slot machine. At Zentrix Media, we treat it like the stock market.',
    introTitle: 'ROAS (Returns on Ad Spend), Conversions, and Data Precision',
    introText:
      'With third-party cookies crumbling, the "spray and pray" method is dead. We focus on Creative Strategy + First-Party Data. The algorithm favours the best creative; we build the ads the algorithm wants to show.',
    background: performanceBg,
    mainImage: performanceImg,
    mainImageAlt: 'Performance Marketing in Action',
    whatWeDeliver: [
      { icon: 'FaFunnelDollar', title: 'Paid Social', desc: 'Architect funnels across online channels, including Meta, Google, LinkedIn that convert cold traffic into loyal fans.' },
      { icon: 'FaSearchDollar', title: 'PPC & Google Ads', desc: 'Capturing high-intent users exactly when they are ready to buy.' },
      { icon: 'FaChartPie', title: 'Conversion Rate Optimisation (CRO)', desc: 'Tweaking your landing pages because a 1% increase in conversion can double your profit.' },
    ],
    zentrixEdge: 'Our bidding scripts work 24/7, optimizing your budget every single second. While your competitors sleep, we lower Cost Per Acquisition (CPA).',
    seo: {
      title: "Performance Marketing Services | Data-Driven Ads Agency - Zentrix Media",
      description: "Turn ₹1 into ₹4 with Zentrix Media's performance marketing. Creative strategy + first-party data for maximum ROI on Meta, Google, LinkedIn, and more.",
      keywords: [
        "performance marketing",
        "paid ads agency",
        "PPC services",
        "conversion rate optimization",
        "Zentrix Media",
        "ROI focused marketing"
      ],
      canonical: "https://zentrix.media/services/performance",
      ogImage: performanceBg,
    },
    ctaText: 'Scale Your ROI',
  },

  pr: {
    slug: 'pr',
    title: 'Public Relations (PR) Services',
    headline: 'Get Famous For the Right Reasons and Be the Talk of the Town',
    subheadline: 'The days of the dusty press release have become rather obsolete. Modern PR is about Digital Footprint and Narrative Control.',
    introTitle: 'Authority, Trust and Media Presence',
    introText:
      "It's not just about getting featured in the top publication and becoming the headlines, it's about what shows up when a potential investor or customer Googles your name. We blend traditional storytelling with SEO-driven PR to ensure your brand isn't just heard but understood correctly and respected.",
    background: prBg,
    mainImage: prImg,
    mainImageAlt: 'Digital PR in Action',
    whatWeDeliver: [
      { icon: 'FaNewspaper', title: 'Digital Storytelling', desc: 'Crafting angles journalists actually want to read.' },
      { icon: 'FaFireAlt', title: 'Crisis Management', desc: 'Putting out fires before they burn the house down.' },
      { icon: 'FaUserTie', title: 'Influencer Relations', desc: 'Connecting you with voices that matter, not just faces that look pretty.' },
    ],
    zentrixEdge: 'We monitor brand sentiment in real-time across the web. If the vibe shifts, we know instantly and pivot the strategy before Monday morning.',
    seo: {
      title: "Public Relations (PR) Services | Digital PR Agency - Zentrix Media",
      description: "Get famous for the right reasons. Modern digital PR focused on narrative control, SEO-driven storytelling, and real-time brand protection.",
      keywords: [
        "digital PR",
        "public relations agency",
        "crisis management",
        "influencer relations",
        "brand narrative",
        "Zentrix Media"
      ],
      canonical: "https://zentrix.media/services/pr",
      ogImage: prBg,
    },
    ctaText: 'Control Your Narrative',
  },

  seo: {
    slug: 'seo',
    title: 'SEO Services',
    headline: 'Invisible Brands Go Broke. Let’s Get You Found.',
    subheadline: "SEO isn't just stuffing keywords into a blog post anymore. It has evolved, and continues to do so every day.",
    introTitle: 'Visibility, Organic Growth and Rankings',
    introText:
      'With the rise of Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), Search Generative Experience (SGE) and AI answers, the game has changed. Today, SEO is all about Topical Authority. You need to prove to Google and the online audience that you are the expert in your domain. We focus on technical health and high-value content that answers the questions AI is asking, allowing your brand to be relevant, visible to every query that users have about your industry.',
    background: seo,
    mainImage: seoImg,
    mainImageAlt: 'Topical Authority in Action',
    whatWeDeliver: [
      { icon: 'FaSearch', title: 'Technical SEO Audits', desc: 'Fixing the broken code that\'s killing your ranking.' },
      { icon: 'FaFileAlt', title: 'Content Strategy', desc: 'Specifically crafted content to satisfy user intent, and not just for search bots.' },
      { icon: 'FaMapMarkerAlt', title: 'Local SEO', desc: 'Dominating your immediate geography.' },
      { icon: 'FaChartBar', title: 'Ranking', desc: 'Getting your brand’s website right up there on the Search Engine Results Page (SERP)' },
    ],
    zentrixEdge: 'We analyse thousands of SERPs (Search Engine Results Pages) to reverse-engineer exactly what Google rewards in your specific niche right now.',
    seo: {
      title: "SEO Services | Search Engine Optimisation Agency - Zentrix Media",
      description: "Invisible Brands Go Broke. Let’s Get You Found. Topical Authority, Technical SEO, Content Strategy & Local SEO that wins in the age of AI and SGE.",
      keywords: [
        "seo services",
        "search engine optimisation",
        "topical authority",
        "technical seo",
        "local seo",
        "zentrix media",
        "AEO",
        "GEO"
      ],
      canonical: "https://zentrix.media/services/seo",
      ogImage: seo,
    },
    ctaText: 'Get Found Now',
  },

  social: {
    slug: 'social',
    title: 'Social Media Marketing Services',
    headline: 'Stop the Scroll. Start the Conversation.',
    subheadline: "Most agencies think social media is about 'posting every day.' At Zentrix Media, we know it’s much beyond writing creative captions and posting fancy pictures.",
    introTitle: 'Engagement, Storytelling, and Scroll-stopping Visuals',
    introText:
      "We truly know the truth - It’s about the Attention Economy. In a world where the average human attention span is less than a goldfish (literally), 'good enough' content is invisible and won’t do any good to your brand. You don't need more posts; you need resonance. We understand that Instagram, X, requires raw authenticity while LinkedIn demands polished thought leadership and we never mix the two.",
    background: socialBg,
    mainImage: socialImg,
    mainImageAlt: 'Attention Economy in Action',
    whatWeDeliver: [
      { icon: 'FaVideo', title: 'Short-Form Video Production', desc: 'Reels that hook viewers in the first 0.03 seconds.' },
      { icon: 'FaCommentDots', title: 'Interaction and Engagement', desc: 'We make the audience stop, interact, talk and share about your brand.' },
      { icon: 'FaUsers', title: 'Community Management', desc: 'We don’t just reply; we build cult-like followings.' },
      { icon: 'FaChartLine', title: 'Trend-Jacking', desc: 'Identifying and leveraging latest trends and memes before they peak.' },
      { icon: 'FaPen', title: 'Blogs', desc: 'Highly engaging, relevant, SEO-optimised and share worthy content across all platforms.' },
    ],
    zentrixEdge: "We analyse engagement sentiment 24x7 and predict viral potential before we even hit record. This isn't guessing; it's calculated creativity.",
    seo: {
      title: "Social Media Marketing Services | Expert Social Media Marketing Agency - Zentrix",
      description: "Stop the scroll and start conversations with Zentrix Media's social media strategies built for the attention economy. Drive resonance, engagement, and growth.",
      keywords: [
        "social media marketing services",
        "social media agency",
        "attention economy",
        "Zentrix",
        "viral content",
        "brand resonance"
      ],
      canonical: "https://zentrix.media/services/social",
      ogImage: socialBg,
    },
    ctaText: 'Ignite Your Brand',
  },
};

// ────────────────────────────────────────────────
// Reusable Card (your original version – unchanged)
// ────────────────────────────────────────────────
const DeliverCard = ({ item}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Icon = iconMap[item.icon];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
     
    >
      {/* Card exactly like the image */}
      <div className="hover:bg-[#F0E9FF] rounded-xl p-8 h-full flex flex-col items-center text-center group max-w-md lg:max-w-xs">
        
        {/* Icon Container - light purple square like in image */}
        <div className="w-20 h-20  bg-[#292B97]/5 rounded-2xl flex items-center justify-center mb-4 ">
          {Icon && (
            <Icon className="text-5xl text-[#292B97]" />
          )}
        </div>

        {/* Title - bold & big like image */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
          {item.title}
        </h2>

        {/* Description - exact style & size from image */}
        <p className="text-gray-600 text-[17px] leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Main component – design unchanged, only logic + keywords fix
// ────────────────────────────────────────────────
const Service = () => {
  const { service } = useParams();
  const location = useLocation();
 

  const normalizedSlug = (service || 'performance').toLowerCase().trim();
  const config = serviceConfigs[normalizedSlug] || serviceConfigs.performance;

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  // Optional: Service schema (you can remove if not wanted)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": config.title,
    "provider": {
      "@type": "Organization",
      "name": "Zentrix Media"
    },
    "serviceType": config.title,
    "areaServed": "India",
    "description": config.introText,
    "url": config.seo.canonical,
  };

  //const length = config.whatWeDeliver.length;

  return (
    <div className="bg-white">
      <Seo
        title={config.seo?.title || "Zentrix Media Services"}
        description={config.seo?.description || ""}
        keywords={config.seo?.keywords || []}  // ← now safe array
        canonicalUrl={config.seo?.canonical || location.pathname}
        ogImage={config.seo?.ogImage}
        author="Zentrix Media"
        schema={serviceSchema}  // optional
      />

      <link rel="preload" href={config.background} as="image" />

      {/* Hero – your original code unchanged */}
<header className="relative py-10 lg:py-15 px-4 md:px-8  overflow-hidden">
  <div className="max-w-7xl mx-auto  lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    
    {/* ==================== LEFT - TEXT ==================== */}
    <div className="space-y-6 lg:pr-8">
      <h1 className="text-4xl  font-bold text-gray-800 leading-tight animate-fade-in-up">
        {config.headline}
      </h1>
      
      <p className="text-lg text-gray-700 animate-fade-in-up animation-delay-300">
        {config.subheadline}
      </p>

      <button
                     onClick={() => {
    const Section = document.getElementById('contact');
    if (Section) {
      Section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
        className="inline-flex items-center px-8 py-4 bg-[#292B97] text-white font-bold text-lg rounded-full hover:bg-[#292B97]/90 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
      >
        {config.ctaText} 
      </button>
    </div>

    {/* ==================== RIGHT - IMAGE ==================== */}
    <div className=" mx-auto relative">
      <img
        src={config.background}
        alt={config.headline}
        className="w-auto h-90 object-cover"
      />
      
      {/* Optional subtle shine/overlay for premium look (you can remove if not needed) */}
    
    </div>

  </div>
</header>



      {/* Intro Section – unchanged */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] lg:h-[350px] md:order-2">
              <img
                src={config.mainImage}
                alt={config.mainImageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-8 md:order-1">
              <h1 className="font-inter font-bold text-3xl tracking-normal mb-4 text-gray-800">
                {config.introTitle}
              </h1>
              <p className="text-lg text-gray-700">{config.introText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver – your original unchanged */}
    <section className="relative overflow-hidden py-14  ">
        <div className="absolute inset-0"></div>
        <div className="relative px-4 md:px-8 space-y-2 md:space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-inter font-bold text-3xl tracking-normal text-center mb-3 text-gray-800">
              What We Deliver?
            </h1>
          </div>

          <div
            className={`grid lg:px-20 grid-cols-1 md:grid-cols-3  gap-4 md:gap-10 lg:max-w-7xl mx-auto  `}
          >
            {config.whatWeDeliver.map((item, index) => (
              <DeliverCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

     {/*contact component */}
     <section id="contact" className="scroll-mt-24 relative max-w-7xl mx-auto"> {/* Added subtle bg to reduce 'white white' starkness */}
       <p className="text-xl text-[#292B97] font-bold leading-relaxed animate-fade-in-up text-center mb-7">Get In Touch</p>
<Contactcomp />
     </section>
    </div>
  );
};

export default Service;