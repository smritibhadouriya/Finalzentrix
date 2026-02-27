import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone} from 'react-icons/fa';
import Background from "../assets/banner.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import SEO from '../components/seo/Seo';
import { NavLink } from 'react-router-dom';
// Images (unchanged)
import performanceBg from '../assets/imagesuse/performancebg.jpg';
import performanceImg from '../assets/imagesuse/performance1.jpg';
import prBg from '../assets/imagesuse/prbg.jpg';
import prImg from '../assets/imagesuse/pr.jpg';
import seoBg from '../assets/imagesuse/seobackground.jpg';
import seoImg from '../assets/imagesuse/seomarketing.jpg';
import socialBg from '../assets/imagesuse/socialbg.jpg';
import socialImg from '../assets/imagesuse/socialpage.jpg';

// Icons (unchanged)
import {
  FaFunnelDollar, FaSearchDollar, FaChartPie, FaRocket,
  FaNewspaper, FaFireAlt, FaUserTie,
  FaSearch, FaFileAlt, FaMapMarkerAlt, FaChartBar,
  FaVideo, FaCommentDots, FaUsers, FaChartLine, FaPen,
} from 'react-icons/fa';
import { FaArrowRightToBracket, FaCircleArrowRight, FaPercent, FaStar } from 'react-icons/fa6';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Contactcomp from '../components/Contactcomp';

const iconMap = {
  FaFunnelDollar, FaSearchDollar, FaChartPie,
  FaNewspaper, FaFireAlt, FaUserTie,
  FaSearch, FaFileAlt, FaMapMarkerAlt, FaChartBar,FaPercent,
  FaVideo, FaCommentDots, FaUsers, FaChartLine, FaPen,
};

// ────────────────────────────────────────────────
// Updated configs – keywords are now arrays (this fixes the crash)
// ────────────────────────────────────────────────
const serviceConfigs = {
  performance: {
    slug: 'performance',
    icon:'FaPercent',
    title: 'Performance Marketing Services',
    ctaline:'Performance based lead generation advertising campaigns designed to reach high-intent audiences, control acquisition costs, and convert attention into measurable revenue across digital platforms.',
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
 ctaline:"Strategic media outreach and brand storytelling that builds credibility, strengthens reputation, and positions your business where influence and visibility matter most.",
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
    ctaline:"Improve search visibility through technical precision, authoritative content, and sustained optimisation that attracts qualified traffic and strengthens long-term organic growth.",
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
ctaline:"Consistent, insight-driven social media branding services and strategies that grow communities, encourage meaningful engagement, and turn brand presence into sustained customer relationships.",
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
const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "This team completely transformed our digital presence. Professional, creative and result-driven!"
  },
  {
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "Amazing experience working with them. Communication and execution were top-notch."
  },
  {
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Their strategy and development skills helped us scale faster than expected."
  },
  {
    name: "David Miller",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "Creative team with deep technical knowledge. Highly recommended!"
  }
];

const generateCircles = (count = 20) => {
  return Array.from({ length: count }).map((_, i) => {
    const size = Math.floor(Math.random() * 20) + 4; // 4px–12px
    const top = Math.floor(Math.random() * 90); // %
    const left = Math.floor(Math.random() * 90); // %

    return (
      <div
        key={i}
        className="hidden lg:block absolute rounded-full bg-blue-900/5"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
        }}
      />
    );
  });
};

