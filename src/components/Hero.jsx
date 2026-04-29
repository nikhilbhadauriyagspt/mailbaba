import { Phone, CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="w-full h-full flex justify-center items-center">
        {/* Background Image - Clickable */}
        <Link to="/contact" className="w-full cursor-pointer block">
          <img 
            src="/ban1.avif" 
            alt="Educational Email Guides Banner" 
            width="1935"
            height="813"
            fetchPriority="high"
            sizes="(max-width: 640px) 100vw, 1935px"
            className="w-full h-auto object-cover object-center mx-auto"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
