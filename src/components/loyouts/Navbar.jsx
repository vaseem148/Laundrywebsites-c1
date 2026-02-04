import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navAnim = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Pricing", "Contact"];

  return (
    <motion.nav
      variants={navAnim}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-50 w-full"
    >
      {/* Premium Dark Gradient Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/95 to-[#020617]/95 backdrop-blur-xl border-b border-white/10" />

      <div className="relative flex items-center justify-between px-5 md:px-12 lg:px-24 py-4">
        
        {/* ---------- LOGO ---------- */}
        <div className="flex items-center gap-3 cursor-pointer z-50">
          <div className="w-10 h-10 rounded-lg bg-[#111827] border border-white/10 flex items-center justify-center text-white font-medium text-lg">
            D
          </div>
          <div>
            <h3 className="text-[17px] font-semibold text-white leading-none">
              Divine Laundry
            </h3>
            <p className="text-[10px] text-white/55 tracking-wide mt-1">
              Premium Fabric Care
            </p>
          </div>
        </div>

        {/* ---------- DESKTOP LINKS ---------- */}
        <div className="hidden lg:flex items-center gap-12 text-sm font-medium text-white/65">
          {navLinks.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -1 }}
              className="relative group transition-colors hover:text-white"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white/50 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* ---------- ACTIONS ---------- */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          {/* Call Button - Hidden on very small screens */}
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm hover:text-white hover:border-white/30 transition">
            <Phone size={14} />
            <span className="hidden md:inline">Call NOW</span>
          </button>

          {/* Order Now - Main CTA */}
          <button className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white bg-[#1e3a8a] hover:bg-[#1e40af] transition shadow-lg shadow-blue-900/20">
            Order Now
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE MENU OVERLAY ---------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden relative bg-[#0f172a] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <hr className="border-white/5 my-2" />
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <Phone size={16} /> +1 234 567 890
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;