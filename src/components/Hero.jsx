import { Phone, CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image - Clickable */}
      <Link to="/contact" className="absolute inset-0 z-0 cursor-pointer block">
        <img 
          src="/ban1.avif" 
          alt="Technical Support Background" 
          className="w-full h-auto object-cover"
        />
      </Link>

     
    </section>
  );
};

export default Hero;
