import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Shirt,
  Sparkles,
  Footprints,
  Wind,
  Home,
} from "lucide-react";

/* ------------------ Animations ------------------ */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const floatSlow = {
  animate: {
    y: [0, -18, 0],
    rotate: [0, 6, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  },
};

/* ------------------ Component ------------------ */
export default function HeroSection() {
  const bgIcons = [Shirt, Sparkles, Footprints, Wind, Home];

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative min-h-screen bg-[#241C3A] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden"
    >
      {/* ---------- DARK OVERLAY ---------- */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* ---------- MORE FLOATING BACKGROUND ICONS ---------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(28)].map((_, i) => {
          const Icon = bgIcons[i % bgIcons.length];
          return (
            <motion.div
              key={i}
              className="absolute text-white/15"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -45, 0],
                x: [0, 25, -25, 0],
                rotate: [0, 30, -30, 0],
              }}
              transition={{
                duration: 16 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon size={48 + Math.random() * 30} />
            </motion.div>
          );
        })}
      </div>

      {/* ---------- SOFT GLOW ---------- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-500/25 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-indigo-500/25 rounded-full blur-[150px]" />
      </div>

      {/* ---------- FLOATING ACCENT ICONS ---------- */}
      <motion.div
        variants={floatSlow}
        animate="animate"
        className="absolute top-24 right-[10%] hidden md:block bg-white/10 backdrop-blur-xl p-5 rounded-3xl rotate-12 z-10"
      >
        <Shirt size={42} className="text-white" />
      </motion.div>

      <motion.div
        variants={floatSlow}
        animate="animate"
        className="absolute bottom-40 left-[6%] hidden md:block bg-white/10 backdrop-blur-xl p-5 rounded-3xl -rotate-12 z-10"
      >
        <Sparkles size={42} className="text-white" />
      </motion.div>

      {/* ---------- OFFER BADGE ---------- */}
      <motion.div
        variants={itemUp}
        className="z-10 inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-10 shadow-xl"
      >
        <Sparkles className="text-[#241C3A] w-4 h-4" />
        <p className="text-[11px] font-black text-black uppercase tracking-widest">
          First Order — <span className="text-[#241C3A]">₹7 / KG</span>
        </p>
        <span className="bg-[#241C3A] text-[10px] font-black px-2 py-0.5 rounded-full text-white">
          20% OFF
        </span>
      </motion.div>

      {/* ---------- HEADING ---------- */}
      <motion.h1
        variants={itemUp}
        className="z-10 text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-black leading-[0.95] tracking-tight mb-8 text-white"
        style={{ textShadow: "0 6px 30px rgba(0,0,0,0.8)" }}
      >
        Clean Clothes.
        <br />
        Happy Customers.
        <br />
        Every Time.
      </motion.h1>

      {/* ---------- DESCRIPTION ---------- */}
      <motion.p
        variants={itemUp}
        className="z-10 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white mb-12 leading-relaxed"
        style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
      >
        Professional laundry, dry cleaning & ironing services with pickup & drop.
        Premium fabric care with transparent pricing.
      </motion.p>

      {/* ---------- CTA ---------- */}
      <motion.div
        variants={itemUp}
        className="z-10 flex flex-col sm:flex-row gap-6 mb-20"
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#6A5ACD] text-white px-10 py-5 rounded-3xl font-black text-lg md:text-xl flex items-center gap-3 shadow-2xl"
        >
          Order Now <ArrowRight />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="border border-white bg-white/10 backdrop-blur-xl px-10 py-5 rounded-3xl font-black text-lg md:text-xl text-white flex items-center gap-3"
        >
          <Phone /> Call Now
        </motion.button>
      </motion.div>

      {/* ---------- SERVICES ---------- */}
      <motion.div
        variants={itemUp}
        className="z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl w-full"
      >
        {[
          { name: "Laundry", icon: <Shirt /> },
          { name: "Dry Cleaning", icon: <Sparkles /> },
          { name: "Shoe Cleaning", icon: <Footprints /> },
          { name: "Steam Ironing", icon: <Wind /> },
          { name: "Home Cleaning", icon: <Home /> },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[28px] flex items-center justify-center text-white mb-3 shadow-xl">
              {React.cloneElement(item.icon, { size: 30 })}
            </div>
            <p className="text-[11px] font-black uppercase tracking-widest text-white">
              {item.name}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
