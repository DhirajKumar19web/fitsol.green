import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Container from './Container';
import CompanyInfo from '../common/CompanyInfo';
import NewsletterSubscription from '../common/NewsletterSubscription';

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      { name: 'Green Logistics', path: '#' },
      { name: 'Green Procurement', path: '#' },
      { name: 'Green Packaging', path: '#' },
      { name: 'Waste Management', path: '#' },
      { name: 'Carbon Credits', path: '#' },
    ]
  },
  {
    title: 'Industries',
    links: [
      { name: 'Textile', path: '#' },
      { name: 'Automotive', path: '#' },
      { name: 'Aluminium', path: '#' },
      { name: 'Cement', path: '#' },
      { name: 'Iron & Steel', path: '#' },
      { name: 'Paper & Pulp', path: '#' },
    ]
  },
  {
    title: 'Platform',
    links: [
      { name: 'Kyoto™', path: '#' },
      { name: 'Greencount™', path: '#' },
      { name: 'Greenalign™', path: '#' },
      { name: 'Greenpath™', path: '#' },
      { name: 'Greenfind™', path: '#' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Resource Library', path: '#' },
      { name: 'FAQs', path: '#' },
      { name: 'Calculators', path: '#' },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
    ]
  }
];

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="bg-white border-t border-slate-100 max-lg:mt-0 mt-20">
      <Container className="pt-12 lg:pt-20 pb-8">
        
        {/* Top Section: Company Info & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-24">
          <div className="lg:col-span-4 xl:col-span-4 flex items-center">
            <CompanyInfo />
          </div>
          <div className="lg:col-span-8 xl:col-span-8 flex items-center">
            <NewsletterSubscription />
          </div>
        </div>

        {/* Desktop Footer Links */}
        <div className="hidden lg:grid grid-cols-5 gap-8 mb-20">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h3 className="text-[#1a1c3c] font-semibold text-[15px]">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.path}
                      className="text-slate-500 hover:text-emerald-500 transition-colors text-[14px] font-[400]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Footer Accordion */}
        <div className="flex flex-col lg:hidden mb-12 border-y border-[#1a1c3c] py-2">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <h3 className="text-[#1a1c3c] font-semibold text-[16px]">
                  {section.title}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-[#1a1c3c] transition-transform duration-300 ${openSection === section.title ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openSection === section.title ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col gap-4 pl-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.path}
                        className="text-slate-500 hover:text-emerald-500 transition-colors text-[16px] font-[400]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="max-lg:pt-0 max-lg:border-t-0 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-emerald-500 text-[14px] font-[400] text-center w-full md:w-auto">
            © {new Date().getFullYear()} Fitsol. All Rights Reserved
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-[13px] font-[400] w-full md:w-auto">
            <Link to="#" className="hover:text-emerald-500 hover:underline transition-all">Privacy</Link>
            <Link to="#" className="hover:text-emerald-500 hover:underline transition-all">Terms & Conditions</Link>
            <Link to="#" className="hover:text-emerald-500 hover:underline transition-all">DPA</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;