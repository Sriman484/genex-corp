import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUp, ChevronRight } from "lucide-react";
import logo from "../assets/icon.png";
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Our Objective", href: "/objective" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Corporate Training", href: "/corporate-training" },
    { name: "Career Augmentation", href: "/training-intern" },
    { name: "Jobs", href: "/jobs" },
    { name: "Support", href: "/support" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com", icon: Facebook, color: "hover:text-blue-600" },
    { href: "https://twitter.com", icon: Twitter, color: "hover:text-sky-500" },
    { href: "https://www.linkedin.com", icon: Linkedin, color: "hover:text-blue-500" },
    { href: "mailto:info@genexcorp.com", icon: Mail, color: "hover:text-red-500" },
  ];

  return ( 
    <footer className="bg-gray-50 text-gray-800">
      <hr className="text-gray-300 mb-5 max-w-8xl mx-auto" />
      <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Genexcorp Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-gray-900">Genexcorp</span>
          </div>
          <p className="text-sm text-gray-600 leading-normal">
            Empowering businesses through innovative technology and a human touch.
          </p>
          <div className="flex space-x-3">
            {socialLinks.map(({ href, icon: Icon, color }, index) => (
              <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={`text-gray-600 transition-colors ${color}`}>
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-1">
            {quickLinks.map(({ name, href }, index) => (
              <li key={index}>
                <Link
                  to={href}
                  onClick={scrollToTop}
                  className="group text-gray-600 hover:text-red-500 flex items-center rounded-md px-2 py-1 transition-all duration-300 text-sm"
                >
                  <ChevronRight size={16} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start">
              <MapPin className="text-red-500 mr-2 mt-0.5" size={18} />
              <span>VT Plaza, 4th Floor, KPHB Colony, Kukatpally, Hyderabad, India</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-red-500 mr-2" size={18} />
              <span>+91-9920779995</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-red-500 mr-2" size={18} />
              <a href="mailto:hr@genexcorp.com" className="hover:text-red-500 transition-colors">hr@genexcorp.com</a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-3">Subscribe to our newsletter for the latest updates.</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-gray-100 border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-1.5 px-3 rounded text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 py-1 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <span>&copy; {new Date().getFullYear()} Genexcorp. All rights reserved.</span>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
