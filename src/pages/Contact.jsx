import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header Section */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-zinc-900 mb-6 tracking-tight">
            Get in <span className="text-blue-800">Touch.</span>
          </h1>
          <p className="text-zinc-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question or need more information about our guides? We are dedicated to providing clear, educational resources for your email journey. Reach out and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 border-b border-zinc-50">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="flex justify-center">
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center gap-6 max-w-md w-full">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-800 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-600 uppercase tracking-widest mb-1">Email Us</p>
                <a href="mailto:info@yagamail.shop" className="text-lg font-semibold text-zinc-900 hover:text-blue-800 transition-colors">info@yagamail.shop</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="py-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
