import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { guidesData } from '../data/guidesData.jsx';

const ServicesSection = () => {
  // Show first 6 services on home page
  const displayServices = guidesData.slice(0, 6);

  return (
    <section id="services" className="py-24 bg-white w-full border-b border-zinc-100">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-bold tracking-[0.15em] uppercase text-[12px] mb-4">Our Resources</p>
            <h2 className="text-3xl md:text-4xl  text-zinc-900 mb-6 leading-tight">
              Comprehensive <span className="text-blue-700">Email Guides.</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-[19px] leading-relaxed">
              From initial setup to advanced security, our tutorials are designed to assist you in mastering your email tools.
            </p>
          </div>
          <div className="hidden lg:block">
            <Link 
              to="/guides" 
              className="group inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Browse All Guides
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayServices.map((service, index) => (
            <Link 
              key={index}
              to={`/guides/${service.id}`}
              className="group relative bg-white p-8 rounded-3xl border border-zinc-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-200/40 overflow-hidden"
            >
              <div className="flex justify-between items-start mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${service.bg.replace('bg-', 'bg-').replace('50', '100')} ${service.color} group-hover:bg-blue-600 group-hover:text-white`}>
                  {React.cloneElement(service.icon, { className: "w-6 h-6 stroke-[2]" })}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-400" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-blue-700 transition-colors">{service.title}</h3>
              <p className="text-[15px] text-zinc-500 leading-relaxed mb-6">
                {service.shortDesc}
              </p>
              
              <div className="inline-flex items-center gap-1.5 text-[14px] font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">
                Learn more
                <ChevronRight className="w-4 h-4" />
              </div>
              
              {/* Subtle accent line on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          ))}
        </div>

        <div className="mt-12 lg:hidden">
          <Link 
            to="/guides" 
            className="flex items-center justify-center gap-2 bg-zinc-900 text-white w-full py-4 rounded-2xl font-bold"
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
