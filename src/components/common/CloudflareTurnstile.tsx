import React from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const CloudflareTurnstile: React.FC = () => {
  return (
    <div className="mt-2 w-full flex justify-center bg-white rounded-xl border-2 border-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:border-[#00A669]/30 transition-all duration-300 group">
      <div className="overflow-hidden rounded-lg w-full flex justify-center">
        <Turnstile
          siteKey="1x00000000000000000000AA"
          options={{
            theme: 'light',
            size: 'normal'
          }}
          onSuccess={(token) => {
            console.log('Turnstile success:', token);
          }}
        />
      </div>
    </div>
  );
};

export default CloudflareTurnstile;
