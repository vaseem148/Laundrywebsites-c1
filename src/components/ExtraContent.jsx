import React, { useMemo } from "react";
import { motion } from "framer-motion";

const IMAGE_1 = "/inside1.jpg";
const IMAGE_2 = "/inside2.jpg";
const IMAGE_3 = "/inside3.jpg";

/* 🔥🔥 VERY HIGH CONFETTI COUNT */
const CONFETTI_COUNT = 420;

const TripleImageConfettiEntrance = () => {
  // performance-safe
  const confettiArray = useMemo(
    () => Array.from({ length: CONFETTI_COUNT }),
    []
  );

  return (
    <section className="relative min-h-[100svh] w-full bg-black overflow-hidden flex items-center justify-center px-4 sm:px-6">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0e0618] to-black" />

      {/* 🎊🎊 ULTRA SLOW CONFETTI */}
      {confettiArray.map((_, i) => {
        const size = Math.random() > 0.7 ? 8 : 4;
        return (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              y: -150,
              x: `${Math.random() * 120 - 60}vw`,
              rotate: Math.random() * 360,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: "130vh",
              rotate: Math.random() * 420, // very slow rotation
            }}
            transition={{
              delay: Math.random() * 3,      // 🔥 long spread
              duration: 10 + Math.random() * 6, // 🔥 VERY SLOW FALL
              ease: "linear",
            }}
            className="absolute top-0 pointer-events-none rounded-full"
            style={{
              width: size,
              height: size * 2,
              left: `${Math.random() * 100}%`,
              background:
                Math.random() > 0.5
                  ? "linear-gradient(180deg,#22d3ee,#6366f1)"
                  : "linear-gradient(180deg,#a855f7,#22d3ee)",
              filter: "drop-shadow(0 0 12px rgba(34,211,238,0.8))",
            }}
          />
        );
      })}

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 140 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-7xl"
      >
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
            Step Inside Divine Laundry ✨
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 tracking-wide">
            Clean • Care • Comfort
          </p>
        </motion.div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[IMAGE_1, IMAGE_2, IMAGE_3].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 90, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.8 + index * 0.25,
                duration: 1.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_160px_rgba(168,85,247,0.45)]"
            >
              <motion.img
                src={img}
                alt={`Laundry ${index + 1}`}
                initial={{ scale: 1.4, filter: "blur(20px)" }}
                whileInView={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="w-full h-[220px] sm:h-[260px] md:h-[340px] object-cover"
              />

              {/* GLASS GLOW */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-cyan-400/30" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default TripleImageConfettiEntrance;
