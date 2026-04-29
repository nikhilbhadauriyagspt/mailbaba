import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-zinc-200 py-5 px-6 font-sans animate-in slide-in-from-bottom duration-500">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex w-10 h-10 bg-blue-50 rounded-full items-center justify-center text-blue-600 flex-shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <p className="text-zinc-600 text-[14px] md:text-[15px] leading-relaxed">
            We use cookies to provide you with the best possible experience and to analyze our traffic. 
            By continuing to browse our site, you agree to our use of cookies. 
            Read our <Link to="/cookie-policy" className="text-blue-600 font-bold underline decoration-blue-200 underline-offset-4 hover:text-blue-700 transition-colors">Cookie Policy</Link> for more details.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={() => setIsVisible(false)}
            className="flex-1 md:flex-none px-6 py-2.5 text-zinc-500 hover:text-zinc-800 text-[14px] font-bold transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white px-10 py-2.5 rounded-lg text-[14px] font-bold transition-all whitespace-nowrap"
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
