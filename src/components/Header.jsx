import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `relative py-1 text-[13px] font-bold  tracking-wide transition-colors duration-300 ${
      isActive ? 'text-blue-600' : 'text-zinc-600 hover:text-blue-600'
    }`;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all  duration-300 ${
      isScrolled ? 'bg-white py-4 border-b border-zinc-100' : 'bg-white/95 backdrop-blur-md py-6'
    }`}>
      <div className="max-w-[1820px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-4 group relative z-10">
            <img 
              src="/logo-rok.png" 
              alt="All About Drivers" 
              className="h-15 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </Link>

          <div className="hidden lg:flex items-center gap-12 ml-auto mr-12 uppercase">
            <nav className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full  h-[2px] bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <Link 
              to="/contact"
              className="hidden md:block px-8 py-3 uppercase bg-blue-600 text-white text-[12px] font-bold  tracking-widest rounded-full transition-all duration-300 hover:bg-zinc-900"
            >
              Get in Touch
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all ${isMenuOpen ? 'bg-blue-600 text-white' : 'text-zinc-900 bg-zinc-100'}`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 h-screen bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="pt-32 px-8 flex flex-col items-center gap-10 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-4xl font-black  text-zinc-900 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full max-w-xs py-6 bg-blue-600 text-white font-bold text-center text-[14px]  rounded-full tracking-widest"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


