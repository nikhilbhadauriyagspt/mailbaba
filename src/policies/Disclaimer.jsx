const Disclaimer = () => {
  return (
    <section className="py-24 bg-white font-sans text-zinc-900 min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-blue-800">Disclaimer</h1>
        <p className="text-zinc-600 mb-12 border-b border-zinc-100 pb-8 uppercase font-bold tracking-widest">Last updated: April 28, 2026</p>

        <div className="space-y-12 text-[17px] leading-relaxed text-zinc-700">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">General Disclaimer</h2>
            <p>
              The information provided by <strong>MailBaba</strong> ("we," "us," or "our") on <a href="https://mailbaba.co" className="text-blue-800 underline">https://mailbaba.co</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">Professional Disclaimer</h2>
            <p>
              The Site cannot and does not contain legal or medical advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">External Links Disclaimer</h2>
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
