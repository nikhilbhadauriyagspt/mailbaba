import { useState } from 'react';
import { Send, Mail, ShieldCheck, User, MessageCircle, CheckCircle, Globe, Loader2 } from 'lucide-react';
import { CONTACT_API_URL } from '../config';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: "Account Setup Guides",
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `Support Inquiry: ${formData.issue}`,
          to_email: 'info@mailbaba.co'
        }),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', issue: "Account Setup Guides", message: '' });
      } else {
        throw new Error('Failed to send inquiry. Please try again later.');
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <section id="support-form" className="py-20 md:py-32 bg-white w-full font-sans text-zinc-900">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Support Info */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                Connect with our <span className="text-blue-700">Support Team.</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-10">
                Prefer direct communication? Reach out to us via email and we'll assist you with your technical inquiries.
              </p>
            </div>

            <a 
              href="mailto:info@mailbaba.co"
              className="flex gap-5 p-8 rounded-3xl bg-zinc-50 border border-zinc-100/50 hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-zinc-200/40 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm border border-zinc-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Email Us</h4>
                <p className="text-xl font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">info@mailbaba.co</p>
              </div>
            </a>
          </div>

          {/* Right Side: Modern Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 shadow-2xl shadow-zinc-200/40 relative overflow-hidden">
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
              
              {status.success ? (
                <div className="text-center py-12 space-y-8 relative z-10">
                  <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-zinc-900">Inquiry Received</h3>
                    <p className="text-zinc-500 text-lg max-w-md mx-auto">
                      Thank you for reaching out. A member of our support team will provide the requested assistance shortly.
                    </p>
                  </div>
                  <button 
                    onClick={() => setStatus({ ...status, success: false })}
                    className="inline-flex items-center gap-2 bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-zinc-200"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full bg-zinc-50/50 px-6 py-5 rounded-2xl border border-zinc-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className="w-full bg-zinc-50/50 px-6 py-5 rounded-2xl border border-zinc-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="issue" className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Topic of Inquiry</label>
                    <div className="relative">
                      <select 
                        id="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleChange}
                        className="w-full bg-zinc-50/50 px-6 py-5 rounded-2xl border border-zinc-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option>Account Setup Guides</option>
                        <option>Security Best Practices</option>
                        <option>Syncing Across Devices</option>
                        <option>Troubleshooting Assistance</option>
                        <option>Other Educational Resources</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5" 
                      placeholder="Please provide details about how we can assist you..." 
                      className="w-full bg-zinc-50/50 px-6 py-5 rounded-2xl border border-zinc-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {status.error && (
                    <div className="flex items-center gap-3 text-red-600 text-sm font-medium bg-red-50 p-4 rounded-xl border border-red-100 animate-shake">
                      <AlertCircle className="w-5 h-5" />
                      {status.error}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={status.loading}
                    className="w-full bg-zinc-900 text-white py-5 rounded-2xl text-[16px] font-bold hover:bg-blue-700 transition-all shadow-xl shadow-zinc-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {status.loading ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Send a Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simplified AlertCircle icon for the error state
const AlertCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export default ContactForm;
