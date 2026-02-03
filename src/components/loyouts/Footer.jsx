import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#12061f] via-[#1a0b2e] to-[#12061f] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center font-semibold">
              D
            </div>
            <div>
              <p className="font-semibold text-lg">Divine Laundry</p>
              <p className="text-xs text-white/70">
                Laundry | Ironing | Dry Clean
              </p>
            </div>
          </div>

          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            Professional laundry service committed to delivering clean, fresh
            and perfectly pressed clothes.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4 mt-6">
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<MessageCircle size={18} />} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li>Laundry</li>
            <li>Dry Cleaning</li>
            <li>Steam Ironing</li>
            <li>Shoe Cleaning</li>
            <li>Home Cleaning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-5">Contact</h4>

          <ul className="space-y-4 text-sm text-white/75">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-purple-400" />
              +91 99942 64467
            </li>

            <li className="flex items-center gap-3">
              <Mail size={16} className="text-purple-400" />
              info@divinelaundry.in
            </li>

            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-purple-400 mt-1" />
              <span>
                31/15, IAF Rd, Vinoba Nagar,<br />
                East Tambaram, Chennai – 600059
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60 gap-4">
        <p>© 2026 Divine Laundry. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
        <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-105 transition">
          <MessageCircle className="text-white" />
        </button>
        <button className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-lg hover:scale-105 transition">
          <Phone className="text-white" />
        </button>
      </div>
    </footer>
  );
}

/* Social Icon Component */
function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
      {icon}
    </div>
  );
}
