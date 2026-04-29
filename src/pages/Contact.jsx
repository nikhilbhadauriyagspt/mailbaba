import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Light Header Section */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-2 text-[13px] font-medium text-zinc-500 mb-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-900">Contact</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-blue-600 font-bold tracking-[0.15em] uppercase text-[12px] mb-4">Contact Us</p>
            <h1 className="text-3xl md:text-5xl font-medium text-zinc-900 mb-6 leading-tight">
              Request <span className="text-blue-700">Technical Assistance.</span>
            </h1>
            <p className="text-zinc-500 text-lg md:text-[19px] leading-relaxed">
              Have a specific question or need personalized guidance? Our support team is here to assist you with any email-related inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="bg-white">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
