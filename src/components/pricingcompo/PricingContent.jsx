import React from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      badge: "First Order",
      title: "Laundry",
      price: "₹7",
      unit: "per KG",
      subtitle: "Wash, dry & fold service",
      features: [
        "Premium detergents",
        "Fabric softener included",
        "Separate wash guaranteed",
        "48-hour delivery",
      ],
      isPopular: false,
    },
    {
      badge: "Most Popular",
      title: "Dry Cleaning",
      price: "₹99",
      unit: "starting from",
      subtitle: "Premium garment care",
      features: [
        "Suits & blazers",
        "Sarees & lehengas",
        "Delicate fabrics",
        "Stain removal included",
        "Express option available",
      ],
      isPopular: true,
    },
    {
      title: "Steam Ironing",
      price: "₹10",
      unit: "per piece",
      subtitle: "Crisp, wrinkle-free finish",
      features: [
        "Professional steam press",
        "Shirt & trouser perfect",
        "Saree pleating available",
        "Same day service",
      ],
      isPopular: false,
    },
    {
      title: "Shoe Cleaning",
      price: "₹199",
      unit: "per pair",
      subtitle: "Complete shoe restoration",
      features: [
        "All shoe types",
        "Deep cleaning",
        "Deodorizing",
        "Minor repairs included",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing"className="bg-[#fcfaff] py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2 rounded-full">
            Transparent Pricing
          </span>

          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Simple,
            <span className="text-purple-700"> Affordable Rates</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            No hidden charges. Honest pricing that feels fair — always.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 transition-all duration-300
                ${
                  plan.isPopular
                    ? "bg-purple-700 text-white shadow-[0_30px_80px_-20px_rgba(124,43,217,0.6)] scale-[1.03] sm:scale-[1.04]"
                    : "bg-white text-slate-900 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-1.5 rounded-full text-xs font-bold tracking-wider
                    ${
                      plan.isPopular
                        ? "bg-cyan-400 text-slate-900"
                        : "bg-orange-100 text-orange-700"
                    }`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Title & Price */}
              <div className="text-center mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {plan.title}
                </h3>

                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-semibold mb-1 ${
                      plan.isPopular
                        ? "text-purple-200"
                        : "text-slate-500"
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>

                <p
                  className={`mt-3 text-xs sm:text-sm font-medium ${
                    plan.isPopular
                      ? "text-purple-100"
                      : "text-slate-400"
                  }`}
                >
                  {plan.subtitle}
                </p>
              </div>

              {/* Features */}
              <div className="flex-grow space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check
                      size={18}
                      strokeWidth={3}
                      className={
                        plan.isPopular
                          ? "text-cyan-400 mt-0.5"
                          : "text-purple-600 mt-0.5"
                      }
                    />
                    <span className="text-sm font-medium leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                className={`mt-auto w-full py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300
                  ${
                    plan.isPopular
                      ? "bg-cyan-400 text-slate-900 hover:bg-white hover:scale-[1.02]"
                      : "border-2 border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white"
                  }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
