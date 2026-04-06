import { Mail, ArrowRight, CheckCircle2, MapPin, MessageSquare, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_API_URL } from '../config';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      category: data.category,
      message: data.message,
      site_origin: window.location.hostname
    };

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
        e.target.reset();
      } else {
        console.error("Backend Error:", result.message);
        setIsSubmitting(false);
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setIsSubmitting(false);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="contact">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-100/40 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-50 blur-[100px] rounded-full" />

      {/* Success Toast */}
      <div
        className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${
          isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white border border-blue-100 text-zinc-900 px-6 py-5 rounded-3xl shadow-2xl flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
            <CheckCircle2 size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold">Success!</span>
            <span className="text-xs text-zinc-500 mt-0.5">Your message has been sent.</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Side */}
          <div className="lg:col-span-5 pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-6 border border-blue-100">
              <MessageSquare size={15} />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase">Contact Hub</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 leading-[1.08] tracking-tight mb-6">
              Get in touch <br />
              with our <span className="text-blue-600">experts.</span>
            </h2>

            <p className="text-zinc-500 text-base md:text-lg font-medium leading-8 mb-10 max-w-xl">
              Have questions about driver compatibility, hardware issues, or system stability?
              Reach out to our team for clear and dependable guidance.
            </p>

            <div className="space-y-5">
              <div className="group flex items-center gap-5 p-5 md:p-6 bg-white rounded-[28px] border border-zinc-100 shadow-sm hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.18)] transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-400 tracking-[0.18em] uppercase mb-1.5">
                    Email Us
                  </h4>
                  <a
                    href="mailto:support@allaboutdrivers.shop"
                    className="text-base md:text-lg font-bold text-zinc-900 hover:text-blue-600 transition-colors break-all"
                  >
                    support@allaboutdrivers.shop
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-5 p-5 md:p-6 bg-white rounded-[28px] border border-zinc-100 shadow-sm hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.18)] transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-400 tracking-[0.18em] uppercase mb-1.5">
                    Address
                  </h4>
                  <a
                   
                    className="text-base md:text-lg font-bold text-zinc-900 hover:text-blue-600 transition-colors"
                  >
                    130 S Fillmore St, Corinth, MS 38834, United States
 
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-sm font-medium text-zinc-600">
                <Sparkles size={14} className="text-blue-600" />
                Fast Response
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-sm font-medium text-zinc-600">
                Technical Guidance
              </span>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-8 lg:p-10 border border-zinc-100 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.18)]">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight mb-3">
                  Send us a message
                </h3>
                <p className="text-zinc-500 text-sm md:text-base leading-7 font-medium">
                  Fill out the form below and share the issue you are facing. We will review your
                  message and get back to you with the right direction.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-zinc-500 tracking-[0.12em] uppercase ml-1">
                      First Name
                    </label>
                    <input
                      required
                      name="firstName"
                      type="text"
                      className="w-full bg-slate-50 border border-transparent px-5 py-4 rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-zinc-500 tracking-[0.12em] uppercase ml-1">
                      Last Name
                    </label>
                    <input
                      required
                      name="lastName"
                      type="text"
                      className="w-full bg-slate-50 border border-transparent px-5 py-4 rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-zinc-500 tracking-[0.12em] uppercase ml-1">
                      Email Address
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full bg-slate-50 border border-transparent px-5 py-4 rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-zinc-500 tracking-[0.12em] uppercase ml-1">
                      Problem Category
                    </label>
                    <select
                      required
                      name="category"
                      className="w-full bg-slate-50 border border-transparent px-5 py-4 rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-semibold text-zinc-900 appearance-none"
                    >
                      <option value="" disabled selected>Select a category</option>
                      <option value="Graphics">Graphics / Display</option>
                      <option value="Audio">Audio / Sound</option>
                      <option value="Network">Network / Wi-Fi</option>
                      <option value="Storage">Storage / HDD / SSD</option>
                      <option value="Peripheral">Printer / Scanner / Mouse</option>
                      <option value="Security">Security / TPM</option>
                      <option value="Other">Other Issues</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-zinc-500 tracking-[0.12em] uppercase ml-1">
                    Your Inquiry
                  </label>
                  <textarea
                    required
                    name="message"
                    rows="5"
                    className="w-full bg-slate-50 border border-transparent px-5 py-4 rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-semibold text-zinc-900 resize-none placeholder:text-zinc-400"
                    placeholder="Tell us about your hardware or driver issue..."
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-zinc-900 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-50 group"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Message
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;