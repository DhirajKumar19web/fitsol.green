import { Link } from 'react-router-dom';

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
  return (
    <footer className="bg-white border-t border-slate-100 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 mb-20">
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

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-emerald-500 text-[13px] font-[400]">
            © {new Date().getFullYear()} Fitsol. All Rights Reserved
          </p>
          <div className="flex items-center gap-6 text-slate-500 text-[13px] font-[400]">
            <Link to="#" className="hover:text-emerald-500 hover:underline transition-all">Privacy</Link>
            <Link to="#" className="hover:text-emerald-500 hover:underline transition-all">Terms & Conditions</Link>
            <Link to="#" className="hover:text-emerald-500 hover:underline transition-all">DPA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;