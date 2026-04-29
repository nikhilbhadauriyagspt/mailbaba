const RefundPolicy = () => {
  return (
    <section className="py-24 bg-white font-sans text-zinc-900 min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-blue-800">Return Policy</h1>
        <p className="text-zinc-600 mb-12 border-b border-zinc-100 pb-8 uppercase font-bold tracking-widest">Last updated April 28, 2026</p>

        <div className="space-y-12 text-[17px] leading-relaxed text-zinc-700">
          <p>
            Thank you for using MailBaba. We hope you find our educational resources helpful. However, if you are not completely satisfied with a service for any reason, you may contact us for a refund. Please see below for more information on our return policy.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">REFUNDS</h2>
            <p>
              All refund requests must be made within seven (7) days of the purchase or service date. We strive for 100% satisfaction with our educational content and guidance.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">REFUND PROCESS</h2>
            <p>
              To request a refund, please email customer service at <span className="text-blue-800 font-medium">info@mailbaba.co</span> with your proof of purchase and reason for the request.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">QUESTIONS</h2>
            <p>
              If you have any questions concerning our return policy, please contact us at:
            </p>
            <div className="font-bold text-zinc-900">
              <p>info@mailbaba.co</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
