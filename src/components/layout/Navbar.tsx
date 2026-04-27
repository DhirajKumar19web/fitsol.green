import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `relative inline-block py-1 transition-all duration-200 after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-[#10b981] after:to-[#006ded] after:transition-[width] after:duration-300 hover:after:w-full ${
      isActive 
        ? "bg-gradient-to-r from-[#10b981] to-[#006ded] bg-clip-text text-transparent font-[500]" 
        : "text-[#1a1c3c] font-[200]"
    }`;

  return (
    <nav
      className="flex py-3 px-4 md:px-6 bg-white border-b border-slate-200 relative z-30 font-raleway"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 w-full relative">
        {/* Logo */}
        <Link to="/" className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a1ac3c] z-50 rounded-lg relative">
          <img src={logo} alt="logo" className="w-[80px] h-[30px]" />
        </Link>

        {/* Desktop & Mobile Navigation */}
        <div
          className={`${
            isMobileMenuOpen ? 'translate-x-0' : 'max-lg:translate-x-full'
          } lg:absolute lg:left-1/2 lg:-translate-x-1/2 fixed top-0 right-0 h-full lg:h-auto w-79 lg:w-auto bg-white lg:bg-transparent shadow-2xl lg:shadow-none border-l border-slate-200 lg:border-none z-50 transition-transform duration-300 ease-in-out`}
        >
          {/* Mobile Header (Close Button) */}
          <div className="p-5 flex justify-between items-center border-b border-slate-100 lg:hidden">
            <span className="font-bold text-slate-800">Menu</span>
            <button onClick={toggleMobileMenu} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={22} className="text-slate-600" />
            </button>
          </div>

          <ul className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-14 p-6 lg:p-0 text-[14px] font-[200]">
            <li>
              <span className={`${navLinkClasses({ isActive: false })} cursor-pointer`}>
                Solutions
              </span>
            </li>
            <li>
              <span className={`${navLinkClasses({ isActive: true })} cursor-pointer`}>
                Platform
              </span>
            </li>
            <li>
              <span className={`${navLinkClasses({ isActive: false })} cursor-pointer`}>
                Resources
              </span>
            </li>
            <li>
              <span className={`${navLinkClasses({ isActive: false })} cursor-pointer`}>
                About
              </span>
            </li>
            <li>
              <span className={`${navLinkClasses({ isActive: false })} cursor-pointer`}>
                Pricing
              </span>
            </li>
          </ul>
        </div>

        {/* Auth Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <Link to="/contact" className="hidden sm:block px-4 py-[6px] w-[110px] text-center text-[14px] font-[300] rounded-full  text-white bg-emerald-500 hover:bg-emerald-700 hover:text-white transition-all active:scale-95">
            Contact Us
          </Link>
          <Link to="/signup" className="hidden sm:block px-4 py-[6px] w-[110px] text-center text-[14px] font-[300] rounded-full  text-emerald-500 bg-transparent border border-emerald-500 hover:bg-emerald-700 hover:text-white transition-all active:scale-95">
            Sign Up
          </Link>

          {/* Hamburger Menu Icon */}
          <button onClick={toggleMobileMenu} className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Menu size={24} className="text-slate-800" />
          </button>
        </div>

        {/* Overlay for Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm lg:hidden z-40"
            onClick={toggleMobileMenu}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;