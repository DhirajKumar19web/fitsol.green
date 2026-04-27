import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from './Container';
import {
  Menu, X, Truck, Trash2, ShoppingCart, Leaf, Package, RefreshCw,
  Shirt, Building, Car, Factory, Layers, FileText, ArrowRight,
  BookOpen, HelpCircle, Search, Calculator, BarChart
} from 'lucide-react';
import logo from '../../assets/logo.svg';

const managedServices = [
  { icon: Truck, title: 'Green Logistics', desc: 'Lower costs, smarter routes' },
  { icon: Trash2, title: 'Waste Management', desc: 'Efficient, compliant, cost-cutting' },
  { icon: ShoppingCart, title: 'Green Procurement', desc: 'Sustainable sourcing, real savings' },
  { icon: Leaf, title: 'Carbon Credits', desc: 'Monetize verified emission cuts' },
  { icon: Package, title: 'Green Packaging', desc: 'Cut waste, protect margins' },
  { icon: RefreshCw, title: 'EPR', desc: '' },
];

const industries = [
  { icon: Shirt, title: 'Textile', desc: 'Sustainable textiles, no extra costs' },
  { icon: Building, title: 'Cement', desc: 'Cleaner cement, reduced emissions' },
  { icon: Car, title: 'Automotive', desc: 'Efficient mobility, lower emissions' },
  { icon: Factory, title: 'Iron & Steel', desc: 'Strong steel, smaller footprint' },
  { icon: Layers, title: 'Aluminium', desc: 'Greener aluminium, lower costs' },
  { icon: FileText, title: 'Paper & Pulp', desc: 'Smarter paper, cleaner processes' },
];

const platformTools = [
  { id: 'kyoto', title: 'Kyoto™', icon: FileText, desc: 'Carbon reporting and accounting' },
  { id: 'greencount', title: 'Greencount™', icon: Calculator, desc: 'Carbon footprint calculator' },
  { id: 'greenalign', title: 'Greenalign™', icon: BarChart, desc: 'ESG alignment and tracking' },
  { id: 'greenpath', title: 'Greenpath™', icon: Leaf, desc: 'Sustainable strategy mapping' },
  { id: 'greenfind', title: 'Greenfind™', icon: Search, desc: 'Eco-friendly vendor discovery' },
];

const resourceLinks = [
  { id: 'library', icon: BookOpen, title: 'Resource Library', desc: 'Your guide to decarbonization' },
  { id: 'faqs', icon: HelpCircle, title: 'FAQs', desc: 'Carbon accounting queries solved' },
  { id: 'calculator', icon: Calculator, title: 'Carbon Calculator', desc: 'Measure, track, and reduce' },
  { id: 'esg', icon: BarChart, title: 'ESG Intelligence', desc: 'Evaluate your ESG performance' },
];

