import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Garment Receiving",
      desc: "Each garment is carefully logged, tagged, and prepared for processing.",
      image:
        "https://images.pexels.com/photos/4805484/pexels-photo-4805484.jpeg",
    },
    {
      id: "02",
      title: "Fabric Sorting",
      desc: "Clothes are separated by fabric type, color, and wash requirement.",
      image:
        "https://images.pexels.com/photos/8485587/pexels-photo-8485587.jpeg",
    },
    {
      id: "03",
      title: "Deep Washing",
      desc: "Advanced machines with premium detergents ensure deep yet gentle cleaning.",
      image:
        "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1",
    },
    {
      id: "04",
      title: "Controlled Drying",
      desc: "Temperature-controlled drying protects fabric texture and lifespan.",
      image:
        "https://images.pexels.com/photos/4495906/pexels-photo-4495906.jpeg",
    },
  ];

  return (
    <section className="relative bg-slate-950 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Glow background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/30 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-xs tracking-widest uppercase bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            How We Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Smart Laundry Process
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            AI-inspired workflow designed for hygiene, fabric care, and perfection.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-14`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[300px] md:h-[380px] object-cover scale-100 group-hover:scale-105 transition duration-700"
                  />
                  {/* ❌ color overlay removed */}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:shadow-[0_0_60px_rgba(34,211,238,0.25)] transition">
                  
                  {/* Step number */}
                  <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-900 font-bold flex items-center justify-center text-lg shadow-lg">
                    {step.id}
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Accent line */}
                  <div className="mt-6 h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
