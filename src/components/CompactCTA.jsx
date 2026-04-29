import { Send } from "lucide-react";

const CompactCTA = () => {
  return (
    <section className="w-full bg-white py-16 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-blue-600 px-10 py-12 md:h-[200px] flex items-center shadow-2xl shadow-blue-100">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-full bg-white/5 skew-x-[25deg] translate-x-20" />
          <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Left: Prominent Image & Text Content */}
            <div className="flex items-center gap-10">
              <div className="hidden sm:flex w-44 h-44 bg-white/5 rounded-[2.5rem] items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10 relative overflow-hidden group">
                <img
                  src="/newsletter.png"
                  alt="Newsletter"
                  className="w-36 h-36 object-contain transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center sm:text-left space-y-3">
                <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                  Stay Ahead with <br className="md:hidden" />
                  <span className="text-blue-200">Email Tips.</span>
                </h3>
                <p className="text-blue-100/90 text-lg font-normal max-w-sm">
                  Expert strategies delivered directly to your inbox.
                </p>
              </div>
            </div>

            {/* Right: Form (Polished) */}
            <form className="flex w-full md:w-auto items-center gap-4">
              <div className="flex-1 md:w-72">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-6 text-base text-white outline-none placeholder:text-white/40 focus:bg-white/20 focus:border-white/40 transition-all backdrop-blur-sm"
                />
              </div>
              <button
                type="submit"
                className="h-14 inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 text-base font-extrabold text-blue-600 hover:bg-blue-50 transition-all shadow-xl shadow-black/10 active:scale-95 whitespace-nowrap"
              >
                Subscribe
                <Send className="w-5 h-5" />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactCTA;