import React from "react";
import { Send } from "lucide-react";

const BookingSection = () => {
  return (
    <section
      id="booking"
      className="min-h-screen min-h-[100svh] bg-white py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* LEFT — Booking Form */}
        <div className="bg-white border border-slate-100 rounded-[32px] sm:rounded-[42px] p-6 sm:p-8 md:p-12 shadow-[0_40px_100px_-30px_rgba(124,43,217,0.15)]">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wider mb-6">
            Book Now
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Schedule Your Pickup
          </h2>

          <p className="text-slate-500 font-medium mb-10 sm:mb-12 max-w-md text-sm sm:text-base">
            Fill in your details and we’ll take care of the rest — fast, easy &
            reliable.
          </p>

          <form className="space-y-6 sm:space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium
                  focus:ring-2 focus:ring-purple-600 outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 99942 64467"
                  className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium
                  focus:ring-2 focus:ring-purple-600 outline-none transition-all"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                Service Type
              </label>
              <select
                className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium
                focus:ring-2 focus:ring-purple-600 outline-none cursor-pointer"
              >
                <option>Select a service</option>
                <option>Laundry (Wash & Fold)</option>
                <option>Dry Cleaning</option>
                <option>Steam Ironing</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                Pickup Address
              </label>
              <textarea
                rows={4}
                placeholder="Enter your complete address for pickup"
                className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium resize-none
                focus:ring-2 focus:ring-purple-600 outline-none transition-all"
              />
            </div>

            {/* CTA */}
            <button
              type="button"
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white
              font-bold py-4 sm:py-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(124,43,217,0.4)]
              transition-all flex items-center justify-center gap-3 text-base sm:text-lg hover:scale-[1.02]"
            >
              Book Pickup Now <Send size={20} />
            </button>
          </form>
        </div>

        {/* RIGHT — Image Section */}
        <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[640px] rounded-[32px] sm:rounded-[42px] overflow-hidden shadow-[0_40px_120px_-40px_rgba(0,0,0,0.25)]">
          <img
            src="public/inside4.jpg"
            alt="Laundry Pickup Service"
            className="w-full h-full object-cover"
          />

          {/* Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-purple-700/20 to-transparent" />

          {/* Optional Text Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Fresh Clothes. Zero Effort.
            </h3>
            <p className="text-sm sm:text-base text-white/90 mt-1 max-w-sm">
              Doorstep pickup • Professional care • On-time delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
