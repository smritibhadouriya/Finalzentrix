// src/pages/Blogsingle.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { caseStudies, toSlug } from '../Data/Blog';

const truncateRelatedTitle = (title, maxWords = 8) => {
  const words = title.split(' ');
  if (words.length <= maxWords) return title;
  return words.slice(0, maxWords).join(' ') + '...';
};

const Blogsingle = () => {
  const { title: slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

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
            className="px-6 py-3 bg-[#F16D34] text-white rounded-lg hover:bg-[#F16D34]/90 transition"
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
    <div className="min-h-screen bg-[#F16D34]/5 text-black">
      <div className="max-w-7xl mx-auto px-1 lg:px-8 py-10 flex flex-col lg:flex-row-reverse gap-10">

        {/* ================= Sidebar (Right on large, below on small) ================= */}
        <aside className="w-full lg:w-80 lg:sticky lg:top-30 lg:h-fit lg:self-start order-1 lg:order-2">
          <div className="bg-gray-100 rounded-2xl shadow-md p-6 space-y-10">

            {/* Related Blogs */}
            <div>
              <h1 className="text-lg font-semibold mb-4 text-gray-900 leading-tight animate-fade-in-up">
                Related {currentService}
              </h1>

              <div className="space-y-4">
                {relatedStudies.slice(0, 4).map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      navigate(`/blog/${toSlug(item.title)}`)
                    }
                    className="flex gap-3 text-left group w-full"
                  >
                    <img
                      src={item.banner}
                      alt={item.title}
                      className="w-20 h-20 rounded-xl object-cover group-hover:opacity-80 transition"
                    />
                    <p className="text-sm font-medium text-gray-800 group-hover:text-[#F16D34] transition line-clamp-2">
                      {truncateRelatedTitle(item.title)}
                    </p>
                  </button>
                ))}

                {relatedStudies.length > 4 && (
                  <button
                    onClick={() =>
                      navigate('/blog', {
                        state: { activeTab: currentService },
                      })
                    }
                    className="text-[#F16D34] font-medium text-sm hover:underline"
                  >
                    View all {currentService}
                  </button>
                )}
              </div>
            </div>

            {/* More Services */}
            <div>
              <h1 className="text-lg font-semibold mb-4 text-gray-900 leading-tight animate-fade-in-up">
                More Services
              </h1>

              <div className="space-y-2">
                {allServices
                  .filter((s) => s !== currentService)
                  .map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        navigate('/blog', {
                          state: { activeTab: service },
                        })
                      }
                      className="w-full text-left px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-[#F16D34]/10 hover:text-[#F16D34] transition"
                    >
                      {service}
                    </button>
                  ))}
              </div>
            </div>

          </div>
        </aside>

        {/* ================= Main Content ================= */}
        <main className="flex-1">
          <article className="bg-gray-100 rounded-3xl shadow-md p-6 md:p-10 lg:p-14 order-2 lg:order-1">
            {/* Back Button */}
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-gray-600 hover:text-[#F16D34] transition group"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              Back to Blog
            </button>

            {/* Title */}
            <h1 className="text-4xl font-semibold mb-6 text-gray-900 leading-tight animate-fade-in-up">
              {study.title}
            </h1>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-10
                [&_p]:text-gray-700 [&_p]:leading-relaxed
                [&_ul]:pl-0 [&_li]:mb-3 [&_li]:flex [&_li]:items-start
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#F16D34]
                [&_blockquote]:pl-6 [&_blockquote]:italic
              "
              dangerouslySetInnerHTML={{ __html: study.content }}
            />
          </article>
        </main>

      </div>
    </div>
  );
};

export default Blogsingle;