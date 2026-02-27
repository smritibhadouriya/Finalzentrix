import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRocket, FaUsers, FaBrain, FaChartLine, FaEnvelope, FaFirstAid, FaSearch } from "react-icons/fa";
import EnquiryModal from '../components/Enquiry';
import { openPositions } from '../Data/Openpositions.js';
import { useNavigate } from "react-router-dom";
import SEO from "../components/seo/Seo";
import Background from "../assets/imagesuse/background1.jpg";
import useSubscribe from '../components/useSubscribe.js';
import { FaLaptop, FaUpDown } from "react-icons/fa6";

export default function Careers() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const openPositionsRef = useRef(null);
  const location = useLocation();

  const { subscribe, loading, success } = useSubscribe();
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await subscribe(email);
    e.target.reset();
  };

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  // NEW STATES FOR FILTERS + PAGINATION
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [visibleCount, setVisibleCount] = useState(3);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToPositions && openPositionsRef.current) {
      openPositionsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(3);
  }, [searchTerm, selectedDepartment]);

  const benefits = [
    {
      icon:FaLaptop,
      title: "The Best Toys",
      desc: "Access to premium AI tools (Google Gemini, GPT-4, Custom Enterprise Tools) to supercharge your workflow.",
    },
    {
       icon:FaFirstAid,
      title: "Premium Health",
      desc: "Top-tier medical, dental, and vision coverage for you and your family.",
    },
    {
       icon:FaUpDown,
      title: "Career Velocity",
      desc: "We are growing fast. Perform well, and you’ll rise faster here than anywhere else.",
    },
  ];

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Updated department colors to match real data
  const getDepartmentStyle = (dept) => {
    const department = (dept || "").toUpperCase();
    if (department.includes("SOFTWARE")) return "bg-blue-100 text-blue-700";
    if (department.includes("DESIGN")) return "bg-violet-100 text-violet-700";
    if (department.includes("DATA")) return "bg-amber-100 text-amber-700";
    if (department.includes("MARKETING")) return "bg-emerald-100 text-emerald-700";
    return "bg-gray-100 text-gray-700";
  };

  // Dynamic departments from data
  const allDepartments = [
    "All Departments",
    ...new Set(openPositions.map((pos) => pos.department).filter(Boolean)),
  ];

  // Scroll helper (used by new Browse Jobs button)
  const scrollToPositions = () => {
    openPositionsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Filtered & paginated positions
  const filteredPositions = openPositions.filter((position) => {
    const searchLower = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !searchTerm ||
      position.title.toLowerCase().includes(searchLower) ||
      (position.subtitle && position.subtitle.toLowerCase().includes(searchLower)) ||
      (position.department && position.department.toLowerCase().includes(searchLower));

    const matchesDept =
      selectedDepartment === "All Departments" || position.department === selectedDepartment;

    return matchesSearch && matchesDept;
  });

  const displayedPositions = filteredPositions.slice(0, visibleCount);
  const showLoadMore = visibleCount < filteredPositions.length;

  return (
    <div className="font-sans bg-white">
      <SEO
        title="Careers at Zentrix Media | Join the Intelligence Revolution"
        description="Join Zentrix Media. Work with AI, data, and creativity. Zero ego. High velocity. Real impact."
        keywords="careers at zentrix media, digital marketing jobs, performance marketing careers, creative agency jobs"
        canonicalUrl="https://zentrix.media/career"
        ogImage={Background}
        author="Zentrix Media"
      />

      {/* Hero Header - Exact match to design */}
   
            <section 
        className="relative w-full bg-cover bg-no-repeat bg-center text-white overflow-hidden bg-gradient-to-r from-[#292B97] via-[#6466B6] to-[#9394f8]"
      
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-25 pb-20 text-center">
         <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight animate-fade-in-up">
           Build the future with us
          </h1>
        </div>
      </section>

      {/* Work Smarter Section - Exact match + NEW BROWSE JOBS BUTTON (styled like Home "Discover" button) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <h2 className="font-bold text-3xl tracking-normal text-gray-800">
              Work Smarter, Not Harder
            </h2>
            <p className="text-xl text-gray-700">
              At most agencies, you spend 50% of your time on busy work. At Zentrix Media, we don’t want you to do the boring stuff—reporting, scheduling, basic code.
           <br/>
              We encourage automation for all the run-of-the-mill tasks so you can spend 100% of your brainpower on Strategy, Creativity, and Innovation and do things that help you grow personally and professionally.
<br/>
              We don't care about your university grades. We care about your portfolio, your hunger to learn, and your ability to look at a dataset and see a story.
            </p>

            {/* NEW BUTTON - placed right below the paragraphs, styled exactly like Home page "Discover" button */}
            <button
              onClick={scrollToPositions}
              className="mt-4 px-10 py-4 border-2 border-[#292B97] text-[#292B97] font-semibold rounded-full hover:bg-[#292B97] hover:text-white transition-all duration-300 text-lg inline-flex items-center gap-3"
            >
              Browse Jobs
            </button>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={Background}
              alt="Zentrix Media team collaborating"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section - Exact match */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-bold text-3xl tracking-normal text-gray-800 mb-4">
            Benefits built for you.
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            We support our team with perks that matter. We believe in work-life balance and investing in our people’s long-term success.
          </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {benefits.map((benefit, index) => {
    const IconComponent = benefit.icon;

    return (
      <div
        key={index}
        className="border border-gray-100 rounded-3xl p-8 text-left transition-all hover:bg-[#292B97]/5 hover:shadow-lg"
      >
        {/* ICON */}
        <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#292B97]/10 shadow-md">
          <IconComponent className="text-xl text-[#292B97]" />
        </div>

        {/* TITLE */}
        <h3 className="font-semibold text-2xl text-gray-800 mb-2">
          {benefit.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-700 text-lg leading-relaxed">
          {benefit.desc}
        </p>
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* Open Positions - Exact match to the new screenshot + WORKING FILTERS + PAGINATION */}
      <section ref={openPositionsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="font-bold text-3xl  tracking-normal text-gray-800">Open Positions</h2>
              <p className="text-lg text-gray-700 mt-1">Join a high-performance team.</p>
            </div>
            <div className="mt-4 md:mt-0 px-6 py-3 lg:py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold inline-flex items-center">
              {filteredPositions.length} roles available
            </div>
          </div>

          {/* WORKING FILTERS */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
  {/* Icon */}
  <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

  {/* Input */}
  <input
    type="text"
    placeholder="Search roles..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-12 pr-6 py-3 bg-gray-50 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#292B97] focus:bg-white transition-all text-lg"
  />
</div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-6 py-2 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#292B97] text-lg"
            >
              {allDepartments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>

          </div>

          {/* Job List - UPDATED LAYOUT: Tags stacked on top, title below, smaller tags */}
          <div className="space-y-4">
            {displayedPositions.map((position, index) => (
              <div
                key={index}
                    onClick={(e) => {
                    e.stopPropagation();
                    setIsTransitioning(true);
                    setTimeout(() => {
                      navigate(position.applyLink || "/");
                    }, 600);
                  }}
                className="group bg-white border border-gray-100 hover:border-gray-300 rounded-3xl p-8 flex items-start justify-between transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* Tags on top - stacked vertically, made smaller (text-xs -> text-[10px], px-6 py-2 -> px-4 py-1, tracking-[1px] -> tracking-[0.5px]) */}
                  <div className="flex  gap-2">
                    <span
                      className={`px-4 py-1 text-[10px] font-bold uppercase tracking-[0.5px] rounded-full ${getDepartmentStyle(
                        position.department
                      )}`}
                    >
                      {position.department || "SOFTWARE"}
                    </span>
                    <span className="px-4 py-1 text-[10px] font-bold uppercase tracking-[0.5px] bg-emerald-100 text-emerald-700 rounded-full">
                      FULL-TIME
                    </span>
                  </div>

                  {/* Title below */}
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#292B97] transition-colors">
                    {position.title}
                  </h3>
                </div>

               
             
              </div>
            ))}
          </div>

          {/* LOAD MORE BUTTON (loads 3 more each time) */}
          {showLoadMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="px-10 py-4 bg-[#292B97] hover:bg-[#1f237a] text-white font-semibold rounded-full transition-all flex items-center gap-3 text-lg"
              >
                Load More Positions
                <FaRocket />
              </button>
            </div>
          )}

          {/* No results message */}
          {filteredPositions.length === 0 && (
            <div className="text-center py-12 text-xl text-gray-500">
              No positions match your search. Try broadening your filters.
            </div>
          )}
        </div>
      </section>

      {/* Final CTA (kept from original design) */}
      <section className="py-16 text-center bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-3 text-white leading-tight animate-fade-in-up">
            Never Miss an Update
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Subscribe to our newsletter and get the latest marketing insights delivered to your inbox
          </p>

          <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto gap-3">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-white text-gray-900 rounded-full focus:outline-none focus:border-[#292B97] text-base border border-transparent"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium"
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

      {isTransitioning && (
        <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-medium text-white">Preparing Your Application...</h1>
          </div>
        </div>
      )}

  
    </div>
  );
}