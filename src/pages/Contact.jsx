import React, { useEffect, useState } from "react";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import BackgroundImage from "../assets/imagesuse/connectusbg.jpg";
import EnquiryModal from '../components/Enquiry';
import SEO from "../components/seo/Seo";
import SuccessModal from "../components/Successmodal";
// Images (unchanged)
import performanceBg from '../assets/imagesuse/performancebg.jpg';
import performanceImg from '../assets/imagesuse/performance1.jpg';
import prBg from '../assets/imagesuse/prbg.jpg';
import prImg from '../assets/imagesuse/pr.jpg';
import seoBg from '../assets/imagesuse/seobackground.jpg';
import seoImg from '../assets/imagesuse/seomarketing.jpg';
import socialBg from '../assets/imagesuse/socialbg.jpg';
import socialImg from '../assets/imagesuse/socialpage.jpg';
import useSubscribe from '../components/useSubscribe.js' 
// Icons (unchanged)


// ────────────────────────────────────────────────
// Updated configs – keywords are now arrays (this fixes the crash)
// ────────────────────────────────────────────────
const serviceConfigs = {
  performance: {
    slug: 'performance',
    icon:'FaPercent',
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
    icon:'FaNewspaper',
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
    icon:'FaSearch',
    headline: 'Invisible Brands Go Broke. Let’s Get You Found.',
    subheadline: "SEO isn't just stuffing keywords into a blog post anymore. It has evolved, and continues to do so every day.",
    introTitle: 'Visibility, Organic Growth and Rankings',
    introText:
      'With the rise of Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), Search Generative Experience (SGE) and AI answers, the game has changed. Today, SEO is all about Topical Authority. You need to prove to Google and the online audience that you are the expert in your domain. We focus on technical health and high-value content that answers the questions AI is asking, allowing your brand to be relevant, visible to every query that users have about your industry.',
    background: seoBg,
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
      ogImage: seoBg,
    },
    ctaText: 'Get Found Now',
  },

  social: {
    slug: 'social',
    title: 'Social Media Marketing Services',
    icon:'FaVideo',

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


const Contact = () => {
  const services = Object.values(serviceConfigs);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

const handleFormSubmit = (e) => {
  e.preventDefault();

  console.log("Form submitted");

  setIsSuccessOpen(true);
  e.target.reset();
};
  
    const openEnquiry = () => setIsEnquiryOpen(true);
    const closeEnquiry = () => setIsEnquiryOpen(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const { subscribe, loading, success } = useSubscribe();
const handleSubscribe = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  await subscribe(email);
  e.target.reset();
};

  return (
    <div className="w-full text-gray-900 ">
     
          <SEO
       title="Contact Zentrix | Strategy-First Digital Marketing Agency"
        description="Ready to scale? Talk strategy with Zentrix. No fluff. No sales scripts. Just clarity, growth, and execution."
         keywords="digital marketing blog, case studies, marketing insights"
         canonicalUrl="https://zentrix.media/blog"
         ogImage={BackgroundImage}
  author="Zentrix Media"
          />

      {/* HERO */}
      <section 
        className="relative w-full bg-cover bg-no-repeat bg-center  overflow-hidden bg-gradient-to-r from-[#292B97] via-[#6466B6] to-[#9394f8]"
      
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-25 pb-20 text-center">
         <h1 className="text-4xl md:text-5xl  font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            Ready to Scale? <br />
            Let’s Crunch the Numbers.
          </h1>
         <p className="text-lg  text-white/80 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            No fluff. No sales scripts. Just honest strategy, clear execution,
            and growth that actually compounds.
          </p>
        </div>
      </section>

      {/* CONTENT */}
{/* CONTENT - MINIMAL VERSION (exactly as you asked) */}
<section className="relative max-w-7xl mx-auto lg:py-10">
  <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
    
    {/* ==================== LEFT - ONLY EMAIL, PHONE, LOCATION(WITH MAP), SOCIAL ==================== */}
    <div className="flex items-start justify-center p-4 lg:p-12 bg-[#292B97]/5 lg:bg-transparent">
      <div className="w-full space-y-6">

        {/* Email Div */}
        <div className="flex items-center bg-white p-5 rounded-2xl shadow-sm border border-[#292B97]/10">
          <FaEnvelope className="text-[#292B97] text-2xl mr-5 flex-shrink-0" />
          <div>
          
            <a href="mailto:hello@zentrix.media" className="font-medium text-gray-900 hover:text-[#292B97] transition">
              hello@zentrix.media
            </a>
          </div>
        </div>

        {/* Phone Div */}
        <div className="flex items-center bg-white p-5 rounded-2xl shadow-sm border border-[#292B97]/10">
          <FaPhone className="text-[#292B97] text-2xl mr-5 flex-shrink-0" />
          <div>
           
            <a href="tel:+919876543210" className="font-medium text-gray-900 hover:text-[#292B97] transition">
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* Location Div WITH Google Map */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#292B97]/10">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-[#292B97] text-2xl mr-5 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase  font-medium tracking-widest text-gray-500">Our Office</p>
              <span className="f text-gray-900">Mumbai, India
101 Tech Plaza, SOMA District

Mumbai 4007000</span>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-inner border border-gray-100">
            <iframe
              title="Zentrix Media Office - Mumbai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1162480606!2d72.74109999999999!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1708000000000"
              width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Social Links - Below everything */}
        <div className="pt-2">
          <div className="flex space-x-2 items-center">
            <Link to="#" className="group">
              <img
                src="https://imgs.search.brave.com/REO0l-1oRt6fo-JWh3MBOfQnoO-bek19ji4_U8gkeag/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzEv/NzM3LzIwNi9zbWFs/bC90d2l0dGVyLW5l/dy1sb2dvLXR3aXR0/ZXItaWNvbnMtbmV3/LXR3aXR0ZXItbG9n/by14LTIwMjMteC1z/b2NpYWwtbWVkaWEt/aWNvbi1mcmVlLXBu/Zy5wbmc"
                alt="X (Twitter)"
                className="w-10 h-10 transition-transform hover:scale-110"
              />
            </Link>

            <Link to="#" className="group">
              <img
                src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png"
                alt="Instagram"
                className="w-9 h-9 transition-transform hover:scale-110"
              />
            </Link>

            <Link to="#" className="group">
              <img
                src="https://imgs.search.brave.com/Cf1nWrUKy9uFxSKpy2TKsY2Y-YV4EQgIuwTZHacZouI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNTAxNS8xNTAx/NTk3NS5wbmc_c2Vt/dD1haXNfaHlicmlk"
                alt="LinkedIn"
                className="w-8 h-8 transition-transform hover:scale-110"
              />
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* ==================== RIGHT - FORM (unchanged) ==================== */}
    <div className="flex">
      <div className="w-full h-full bg-white px-8 lg:px-10 py-10 flex flex-col justify-center border-2 border-[#292B97]/5 lg:rounded-3xl shadow-[#292B97]/5">
        <p className="text-2xl font-bold text-center mb-8 text-gray-800">
          Fill this form
        </p>
      <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#292B97]"
              required
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#292B97]"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#292B97]"
            required
          />
          <input
            type="tel"
            placeholder="Contact"
            className="w-full px-5 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#292B97]"
          />
          <select
            defaultValue=""
            className="w-full px-5 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#292B97]"
            required
          >
            <option value="" disabled>Select Service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#292B97] resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#292B97] to-[#6466B6] text-white py-4 rounded-full hover:brightness-110 transition shadow-lg font-medium text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

        {/* Final CTA */}
<section className="py-16 text-center bg-gray-900">
  <div className="max-w-4xl mx-auto px-6">
    <h1 className="text-3xl font-semibold mb-3 text-white leading-tight animate-fade-in-up">
      Never Miss an Update
    </h1>
    <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10">
      Subscribe to our newsletter and get the latest marketing insights delivered to your inbox
    </p>

<form 
  onSubmit={handleSubscribe} 
  className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 w-full"
>
  <input
    type="email"
    name="email"
    placeholder="your@email.com"
    className="w-full sm:flex-1 px-6 py-4 bg-white text-gray-900 rounded-full focus:outline-none focus:border-[#292B97] text-base border border-transparent"
    required
  />

  <button
    type="submit"
    disabled={loading}
    className="w-full sm:w-auto px-6 py-4 text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-base font-medium"
  >
    {loading ? "Subscribing..." : "Submit"}
  </button>
</form>
 {success && (
  <p className="text-green-400 text-sm mt-2 animate-fadeIn">
     Successfully Subscribed!
  </p>
)}

  </div>
</section>
  
        <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
<SuccessModal
  isOpen={isSuccessOpen}
  onClose={() => setIsSuccessOpen(false)}
/>

    </div>
  );
};

export default Contact;