const caseStudies = [
  {
    banner:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
    title: 'Rebranding a Luxury Fashion Boutique',
    view: 1840,
    description:
      'Transformed an outdated brand into a modern icon, boosting engagement by 70%.',
    service: 'SEO',
    top: true,
    content: `
      <article class="prose prose-lg max-w-none">
        <header class="mb-6">
          <h2 class="text-3xl font-bold">Reinventing Elegance for the Modern Era</h2>
          <p class="text-sm text-gray-600 mt-2">A full-scale rebrand that preserved heritage while speaking to Gen Z and Millennials.</p>
        </header>

        <section class="grid gap-6 md:grid-cols-2 items-start mb-6">
          <div>
            <p>
              Our client, a <strong>heritage luxury boutique</strong>, had exquisite products but an identity that felt stuck in the past.
              We approached the brief as both custodians and architects — protecting the brand's legacy while crafting a visual language
              for a new generation of shoppers.
            </p>

            <p>
              The process started with stakeholder workshops to surface the brand's core values, followed by market research and moodboarding.
              From there we created a flexible identity system — logo variations, typography scale, color palette, and packaging rules — that worked
              across both physical stores and the digital storefront.
            </p>
          </div>

          <div class="space-y-4">
            <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop" alt="brand-mood" class="rounded-xl shadow-md w-full"/>
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop" alt="packaging" class="rounded-xl shadow-md w-full"/>
          </div>
        </section>

        <section class="mb-6">
          <h3 class="text-2xl font-semibold">What we delivered</h3>
          <ul class="list-disc ml-6 mt-3">
            <li><strong>New logo system</strong> with responsive lockups for web and print.</li>
            <li><strong>Comprehensive brand guidelines</strong> for staff, retail, and vendor partners.</li>
            <li><strong>Packaging and in-store design</strong> to create a premium unboxing experience.</li>
          </ul>
        </section>

        <section class="mb-6">
          <h3 class="text-2xl font-semibold">Results</h3>
          <p>
            Within three months post-launch, social engagement rose by <strong>70%</strong>, online conversion increased,
            and footfall in flagship stores showed a consistent uptick. The rebrand restored the client's cultural relevance
            while safeguarding the craftsmanship that defined their legacy.
          </p>
        </section>
      </article>
    `,
  },
  {
    banner:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    title: 'Creative Launch for Lifestyle App',
    view: 2240,
    description:
      'A multi-platform campaign that turned app downloads into loyal fans.',
    service: 'SEO',
    top: true,
   content: `
<article class="prose prose-lg max-w-none">
  <header class="mb-6">
    <h2 class="text-3xl font-bold">From Launch to Lifestyle — Crafting Connection Beyond Installs</h2>
    <p class="text-gray-600 mt-2 text-sm">How creativity turned an app launch into an emotional movement.</p>
  </header>

  <section class="mb-6">
    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" alt="campaign" class="rounded-xl shadow-md w-full mb-4"/>
    <p>
      When a lifestyle app aimed to connect everyday moments through digital joy, we knew that simple ads wouldn’t cut it.
      The goal was to spark emotion. We began by mapping how users actually live — morning routines, spontaneous coffee runs,
      quiet reflections — then transformed those insights into a launch film series that spoke to real human rhythm.
    </p>
  </section>

  <section class="grid md:grid-cols-2 gap-6 mb-6 items-start">
    <div>
      <h3 class="text-2xl font-semibold mb-2">What We Did</h3>
      <ul class="list-disc ml-6">
        <li>Developed lifestyle-driven storyboards reflecting relatable habits.</li>
        <li>Collaborated with micro-creators who embodied authenticity.</li>
        <li>Extended the launch through interactive Reels and in-person popups.</li>
      </ul>
      <p class="mt-4">
        The launch transcended promotion — it became an experience. People didn’t just download the app; they celebrated what it represented.
      </p>
    </div>
    <div class="space-y-4">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="social stories" class="rounded-xl shadow-md w-full"/>
      <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop" alt="launch popups" class="rounded-xl shadow-md w-full"/>
    </div>
  </section>

  <section>
    <p><strong>200k+ downloads</strong> in the first 8 weeks and a loyal community that turned customers into advocates.</p>
  </section>
</article>
`

  },
  {
    banner:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    title: 'Product Launch Film for Tech Giant',
    view: 3080,
    description:
      'Directed and produced a high-impact launch video viewed over 1M times.',
    service: 'Performance',
    content: `
<article class="prose prose-lg max-w-none">
  <header class="mb-6">
    <h2 class="text-3xl font-bold">Cinematic Storytelling for a Global Tech Moment</h2>
    <p class="text-gray-600 text-sm mt-2">A launch film that transformed a product reveal into an emotional spectacle.</p>
  </header>

  <section class="flex flex-col md:flex-row-reverse gap-6 mb-6">
    <div class="md:w-1/2">
      <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop" alt="film-set" class="rounded-xl shadow-md w-full mb-4"/>
      <img src="https://images.unsplash.com/photo-1551817958-20204d6ab2b8?q=80&w=800&auto=format&fit=crop" alt="crew" class="rounded-xl shadow-md w-full"/>
    </div>

    <div class="md:w-1/2">
      <p>
        The tech company wanted a film that didn’t just show innovation — it had to make audiences feel it.
        We designed a story arc that mirrored the product’s purpose: connection through motion, light, and rhythm.
        Every frame was composed to echo human curiosity and discovery.
      </p>
      <p>
        By fusing documentary realism with cinematic flair, we turned feature demonstrations into moments of wonder.
      </p>
    </div>
  </section>

  <section>
    <h3 class="text-2xl font-semibold mb-3">Outcome</h3>
    <p>
      The final cut reached <strong>1.2M views</strong> organically in two weeks, and became an internal benchmark
      for storytelling-driven product launches across the client’s global teams.
    </p>
  </section>
</article>
`

  },
  {
    banner:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    title: 'Social Media Growth for Sustainable Brand',
    view: 2540,
    description:
      'Grew audience engagement by 120% through relatable storytelling.',
    service: 'Social & Content',
    content: `
<article class="prose prose-lg max-w-none">
  <header class="mb-6">
    <h2 class="text-3xl font-bold">Turning Conversations into a Community</h2>
    <p class="text-gray-600 text-sm mt-2">A social strategy rooted in humanity, not algorithms.</p>
  </header>

  <section class="mb-6">
    <div class="space-y-4 mb-4">
      <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" alt="eco-products" class="rounded-xl shadow-md w-full"/>
      <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop" alt="community" class="rounded-xl shadow-md w-full"/>
    </div>
    <p>
      The brand’s heart lay in sustainability, but its feed lacked life. We reimagined its digital voice — replacing polished sales posts
      with founder stories, customer spotlights, and transparent impact visuals.
    </p>
    <p>
      By focusing on dialogue, we made the audience feel part of something bigger than commerce — a shared mission for better living.
    </p>
  </section>

  <section>
    <p><strong>120% engagement growth</strong> and a genuine sense of belonging that transformed followers into ambassadors.</p>
  </section>
</article>
`

  },
  {
    banner:
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
    title: 'Instagram Campaign for Beauty Label',
    view: 3220,
    description:
      'Built viral momentum that resulted in 200K new followers in two months.',
    service: 'Social & Content',
 content: `
<article class="prose prose-lg max-w-none">
  <header class="mb-6">
    <h2 class="text-3xl font-bold">Where Real Stories Met Real Skin</h2>
    <p class="text-gray-600 text-sm mt-2">An Instagram revival through authenticity and rhythm.</p>
  </header>

  <section class="grid md:grid-cols-2 gap-6 mb-6">
    <div>
      <img src="https://images.unsplash.com/photo-1544213456-b40f7c17f3a0?q=80&w=800&auto=format&fit=crop" alt="beauty-product" class="rounded-xl shadow-md w-full mb-4"/>
      <p>
        The beauty label wanted buzz, but what it got was a movement.
        We spotlighted real users — their routines, their skin stories, and their imperfections.
        The approach made beauty human again, not a filter.
      </p>
    </div>

    <div>
      <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop" alt="creator-campaign" class="rounded-xl shadow-md w-full mb-4"/>
      <p>
        The campaign snowballed through creator collaborations, “get ready with me” shorts, and relatable humour.
        Followers didn’t just double — they stayed.
      </p>
    </div>
  </section>

  <section>
    <p><strong>200K new followers</strong> in 60 days, with organic reach driving record direct sales.</p>
  </section>
</article>
`

  },
  {
    banner:
      'https://images.unsplash.com/photo-1581091870634-1e7c3b17d2b6?q=80&w=800&auto=format&fit=crop',
    title: 'Crisis Management for Global Retailer',
    view: 1880,
    description:
      'Turned a PR crisis into an opportunity for transparency and trust.',
    service: 'PR',
    content: `
      <article class="prose prose-lg max-w-none">
        <header class="mb-6">
          <h2 class="text-3xl font-bold">From Crisis to Credibility: A PR Recovery Story</h2>
        </header>

        <section class="mb-6">
          <p>
            A global retailer faced negative headlines that threatened customer trust. Our first priority was listening — to customers,
            employees, and stakeholders — then building a clear, human response.
          </p>
        </section>

        <section class="grid md:grid-cols-2 gap-6 items-start mb-6">
          <div>
            <h3 class="text-2xl font-semibold">Approach</h3>
            <ul class="list-disc ml-6 mt-3">
              <li>Rapid response communications grounded in facts.</li>
              <li>Transparent Q&amp;A documents for media and partners.</li>
              <li>Proactive outreach to affected customers with remedial offers.</li>
            </ul>
          </div>

          <div class="space-y-4">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" alt="press-room" class="rounded-xl shadow-md w-full"/>
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="press-release" class="rounded-xl shadow-md w-full"/>
          </div>
        </section>

        <section>
          <p>
            The transparent, customer-first approach softened criticism and, over time, rebuilt trust. Coverage shifted from outrage to
            reporting the company's corrective measures and renewed commitments.
          </p>
        </section>
      </article>
    `,
  },
  {
    banner:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop',
    title: 'Media Launch for Sustainable Packaging Startup',
    view: 990,
    description:
      'Secured coverage in top-tier publications within two weeks.',
    service: 'PR',
    top: true,
    content: `
      <article class="prose prose-lg max-w-none">
        <header class="mb-6">
          <h2 class="text-3xl font-bold">Fast, Focused Media Launch for an Emerging Innovator</h2>
        </header>

        <section class="mb-6 grid md:grid-cols-2 gap-6">
          <div>
            <p>
              The startup had a compelling product but limited PR presence. We positioned the founder as an authority on sustainable packaging
              and crafted a targeted press kit highlighting measurable environmental impact.
            </p>
          </div>

          <div class="space-y-4">
            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop" alt="press-kit" class="rounded-xl shadow-md w-full"/>
            <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop" alt="startup-cover" class="rounded-xl shadow-md w-full"/>
          </div>
        </section>

        <section>
          <p>
            Within two weeks we secured features in national business outlets and niche trade publications — a launch that accelerated
            investor interest and early customer inquiries.
          </p>
        </section>
      </article>
    `,
  },
  {
    banner:
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
    title: 'Thought Leadership for Fintech Founder',
    view: 780,
    description:
      'Positioned the CEO as an industry voice through strategic press features.',
    service: 'PR',
    content: `
      <article class="prose prose-lg max-w-none">
        <header class="mb-6">
          <h2 class="text-3xl font-bold">Building Credibility Through Thought Leadership</h2>
        </header>

        <section class="grid md:grid-cols-2 gap-6 items-start mb-6">
          <div>
            <p>
              We collaborated with a fintech founder to develop op-eds, byline articles, and speaking opportunities that showcased deep domain expertise.
              The narrative focused on practical solutions to financial inclusion and digital trust.
            </p>

            <p>
              Content was research-backed and tailored for each publication’s audience, positioning the founder as an accessible expert.
            </p>
          </div>

          <div class="space-y-4">
            <img src="https://images.unsplash.com/photo-1519389950476-2d9d5d000000?q=80&w=800&auto=format&fit=crop" alt="founder-portrait" class="rounded-xl shadow-md w-full"/>
            <img src="https://images.unsplash.com/photo-1520975911718-1da4b0b8c16b?q=80&w=800&auto=format&fit=crop" alt="press-feature" class="rounded-xl shadow-md w-full"/>
          </div>
        </section>

        <section>
          <p>
            Media placements translated into invitations to panels and podcasts, amplifying the founder’s reach and opening doors to strategic partnerships.
          </p>
        </section>
      </article>
    `,
  },  
  {
    banner:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    title: 'E-commerce Optimization for Fashion Brand',
    view: 2480,
    description:
      'Improved conversion rates by 35% through UX redesign and SEO strategy.',
    service: 'SEO',
    content: `
      <article class="prose prose-lg max-w-none">
        <header class="mb-6">
          <h2 class="text-3xl font-bold">Redesigning the Shopping Experience</h2>
        </header>

        <section class="mb-6 grid md:grid-cols-2 gap-6">
          <div>
            <p>
              We audited the client's storefront and discovered friction in navigation and checkout. Our team implemented a UX-first redesign
              paired with technical SEO improvements to increase visibility and convert more visitors.
            </p>

            <ul class="list-disc ml-6 mt-3">
              <li>Simplified product discovery and category structure.</li>
              <li>Optimized product pages for search and conversions.</li>
              <li>Streamlined checkout to reduce cart abandonment.</li>
            </ul>
          </div>

          <div class="space-y-4">
            <img src="https://images.unsplash.com/photo-1519389950476-2d9d5d000000?q=80&w=800&auto=format&fit=crop" alt="ecom-ux" class="rounded-xl shadow-md w-full"/>
            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop" alt="analytics" class="rounded-xl shadow-md w-full"/>
          </div>
        </section>

        <section>
          <p>
            Within two months the site saw a <strong>35% lift in conversion rate</strong> and a sustained increase in organic traffic.
          </p>
        </section>
      </article>
    `,
  },
  {
    banner:
      'https://images.unsplash.com/photo-1519389950476-2d9d5d000000?q=80&w=800&auto=format&fit=crop',
    title: 'Website Revamp for Art Gallery',
    view: 1440,
    description:
      'Created a seamless online experience that increased engagement time by 80%.',
    service: 'Social & Content',
    content: `
      <article class="prose prose-lg max-w-none">
        <header class="mb-6">
          <h2 class="text-3xl font-bold">Designing a Virtual Gallery That Invites Exploration</h2>
        </header>

        <section class="mb-6 grid md:grid-cols-2 gap-6">
          <div>
            <img src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=800&auto=format&fit=crop" alt="art-gallery" class="rounded-xl shadow-md w-full mb-4"/>
            <p>
              The gallery wanted a site that reflected the tactility of physical exhibitions. We prioritized high-resolution visuals,
              intuitive exhibition navigation, and storytelling modules that contextualized each artist's work.
            </p>
          </div>

          <div>
            <p>
              Features included curated editorial pages, event RSVP integration, and an accessible audio tour experience — all designed to keep
              visitors engaged and deepen their connection to the art.
            </p>

            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop" alt="exhibit-page" class="rounded-xl shadow-md w-full mt-4"/>
          </div>
        </section>

        <section>
          <p>
            Engagement time increased by <strong>80%</strong>, and online ticket sales rose as the site better reflected the gallery’s curatorial voice.
          </p>
        </section>
      </article>
    `,
  },
  {
    banner:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
    title: 'Retargeting Strategy for B2B Company',
    view: 1990,
    top:true,
    description:
      'Implemented a data-driven funnel that lifted conversion rates by 38%.',
    service: 'Performance',
    content: `
      <article class="prose prose-lg max-w-none">
        <header class="mb-6">
          <h2 class="text-3xl font-bold">Closing the Loop: Retargeting That Converts</h2>
        </header>

        <section class="mb-6 grid md:grid-cols-2 gap-6">
          <div>
            <p>
              For a B2B firm with long sales cycles, we designed a retargeting funnel that nurtured prospects with relevant content at each stage.
              Assets included case studies, product demos, and testimonial-led ads aimed at re-engaging high-intent visitors.
            </p>

            <ul class="list-disc ml-6 mt-3">
              <li>Multi-step retargeting sequences mapped to buyer intent.</li>
              <li>Creative tailored for decision-stage messages.</li>
              <li>Conversion tracking tied back to pipeline outcomes.</li>
            </ul>
          </div>

          <div class="space-y-4">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" alt="retargeting" class="rounded-xl shadow-md w-full"/>
            <img src="https://images.unsplash.com/photo-1520975911718-1da4b0b8c16b?q=80&w=800&auto=format&fit=crop" alt="funnel" class="rounded-xl shadow-md w-full"/>
          </div>
        </section>

        <section>
          <p>
            The retargeting program lifted conversion rates by <strong>38%</strong>, shortened sales cycles for warm leads,
            and improved pipeline predictability.
          </p>
        </section>
      </article>
    `,
  },
];
 const toSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Home = () => {
  const services = Object.values(serviceConfigs);
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  

  const visibleTestimonials = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];  
  const latestBlogs = caseStudies.slice(0, 5); // Latest 5 blogs
  const [blogIndex, setBlogIndex] = useState(0);

