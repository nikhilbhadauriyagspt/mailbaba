import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is Yagamail an official email provider?",
      answer: "No, Yagamail is an independent educational resource. We are not affiliated with, endorsed by, or partnered with any email service providers like Gmail, Outlook, or Yahoo. We provide informative guides for users who want to learn how to navigate these platforms more effectively."
    },
    {
      question: "What kind of information do your guides cover?",
      answer: "Our guides cover a wide range of topics, including account setup, security best practices, troubleshooting common synchronization errors, and optimizing email productivity across different devices."
    },
    {
      question: "Are the guides free to access?",
      answer: "Yes, our primary educational guides and articles are free to browse. We aim to provide accessible information to help everyone manage their digital communication securely and efficiently."
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
    <section id="faq" className="py-12 md:py-24 bg-white w-full font-sans">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <p className="text-blue-800 font-semibold tracking-[0.2em] uppercase text-[12px]">Common Questions</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight">
                Frequently Asked <span className="text-blue-800">Questions.</span>
              </h2>
              <p className="text-zinc-600 text-[18px] leading-relaxed">
                Can't find the answer you're looking for? Reach out to our support team for personalized assistance.
              </p>
            </div>
            
            <Link to="/contact" className="inline-flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-xl">
              <MessageCircle className="w-5 h-5" />
              Ask a Specific Question
            </Link>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'bg-zinc-50 border-zinc-200 shadow-sm' : 'bg-white border-zinc-100 hover:border-zinc-200'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left group"
                >
                  <span className={`text-[18px] font-bold transition-colors ${openIndex === index ? 'text-blue-800' : 'text-zinc-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-zinc-200 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-blue-800 border-blue-800 text-white rotate-180' : 'text-zinc-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 pt-0 text-zinc-600 leading-relaxed text-[16px]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
