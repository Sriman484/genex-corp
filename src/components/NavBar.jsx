import React, { useState, useEffect, useRef } from 'react';
import icon from '../assets/icon.png';
import { Link } from 'react-router-dom';
import { ChevronDown, Home as HomeIcon, Briefcase, GraduationCap, BadgeCheck, LifeBuoy, Package, Lightbulb, Users, LayoutDashboard, Rocket, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsDropdownOpen1(false);
    setIsDropdownOpen3(false);
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
  };

  const closeAllDropdowns = () => {
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) closeAllDropdowns();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) &&
        (btnRef1.current && !btnRef1.current.contains(event.target)) &&
        (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) &&
        (btnRef2.current && !btnRef2.current.contains(event.target)) &&
        (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) &&
        (btnRef3.current && !btnRef3.current.contains(event.target))
      ) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownItemClick = () => {
    closeAllDropdowns();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-gray-50 p-1 ${isFixed ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''}`}>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={icon} className="h-10" alt="Logo" />
          <span className="font-bold text-1xl text-gray-800 tracking-wide whitespace-nowrap">
            <span className="text-red-600">GENEX</span> CORPORATE SERVICES PVT. LTD
          </span>
        </Link>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200"
          aria-controls="mega-menu-full"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`items-center justify-between font-medium ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-red-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <button
                ref={btnRef1}
                onClick={toggleDropdown1}
                className="flex items-center gap-2 w-full py-2 px-3 rounded-sm md:w-auto hover:bg-red-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              >
                <HomeIcon className="w-4 h-4" />
                Home
                <ChevronDown className="w-2.5 h-2.5 ms-2.5" />
              </button>
            </li>
            <li>
              <button
                ref={btnRef2}
                onClick={toggleDropdown2}
                className="flex items-center gap-2 w-full py-2 px-3 rounded-sm md:w-auto hover:bg-red-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              >
                <Briefcase className="w-4 h-4" />
                Services
                <ChevronDown className="w-2.5 h-2.5 ms-2.5" />
              </button>
            </li>
            <li>
              <button
                ref={btnRef3}
                onClick={toggleDropdown3}
                className="flex items-center gap-2 w-full py-2 px-3 rounded-sm md:w-auto hover:bg-red-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              >
                <GraduationCap className="w-4 h-4" />
                Trainings
                <ChevronDown className="w-2.5 h-2.5 ms-2.5" />
              </button>
            </li>
            <li>
              <Link to="/jobs" onClick={handleDropdownItemClick} className="flex items-center gap-2 py-2 px-3 rounded-sm hover:bg-red-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0">
                <BadgeCheck className="w-4 h-4" /> Jobs
              </Link>
            </li>
            <li>
              <Link to="/support" onClick={handleDropdownItemClick} className="flex items-center gap-2 py-2 px-3 rounded-sm hover:bg-red-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0">
                <LifeBuoy className="w-4 h-4" /> Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={dropdownRef1}
        className={`mt-1 shadow-xs bg-white md:bg-white border-y border-transparent ${isDropdownOpen1 ? 'block' : 'hidden'}`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto md:px-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li>
              <Link to="/objective" onClick={handleDropdownItemClick} className="block p-3 rounded-lg hover:bg-red-50">
                <div className="font-semibold flex items-center gap-2"><Rocket className="w-4 h-4" />Our Objective</div>
                <span className="text-sm text-gray-400">Converting non-possibilities to possibilities</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={handleDropdownItemClick} className="block p-3 rounded-lg hover:bg-red-50">
                <div className="font-semibold flex items-center gap-2"><LayoutDashboard className="w-4 h-4" />Portfolio</div>
                <span className="text-sm text-gray-400">Empowering Business Through Smart Solutions.</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={dropdownRef2}
        className={`mt-1 bg-white md:bg-white ${isDropdownOpen2 ? 'block' : 'hidden'}`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto md:px-6">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li>
              <Link to="/product-dev" onClick={handleDropdownItemClick} className="block p-3 rounded-lg hover:bg-red-50">
                <div className="font-semibold flex items-center gap-2"><Package className="w-4 h-4" />Product Development</div>
                <span className="text-sm text-gray-400">Innovating Ideas, Engineering Excellence.</span>
              </Link>
            </li>
            <li>
              <Link to="/it-consult" onClick={handleDropdownItemClick} className="block p-3 rounded-lg hover:bg-red-50">
                <div className="font-semibold flex items-center gap-2"><Lightbulb className="w-4 h-4" />IT Consulting</div>
                <span className="text-sm text-gray-400">Strategic Tech Insights, Smarter Business Outcomes.</span>
              </Link>
            </li>
            <li>
              <Link to="/it-resource" onClick={handleDropdownItemClick} className="block p-3 rounded-lg hover:bg-red-50">
                <div className="font-semibold flex items-center gap-2"><Users className="w-4 h-4" />IT Resourcing</div>
                <span className="text-sm text-gray-400">Right Talent. Right Time. Real Results</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={dropdownRef3}
        className={`mt-1 shadow-xs bg-white md:bg-white ${isDropdownOpen3 ? 'block' : 'hidden'}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-xl px-4 py-5 mx-auto md:px-6 gap-4">
          <ul>
            <li>
              <Link to="/training-intern" onClick={handleDropdownItemClick} className="block p-3 rounded-lg hover:bg-red-50">
                <div className="font-semibold flex items-center gap-2"><GraduationCap className="w-4 h-4" />Trainings / Internships</div>
                <span className="text-sm text-gray-400">Empowering Students Through Hands-On Learning.</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/realtime-intern" onClick={handleDropdownItemClick} className="block p-3 rounded-lg hover:bg-red-50">
                <div className="font-semibold flex items-center gap-2"><Briefcase className="w-4 h-4" />Real-Time Internships</div>
                <span className="text-sm text-gray-400">Experience the Industry, Not Just the Theory.</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/corporate-training" onClick={handleDropdownItemClick} className="block p-3 rounded-lg hover:bg-red-50">
                <div className="font-semibold flex items-center gap-2"><ShieldCheck className="w-4 h-4" />Corporate Training</div>
                <span className="text-sm text-gray-400">Upskill Your Workforce, Accelerate Success.</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='text-gray-300' />
    </nav>
  );
};

export default Navbar;