const visibleBlogs = latestBlogs.slice(blogIndex, blogIndex + 3);

const canGoLeft = blogIndex > 0;
const canGoRight = blogIndex + 3 < latestBlogs.length;
  return (
    <div>
      <SEO
        title="Zentrix Media | Strategy-First Digital Marketing Agency"
        description="Zentrix Media is a strategy-first digital marketing agency focused on growth, execution, and results."
        keywords="digital marketing agency, strategy-first marketing, growth marketing"
        canonicalUrl="https://zentrix.media/"
        ogImage={Background}
        author="Zentrix Media"
      />
         <section className="relative bg-white/80 overflow-hidden  py-10 lg:py-25 px-6 md:px-12">
      
      {/* Decorative Background Circles */}
      <div className="hidden lg:block absolute top-10 left-16 w-10 h-10 bg-blue-900/5 rounded-full "></div>
      <div className="hidden lg:block absolute top-24 left-110 w-6 h-6 bg-blue-900/5 rounded-full"></div>
      <div className="hidden lg:block absolute top-10 right-180 w-8 h-8 bg-blue-900/5 rounded-full"></div>
      <div className="hidden lg:block absolute bottom-4 right-40 w-8 h-8   bg-blue-900/5 rounded-full "></div>
      <div className="hidden lg:block absolute bottom-10 left-150 w-8 h-8 bg-blue-900/5 rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT SIDE CONTENT */}
        <div className="w-full lg:w-1/2  lg:text-left">
          
          <div className="inline-block bg-blue-900/5 rounded-3xl text-blue-900 max-w-xs py-1.5 px-6 mb-4 text-sm font-medium">
            #Digital Growth Partner
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
           An Agency Where Strategy Meets <br/>Measurable Digital Growth
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            From precision SEO and performance advertising to intelligent website experiences, Zentrix
Media offers full-fledged digital marketing services and helps brands build marketing
systems designed to attract the right audience, scale visibility, and turn attention into lasting
business results
          </p>

          {/* Buttons - Only Large Screen */}
          <div className="hidden lg:flex gap-4">
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
            className="px-16 py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800 transition duration-300">
            Let’s Grow Your Brand 
            </button>

         <button
  onClick={() => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
  className="px-16 py-3 border border-blue-900 text-blue-900 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition duration-300"
>
Explore Services
</button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          
          {/* Background Overlap Divs */}
          <div className="absolute -top-6  left-2 lg:left-10 w-80 h-72 bg-blue-900/5 rounded-3xl"></div>
          <div className="absolute -bottom-6 right-2 lg:right-10 w-80 h-72 bg-blue-900/5 rounded-3xl"></div>

          <img
            src={Background}
            alt="Zentrix Media"
            className="relative w-[400px] md:w-[400px] lg:w-[450px] h-[350px] object-cover rounded-3xl shadow-md bg-black "
          />
        </div>

      </div>
    </section>
      {/*360 degree line */}
      <div className="py-10 bg-blue-900/3">
        <div className="max-w-7xl mx-auto text-center ">
          <h1 className="font-bold text-[30px] text-center text-gray-800 animate-fade-in-up">
            360° Digital Domination
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up">
            Comprehensive strategies that cover every angle of your digital presence.
          </p>
        </div>
      </div>
      {/*Service section */}
      <section id="services" className="scroll-mt-24  py-15 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
           {/* Decorative Background Circles */}
     {generateCircles(25)}



      
           <p className="text-lg text-[#292B97]  font-semibold leading-relaxed animate-fade-in-up text-center">What We Do</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center  text-gray-800 mb-2">Full Service Digital Solutions</h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up text-center mb-10">Everything you need to grow your business online, all in one place.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const displayName = service.title.replace(/ Services$/, '');
              const firstIcon = service.icon;
              const IconComponent = iconMap[firstIcon];
              return (
                <NavLink
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="block p-6 rounded-lg transition-all duration-300 border-2 border-[#292B97]/5 hover:border-[#292B97]"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-blue-900 rounded-full p-3 flex-shrink-0 ">
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <span className="text-gray-600 text-xl"><FiChevronRight /> </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{displayName}</h3>
                  <p className="text-gray-600">{service.subheadline}</p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </section>



         {/*About section */}
      <section className="py-12 bg-white relative">
        <div className="">
           <p className="text-lg text-[#292B97]  font-semibold leading-relaxed animate-fade-in-up text-center">About Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center  text-gray-800 mb-2">We constantly think in code, data, and trends</h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up text-center mb-10">Everything you need to grow your business online, all in one place.</p>
  
         
<div className="hidden lg:block absolute top-13 left-0 opacity-10">
  <svg width="500" height="100" viewBox="0 0 120 40" fill="none">
    <polyline 
      points="0,12 15,0 30,10 45,0 60,10 75,0 90,10 105,0 120,10"
      stroke="#1c398e"
      strokeWidth="5"
      fill="none"
      strokeLinejoin="miter"
      strokeLinecap="butt"
    />
    <polyline 
      points="0,25 15,15 30,25 45,15 60,25 75,15 90,25 105,15 120,25"
      stroke="#1c398e"
      strokeWidth="5"
      fill="none"
      strokeLinejoin="miter"
      strokeLinecap="butt"
    />
  </svg>
</div>
<div className="hidden lg:block absolute top-30 right-10 opacity-10">
  <svg width="500" height="100" viewBox="0 0 120 40" fill="none">
    <polyline 
      points="0,12 15,0 30,10 45,0 60,10 75,0 90,10 105,0 120,10"
      stroke="#1c398e"
      strokeWidth="5"
      fill="none"
      strokeLinejoin="miter"
      strokeLinecap="butt"
    />
    <polyline 
      points="0,25 15,15 30,25 45,15 60,25 75,15 90,25 105,15 120,25"
      stroke="#1c398e"
      strokeWidth="5"
      fill="none"
      strokeLinejoin="miter"
      strokeLinecap="butt"
    />
  </svg>
</div>
<div className="hidden lg:block absolute top-130 right-100 opacity-10">
  <svg width="200" height="50" viewBox="0 0 120 40" fill="none">
    <polyline 
      points="0,12 15,0 30,10 45,0 60,10 75,0 90,10 105,0 120,10"
      stroke="#1c398e"
      strokeWidth="5"
      fill="none"
      strokeLinejoin="miter"
      strokeLinecap="butt"
    />
    <polyline 
      points="0,25 15,15 30,25 45,15 60,25 75,15 90,25 105,15 120,25"
      stroke="#1c398e"
      strokeWidth="5"
      fill="none"
      strokeLinejoin="miter"
      strokeLinecap="butt"
    />
  </svg>
</div>

  
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto  z-10">

        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="about"
            className="rounded-2xl shadow-lg w-full object-cover bg-black"
          />
        </div>

        {/* Right Content */}
        <div className='lg:mt-10'>
               <h2 className="text-3xl font-bold text-gray-800 mb-4">
           We Are More Than
Just an Agency
          </h2>

          <p className="text-gray-600  leading-relaxed">
           We are an AI-forward, 360° digital agency
turning raw data into vibrant experiences. 
We help brands stop guessing and start growing
          </p>

      
       

      {/* Decorative Social Icons */}
<div className="flex gap-4 mt-10">

  <div
   
    className=" w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#292B97] text-[#292B97] opacity-80 random-float"
  >
    <FaFacebookF size={18} />
  </div>

  <div
    
    className=" w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#292B97] text-[#292B97] opacity-80 random-float"
  >
    <FaTwitter size={18} />
  </div>

  <div
    
    className=" w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#292B97] text-[#292B97] opacity-80 random-float"
  >
    <FaInstagram size={18} />
  </div>

  <div
 
    className=" w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#292B97] text-[#292B97] opacity-80 random-float"
  >
    <FaLinkedinIn size={18} />
  </div>

  <div
    
    className=" w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#292B97] text-[#292B97] opacity-80 random-float"
  >
    <FaYoutube size={18} />
  </div>

</div>
          </div>

      </div>
        </div>
      </section>


         {/*testimonias section */}
   <section className="py-20 relative">
      <div className=" px-6">
<div className="relative mb-12 flex items-center">
  
  <div className="flex-1 border-t-15 border-[#1c398e]/5"></div>

  <h2 className="px-6 text-3xl  font-bold text-center whitespace-nowrap">
    What Our Clients Say
  </h2>

  <div className="flex-1 border-t-15 border-[#1c398e]/5"></div>

</div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {visibleTestimonials.map((item, i) => (
            <div key={i} className=" p-6 rounded-lg transition-all duration-300 border-2 border-[#292B97]/5 ">

              {/* Top Row */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover bg-left"
                />

                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>

                  <div className="flex gap-1 text-yellow-400 mt-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>


{/*contact component */}
<section id="contact" className=" scroll-mt-20  py-12 relative max-w-7xl mx-auto"> {/* Added subtle bg to reduce 'white white' starkness */}
  <p className="text-xl text-[#292B97] font-bold leading-relaxed animate-fade-in-up text-center mb-7">Get In Touch</p>
<Contactcomp/>
</section>



         {/*Blog section */}
<section className="py-12 relative">
  <div className="">

    {/* Header Row */}
    <div className="relative mb-12 flex items-center justify-between">
      <div className="flex items-center flex-1">
        <div className="flex-1 border-t-15 border-[#1c398e]/5"></div>
        <h2 className="px-6 text-3xl font-bold whitespace-nowrap">
          Our Latest Blog
        </h2>
        <div className="flex-1 border-t-15 border-[#1c398e]/5"></div>
      </div>
    </div>
    <div className='px-6 max-w-7xl mx-auto'>
  {/* View All on separate line */}
  <div className="flex justify-end">
    <NavLink
      to="/blog"
      className="text-blue-600 hover:text-blue-800 font-semibold mb-4" 
    >
      View All 
    </NavLink>
  </div>

    {/* Carousel */}
    <div className="relative ">

      {/* Left Arrow */}
      {canGoLeft && (
        <button
          onClick={() => setBlogIndex(prev => prev - 1)}
          className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100"
        >
          <FiChevronLeft/>
        </button>
      )}

      {/* Blogs */}
      <div className="grid lg:grid-cols-3 gap-8">
        {visibleBlogs.map((blog, i) => (
          <NavLink
            key={i}
            to={`/blog/${toSlug(blog.title)}`}
            className="block rounded-lg transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden bg-white"
          >
            <img
              src={blog.banner}
              alt={blog.title}
              className="w-full h-48 object-cover bg-black"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {blog.description}
              </p>
              <span className="text-blue-500 hover:text-blue-700 flex items-center">
                Read More <FiChevronRight className="ml-1" />
              </span>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Right Arrow */}
      {canGoRight && (
        <button
          onClick={() => setBlogIndex(prev => prev + 1)}
          className=" hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100"
        >
          <FiChevronRight/>
        </button>
      )}

    </div>
    </div>


  </div>
</section>

    </div>
  );
};

export default Home;









































// import React, { useEffect, useState } from 'react';
// import Banner from '../components/Banner';
// import {  FaArrowUp} from 'react-icons/fa';
// import OurServices from '../components/OurServices';
// import Chooseus from '../components/Chooseus';
// import AboutZentrix from '../components/AboutZentrix';
// import OurProject from '../components/OurProject';
// import OurClient from '../components/OurClient';
// import Contactcomp from '../components/Contactcomp';
// import Background from "../assets/imagesuse/background1.jpg";
// import SEO from '../components/seo/Seo';
// const Home = () => {


//   return (
//     <div>
     
//           <SEO
//        title="Zentrix Media | Strategy-First Digital Marketing Agency"
//         description="Zentrix Media is a strategy-first digital marketing agency focused on growth, execution, and results."
//          keywords="digital marketing agency, strategy-first marketing, growth marketing"
//          canonicalUrl="https://zentrix.media/"
//          ogImage={Background}
//   author="Zentrix Media"
//           />
//       <Banner />
//     <Chooseus />
// <AboutZentrix />
//     <Contactcomp />

//     </div>
//   );
// };

// export default Home;