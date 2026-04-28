import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { guidesData } from '../data/guidesData.jsx';

const ServicesSection = () => {
  // Show only first 6 services on home page to keep it clean, link to All Guides for more
  const displayServices = guidesData.slice(0, 6);

  return (
    <section id="services" className="py-12 md:py-24 bg-white w-full">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <p className="text-blue-800 font-semibold tracking-[0.2em] uppercase text-[12px] mb-4">Our Resources</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">
            Comprehensive <span className="text-blue-800">Email Guides.</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-[17px] font-normal leading-relaxed">
            From initial setup to advanced security, our tutorials are designed to help you master your email tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-[2.5rem] border border-zinc-100 transition-all duration-500 flex flex-col items-center text-center group ${service.bg} hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                {React.cloneElement(service.icon, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-[20px] font-bold text-zinc-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-[16px] text-zinc-600 leading-relaxed font-normal mb-8">
                {service.shortDesc}
              </p>
              <Link 
                to={`/guides/${service.id}`}
                className="mt-auto inline-flex items-center gap-2 text-blue-800 font-bold text-sm hover:gap-3 transition-all"
              >
                Read More Details
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/guides" 
            className="inline-flex items-center gap-3 bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-xl"
          >
            View All Email Guides
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
