import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Smile,
  IndianRupee,
  Layers,
  Leaf,
} from "lucide-react";

const AboutSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const features = [
    {
      title: "Expert Care",
      desc: "Trained professionals handle your garments with utmost care and precision.",
      icon: ShieldCheck,
      color: "emerald",
    },
    {
      title: "Express Service",
      desc: "Fast turnaround time without compromising washing quality.",
      icon: Zap,
      color: "amber",
    },
    {
      title: "Hassle-Free",
      desc: "Smooth doorstep pickup and delivery experience.",
      icon: Smile,
      color: "rose",
      highlight: true,
    },
    {
      title: "Affordable Pricing",
      desc: "Premium laundry service at pocket-friendly prices.",
      icon: IndianRupee,
      color: "blue",
    },
    {
      title: "Separate Wash",
      desc: "Your clothes are washed separately, never mixed.",
      icon: Layers,
      color: "violet",
    },
    {
      title: "Fabric-Safe",
      desc: "Gentle wash suitable for all fabric types.",
      icon: Leaf,
      color: "green",
    },
  ];

  const colorMap = {
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
    blue: "bg-blue-50 text-blue-600",
    violet: "bg-violet-50 text-violet-600",
    green: "bg-green-50 text-green-600",
  };

  return (
    <section className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-24">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-5 py-2 rounded-full mb-8">
          About Us
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Your Trusted <span className="text-purple-700">Laundry Partner</span>
        </h2>

        <p className="text-lg md:text-xl text-slate-600">
          Fresh, hygienic and perfectly pressed clothes with expert care.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
        {features.map((item, index) => {
          const isActive = activeCard === index;
          const Icon = item.icon;

          return (
            <div
              key={index}
              onClick={() => setActiveCard(isActive ? null : index)}
              className={`
                relative rounded-3xl p-[2px] cursor-pointer
                transition-all duration-500
                hover:-translate-y-3 hover:scale-[1.05]
                ${
                  isActive
                    ? "animate-border bg-[length:300%_300%]"
                    : "bg-slate-200"
                }
              `}
            >
              {/* ANIMATED BORDER */}
              <div
                className={`
                  absolute inset-0 rounded-3xl
                  bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400
                  opacity-0
                  ${isActive ? "opacity-100 animate-border" : ""}
                `}
              />

              {/* CARD */}
              <div
                className={`
                  relative z-10 rounded-3xl p-10 h-full
                  bg-white/90 backdrop-blur-xl
                  transition-all duration-500
                  ${
                    isActive
                      ? "shadow-[0_40px_100px_-20px_rgba(168,85,247,0.6)]"
                      : "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
                  }
                `}
              >
                {/* ICON */}
                <div
                  className={`
                    w-16 h-16 flex items-center justify-center rounded-2xl mb-6
                    shadow-xl
                    ${colorMap[item.color]}
                    ${
                      isActive
                        ? "animate-iconSpin scale-110"
                        : "group-hover:animate-iconBounce"
                    }
                  `}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {isActive && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto rounded-[40px] border-[3px] border-purple-400 bg-gradient-to-br from-[#faf7ff] to-[#f4f1ff] px-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-16 shadow-xl">
        <div>
          <h3 className="text-3xl font-extrabold mb-2">
            Serving Chennai with Pride
          </h3>
          <p className="text-slate-600">
            Trusted by 1000+ happy customers
          </p>
        </div>

        <div className="flex gap-16">
          <Stat value="1000+" label="Customers" />
          <Stat value="5+" label="Years" />
          <Stat value="4.9★" label="Rating" />
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes iconBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25) rotate(8deg); }
        }

        @keyframes iconSpin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.3); }
          100% { transform: rotate(360deg) scale(1); }
        }

        .animate-border {
          background-size: 300% 300%;
          animation: borderMove 6s ease infinite;
        }

        .animate-iconBounce {
          animation: iconBounce 0.6s ease-in-out;
        }

        .animate-iconSpin {
          animation: iconSpin 0.8s ease-in-out;
        }
      `}</style>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="text-center">
    <p className="text-5xl font-black text-purple-700">{value}</p>
    <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
      {label}
    </p>
  </div>
);

export default AboutSection;