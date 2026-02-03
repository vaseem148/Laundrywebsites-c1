import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-[#241C3A]/80 backdrop-blur-2xl border-b border-white/10" />

      <div className="relative flex justify-between items-center px-6 md:px-12 lg:px-24 py-5">
        {/* ---------- LOGO ---------- */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-black text-xl text-white shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            D
          </motion.div>

          <div className="text-white">
            <h3 className="text-xl font-black tracking-tight leading-none">
              Divine Laundry
            </h3>
            <p className="text-[9px] font-bold text-white/60 uppercase tracking-[0.3em] mt-1">
              Laundry • Ironing • Dry Clean
            </p>
          </div>
        </motion.div>

        {/* ---------- DESKTOP LINKS ---------- */}
        <div className="hidden lg:flex items-center gap-14 font-semibold text-sm text-white/80">
          {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative group cursor-pointer"
            >
              <span className="transition-colors group-hover:text-white">
                {item}
              </span>

              {/* Premium underline */}
              <span className="absolute left-1/2 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
            </motion.a>
          ))}
        </div>

        {/* ---------- ACTION BUTTONS ---------- */}
        <div className="flex items-center gap-4">
          {/* Call Button */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 250, damping: 16 }}
            className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md font-semibold text-sm text-white shadow-lg hover:bg-white hover:text-[#241C3A]"
          >
            <Phone size={14} /> Call Now
          </motion.button>

          {/* Order Button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
            className="px-7 py-2 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#6A5ACD] to-[#7B6CF6] shadow-[0_0_35px_rgba(123,108,246,0.55)]"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
