import React, { useEffect } from "react";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import BackgroundImage from "../assets/imagesuse/connectusbg.jpg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full text-gray-900 bg-blue-900/10">
      <Seo
        title="Contact Zentrix | Strategy-First Digital Marketing Agency"
        description="Ready to scale? Talk strategy with Zentrix. No fluff. No sales scripts. Just clarity, growth, and execution."
        href="https://zentrix.media/contact"
      />

      {/* HERO */}
      <section 
        className="relative w-full bg-cover bg-no-repeat bg-center  overflow-hidden"
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
           loading: "lazy"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-25 pb-20 text-center">
         <h1 className="text-4xl md:text-5xl  font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            Ready to Scale? <br />
            Let’s Crunch the Numbers.
          </h1>
         <p className="text-xl  text-white/80 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            No fluff. No sales scripts. Just honest strategy, clear execution,
            and growth that actually compounds.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-15  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
               <div className="">
             <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
              Start with a Conversation.
            </h1>
           <p className="text-xl  text-gray-800 mb-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              Whether you’re a startup ready to disrupt or a legacy brand ready
              to evolve, the first step is clarity. Tell us about your goals,
              timeline, and ambition — we’ll tell you exactly how to get there.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-lg  font-medium  text-gray-800 leading-tight animate-fade-in-up">Email</p>
                  <a
                    href="mailto:business@zentrix.media"
                    className="text-gray-600 hover:text-blue-900 transition"
                  >
                    hello@zentrix.media
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-lg  font-medium  text-gray-800 leading-tight animate-fade-in-up">Location</p>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
               <p className="text-xl  font-medium  text-gray-800 leading-tight animate-fade-in-up mb-7">Connect with us</p>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com/zentrixmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-700 hover:text-pink-600 transition transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com/company/zentrixmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-700 hover:text-blue-700 transition transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://x.com/zentrixmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-700 hover:text-black transition transform hover:scale-110"
                  aria-label="X (Twitter)"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>


          {/* FORM */} 
          <div className="">
              <div className="border  border-gray-200 rounded-xl p-8 shadow-sm">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <input
                type="email"
                placeholder="Work email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <select className="w-full border border-gray-300 rounded-md p-3 text-gray-600">
                <option>Select a service</option>
                <option>SEO & Growth Strategy</option>
                <option>Paid Media</option>
                <option>Social Media</option>
                <option>Content & Branding</option>
                <option>Other</option>
              </select>

              <select className="w-full border border-gray-300 rounded-md p-3 text-gray-600">
                <option>Estimated budget</option>
                <option>Under $5,000 / month</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000 – $25,000</option>
                <option>$25,000+</option>
              </select>

              <textarea
                rows="4"
                placeholder="Tell us about your goals, challenges, and expectations…"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition"
              >
                <FaPaperPlane /> Send Message
              </button>

              <p className="text-xs text-gray-500 text-center">
                We usually respond within 24 hours.
              </p>
            </form>
          </div>
          </div>
        
        </div>
      </section>

          <section className="">
        <div className="max-w-7xl mx-auto px-6 pb-5 text-center">
          <p className="text-lg font-semibold text-gray-800">
            “The best time to plant a tree was 20 years ago.
          </p>
          <p className="text-lg font-semibold text-gray-800">
            The best time to fix your digital strategy is now.”
          </p>
        </div>
      </section>

      {/* MAP */}
      <section className="">
       
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.70176706!2d72.71412828204758!3d19.082482211596307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1766381151845!5m2!1sen!2sin" 
        width="100%"
         height="420"
     
         
           loading="lazy" 
        
    
          className=" border border-gray-200"
         
          title="Zentrix Location"
           referrerpolicy="no-referrer-when-downgrade"
           ></iframe>
      </section>
    </div>
  );
};

export default Contact;