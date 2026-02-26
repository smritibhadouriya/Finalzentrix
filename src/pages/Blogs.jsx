import React, { useEffect, useState } from 'react';
import Background from '../assets/imagesuse/Blog.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { caseStudies, toSlug } from '../Data/Blog';
import SEO from '../components/seo/Seo';

// Images
import performanceBg from '../assets/imagesuse/performancebg.jpg';
import performanceImg from '../assets/imagesuse/performance1.jpg';
import prBg from '../assets/imagesuse/prbg.jpg';
import prImg from '../assets/imagesuse/pr.jpg';
import seoBg from '../assets/imagesuse/seobackground.jpg';
import seoImg from '../assets/imagesuse/seomarketing.jpg';
import socialBg from '../assets/imagesuse/socialbg.jpg';
import socialImg from '../assets/imagesuse/socialpage.jpg';

// Icons
import {
  FaFunnelDollar, FaSearchDollar, FaChartPie,
  FaNewspaper, FaFireAlt, FaUserTie,
  FaSearch, FaFileAlt, FaMapMarkerAlt, FaChartBar,
  FaVideo, FaCommentDots, FaUsers, FaChartLine, FaPen,
} from 'react-icons/fa';
import { FaPercent } from 'react-icons/fa6';

const iconMap = {
  FaFunnelDollar, FaSearchDollar, FaChartPie,
  FaNewspaper, FaFireAlt, FaUserTie,
  FaSearch, FaFileAlt, FaMapMarkerAlt, FaChartBar, FaPercent,
  FaVideo, FaCommentDots, FaUsers, FaChartLine, FaPen,
};

// Service configs (unchanged)
const serviceConfigs = {
  performance: { slug: 'performance', icon: 'FaPercent', background: performanceBg, mainImage: performanceImg },
  pr:          { slug: 'pr',          icon: 'FaNewspaper', background: prBg,          mainImage: prImg },
  seo:         { slug: 'seo',         icon: 'FaSearch',    background: seoBg,         mainImage: seoImg },
  social:      { slug: 'social',      icon: 'FaVideo',     background: socialBg,      mainImage: socialImg },
};

