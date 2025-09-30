import React, { useState } from "react";
import {
  subscriptionImage1,
  subscriptionImage2,
  ellipse,
} from "../../assets/images/index.js";
function Subscription() {
  const [selectedBilling, setSelectedBilling] = useState("weekly");

  // Pricing data for different billing frequencies
  const pricingData = {
    weekly: { price: "£9.99", period: "/weekly", originalPrice: null },
    monthly: { price: "£29.99", period: "/month", originalPrice: null },
    quarterly: {
      price: "£79.99",
      period: "/3 months",
      originalPrice: "£89.97",
    },
    yearly: { price: "£9.99", period: "/yearly", originalPrice: "£359.88" },
  };

  // Subscription plans data
  const subscriptionPlans = [
    {
      id: "basic",
      type: "Basic",
      title: "Free Plan",
      description:
        "Start your marriage journey - Access Profiles & make connection",
      price: "Free",
      period: "",
      originalPrice: null,
      icon: "🥉", // Bronze medal
      features: [
        { text: "Full Access to marriage profile", included: true },
        { text: "Maximum 1 connection", included: true },
        { text: "Verified members", included: true },
        { text: "Screenshot blockers/ safety features", included: true },
        { text: "Free Access MyCommunity Platform", included: true },
        { text: "Premium filters", included: true },
        { text: "Guardian verified profiles", included: true },
        { text: "Add free experience", included: false },
        { text: "Seeker to seeker messaging", included: false },
        { text: "MyMasjid Connections", included: false },
      ],
    },
    {
      id: "premium",
      type: "Premium",
      title: pricingData[selectedBilling].price,
      description:
        "Start your marriage journey with essential features, trust, and guidance.",
      price: pricingData[selectedBilling].price,
      period: pricingData[selectedBilling].period,
      originalPrice: pricingData[selectedBilling].originalPrice,
      icon: "🥈", // Silver medal
      features: [
        { text: "Full Access to marriage profile", included: true },
        { text: "Maximum 7 concurrent connection", included: true },
        { text: "Verified members", included: true },
        { text: "Screenshot blockers/ safety features", included: true },
        { text: "Free Access MyCommunity Platform", included: true },
        { text: "Premium filters", included: true },
        { text: "Guardian verified profiles", included: true },
        { text: "Add free experience", included: true },
        { text: "Seeker to seeker messaging", included: true },
        { text: "MyMasjid Connections", included: true },
      ],
    },
  ];

  const billingOptions = [
    { id: "weekly", label: "Weekly" },
    { id: "monthly", label: "Monthly" },
    { id: "quarterly", label: "Quarterly" },
    { id: "yearly", label: "Yearly" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 px-4 sm:px-7 lg:px-8 relative overflow-hidden">
      <div className="absolute top-[240px] left-0 hidden sm:block z-0">
        <img
          className="w-[80px] sm:w-[120px] md:w-[130px] opacity-30"
          src={ellipse}
          alt="elipse"
        />
      </div>
      <div className="absolute top-[200px] sm:top-[300px] md:top-[600px] right-0 rotate-180 hidden sm:block z-0">
        <img
          className="w-[80px] sm:w-[120px] md:w-[130px] opacity-30"
          src={ellipse}
          alt="elipse"
        />
      </div>
      {/* Heading Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 data-aos="fade-down" className="text-4xl md:text-5xl lg:text-[46px] dm-serif-display font-medium text-gray-900 leading-tight">
            Subscription
          </h2>
          <p data-aos="fade-up" className="text-lg md:text-[23px] text-[#121212] font-medium montserrat mt-2 sm:mt-3">
            Join now with our flexible plans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 max-w-[51rem] mx-auto py-8 md:py-16">
          {subscriptionPlans.map((plan, index) => (
            <div 
              key={plan.id}
              data-aos={index === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
              className={`relative rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden ${
                plan.id === "basic"
                  ? "bg-white border-2 "
                  : "bg-[#695692] text-white"
              }`}
            >
              {/* Header */}
              <div
                className={`p-4 sm:p-5 md:p-6 ${
                  plan.id === "premium" ? "bg-[#695692]" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="text-3xl relative -top-4 sm:-top-5 md:-top-6 left-3 sm:left-4 md:left-5">
                    <img
                      className={`${
                        plan.id === "basic"
                          ? "w-[45px] sm:w-[50px] md:w-[55px]"
                          : "w-[35px] sm:w-[40px] md:w-[44px]"
                      }`}
                      src={
                        plan.id === "basic"
                          ? subscriptionImage1
                          : subscriptionImage2
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className={`dm-serif-display rounded-full text-sm sm:text-base md:text-lg tracking-wide font-medium ${
                      plan.id === "basic"
                        ? "bg-[radial-gradient(circle,_#5A4685,_#3F2D65)] text-white px-6 sm:px-8 md:px-10 py-[5px] sm:py-[6px] md:py-[7px]"
                        : "bg-white text-[#695692] py-[5px] sm:py-[6px] md:py-[7px] px-3 sm:px-4 md:px-5"
                    }`}
                  >
                    {plan.type}
                  </div>
                </div>

                {/* Price Section */}
                <div className="mb-3 sm:mb-4">
                  {plan.id === "premium" ? (
                    <div>
                      <div className="flex items-baseline flex-wrap">
                        <span className="ml-3 sm:ml-4 md:ml-5 text-4xl sm:text-5xl md:text-6xl lg:text-[65px] dm-serif-display">
                          {plan.price}
                        </span>
                        <span className="text-sm sm:text-base md:text-lg text-white ml-1 sm:ml-2 opacity-90 montserrat">
                          {plan.period}
                        </span>
                      </div>
                      {plan.originalPrice && (
                        <div className="ml-3 sm:ml-4 md:ml-5 text-xs sm:text-sm opacity-75 line-through mt-1">
                          {plan.originalPrice}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="ml-3 sm:ml-4 md:ml-5 text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-semibold text-[#5A4685] dm-serif-display tracking-wide">
                      {plan.price}
                      <span className="text-sm sm:text-base md:text-lg ml-1 sm:ml-2 font-medium tracking-tight montserrat">
                        Plan
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm font-medium ml-3 sm:ml-4 md:ml-5 tracking-tight w-[85%] sm:w-[80%] md:w-[78%] montserrat ${
                    plan.id === "basic"
                      ? "text-[#4A4A4A]"
                      : "text-white font-light"
                  }`}
                >
                  {plan.description}
                  <hr
                    className={`mt-3 sm:mt-4 md:mt-5 border-t ${
                      plan.id === "basic"
                        ? "border-dashed border-[#4A4A4A]"
                        : "border-none" // no line for premium
                    }`}
                  />
                </p>

                {/* Billing Options for Premium */}
                {plan.id === "premium" && (
                  <div className=" bg-white rounded-full px-1  py-2 sm:py-3">
                    <div className="flex flex-wrap gap-1 sm:gap-1 justify-center lg:justify-start">
                      {billingOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setSelectedBilling(option.id)}
                          className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-2 ${
                            selectedBilling === option.id
                              ? "bg-[#695692] text-white rounded-full py-2 sm:py-3 px-3 sm:px-4 montserrat"
                              : "montserrat text-[#695692] font-bold"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 md:pb-10 ml-3 sm:ml-4 md:ml-5">
                <div className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start sm:items-center"
                    >
                      <div className="flex-shrink-0 mr-2 sm:mr-3 mt-0.5 sm:mt-0">
                        {feature.included ? (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#058E30] rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#D10100] rounded-full flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <span
                        className={`text-xs sm:text-sm montserrat leading-relaxed ${
                          plan.id === "basic" ? "text-black" : "text-white"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
