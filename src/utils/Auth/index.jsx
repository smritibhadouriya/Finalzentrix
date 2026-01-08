import React, { lazy, Suspense, useEffect, useState ,useRef
} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Main = lazy(() => import('../../components/Mainpage'))
const Home = lazy(() => import('../../pages/Home'))
const Contact = lazy(() => import('../../pages/Contact'))
const About = lazy(() => import('../../pages/About'))
const Career = lazy(() => import('../../pages/Career'))
const Jobpost = lazy(() => import('../../pages/Jobpost'))
const Loading = lazy(() => import('../../components/Loading'))
const NotFound = lazy(() => import('../../components/NotFound'))
const Privacy = lazy(() => import('../../components/Privacy'))
const Terms = lazy(() => import('../../components/Terms'))


const Social = lazy(() => import('../../pages/Services/social'))
const Seo = lazy(() => import('../../pages/Services/Seo'))
const Performance = lazy(() => import('../../pages/Services/performance'))
const PR = lazy(() => import('../../pages/Services/Pr'))
const Blog = lazy(() => import('../../pages/Blogs'))
const Blogsingle = lazy(() => import('../../pages/Blogsingle'))

import SubscribePopup from "../../components/SubscribePopup"
const Auth = () => {
   const [showSubscribe, setShowSubscribe] = useState(false);
useEffect(() => {
  window.scrollTo(0, 0);
  const handleScroll = () => {
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    // Show only if not already shown in this session and scrolled down enough
    if (!sessionStorage.getItem("subscribed-popup-shown") && scrolled > 200) {
      setShowSubscribe(true);
      sessionStorage.setItem("subscribed-popup-shown", "true");
      window.removeEventListener("scroll", handleScroll);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
     
       <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/about" element={<About />} />
                <Route path="/service/social" element={<Social />} />
                <Route path="/service/pr" element={<PR />} />
               <Route path="/service/seo" element={<Seo />} />
                <Route path="/service/performance-marketing" element={<Performance />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/termsnservice" element={<Terms />} />
              <Route path="/career" element={<Career />} />
              <Route path="/posting/:jobpost" element={<Jobpost />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:title" element={<Blogsingle />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
        {showSubscribe && (
        <SubscribePopup
          isOpen={showSubscribe}
          onClose={() => setShowSubscribe(false)}
        />
      )}
      </>
  ) 
}
export default Auth