const Blog = () => {
  const services = ['All', 'Performance', 'PR', 'SEO', 'Social'];
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleArticles, setVisibleArticles] = useState(6);

  // ==================== USE CASE STUDIES INSTEAD OF OLD ARTICLES ====================
  const articles = caseStudies.map((study) => {
    let normalizedService = study.service.toLowerCase();
    if (normalizedService.includes('social')) normalizedService = 'social';

    return {
      title: study.title,
      desc: study.description,
      date: study.date,
      readTime: study.readTime,
      author: study.author,
      image: study.banner,           // banner → image
      service: normalizedService,    // 'Social & Content' → 'social'
      view: study.view,
    };
  });
  // ================================================================================

  // Filter logic: tab + search
  const filteredArticles = articles.filter((article) => {
    const tabMatch = activeTab === 'All' || article.service === activeTab.toLowerCase();
    const searchMatch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return tabMatch && searchMatch;
  });

  const featuredArticle = activeTab === 'All' && searchQuery.trim() === '' ? filteredArticles[0] : null;
  const regularArticles = activeTab === 'All' && searchQuery.trim() === ''
    ? filteredArticles.slice(1, visibleArticles + 1)
    : filteredArticles.slice(0, visibleArticles);

  const handleCardClick = (title) => {
    const slug = toSlug(title);
    navigate(`/blog/${slug}`);
  };

  const handleLoadMore = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  // Reset visible count on tab/search change
  useEffect(() => {
    setVisibleArticles(6);
  }, [activeTab, searchQuery]);

  // Scroll behavior
  useEffect(() => {
    const shouldScrollToTop = !location.state?.scrollToBlogs;
    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const el = document.getElementById('blogs-grid');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.pathname, location.state]);

  return (
    <>
      <SEO
        title="Zentrix Media Blog | Digital Marketing Insights & Case Studies"
        description="Explore our blog for the latest digital marketing insights, case studies, and industry trends."
        keywords="digital marketing blog, case studies, marketing insights"
        canonicalUrl="https://zentrix.media/blog"
        ogImage={Background}
        author="Zentrix Media"
      />

      {/* Hero Header */}
      <div className="relative max-w-6xl mx-auto pt-10 pb-2 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2 leading-tight animate-fade-in-up">
          Marketing Insights & Resources
        </h1>
        <p className="text-xl mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
          Stay ahead with expert tips, strategies, and trends in digital marketing
        </p>
      </div>

      {/* Tabs */}
      <section className="overflow-hidden">
        <div className="md:max-w-7xl md:mx-auto px-2 md:px-6">
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex justify-start md:justify-center gap-1 md:gap-3 py-2">
              {services.map((service) => {
                const serviceKey = service.toLowerCase();
                const config = serviceConfigs[serviceKey];
                const IconComponent = config?.icon ? iconMap[config.icon] : null;

                return (
              <button
  key={service}
  onClick={() => setActiveTab(service)}
  className={`px-5 py-2.5 text-sm md:text-base font-medium transition-all duration-300 
  rounded-full border flex items-center gap-2 flex-shrink-0 mb-2

  ${
    activeTab === service
      ? "bg-[#292B97]/10 text-[#292B97] border-[#292B97]/20 shadow-sm"
      : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-black"
  }`}
>
  {IconComponent && <IconComponent className="text-base" />}
  {service}
</button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

     {/* Search Bar */}
<div className="max-w-7xl mx-auto px-6 py-4">
  <div className="relative">
    
    {/* Icon */}
    <svg
      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>

    <input
      type="text"
      placeholder="Search Latest Articles"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full pl-12 pr-4 py-3 rounded-full border bg-gray-50 border-gray-200 focus:outline-none focus:border-gray-300 transition-all"
    />
  </div>
</div>

      {/* Blogs Grid */}
      <section id="blogs-grid" className="pb-10">
        <div className="max-w-7xl mx-auto px-6">
          {filteredArticles.length === 0 ? (
            <p className="text-xl font-medium mb-2 text-gray-800 leading-tight text-center py-10">
              No articles found matching your search or filter.
            </p>
          ) : (
            <>
              {/* Featured Article */}
              {featuredArticle && (
                <div
                  className="relative rounded-lg overflow-hidden bg-[#292B97] text-white flex flex-col md:flex-row items-start mb-10 cursor-pointer"
                  onClick={() => handleCardClick(featuredArticle.title)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="p-5 md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                    <p className="mb-4">{featuredArticle.desc}</p>
                    <p className="text-sm mb-2">
                      {featuredArticle.date} • {featuredArticle.readTime}
                    </p>
                    <p className="text-sm mb-4">Written by {featuredArticle.author}</p>
                    <button className="bg-white text-[#292B97] px-4 py-2 rounded font-medium">Read Article</button>
                  </div>
                  <div className="md:w-1/2">
                    <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-64 md:h-auto lg:h-70 object-cover" />
                  </div>
                </div>
              )}

              {/* Regular Articles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {regularArticles.map((article, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-md  border border-gray-300 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handleCardClick(article.title)}
                    role="button"
                    tabIndex={0}
                  >
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.desc}</p>
                      <p className="text-sm text-gray-500 mb-2">
                        {article.date} • {article.readTime}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">{article.author}</p>
                        <button className="text-blue-600 font-medium hover:underline">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Load More */}
      {visibleArticles < filteredArticles.length - (featuredArticle ? 1 : 0) && (
        <div className="text-center pb-10">
          <button
            onClick={handleLoadMore}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition"
          >
            Load More Articles
          </button>
        </div>
      )}
    </>
  );
};

export default Blog;