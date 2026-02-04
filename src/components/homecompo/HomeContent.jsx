import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Sparkles,
  Shirt,
  Wind,
  Footprints,
  Home,
} from "lucide-react";

/* ------------------ Animations ------------------ */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.35 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const icons = [Shirt, Wind, Footprints, Home, Sparkles];

  const floatingIcons = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        Icon: icons[i % icons.length],
        left: `${(i * 27) % 100}%`,
        top: `${(i * 41) % 100}%`,
        size: 28 + (i % 18),
        duration: 18 + (i % 12),
      })),
    []
  );

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* 🎥 VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="/inside6.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* FLOATING ICONS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingIcons.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-white/10"
            style={{ left: item.left, top: item.top }}
            animate={{
              y: [0, -45, 0],
              x: [0, 20, -20, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-6">

        {/* BRAND */}
        <motion.h1
          variants={fadeUp}
          className="
            mb-6
            text-[26px] sm:text-[34px] lg:text-[42px]
            tracking-[0.45em] font-extrabold uppercase
            bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300
            bg-clip-text text-transparent
          "
        >
          
        </motion.h1>

        {/* HEADLINE */}
        <motion.h2
          variants={fadeUp}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="
            text-[38px] sm:text-6xl lg:text-[86px]
            font-black leading-[1.05]
            text-white mb-6
            drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]
          "
        >
          Freshness You Can Feel.

          <br />
          
Service You Can Trust.
        <br />
        <h1 className="text-yellow-400">Divine Laundry.</h1>
        </motion.h2>

     

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-5"
        >
          <button className="bg-[#6A5ACD] px-10 py-5 rounded-3xl font-black text-lg text-white shadow-[0_20px_60px_rgba(106,90,205,0.6)] flex items-center gap-3 hover:scale-105 transition">
            Order Now <ArrowRight />
          </button>

          <button className="border border-white/40 bg-white/10 backdrop-blur-xl px-10 py-5 rounded-3xl font-black text-lg text-white flex items-center gap-3 hover:bg-white/20 transition">
            <Phone /> Call Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
