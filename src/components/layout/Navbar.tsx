import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Menu, X, Truck, Trash2, ShoppingCart, Leaf, Package, RefreshCw, 
  Shirt, Building, Car, Factory, Layers, FileText, ArrowRight,
  BookOpen, HelpCircle, Calculator, BarChart
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

const resourceLinks = [
  { id: 'library', icon: BookOpen, title: 'Resource Library', desc: 'Your guide to decarbonization' },
  { id: 'faqs', icon: HelpCircle, title: 'FAQs', desc: 'Carbon accounting queries solved' },
  { id: 'calculator', icon: Calculator, title: 'Carbon Calculator', desc: 'Measure, track, and reduce' },
  { id: 'esg', icon: BarChart, title: 'ESG Intelligence', desc: 'Evaluate your ESG performance' },
];

const resourceDetails: Record<string, {icon: any, title: string, desc: string}[]> = {
  library: [
    { icon: BookOpen, title: 'Blogs/Newsletter', desc: 'Insights, stories, and sustainability updates' },
    { icon: BookOpen, title: 'Podcast', desc: 'Expert voices on decarbonization and green innovation' }
  ]
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeResourceTab, setActiveResourceTab] = useState('library');

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
            <li 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className={`${navLinkClasses({ isActive: false })} cursor-pointer`}>
                Solutions
              </span>
              
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
                            <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                              <item.icon size={20} />
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
                            <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                              <item.icon size={20} />
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
              className="relative"
              onMouseEnter={() => setActiveDropdown('platform')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className={`${navLinkClasses({ isActive: true })} cursor-pointer`}>
                Platform
              </span>
              
              {/* Mega Menu - Platform */}
              {activeDropdown === 'platform' && (
                <div className="absolute top-full left-0 pt-6 w-[750px] hidden lg:block z-50 cursor-default">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 border border-slate-100 flex flex-col gap-8 text-left">
                    {/* BY MANAGED SERVICE */}
                    <div>
                      <h3 className="text-slate-500 text-[11px] font-bold mb-4 tracking-wider uppercase">By Managed Service</h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {managedServices.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                              <item.icon size={20} />
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
                            <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                              <item.icon size={20} />
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
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className={`${navLinkClasses({ isActive: false })} cursor-pointer`}>
                Resources
              </span>
              
              {/* Mega Menu - Resources */}
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 pt-6 w-[700px] hidden lg:block z-50 cursor-default">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 border border-slate-100 flex text-left min-h-[300px]">
                    
                    {/* Left Pane */}
                    <div className="w-[50%] pr-6 border-r border-slate-200">
                      <h3 className="text-slate-500 text-[11px] font-bold mb-4 tracking-wider uppercase">Resources</h3>
                      <div className="flex flex-col gap-2">
                        {resourceLinks.map((item) => (
                          <div 
                            key={item.id} 
                            onMouseEnter={() => setActiveResourceTab(item.id)}
                            className={`flex items-start gap-4 p-3 rounded-xl transition-colors cursor-pointer group ${activeResourceTab === item.id ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                          >
                            <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white transition-transform ${activeResourceTab === item.id && item.id === 'library' ? 'bg-[#006ded]' : 'bg-emerald-500'} group-hover:scale-105`}>
                              <item.icon size={20} />
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
                    <div className="w-[50%] pl-8">
                      <h3 className="text-slate-600 text-[13px] font-semibold mb-6">{resourceLinks.find(r => r.id === activeResourceTab)?.title}</h3>
                      <div className="flex flex-col gap-6">
                        {resourceDetails[activeResourceTab]?.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                             <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                              <item.icon size={20} />
                            </div>
                            <div>
                              <h4 className="text-[13px] font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                {item.title}
                              </h4>
                              {item.desc && <p className="text-[11px] leading-tight text-slate-500 mt-0.5">{item.desc}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}
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