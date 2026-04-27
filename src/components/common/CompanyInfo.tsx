import React from 'react';
import logo from '../../assets/logo.svg';

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 max-w-sm">
      <img src={logo} alt="Fitsol logo" className="w-[120px] h-auto object-contain" />
      
      <div className="text-slate-600 text-[14px] leading-relaxed">
        <p>Plot no - 28, Institutional Area,</p>
        <p>Sector 32, Gurugram, Haryana 122001</p>
      </div>

      <div className="text-[14px] text-blue-600 font-medium flex gap-2">
        <a href="tel:+919311439446" className="hover:underline">+91 9311439446</a>
        <span className="text-slate-400">|</span>
        <a href="mailto:cbo@fitsol.green" className="hover:underline">cbo@fitsol.green</a>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <a href="#" className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-white hover:bg-emerald-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-white hover:bg-emerald-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-white hover:bg-emerald-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-white hover:bg-emerald-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo;
