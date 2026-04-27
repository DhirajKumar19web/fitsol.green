import React from 'react';
import CloudflareTurnstile from './CloudflareTurnstile';

const NewsletterSubscription: React.FC = () => {
  return (
    <div className="bg-[#525CEB] rounded-[24px] lg:p-7 flex flex-col gap-8 shadow-xl">

      {/* Top Section: Text and Form Elements */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
        {/* Left side: Heading */}
        <div className="flex-1 w-full">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[30px] font-[400] leading-[1.4]">
            Subscribe to our newsletter for the latest updates and insights.
          </h2>
        </div>

        {/* Right side: Form */}
        <div className="flex-1 w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-white rounded-full px-6 py-[14px] text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00A669]"
          />

          <div className="flex items-start gap-3 mt-1">
            <div className="relative flex items-center justify-center mt-0.5 shrink-0">
              <input
                type="checkbox"
                id="privacy-consent"
                className="peer w-[20px] h-[20px] rounded-[4px] border-[1.5px] border-white bg-transparent cursor-pointer appearance-none checked:bg-[#0070f3] checked:border-[#0070f3] transition-colors"
              />
              <svg className="absolute w-[14px] h-[14px] text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <label htmlFor="privacy-consent" className="text-white text-[14px] leading-[1.4] font-[400]">
              I agree to the <a href="#" className="underline hover:text-gray-200">privacy policy</a> and <a href="#" className="underline hover:text-gray-200">Terms &<br /> Conditions</a> and consent to data<br /> processing and communications.
            </label>
          </div>

          <CloudflareTurnstile />
        </div>
      </div>

      {/* Full Width Button */}
      <button className="w-full bg-[#00A669] hover:bg-[#008c58] text-white rounded-full px-[16px] py-[8px] font-sans  text-[14px] transition-colors shadow-sm mt-2">
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterSubscription;
