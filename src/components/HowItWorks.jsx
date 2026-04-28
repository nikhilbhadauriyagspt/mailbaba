import React from 'react';
import { MessageSquare, Settings, CheckCircle2, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare />,
      title: 'Explore Guides',
      description: 'Browse our extensive library of email tutorials and knowledge articles.',
      color: 'text-blue-700',
      bg: 'bg-blue-50'
    },
    {
      icon: <Settings />,
      title: 'Follow Tutorials',
      description: 'Find the step-by-step guide that matches your specific email question.',
      color: 'text-indigo-700',
      bg: 'bg-indigo-50'
    },
    {
      icon: <CheckCircle2 />,
      title: 'Master Your Email',
      description: 'Apply the simple steps to optimize your account and improve security.',
      color: 'text-green-700',
      bg: 'bg-green-50'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-zinc-50 w-full font-sans">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <p className="text-blue-800 font-semibold tracking-[0.2em] uppercase text-[12px] mb-4">Our Process</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">
            How to <span className="text-blue-800">Learn.</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-[18px] font-normal leading-relaxed">
            We’ve organized our email knowledge into easy steps to help you master your digital communication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-20 h-20 rounded-3xl ${step.bg} ${step.color} flex items-center justify-center mb-8 border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                {React.cloneElement(step.icon, { className: "w-8 h-8" })}
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-zinc-200/50">
                <span className="inline-block text-[11px] font-bold text-blue-700 uppercase tracking-widest mb-4">Step 0{index + 1}</span>
                <h3 className="text-[22px] font-bold text-zinc-900 mb-4">{step.title}</h3>
                <p className="text-[16px] text-zinc-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="md:hidden my-6 text-zinc-200">
                  <ChevronRight className="w-8 h-8 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
