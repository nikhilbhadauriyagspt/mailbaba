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
            className="w-full h-auto max-h-[90vh] object-contain md:object-cover lg:object-fill object-center mx-auto"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
