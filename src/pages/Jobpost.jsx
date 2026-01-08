import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaBrain, FaChartLine, FaRocket } from 'react-icons/fa';
import { openPositions } from '../Data/Openpositions'; // Named import – make sure this matches your export


const Jobpost = () => {
  const { jobpost } = useParams(); // This will be "copywriter", "performance-marketer", etc.
  const navigate = useNavigate();
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  // Find the job where the end of applyLink matches the URL param
  const job = openPositions.find(
    (position) => position.applyLink === `/posting/${jobpost}`
  );

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Position Not Found</h1>
          <p className="text-xl">Sorry, we couldn't find the job you're looking for.</p>
           <button
      onClick={() =>
    navigate("/career", {
      state: { scrollToPositions: true },
    })
  } className="text-purple-400 underline mt-4 inline-block">
            ← Back to all openings
          </button>
        </div>
      </div>
    );
  }

  

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
         <button
      onClick={() =>
    navigate("/career", {
      state: { scrollToPositions: true },
    })
  }  className="border-1 border-white text-white hover:text-gray-900 font-bold py-4 px-4 rounded-lg text-xl hover:bg-white transition transform hover:scale-105">
            ← Back to all openings
          </button>
        {/* Header */}
        <div className="mb-12">
        <h1 className="text-5xl  font-semibold mb-4 text-white leading-tight animate-fade-in-up">
            <span>{job.subtitle}</span>
          </h1>
          <h2 className="text-xl  font-medium mb-2 text-white leading-tight animate-fade-in-up">{job.title}</h2>
         <p className="text-xl  text-white/80 mb-4  animate-fade-in-up animation-delay-300">{job.description}</p>
        </div>

        {/* Summary */}
        <section className="mb-12">
         <h2 className="text-3xl font-medium mb-2 text-white leading-tight  border-b border-gray-700 pb-2 animate-fade-in-up">
            About the Role
          </h2>
         <p className="text-xl  text-white/80 mb-4 animate-fade-in-up animation-delay-300">{job.summary}</p>
        </section>

        {/* Responsibilities */}
        <section className="mb-12">
          <h2 className="text-3xl  font-medium mb-2 text-white leading-tight  border-b border-gray-700 pb-2 animate-fade-in-up">
            Key Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-3 text-xl text-white/80">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-12">
           <h2 className="text-3xl  font-medium mb-2 text-white leading-tight  border-b border-gray-700 pb-2 animate-fade-in-up">
            Required Skills
          </h2>
          <ul className="list-disc list-inside space-y-3 text-xl text-white/80">
            {job.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Qualifications */}
        <section className="mb-12">
          <h2 className="text-3xl  font-medium mb-2 text-white leading-tight  border-b border-gray-700 pb-2 animate-fade-in-up">
            Qualifications & Experience
          </h2>
          <ul className="list-disc list-inside space-y-3 text-xl text-white/80">
            {job.qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        </section>

        {/* Apply Button */}
        <div className="text-center mt-16">
         <Link
  to="/contact"
  className="border border-white text-white hover:text-gray-900 font-bold py-4 px-12 rounded-lg text-xl hover:bg-white transition transform hover:scale-105"
>
  APPLY NOW
</Link>

        </div>

        <div className="text-center mt-8">
        
        </div>
      </div>
    </div>
  );
};

export default Jobpost;