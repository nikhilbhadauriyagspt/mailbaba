import { useState } from 'react';
import { ChevronDown, MessageCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is MailBaba an official email provider?",
      answer: "No, MailBaba is an independent educational resource. We are not affiliated with, endorsed by, or partnered with any email service providers like Gmail, Outlook, or Yahoo. We provide informative guides for users who want to learn how to navigate these platforms more effectively."
    },
    {
      question: "What kind of information do your guides cover?",
      answer: "Our guides cover a wide range of topics, including account setup, security best practices, troubleshooting common synchronization errors, and optimizing email productivity across different devices."
    },
    {
      question: "Are the guides free to access?",
      answer: "Yes, our primary educational guides and articles are free to browse. We aim to provide accessible information to assist everyone manage their digital communication securely and efficiently."
    },
    {
      question: "How often is the knowledge base updated?",
      answer: "We strive to update our guides regularly to reflect changes in email provider interfaces and new security recommendations, ensuring you have access to current and relevant information."
    },
    {
      question: "Which email platforms do your guides cover?",
      answer: "Our resources cover all major email platforms, including Gmail, Outlook, Yahoo Mail, AOL, iCloud, and general IMAP/SMTP configurations."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-white w-full font-sans">
      <div className="max-w-4xl mx-auto px-6">
        {/* Centered Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium tracking-wide uppercase text-[11px] mb-1">
            <Info className="w-3.5 h-3.5" />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl  text-zinc-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-blue-800 underline decoration-blue-200 decoration-2 underline-offset-8">Questions</span>
          </h2>
          <p className="text-zinc-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about MailBaba. Can't find the answer? 
            <Link to="/contact" className="text-blue-800 font-medium hover:underline ml-1">Reach out to us.</Link>
          </p>
        </div>

        {/* Full Width Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'bg-zinc-50 border-blue-100 shadow-lg shadow-blue-900/5' 
                  : 'bg-white border-zinc-100 hover:border-blue-200 hover:shadow-md'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left"
              >
                <span className={`text-[17px] font-semibold transition-all duration-300 ${openIndex === index ? 'text-blue-800' : 'text-zinc-900'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-blue-800 border-blue-800 text-white rotate-180' 
                    : 'bg-white border-zinc-200 text-zinc-400 group-hover:border-blue-300 group-hover:text-blue-800'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-[500px] opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 pt-1">
                  <div className="h-px bg-zinc-200 w-full mb-6 opacity-40" />
                  <p className="text-zinc-600 leading-relaxed text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-zinc-900 rounded-[3rem] p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl transition-transform duration-700 group-hover:scale-150" />
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-bold text-white">Still have questions?</h3>
              <p className="text-zinc-400 text-lg">Our support team is available to assist with any specific queries you might have.</p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-zinc-900 px-10 py-5 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
