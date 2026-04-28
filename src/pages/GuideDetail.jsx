import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { guidesData } from '../data/guidesData.jsx';
import { ArrowLeft, ArrowRight, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

const GuideDetail = () => {
  const { id } = useParams();
  const guide = guidesData.find(g => g.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!guide) return <div>Guide not found</div>;

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900">
      {/* Article Header */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <Link 
            to="/guides" 
            className="flex items-center gap-2 text-zinc-600 hover:text-blue-800 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Guides
          </Link>
          
          <div className="flex flex-col items-start gap-6">
            <div className={`w-16 h-16 rounded-2xl ${guide.bg} ${guide.color} flex items-center justify-center`}>
              {React.cloneElement(guide.icon, { className: "w-8 h-8" })}
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              {guide.title}
            </h1>
            <p className="text-xl text-zinc-600">{guide.shortDesc}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Content Body */}
            <div className="lg:col-span-8 space-y-16">
              <section className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-sm font-bold italic">?</span>
                  The Problem
                </h2>
                <div className="prose prose-zinc lg:prose-lg text-zinc-700 leading-relaxed max-w-none">
                  <p>{guide.problem}</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-green-50 text-green-700 flex items-center justify-center text-sm font-bold italic">✓</span>
                  The Solution
                </h2>
                <div className="prose prose-zinc lg:prose-lg text-zinc-700 leading-relaxed max-w-none">
                  <p>{guide.solution}</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center text-sm font-bold italic">!</span>
                  In Conclusion
                </h2>
                <div className="prose prose-zinc lg:prose-lg text-zinc-700 leading-relaxed max-w-none">
                  <p>{guide.conclusion}</p>
                </div>
              </section>
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-zinc-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">Still need help?</h3>
                    <p className="text-zinc-400 mb-8 leading-relaxed">
                      Our experts can resolve this issue for you directly.
                    </p>
                    <Link 
                      to="/contact" 
                      className="flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-white hover:text-zinc-900 text-white py-4 rounded-xl font-bold transition-all"
                    >
                      Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                    
                    <div className="mt-8 pt-8 border-t border-white/10">
                     
                    </div>
                  </div>
                </div>

                {/* Other Related Guides */}
                <div className="p-8 rounded-[2.5rem] border border-zinc-100 bg-zinc-50/50">
                  <h4 className="font-bold text-zinc-900 mb-6">Related Issues</h4>
                  <div className="space-y-4">
                    {guidesData.filter(g => g.id !== guide.id).slice(0, 3).map(related => (
                      <Link 
                        key={related.id} 
                        to={`/guides/${related.id}`}
                        className="flex items-center justify-between group py-2"
                      >
                        <span className="text-sm font-medium text-zinc-600 group-hover:text-blue-800 transition-colors">{related.title}</span>
                        <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-800 group-hover:translate-x-1 transition-all" />
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
