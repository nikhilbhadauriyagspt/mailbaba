import React from "react";
import {
  Search,
  ListChecks,
  MousePointer2,
  ShieldCheck,
  Mail,
  Send,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search />,
      title: "Identify Your Need",
      description:
        "Start by choosing the topic you want to learn, whether it is basic setup or advanced security.",
    },
    {
      icon: <ListChecks />,
      title: "Select a Category",
      description:
        "Browse through our organized categories to find the specific guide that matches your provider.",
    },
    {
      icon: <MousePointer2 />,
      title: "Follow the Steps",
      description:
        "Use our simple, numbered instructions to complete your task without any technical confusion.",
    },
    {
      icon: <ShieldCheck />,
      title: "Verify & Secure",
      description:
        "Finish by confirming your settings are correct and your account is fully protected.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-20 bg-white">
      <div className="max-w-full mx-auto ">
        <div className="relative overflow-hidden  bg-[#13244b] px-6 py-14 md:px-12 lg:px-20 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_35%)]" />

          <Mail className="absolute left-8 bottom-8 w-20 h-20 text-white/25 rotate-[-12deg] hidden md:block" />
          <Send className="absolute right-10 top-10 w-20 h-20 text-white/80 rotate-[18deg] hidden md:block" />

          <div className="relative z-10 text-center mb-14">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/70 mb-2">
              How To Learn
            </p>

            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Simple Steps to{" "}
              <span className="text-blue-400">Email Mastery</span>
            </h2>

            <p className="text-white/75 text-sm md:text-base mt-3">
              We’ve broken down the learning process into 4 easy steps.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] border-t-2 border-dashed border-white/25" />

            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative mx-auto mb-5 w-[86px] h-[70px] flex items-center justify-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl ${
                      index === 0
                        ? "bg-blue-600"
                        : index === 1
                        ? "bg-blue-600"
                        : index === 2
                        ? "bg-emerald-500"
                        : "bg-violet-600"
                    }`}
                  >
                    {React.cloneElement(step.icon, {
                      className: "w-7 h-7 text-white stroke-[2]",
                    })}
                  </div>

                  <span className="absolute -right-1 top-3 w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center text-[11px] font-extrabold shadow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-3">{step.title}</h3>

                <p className="max-w-[260px] mx-auto text-sm leading-6 text-white/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;