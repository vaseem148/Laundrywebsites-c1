import React from "react";
import { ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Laundry",
      desc: "Premium wash & fold with fabric-safe detergents for everyday wear.",
      image:
        "https://images.pexels.com/photos/4700411/pexels-photo-4700411.jpeg",
    },
    {
      title: "Dry Cleaning",
      desc: "Expert care for suits, sarees & luxury garments.",
      image:
        "https://images.pexels.com/photos/11450438/pexels-photo-11450438.jpeg",
    },
    {
      title: "Shoe Cleaning",
      desc: "Deep cleaning & restoration for sneakers and footwear.",
      image:
        "https://images.pexels.com/photos/16319448/pexels-photo-16319448.jpeg",
    },
    {
      title: "Steam Ironing",
      desc: "Sharp, wrinkle-free steam pressing with precision finish.",
      image:
        "https://images.pexels.com/photos/7641487/pexels-photo-7641487.jpeg",
    },
    {
      title: "Home Cleaning",
      desc: "Curtains, bedsheets & all home fabric essentials.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ];

  return (
    <section className="relative bg-[#f9fafb] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-8 shadow-lg">
          Our Services
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
          Complete <span className="text-purple-600">Fabric Care</span>
          <br className="hidden md:block" />
          <span className="text-blue-500"> Solutions</span>
        </h2>

        <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto">
          Every garment handled with technology, care & premium precision.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-[36px] overflow-hidden bg-black shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Image FULL */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
                {service.desc}
              </p>

              <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-bold px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                Book Service
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Glow border */}
            <div className="absolute inset-0 rounded-[36px] ring-1 ring-white/10 group-hover:ring-purple-400/40 transition" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
