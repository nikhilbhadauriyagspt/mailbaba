import { ShieldCheck, Target, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-zinc-50 w-full font-sans text-zinc-900 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Images/Graphics */}
          <div className="relative group w-full">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-2xl group-hover:bg-blue-600/10 transition-all duration-700"></div>
            <div className="relative overflow-hidden rounded-[3rem] border border-white shadow-2xl shadow-blue-900/10 transition-transform duration-700 hover:scale-[1.01]">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200" 
                alt="Our professional team" 
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20">
                <p className="text-white text-md md:text-lg font-medium italic">"Precision in every diagnosis, clarity in every solution."</p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <p className="text-blue-800 font-semibold tracking-[0.2em] uppercase text-[12px]">Our Core Mission</p>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                Dedicated to <span className="text-blue-800">Technical Excellence.</span>
              </h2>
              <p className="text-[17px] text-zinc-600 leading-relaxed font-normal max-w-xl">
                At Mail Yaga, we approach every email challenge with the same rigor as industrial maintenance. We focus on restoring your digital confidence through diagnostic clarity and effective technical resolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-[2rem] bg-white border border-zinc-100 shadow-sm transition-all hover:shadow-lg">
                <div className="w-10 h-10 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[18px] font-bold text-zinc-900 mb-2 tracking-tight">Secure Support</h3>
                <p className="text-[15px] text-zinc-600 leading-relaxed">
                  Strict security protocols ensure your data remains protected.
                </p>
              </div>

              <div className="p-7 rounded-[2rem] bg-white border border-zinc-100 shadow-sm transition-all hover:shadow-lg">
                <div className="w-10 h-10 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-[18px] font-bold text-zinc-900 mb-2 tracking-tight">Accurate Fixes</h3>
                <p className="text-[15px] text-zinc-600 leading-relaxed">
                  Deep technical knowledge to identify root causes instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
