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

const brandAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const headlineAnim = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const floatText = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
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
        top: `${(i * 43) % 100}%`,
        size: 30 + (i % 22),
        duration: 16 + (i % 14),
      })),
    []
  );

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative min-h-[100svh] bg-[#241C3A] px-6 lg:px-20 py-28 overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 z-0" />

      {/* Background Floating Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingIcons.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-white/10"
            style={{ left: item.left, top: item.top }}
            animate={{
              y: [0, -50, 0],
              x: [0, 25, -25, 0],
              rotate: [0, 20, -20, 0],
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

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-purple-500/35 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-indigo-500/35 rounded-full blur-[200px]" />

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* BRAND */}
          <motion.h1
            variants={brandAnim}
            className="
              mb-6 text-[28px] sm:text-[36px] lg:text-[44px]
              tracking-[0.45em] font-extrabold uppercase
              bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300
              bg-[length:200%_200%]
              animate-[gradient_6s_ease_infinite]
              bg-clip-text text-transparent
            "
          >
            DIVINE LAUNDRY
          </motion.h1>

          {/* HEADLINE */}
          <motion.h2
            variants={headlineAnim}
            {...floatText}
            className="
              text-[42px] sm:text-6xl lg:text-[82px]
              font-black leading-[1.05]
              text-white mb-8
              drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]
            "
          >
            Premium Care
            <br />
            For Every Fabric
          </motion.h2>

          {/* DESC */}
          <motion.p
            variants={headlineAnim}
            className="max-w-xl text-white/85 text-sm sm:text-lg mb-12"
          >
            Luxury laundry, dry cleaning & ironing services with pickup & drop.
            Crafted care by Divine Laundry.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={headlineAnim}
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

        {/* RIGHT – IMAGE */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 1.5, -1.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-purple-500/50 to-indigo-500/50 blur-[180px] rounded-full"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <img
  src="/inside4.jpg"
  alt="Laundry Service"
  className="
    relative z-10
    w-[300px] sm:w-[380px] lg:w-[480px]
    rounded-[40px]
    shadow-[0_60px_160px_rgba(0,0,0,0.7)]
    lg:-mr-10
  "
/>

        </motion.div>
      </div>
    </motion.section>
  );
}
