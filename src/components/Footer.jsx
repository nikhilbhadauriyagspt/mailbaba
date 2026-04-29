import { useState } from 'react';
import { Mail, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) return;
    setShowToast(true);
    setEmail("");
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: targetId } });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
    { name: "All Guides", path: "/guides" },
    { name: "How to Learn", path: "/#how-it-works" },
    { name: "FAQ", path: "/#faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const policies = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  return (
    <>
      {/* Newsletter Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-5 sm:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          {/* Left Content */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Join Our Email Community
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
              Practical email fixes, security tips, and easy guides—delivered straight to your inbox.
            </p>

            {/* Input */}
            <div className="flex items-center gap-2 mt-3 w-full max-w-md mx-auto lg:mx-0 bg-white rounded-xl p-1 shadow-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 h-[44px] px-3 rounded-lg text-slate-800 outline-none text-sm font-medium"
              />

              <button
                onClick={handleSubscribe}
                className="h-[44px] px-5 rounded-lg bg-slate-900 text-white font-medium hover:bg-black transition"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/newsletter.avif"
              alt="newsletter"
              className="w-[220px] sm:w-[260px] lg:w-[320px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-white border border-slate-200 text-slate-800 px-5 py-4 rounded-xl shadow-2xl z-50 flex items-start gap-3 min-w-[260px]">
          <div className="bg-green-100 text-green-600 p-2 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-sm">Subscription Successful</p>
            <p className="text-xs text-slate-500">You’ll start receiving updates soon.</p>
          </div>
        </div>
      )}

      <footer className="w-full bg-white font-sans border-t border-slate-100">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
            <div>
              <button onClick={() => handleNavClick('/')} className="inline-block mb-5 cursor-pointer">
                <img src="/logo.avif" alt="MailBaba logo" className="h-15 w-auto object-contain" />
              </button>

              <p className="text-slate-600 text-[15px] leading-7 max-w-sm">
                Expert email guides and simple solutions for your daily digital challenges—designed to make your online life smoother, safer, and stress-free.
              </p>
            </div>

            <div className="lg:border-l lg:border-slate-200 lg:pl-12">
              <h3 className="text-slate-950 font-bold text-base mb-5">Quick Links</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className="group flex items-center gap-2 text-[15px] text-slate-600 hover:text-blue-600 transition"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-1 transition" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:border-l lg:border-slate-200 lg:pl-12">
              <h3 className="text-slate-950 font-bold text-base mb-5">Resources</h3>
              <p className="text-slate-600 text-[15px] leading-7 max-w-sm mb-6">
                Find something specific? Our knowledge base is designed to assist you in finding answers fast.
              </p>

              <button
                onClick={() => handleNavClick('/guides')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-500 text-blue-600 text-sm font-bold hover:bg-blue-50 transition"
              >
                Explore Guides
              </button>
            </div>

            <div className="lg:border-l lg:border-slate-200 lg:pl-12">
              <h3 className="text-slate-950 font-bold text-base mb-5">Get in Touch</h3>

              <a href="mailto:info@MailBaba.com" className="flex items-center gap-3 text-[15px] text-slate-700 hover:text-blue-600 mb-8">
                <Mail className="w-5 h-5 text-blue-600" />
                info@mailbaba.co
              </a>

              <button
                onClick={() => handleNavClick('/contact')}
                className="inline-flex w-full max-w-[300px] items-center justify-center gap-3 bg-blue-600 text-white px-7 py-4 rounded-lg text-base font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white">
          <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 py-5 flex flex-col lg:flex-row items-center justify-between gap-5">
            <p className="text-sm text-slate-300">© {currentYear} MailBaba. All rights reserved.</p>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {policies.map((policy) => (
                <Link key={policy.name} to={policy.path} className="text-sm text-slate-300 hover:text-white transition">
                  {policy.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
