import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { guidesData } from '../data/guidesData.jsx';
import { ArrowLeft, ChevronRight, MessageCircle, AlertCircle, CheckCircle, Info, ArrowUpRight } from 'lucide-react';

const GuideDetail = () => {
  const { id } = useParams();
  const guide = guidesData.find(g => g.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!guide) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Guide not found</h1>
        <Link to="/guides" className="text-blue-600 hover:underline">Back to all guides</Link>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900">
      {/* Article Header */}
      <section className="py-20 bg-white border-b border-zinc-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 text-[13px] font-medium text-zinc-500 mb-10">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/guides" className="hover:text-blue-600 transition-colors">Guides</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-900 truncate max-w-[200px] md:max-w-none">{guide.title}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className={`w-20 h-20 rounded-3xl ${guide.bg.replace('bg-', 'bg-').replace('50', '100')} ${guide.color} flex items-center justify-center shadow-sm`}>
              {React.cloneElement(guide.icon, { className: "w-10 h-10 stroke-[2]" })}
            </div>
            <div>
              <p className="text-blue-600 font-bold tracking-[0.15em] uppercase text-[12px] mb-3">Resource Guide</p>
              <h1 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight">
                {guide.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Content Body */}
            <div className="lg:col-span-8">
              <div className="space-y-16">
                {/* The Problem */}
                <section className="group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-900">The Problem</h2>
                  </div>
                  <div className="prose prose-zinc prose-lg text-zinc-600 leading-relaxed max-w-none bg-zinc-50/50 p-8 rounded-[2rem] border border-zinc-100/50">
                    <p>{guide.problem}</p>
                  </div>
                </section>

                {/* The Solution - Redesigned with Steps */}
                <section>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-900">The Solution</h2>
                  </div>
                  
                  <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-100">
                    {guide.steps.map((step, index) => (
                      <div key={index} className="relative pl-14 group">
                        {/* Circle Number */}
                        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center text-sm font-bold text-zinc-400 group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-300 z-10 shadow-sm">
                          {index + 1}
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-zinc-600 leading-relaxed text-[17px]">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* In Conclusion */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Info className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-900">In Conclusion</h2>
                  </div>
                  <div className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
                    <p className="text-zinc-300 leading-relaxed text-lg relative z-10 italic">
                      "{guide.conclusion}"
                    </p>
                  </div>
                </section>
              </div>

              {/* Back to Guides Button */}
              <div className="mt-20 pt-10 border-t border-zinc-100">
                <Link 
                  to="/guides" 
                  className="inline-flex items-center gap-2 text-zinc-600 hover:text-blue-700 font-bold transition-all group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Explore more guides
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Need Support CTA */}
                <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-500">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Need personalized assistance?</h3>
                  <p className="text-zinc-500 mb-8 leading-relaxed text-[15px]">
                    If these steps didn't resolve your issue, our support team is available to provide one-on-one guidance to assist you through the process.
                  </p>
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-center gap-3 w-full bg-zinc-900 hover:bg-blue-700 text-white py-4.5 rounded-2xl font-bold transition-all shadow-lg shadow-zinc-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact Us
                  </Link>
                </div>

                {/* Related Guides */}
                <div className="bg-zinc-50/50 rounded-[2.5rem] p-8 border border-zinc-100/50">
                  <h4 className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest mb-6">Related Resources</h4>
                  <div className="space-y-3">
                    {guidesData.filter(g => g.id !== guide.id).slice(0, 4).map(related => (
                      <Link 
                        key={related.id} 
                        to={`/guides/${related.id}`}
                        className="flex items-center justify-between p-4 rounded-2xl bg-white border border-transparent hover:border-blue-100 hover:shadow-sm transition-all group"
                      >
                        <span className="text-[15px] font-semibold text-zinc-700 group-hover:text-blue-700 transition-colors line-clamp-1">{related.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </article>
    </div>
  );
};

export default GuideDetail;
