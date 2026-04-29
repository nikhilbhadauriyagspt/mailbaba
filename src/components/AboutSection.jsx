import { BookOpen, Shield, Lightbulb, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-zinc-50/50 w-full border-y border-zinc-100">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mb-20">
          <p className="text-blue-600 font-bold tracking-widest uppercase text-[12px] mb-4">About Our Mission</p>
          <h2 className="text-3xl md:text-4xl  text-zinc-900 leading-[1.1] mb-8">
            We simplify <span className="text-blue-700">digital communication</span> so you can focus on what matters most.
          </h2>
          <p className="text-base md:text-[18px] text-zinc-600 leading-relaxed max-w-3xl">
            Our goal is to provide clear, reliable information that removes the confusion from everyday digital tasks. We believe everyone deserves to feel confident and secure while navigating their online tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="group p-2">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <BookOpen className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-3">Structured Learning</h3>
            <p className="text-[15px] text-zinc-600 leading-relaxed">
              Step-by-step guidance designed to build your knowledge from the ground up, making complex topics easy to follow.
            </p>
          </div>

          <div className="group p-2">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <Shield className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-3">Safety & Privacy</h3>
            <p className="text-[15px] text-zinc-600 leading-relaxed">
              We put your security first, offering proven methods to keep your personal data protected and your accounts secure.
            </p>
          </div>

          <div className="group p-2">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
              <Lightbulb className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-3">Practical Insights</h3>
            <p className="text-[15px] text-zinc-600 leading-relaxed">
              Real-world tips and straightforward explanations that turn technical hurdles into simple, solvable tasks.
            </p>
          </div>

          <div className="group p-2">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Zap className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-3">Fast Results</h3>
            <p className="text-[15px] text-zinc-600 leading-relaxed">
              Find the answers you need quickly with our concise and focused guides, tailored for modern digital efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
