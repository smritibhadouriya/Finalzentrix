import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../Data/NavbarItems';
import logo from '../assets/logo.png'; // Replace with your actual logo image path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const desktopServiceDropdownRef = useRef(null);
  const mobileServiceDropdownRef = useRef(null);
  const authDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideDesktop =
        desktopServiceDropdownRef.current &&
        !desktopServiceDropdownRef.current.contains(event.target);
      const isOutsideMobile =
        mobileServiceDropdownRef.current &&
        !mobileServiceDropdownRef.current.contains(event.target);
      const isOutsideAuth =
        authDropdownRef.current && !authDropdownRef.current.contains(event.target);

      if (isOutsideDesktop && isOutsideMobile) {
        setIsServicesOpen(false);
      }
      if (isOutsideAuth && isAuthPopupOpen) {
        setIsAuthPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAuthPopupOpen]);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const smThreshold = 0;
      const mdThreshold = 50;
      const lgThreshold = 100;
      const isLg = window.innerWidth >= 1024;
      const isMd = window.innerWidth >= 768 && window.innerWidth < 1024;
      const isSm = window.innerWidth < 768;

      if (isSm && scrollY > smThreshold) {
        setIsScrolled(true);
      } else if (isMd && scrollY > mdThreshold) {
        setIsScrolled(true);
      } else if (isLg && scrollY > lgThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const isNavItemActive = (item) => {
    if (item.path === location.pathname) return true;
    if (item.subItems) {
      return item.subItems.some((subItem) => subItem.path === location.pathname);
    }
    return false;
  };

  const desktopNavItems = navItems.filter((item) => item.name !== 'Contact');
  const contactItem = navItems.find((item) => item.name === 'Contact');
  const mobileNavItems = navItems.filter((item) => item.name !== 'Contact');

  return (
    <>
      {/* Top Bar */}
      <div className="fixed w-full top-0 z-40 bg-gradient-to-r from-[#292B97] to-[#6466B6] text-sm text-gray-600 py-2 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto md:px-0 lg:px-6 text-md font-medium text-white tracking-wide text-center">
          India&apos;s Leading 360° Digital Marketing Agency
        </div>
      </div>
      <nav className="fixed w-full md:px-6 z-50 bg-white border-b border-[#292B97]/10 top-8">
        <div className="max-w-7xl mx-auto px-4 md:px-0 lg:px-6 ">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => navigate('/')}
              >
                <img
                  src={logo} // Replace with your actual logo image path (e.g., import logo from '../assets/logo.png' and use src={logo})
                  alt="Zentrix Logo"
                  className="h-10 w-auto" // Adjust height as needed to match the original text size
                />
              </div>
            </div>
            {/* Desktop Centered Nav Links */}
            <div className="hidden lg:flex items-center space-x-8 mx-auto">
              {desktopNavItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={item.name === 'Service' ? desktopServiceDropdownRef : null}
                >
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={toggleServicesDropdown}
                        className={`${
                          isNavItemActive(item)
                            ? 'text-[#292B97] font-semibold text-lg relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#292B97] after:rounded-full'
                            : 'text-[#2D2D2D] text-lg'
                        } hover:text-[#292B97] px-4 py-1 transition-all duration-300 flex items-center group`}
                      >
                        {item.name}
                        <svg
                          className={`w-5 h-5 ml-2 transform ${isServicesOpen ? 'rotate-180' : ''} group-hover:text-[#292B97]`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-3 w-60 bg-white shadow-lg rounded-lg py-1 z-50 ">
                          {item.subItems.map((subItem) => (
                            <NavLink
                              key={subItem.name}
                              to={subItem.path}
                              className={({ isActive }) =>
                                `
      relative block px-4 py-2 text-lg rounded-md
      transition-all duration-300 ease-out
      ${
        isActive
          ? 'text-[#292B97] font-semibold '
          : 'text-[#2D2D2D]'
      }
      hover:text-[#292B97] hover:bg-[#292B97]/5 hover:-translate-y-1
      `
                              }
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {subItem.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? 'text-[#292B97] text-lg relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#292B97] after:rounded-full font-semibold'
                            : 'text-[#2D2D2D] text-lg'
                        } hover:text-[#292B97] px-4 py-1 transition-all duration-300`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
            {/* Desktop Contact Button */}
            <div className="hidden lg:flex items-center">
              {contactItem && (
                <NavLink
                  to={contactItem.path}
                  className={`bg-gradient-to-r from-[#292B97] to-[#6466B6] text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-[#292B97]/90 transition-all duration-300 ${
                    location.pathname === contactItem.path ? 'ring-2 ring-white/50' : ''
                  }`}
                >
                  Get Started
                </NavLink>
              )}
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-[#2D2D2D] hover:text-[#292B97] focus:outline-none focus:ring-2 focus:ring-[#292B97] rounded-md p-2"
                aria-label="Toggle menu"
              >
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
        >
          <div className="flex justify-end p-5">
            <button
              onClick={toggleMenu}
              className="text-[#2D2D2D] hover:text-[#292B97] focus:outline-none focus:ring-2 focus:ring-[#292B97] rounded-md p-2"
              aria-label="Close menu"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-5 px-6">
            {/* Mobile Nav Links as Buttons */}
            {mobileNavItems.map((item) => (
              <div key={item.name} ref={item.name === 'Service' ? mobileServiceDropdownRef : null}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={toggleServicesDropdown}
                      className={`${
                        isNavItemActive(item)
                          ? 'text-[#292B97]'
                          : 'text-[#2D2D2D]'
                      } hover:text-[#292B97] transition-all duration-300
     w-full text-left flex items-center py-3 px-4 text-lg`}
                    >
                      {item.name}
                      <svg
                        className={`w-5 h-5 ml-2 transform ${isServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServicesOpen && (
                      <div className="pl-6 pt-3 flex flex-col space-y-3">
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className={({ isActive }) =>
                              `${
                                isActive ? 'text-[#292B97]' : 'text-[#2D2D2D]'
                              } text-lg hover:text-[#292B97] transition-all duration-300 py-2 pl-4`
                            }
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? 'text-[#292B97]'
                          : 'text-[#2D2D2D]'
                      } hover:text-[#292B97] py-3 px-4 transition-all duration-300 text-lg`
                    }
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsServicesOpen(false);
                    }}
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
            {/* Mobile Contact Button */}
            {contactItem && (
              <NavLink
                to={contactItem.path}
                className={`bg-[#292B97] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#292B97]/90 transition-all duration-300 text-center ${
                  location.pathname === contactItem.path ? 'ring-2 ring-white/50' : ''
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsServicesOpen(false);
                }}
              >
                {contactItem.name}
              </NavLink>
            )}
          </div>
        </div>
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 lg:hidden z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { navItems } from '../Data/NavbarItems';
// import logo from '../assets/logo.png'; // Replace with your actual logo image path
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();
//   const desktopServiceDropdownRef = useRef(null);
//   const mobileServiceDropdownRef = useRef(null);
//   const authDropdownRef = useRef(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     setIsServicesOpen(false);
//   };

//   const toggleServicesDropdown = () => {
//     setIsServicesOpen(!isServicesOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const isOutsideDesktop =
//         desktopServiceDropdownRef.current &&
//         !desktopServiceDropdownRef.current.contains(event.target);
//       const isOutsideMobile =
//         mobileServiceDropdownRef.current &&
//         !mobileServiceDropdownRef.current.contains(event.target);
//       const isOutsideAuth =
//         authDropdownRef.current && !authDropdownRef.current.contains(event.target);
//       if (isOutsideDesktop && isOutsideMobile) {
//         setIsServicesOpen(false);
//       }
//       if (isOutsideAuth && isAuthPopupOpen) {
//         setIsAuthPopupOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isAuthPopupOpen]);

//   const navigate = useNavigate();
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const smThreshold = 0;
//       const mdThreshold = 50;
//       const lgThreshold = 100;

//       const isLg = window.innerWidth >= 1024;
//       const isMd = window.innerWidth >= 768 && window.innerWidth < 1024;
//       const isSm = window.innerWidth < 768;

//       if (isSm && scrollY > smThreshold) {
//         setIsScrolled(true);
//       } else if (isMd && scrollY > mdThreshold) {
//         setIsScrolled(true);
//       } else if (isLg && scrollY > lgThreshold) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleScroll);
//     handleScroll();
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleScroll);
//     };
//   }, []);

//   const isNavItemActive = (item) => {
//     if (item.path === location.pathname) return true;
//     if (item.subItems) {
//       return item.subItems.some((subItem) => subItem.path === location.pathname);
//     }
//     return false;
//   };

//   const desktopNavItems = navItems.filter((item) => item.name !== 'Contact');
//   const contactItem = navItems.find((item) => item.name === 'Contact');
//   const mobileNavItems = navItems.filter((item) => item.name !== 'Contact');

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="fixed w-full top-0 z-40 bg-[#2D2D2D] text-sm text-gray-600 py-2 md:px-6 lg:px-10">
//         <div className="max-w-7xl mx-auto px-4 md:px-0 lg:px-6 flex justify-between items-center text-md">
//           <div className="text-white hidden sm:block ">
//             India&apos;s Leading 360° Digital Marketing Agency
//           </div>
//           <div className="flex space-x-6 items-center">
//             <Link to="mailto:hello@zentrix.media" className="text-white">
//               hello@zentrix.media
//             </Link>
//           </div>
//         </div>
//       </div>

//       <nav className="fixed w-full md:px-6  z-50 bg-gray-100 top-8">
//         <div className="max-w-7xl mx-auto px-4 md:px-0 lg:px-6 ">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex-shrink-0">
//               <div
//                 className="flex justify-center items-center cursor-pointer"
//                 onClick={() => navigate('/')}
//               >
//                 <img
//                   src= {logo}// Replace with your actual logo image path (e.g., import logo from '../assets/logo.png' and use src={logo})
//                   alt="Zentrix Logo"
//                   className="h-10 w-auto" // Adjust height as needed to match the original text size
//                 />
//               </div>
//             </div>

//             {/* Desktop Centered Nav Links */}
//             <div className="hidden lg:flex items-center space-x-8 mx-auto">
//               {desktopNavItems.map((item) => (
//                 <div
//                   key={item.name}
//                   className="relative"
//                   ref={item.name === 'Service' ? desktopServiceDropdownRef : null}
//                 >
//                   {item.subItems ? (
//                     <div>
//                       <button
//                         onClick={toggleServicesDropdown}
//                         className={`${
//                           isNavItemActive(item)
//                             ? 'text-[#2D2D2D]  text-lg border-b-2 border-[#F16D34]'
//                             : 'text-[#2D2D2D]  text-lg'
//                         } hover:text-[#F16D34] px-4 py-1 transition-all duration-300 flex items-center group`}
//                       >
//                         {item.name}
                        
//                         <svg
//                           className={`w-5 h-5 ml-2 transform ${isServicesOpen ? 'rotate-180' : ''} group-hover:text-[#F16D34]`}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </button>
//                       {isServicesOpen && (
//                         <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-lg rounded-lg py-3 z-50 border border-[#F16D34]/20">
//                           {item.subItems.map((subItem) => (
//                             <NavLink
//                               key={subItem.name}
//                               to={subItem.path}
//                               className={({ isActive }) =>
//                                 `${
//                                   isActive ? 'text-[#F16D34] ' : 'text-[#2D2D2D] '
//                                 } block px-4 py-2 text-lg hover:text-[#F16D34] hover:bg-gray-100 transition-all duration-300`
//                               }
//                               onClick={() => setIsServicesOpen(false)}
//                             >
//                               {subItem.name}
//                             </NavLink>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <NavLink
//                       to={item.path}
//                       className={({ isActive }) =>
//                         `${
//                           isActive
//                             ? '  text-lg border-b-2 border-[#F16D34] text-[#F16D34]'
//                             : 'text-[#2D2D2D]  text-lg'
//                         } hover:text-[#F16D34] px-4 py-2 transition-all duration-300`
//                       }
//                     >
//                       {item.name}
//                     </NavLink>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Desktop Contact Button */}
//             <div className="hidden lg:flex items-center">
//               {contactItem && (
//                 <NavLink
//                   to={contactItem.path}
//                   className={`bg-[#F16D34] text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-[#F16D34]/90 transition-all duration-300 ${
//                     location.pathname === contactItem.path ? 'ring-2 ring-white/50' : ''
//                   }`}
//                 >
//                   {contactItem.name}
//                 </NavLink>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="lg:hidden flex items-center">
//               <button
//                 onClick={toggleMenu}
//                 className="text-[#2D2D2D] hover:text-[#F16D34] focus:outline-none focus:ring-2 focus:ring-[#F16D34] rounded-md p-2"
//                 aria-label="Toggle menu"
//               >
//                 <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform ${
//             isMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           } transition-transform duration-300 ease-in-out lg:hidden z-50`}
//         >
//           <div className="flex justify-end p-5">
//             <button
//               onClick={toggleMenu}
//               className="text-[#2D2D2D] hover:text-[#F16D34] focus:outline-none focus:ring-2 focus:ring-[#F16D34] rounded-md p-2"
//               aria-label="Close menu"
//             >
//               <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <div className="flex flex-col space-y-5 px-6">
//             {/* Mobile Nav Links as Buttons */}
//             {mobileNavItems.map((item) => (
//               <div key={item.name} ref={item.name === 'Service' ? mobileServiceDropdownRef : null}>
//                 {item.subItems ? (
//                   <div>
//                    <button
//   onClick={toggleServicesDropdown}
//   className={`${
//     isNavItemActive(item)
//       ? 'text-[#F16D34]'
//       : 'text-[#2D2D2D]'
//   } hover:text-[#F16D34] transition-all duration-300 
//      w-full text-left flex items-center py-3 px-4 text-lg`}
// >

//                       {item.name}
//                       <svg
//                         className={`w-5 h-5 ml-2 transform ${isServicesOpen ? 'rotate-180' : ''}`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
//                     {isServicesOpen && (
//                       <div className="pl-6 pt-3 flex flex-col space-y-3">
//                         {item.subItems.map((subItem) => (
//                           <NavLink
//                             key={subItem.name}
//                             to={subItem.path}
//                             className={({ isActive }) =>
//                               `${
//                                 isActive ? 'text-[#F16D34]' : 'text-[#2D2D2D]'
//                               } text-lg hover:text-[#F16D34] transition-all duration-300 py-2 pl-4`
//                             }
//                             onClick={() => {
//                               setIsMenuOpen(false);
//                               setIsServicesOpen(false);
//                             }}
//                           >
//                             {subItem.name}
//                           </NavLink>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `${
//                         isActive
//                           ? 'text-[#F16D34]'
//                           : 'text-[#2D2D2D]'
//                       } hover:text-[#F16D34] py-3 px-4 transition-all duration-300 text-lg`
//                     }
//                     onClick={() => {
//                       setIsMenuOpen(false);
//                       setIsServicesOpen(false);
//                     }}
//                   >
//                     {item.name}
//                   </NavLink>
//                 )}
//               </div>
//             ))}
//             {/* Mobile Contact Button */}
//             {contactItem && (
//               <NavLink
//                 to={contactItem.path}
//                 className={`bg-[#F16D34] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#F16D34]/90 transition-all duration-300 text-center ${
//                   location.pathname === contactItem.path ? 'ring-2 ring-white/50' : ''
//                 }`}
//                 onClick={() => {
//                   setIsMenuOpen(false);
//                   setIsServicesOpen(false);
//                 }}
//               >
//                 {contactItem.name}
//               </NavLink>
//             )}
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div
//             className="fixed inset-0 bg-opacity-50 lg:hidden z-40"
//             onClick={toggleMenu}
//           ></div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;