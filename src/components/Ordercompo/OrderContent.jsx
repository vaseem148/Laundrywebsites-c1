import React from "react";
import { MessageCircle, Phone, MapPin, Send } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="min-h-screen bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT — Booking Form */}
        <div className="bg-white border border-slate-100 rounded-[42px] p-8 md:p-12 shadow-[0_40px_100px_-30px_rgba(124,43,217,0.15)]">
          
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wider mb-6">
            Book Now
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Schedule Your Pickup
          </h2>

          <p className="text-slate-500 font-medium mb-12 max-w-md">
            Fill in your details and we’ll take care of the rest — fast, easy & reliable.
          </p>

          <form className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium
                  focus:ring-2 focus:ring-purple-600 outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+91 99942 64467"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium
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
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium
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
                rows="4"
                placeholder="Enter your complete address for pickup"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium resize-none
                focus:ring-2 focus:ring-purple-600 outline-none transition-all"
              />
            </div>

            {/* CTA */}
            <button
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white
              font-bold py-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(124,43,217,0.4)]
              transition-all flex items-center justify-center gap-3 text-lg hover:scale-[1.02]"
            >
              Book Pickup Now <Send size={20} />
            </button>
          </form>
        </div>

        {/* RIGHT — Contact Options */}
        <div className="lg:pt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Prefer to Call or Chat?
          </h2>

          <p className="text-lg text-slate-500 font-medium mb-14 max-w-md">
            Talk to a real person instantly — quick help, no waiting.
          </p>

          <div className="space-y-7">

            {/* WhatsApp */}
            <div className="group flex items-center gap-6 p-7 bg-green-50 border border-green-100 rounded-[32px]
              hover:bg-green-100 transition-all cursor-pointer hover:-translate-y-1">
              <div className="bg-green-500 p-4 rounded-2xl text-white shadow-lg
                group-hover:scale-110 transition-transform">
                <MessageCircle size={30} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Chat on WhatsApp
                </h4>
                <p className="text-green-700 font-medium">
                  Fast replies • Easy booking
                </p>
              </div>
            </div>

            {/* Call */}
            <div className="group flex items-center gap-6 p-7 bg-purple-50 border border-purple-100 rounded-[32px]
              hover:bg-purple-100 transition-all cursor-pointer hover:-translate-y-1">
              <div className="bg-purple-600 p-4 rounded-2xl text-white shadow-lg
                group-hover:scale-110 transition-transform">
                <Phone size={30} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Call Us Directly
                </h4>
                <p className="text-purple-700 font-medium">
                  +91 99942 64467
                </p>
              </div>
            </div>

            {/* Store */}
            <div className="group flex items-start gap-6 p-7 bg-slate-50 border border-slate-100 rounded-[32px]
              hover:bg-slate-100 transition-all">
              <div className="bg-cyan-500 p-4 rounded-2xl text-white shadow-lg
                group-hover:scale-110 transition-transform">
                <MapPin size={30} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Visit Our Store
                </h4>
                <p className="text-slate-600 font-medium leading-relaxed mt-1">
                  31/15, IAF Rd, Vinoba Nagar,<br />
                  East Tambaram, Chennai – 600059
                </p>

                <button className="mt-3 text-purple-700 font-bold flex items-center gap-1
                  hover:gap-3 transition-all">
                  Get Directions →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSection;