const resourceDetails: Record<string, { icon: any, title: string, desc: string }[]> = {
  library: [
    { icon: BookOpen, title: 'Blogs/Newsletter', desc: 'Insights, stories, and sustainability updates' },
    { icon: BookOpen, title: 'Podcast', desc: 'Expert voices on decarbonization and green innovation' }
  ]
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeResourceTab, setActiveResourceTab] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative lg:inline-block lg:py-1 transition-all duration-200 max-lg:after:hidden after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-[#10b981] after:to-[#006ded] after:transition-[width] after:duration-300 hover:after:w-full ${isActive
      ? "bg-gradient-to-r from-[#10b981] to-[#006ded] bg-clip-text text-transparent font-[500]"
      : "text-[#1a1c3c] lg:font-[200] max-lg:font-[500]"
    }`;

  return (
    <nav
      className="flex py-3 bg-white border-b border-slate-200 sticky top-0 z-50 font-raleway"
      aria-label="Main navigation"
    >
      <Container className="flex items-center justify-between gap-4 relative">
        {/* Logo */}
        <Link to="/" className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a1ac3c] z-50 rounded-lg relative">
          <img src={logo} alt="logo" className="w-[80px] h-[30px]" />
        </Link>

        {/* Desktop & Mobile Navigation */}
        <div
          className={`${isMobileMenuOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'
            } fixed top-0 left-0 w-full h-full bg-white z-[60] flex flex-col lg:flex-row lg:opacity-100 lg:pointer-events-auto lg:absolute lg:left-1/2 lg:top-0 lg:h-full lg:items-center lg:-translate-x-1/2 lg:w-auto lg:bg-transparent lg:z-40 transition-transform duration-300 ease-in-out`}
        >
          {/* Mobile Internal Header */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-slate-100 lg:hidden shrink-0">
            <Link to="/" onClick={toggleMobileMenu} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a1ac3c] rounded-lg">
              <img src={logo} alt="logo" className="w-[80px] h-[30px]" />
            </Link>
            <button onClick={toggleMobileMenu} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <X size={24} className="text-slate-800" />
            </button>
          </div>

          <ul className="flex flex-col lg:flex-row lg:items-center lg:h-full gap-0 lg:gap-14 p-6 lg:p-0 text-[14px] font-[200] overflow-y-auto lg:overflow-visible flex-1">
            <li
              className="relative w-full lg:w-auto"
              onMouseEnter={() => window.innerWidth >= 1024 && setActiveDropdown('solutions')}
              onMouseLeave={() => { if (window.innerWidth >= 1024) setActiveDropdown(null); }}
            >
              <div
                className={`${navLinkClasses({ isActive: false })} cursor-pointer flex items-center justify-between w-full lg:w-auto text-[16px] lg:text-[14px] max-lg:px-3 max-lg:py-3 transition-all`}
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
              >
                <span>Solutions</span>
                <svg className={`w-5 h-5 lg:hidden transition-transform text-slate-400 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>

              {/* Mobile Accordion - Solutions */}
              <div className={`lg:hidden overflow-hidden transition-all duration-300 ${activeDropdown === 'solutions' ? 'max-h-[1200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-10 pl-[14px] pr-3 pb-6">
                  <div>
                    <h3 className="text-slate-500 text-[13px] font-bold mb-6 tracking-wider uppercase">By Managed Service</h3>
                    <div className="flex flex-col gap-6">
                      {managedServices.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 cursor-pointer group">
                          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 group-active:scale-95 group-hover:scale-105 transition-transform">
                            <item.icon size={18} />
                          </div>
                          <span className="text-[16px] font-[400] text-slate-700 group-hover:text-emerald-600 transition-colors">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-slate-500 text-[13px] font-bold mb-6 tracking-wider uppercase">By Industry</h3>
                    <div className="flex flex-col gap-6">
                      {industries.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 cursor-pointer group">
                          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 group-active:scale-95 group-hover:scale-105 transition-transform">
                            <item.icon size={18} />
                          </div>
                          <span className="text-[16px] font-[400] text-slate-700 group-hover:text-emerald-600 transition-colors">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mega Menu - Solutions */}
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 pt-6 w-[750px] hidden lg:block z-50 cursor-default">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 border border-slate-100 flex flex-col gap-8 text-left">
                    {/* BY MANAGED SERVICE */}
                    <div>
                      <h3 className="text-slate-500 text-[11px] font-bold mb-4 tracking-wider uppercase">By Managed Service</h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {managedServices.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                            <div className="relative w-10 h-10 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_15px_rgba(16,185,129,0.4)]">
                              <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#006ded] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <item.icon size={20} className="relative z-10" />
                            </div>
                            <div>
                              <h4 className="text-[13px] font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                {item.title}
                                <ArrowRight size={16} className="inline ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                              </h4>
                              {item.desc && <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BY INDUSTRY */}
                    <div>
                      <h3 className="text-slate-500 text-[11px] font-bold mb-4 tracking-wider uppercase">By Industry</h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {industries.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                            <div className="relative w-10 h-10 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_15px_rgba(16,185,129,0.4)]">
                              <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#006ded] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <item.icon size={20} className="relative z-10" />
                            </div>
                            <div>
                              <h4 className="text-[13px] font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                {item.title}
                                <ArrowRight size={16} className="inline ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                              </h4>
                              {item.desc && <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li
              className="relative w-full lg:w-auto"
              onMouseEnter={() => window.innerWidth >= 1024 && setActiveDropdown('platform')}
              onMouseLeave={() => { if (window.innerWidth >= 1024) setActiveDropdown(null); }}
            >
              <div
                className={`${navLinkClasses({ isActive: false })} cursor-pointer flex items-center justify-between w-full lg:w-auto text-[16px] lg:text-[14px] max-lg:px-3 max-lg:py-3 transition-all`}
                onClick={() => setActiveDropdown(activeDropdown === 'platform' ? null : 'platform')}
              >
                <span>Platform</span>
                <svg className={`w-5 h-5 lg:hidden transition-transform text-slate-400 ${activeDropdown === 'platform' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>

              {/* Mobile Accordion - Platform */}
              <div className={`lg:hidden overflow-hidden transition-all duration-300 ${activeDropdown === 'platform' ? 'max-h-[1200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-6 pl-[14px] pr-3 pb-6">
                  {platformTools.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 group-active:scale-95 group-hover:scale-105 transition-transform">
                        <item.icon size={18} />
                      </div>
                      <span className="text-[16px] font-[400] text-slate-700 group-hover:text-emerald-600 transition-colors">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mega Menu - Platform */}
              {activeDropdown === 'platform' && (
                <div className="absolute top-full left-0 pt-6 w-[750px] hidden lg:block z-50 cursor-default">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 border border-slate-100 text-left">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {platformTools.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                          <div className="relative w-10 h-10 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_15px_rgba(16,185,129,0.4)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#006ded] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <item.icon size={20} className="relative z-10" />
                          </div>
                          <div>
                            <h4 className="text-[13px] font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                              {item.title}
                              <ArrowRight size={16} className="inline ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </h4>
                            {item.desc && <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li
              className="relative w-full lg:w-auto"
              onMouseEnter={() => window.innerWidth >= 1024 && setActiveDropdown('resources')}
              onMouseLeave={() => { if (window.innerWidth >= 1024) { setActiveDropdown(null); setActiveResourceTab(null); } }}
            >
              <div
                className={`${navLinkClasses({ isActive: false })} cursor-pointer flex items-center justify-between w-full lg:w-auto text-[16px] lg:text-[14px] max-lg:px-3 max-lg:py-3 transition-all`}
                onClick={() => {
                  setActiveDropdown(activeDropdown === 'resources' ? null : 'resources');
                  if (activeDropdown !== 'resources') setActiveResourceTab(null);
                }}
              >
                <span>Resources</span>
                <svg className={`w-5 h-5 lg:hidden transition-transform text-slate-400 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>

              {/* Mobile Accordion - Resources */}
              <div className={`lg:hidden overflow-hidden transition-all duration-300 ${activeDropdown === 'resources' ? 'max-h-[1200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-6 pl-[14px] pr-3 pb-6">
                  {resourceLinks.map((item, idx) => (
                    <div key={idx} className={`flex flex-col transition-all duration-300 ${activeResourceTab === item.id ? 'gap-4' : 'gap-0'}`}>
                      <div
                        className="flex items-center justify-between cursor-pointer group"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveResourceTab(activeResourceTab === item.id ? null : item.id);
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 group-active:scale-95 transition-transform">
                            <item.icon size={18} />
                          </div>
                          <span className={`text-[16px] text-slate-700 transition-all ${activeResourceTab === item.id ? 'font-[500]' : 'font-[400]'}`}>{item.title}</span>
                        </div>
                        {resourceDetails[item.id] && (
                          <svg
                            className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${activeResourceTab === item.id ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                      {resourceDetails[item.id] && (
                        <div className={`overflow-hidden transition-all duration-300 ${activeResourceTab === item.id ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                          <div className="pl-2 flex flex-col gap-5 pb-2">
                            {resourceDetails[item.id].map((detail, dIdx) => (
                              <div key={dIdx} className="flex items-center gap-4 cursor-pointer group">
                                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 group-active:scale-95 group-hover:scale-105 transition-transform">
                                  <detail.icon size={14} />
                                </div>
                                <span className="text-[15px] font-[400] text-slate-600 group-hover:text-emerald-600 transition-colors">{detail.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mega Menu - Resources */}
              {activeDropdown === 'resources' && (() => {
                const hasDetails = activeResourceTab && resourceDetails[activeResourceTab]?.length > 0;

                return (
                  <div className="absolute top-full left-0 pt-6 hidden lg:block z-50 cursor-default">
                    <div className={`bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 border border-slate-100 flex text-left min-h-[300px] overflow-hidden transition-all duration-300 ease-out ${hasDetails ? 'w-[700px]' : 'w-[382px]'}`}>

                      {/* Left Pane */}
                      <div className={`w-[318px] shrink-0 pr-6 transition-colors duration-300 ${hasDetails ? 'border-r-2 border-slate-200' : 'border-r-2 border-transparent'}`}>
                        <h3 className="text-slate-500 text-[11px] font-bold mb-4 tracking-wider uppercase">Resources</h3>
                        <div className="flex flex-col gap-2">
                          {resourceLinks.map((item) => (
                            <div
                              key={item.id}
                              onMouseEnter={() => setActiveResourceTab(item.id)}
                              className={`flex items-start gap-4 p-3 rounded-xl transition-colors cursor-pointer group ${activeResourceTab === item.id ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                            >
                              <div className={`relative w-10 h-10 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white overflow-hidden transition-all duration-300 ${activeResourceTab === item.id ? 'scale-110 shadow-[0_4px_15px_rgba(16,185,129,0.4)]' : 'group-hover:scale-110 group-hover:shadow-[0_4px_15px_rgba(16,185,129,0.4)]'}`}>
                                <div className={`absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#006ded] transition-opacity duration-300 ${activeResourceTab === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                                <item.icon size={20} className="relative z-10" />
                              </div>
                              <div>
                                <h4 className={`text-[13px] font-semibold transition-colors ${activeResourceTab === item.id ? 'text-emerald-600' : 'text-slate-800 group-hover:text-emerald-600'}`}>
                                  {item.title}
                                  <ArrowRight size={16} className={`inline ml-1 transition-all ${activeResourceTab === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                                </h4>
                                {item.desc && <p className="text-[11px] leading-tight text-slate-500 mt-0.5">{item.desc}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Pane */}
                      <div className={`w-[318px] shrink-0 pl-8 transition-opacity duration-300 delay-75 ${hasDetails ? 'opacity-100' : 'opacity-0'}`}>
                        <h3 className="text-slate-600 text-[13px] font-semibold mb-6">{activeResourceTab ? resourceLinks.find(r => r.id === activeResourceTab)?.title : ' '}</h3>
                        <div className="flex flex-col gap-6">
                          {(activeResourceTab ? resourceDetails[activeResourceTab] : [])?.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                              <div className="relative w-10 h-10 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_15px_rgba(16,185,129,0.4)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#006ded] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <item.icon size={20} className="relative z-10" />
                              </div>
                              <div>
                                <h4 className="text-[13px] font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                  {item.title}
                                  <ArrowRight size={16} className="inline ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </h4>
                                {item.desc && <p className="text-[11px] leading-tight text-slate-500 mt-0.5">{item.desc}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })()}
            </li>
            <li className="w-full lg:w-auto">
              <NavLink to="/about" className={({ isActive }) => `${navLinkClasses({ isActive })} cursor-pointer flex items-center w-full lg:w-auto text-[16px] lg:text-[14px] max-lg:px-3 max-lg:py-3`}>
                About
              </NavLink>
            </li>
            <li className="w-full lg:w-auto">
              <NavLink to="/pricing" className={({ isActive }) => `${navLinkClasses({ isActive })} cursor-pointer flex items-center w-full lg:w-auto text-[16px] lg:text-[14px] max-lg:px-3 max-lg:py-3`}>
                Pricing
              </NavLink>
            </li>
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-3 p-6 lg:hidden shrink-0 border-t border-slate-100 mt-auto">
            <Link to="/signup" onClick={toggleMobileMenu} className="w-full py-3 text-center text-[15px] font-[500] rounded-full text-white bg-emerald-500 hover:bg-emerald-600 transition-colors">
              Sign Up
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu} className="w-full py-3 text-center text-[15px] font-[500] rounded-full text-emerald-500 bg-transparent border border-emerald-500 hover:bg-emerald-50 transition-colors">
              Contact Us
            </Link>
          </div>
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
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm lg:hidden z-30"
            onClick={toggleMobileMenu}
          />
        )}
      </Container>
    </nav>
  );
};

export default Navbar;