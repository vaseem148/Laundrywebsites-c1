import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-[#241C3A] via-[#12091f] to-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — Contact Information */}
        <div className="text-white space-y-10">
          <div>
            <span className="inline-block bg-white/10 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/20">
              Contact Us
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-6 mb-4">
              Get in Touch
            </h2>

            <p className="text-purple-100 font-bold text-base sm:text-lg opacity-90 max-w-xl">
              Have questions? We're here to help. Reach out through any of the
              channels below.
            </p>
          </div>

          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <p className="text-purple-200 text-xs font-black uppercase tracking-widest mb-1">
                  Phone
                </p>
                <p className="text-lg sm:text-xl font-bold">
                  +91 99942 64467
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <p className="text-purple-200 text-xs font-black uppercase tracking-widest mb-1">
                  Email
                </p>
                <p className="text-lg sm:text-xl font-bold break-all">
                  info@divinelaundry.in
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <p className="text-purple-200 text-xs font-black uppercase tracking-widest mb-1">
                  Business Hours
                </p>
                <p className="text-lg sm:text-xl font-bold">
                  Mon - Sat: 8AM - 8PM
                </p>
              </div>
            </div>
          </div>

          {/* Store Location Card */}
          <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[28px] sm:rounded-[35px] flex items-start gap-5 max-w-md">
            <div className="bg-cyan-500/20 p-3 rounded-xl">
              <MapPin size={24} className="text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black mb-1">
                Store Location
              </h4>
              <p className="text-purple-100 font-medium leading-relaxed opacity-80 text-sm sm:text-base">
                31/15, IAF Rd, Vinoba Nagar, <br />
                East Tambaram, Chennai - 600059
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — Google Maps */}
        <div className="relative w-full h-[360px] sm:h-[420px] md:h-[500px] lg:h-[550px] rounded-[28px] sm:rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl">
          <iframe
            title="Divine Laundry Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750541234567!2d80.1912345!3d12.9234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0000000000%3A0x0!2sDivine%20Laundry!5e0!3m2!1sen!2sin!4v1234567890"
            className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
