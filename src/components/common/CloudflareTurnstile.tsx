import React from 'react';
import { CheckCircle } from 'lucide-react';

const CloudflareTurnstile: React.FC = () => {
  return (
    <div className="bg-[#f9fafb] rounded-[4px] p-3 flex items-center justify-between border border-slate-200 mt-2">
      <div className="flex items-center gap-3">
        <CheckCircle className="text-[#00B22D]" size={32} fill="currentColor" stroke="white" />
        <span className="text-slate-800 text-[15px] font-medium">Success!</span>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-1 text-[11px] font-[800] text-slate-700 tracking-wider">
          <span className="text-[#F38020] text-sm">☁️</span> CLOUDFLARE
        </div>
        <div className="text-[9px] text-[#0051c3] font-medium flex gap-1 mt-[2px]">
          <a href="#" className="hover:underline">Privacy</a> • <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default CloudflareTurnstile;
