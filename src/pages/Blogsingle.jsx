// src/pages/Blogsingle.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { caseStudies, toSlug } from '../Data/Blog';
import SEO from '../components/seo/Seo';
// Icons
import {
  FaArrowLeft,
} from 'react-icons/fa';


const truncateRelatedTitle = (title, maxWords = 8) => {
  const words = title.split(' ');
  if (words.length <= maxWords) return title;
  return words.slice(0, maxWords).join(' ') + '...';
};

const Blogsingle = () => {
  const { title: slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // ====================== LAYOUT VARIABLE ======================
  const layoutMode = 'center';   // ← Change to 'left', 'right', or 'center'
  // ============================================================

  const currentIndex = caseStudies.findIndex(
    (s) => toSlug(s.title) === slug
  );
  const study = caseStudies[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-6 text-gray-900 leading-tight animate-fade-in-up">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-[#292B97] text-white rounded-lg hover:bg-[#292B97]/90 transition"
          >
            Back to List
          </button>
        </div>
      </div>
    );
  }

  const currentService = study.service;
  const relatedStudies = caseStudies.filter(
    (s) => s.service === currentService && s.title !== study.title
  );
  const allServices = [...new Set(caseStudies.map((s) => s.service))];

  return (
    <div className="min-h-screen  text-black">
      
      <div className={`max-w-7xl mx-auto px-1 lg:px-8 py-10 
        ${layoutMode === 'center' ? 'flex flex-col space-y-16' : 'flex flex-col lg:flex-row gap-10'}
        ${layoutMode === 'right' ? 'lg:flex-row-reverse' : layoutMode === 'left' ? 'lg:flex-row' : ''}
      `}>

        {/* Sidebar - only for left & right mode */}
        {layoutMode !== 'center' && (
          <aside className="w-full lg:w-80 lg:sticky lg:top-30 lg:h-fit lg:self-start order-1 lg:order-2">
            <div className="bg-gray-100  p-6 space-y-10">
              {/* Related Blogs + More Services (same as before) */}
              <div>
                <h1 className="text-lg font-semibold mb-4 text-gray-900">Related {currentService}</h1>
                <div className="space-y-4">
                  {relatedStudies.slice(0, 4).map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => navigate(`/blog/${toSlug(item.title)}`)}
                      className="flex gap-3 text-left group w-full"
                    >
                      <img src={item.banner} alt={item.title} className="w-20 h-20 rounded-xl object-cover group-hover:opacity-80 transition" />
                      <p className="text-sm font-medium text-gray-800 group-hover:text-[#292B97] transition line-clamp-2">
                        {truncateRelatedTitle(item.title)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="text-lg font-semibold mb-4 text-gray-900">More Services</h1>
                <div className="space-y-2">
                  {allServices.filter((s) => s !== currentService).map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => navigate('/blog', { state: { activeTab: service } })}
                      className="w-full text-left px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-[#292B97]/10 hover:text-[#292B97] transition"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* ==================== MAIN BLOG - FULL WIDTH IN CENTER MODE ==================== */}
        <main className={`flex-1 ${layoutMode === 'center' ? 'w-full' : 'order-2 lg:order-1'}`}>
         {/* ==================== FIXED BACK BUTTON ==================== */}
  <button
    onClick={() => navigate(-1)}
    className="group flex items-center gap-3 text-gray-600 hover:text-[#292B97] transition-all duration-200 mb-8 -ml-1"
  >
    <div className="p-2 rounded-full group-hover:bg-[#292B97]/10 transition-colors">
      <FaArrowLeft className="text-xl" />
    </div>
    <span className="font-medium text-lg">Back</span>
  </button>
          <article className="overflow-hidden">

               {/* Title */}
              <h1 className="text-4xl font-bold mb-3 text-gray-800 leading-tight">
                {study.title}
              </h1>

              {/* Short Description */}
              {study.description && (
                <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl">
                  {study.description}
                </p>
              )}

            {/* Full Width Banner */}
            <img
              src={study.banner}
              alt={study.title}
              className="w-full h-100  object-cover"
            />

            <div className="p-6 ">
              {/* Meta Data - ALL fields displayed */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500 mb-8">
                <div><span className="font-medium text-gray-900">{study.date}</span></div>
                <div>{study.readTime}</div>
                <div>by <span className="font-medium text-gray-900">{study.author}</span></div>
              
                <div className="px-3 py-1 bg-[#292B97]/10 text-[#292B97] text-xs font-medium rounded-full">
                  {study.service}
                </div>
              </div>

           

              {/* Full Content */}
              <div
                className="prose prose-lg max-w-none
                  [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-14
                  [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-12
                  [&_p]:text-gray-700 [&_p]:leading-relaxed
                  [&_ul]:pl-0 [&_li]:mb-3 [&_li]:flex [&_li]:items-start
                  [&_blockquote]:border-l-4 [&_blockquote]:border-[#292B97]
                  [&_blockquote]:pl-6 [&_blockquote]:italic
                "
                dangerouslySetInnerHTML={{ __html: study.content }}
              />
            </div>
          </article>
        </main>
      </div>

      {/* ====================== RELATED BLOGS BELOW (Center Mode Only) ====================== 
      {layoutMode === 'center' && relatedStudies.length > 0 && (
        <div className="max-w-7xl mx-auto px-1 lg:px-8 pb-20">
          <div className="  p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
              Related {currentService} Case Studies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedStudies.slice(0, 6).map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(`/blog/${toSlug(item.title)}`)}
                  className="group bg-white border border-gray-200 hover:border-[#292B97] rounded-2xl overflow-hidden transition-all hover:shadow-xl text-left"
                >
                  <img src={item.banner} alt={item.title} className="w-full h-52 object-cover" />
                  <div className="p-6">
                    <p className="font-medium text-gray-900 group-hover:text-[#292B97] line-clamp-3 leading-tight">
                      {item.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}*/}
    </div>
  );
};

export default Blogsingle;