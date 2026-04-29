import { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      
      if (location.pathname === '/') {
        // If on homepage, just scroll
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on homepage, navigate to home first, then scroll
        navigate('/', { state: { scrollTo: targetId } });
      }
    } else {
      // Normal page navigation
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/#about' },
    { name: 'All Guides', path: '/guides' },
    { name: 'Resources', path: '/#services' },
    { name: 'How to Learn', path: '/#how-it-works' },
    { name: 'FAQ', path: '/#faq' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled 
          ? 'bg-white border-zinc-200 shadow-sm py-3' 
          : 'bg-white border-transparent py-5'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-12">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <button onClick={() => handleNavClick('/')} className="flex items-center">
              <img src="/logo.avif" alt="MailBaba logo" width="160" height="40" className="h-15 w-auto object-contain" />
            </button>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={`text-[15px] font-medium transition-colors cursor-pointer ${
                  (location.pathname === link.path || (link.path === '/' && location.pathname === '/'))
                    ? 'text-blue-700' 
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right: Contact Button */}
          <div className="hidden lg:flex flex-1 justify-end items-center">
            <button
              onClick={() => handleNavClick('/contact')}
              className="group flex items-center gap-2 bg-blue-700 text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold transition-all hover:bg-blue-800 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-zinc-600 hover:bg-zinc-100 rounded-md transition-colors cursor-pointer"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-[73px] bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="text-lg font-medium text-zinc-800 border-b border-zinc-100 pb-4 text-left cursor-pointer"
              onClick={() => handleNavClick(link.path)}
            >
              {link.name}
            </button>
          ))}
          <button
            className="flex items-center justify-center gap-2 bg-blue-700 text-white py-4 rounded-xl font-bold text-lg cursor-pointer"
            onClick={() => handleNavClick('/contact')}
          >
            <ArrowRight className="w-5 h-5" />
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
