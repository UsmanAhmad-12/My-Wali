import React, { useState } from "react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { ellipse } from "../../assets/images/index.js";


function CommunityFaq() {
    const [activeIndex, setActiveIndex] = useState(1); // Start with second question expanded as shown in image
const [isFaqSectionOpen, setIsFaqSectionOpen] = useState(false); // Control visibility of entire FAQ section

const faqData = [
  {
    question: "What makes My Wali different from other marriage apps?",
    answer:
      "My Wali stands out by combining traditional Islamic values with modern technology. We prioritize family involvement, guardian verification, and faith-based matchmaking to ensure authentic and meaningful connections.",
  },
  {
    question: "How does guardian verification work?",
    answer:
      "Guardian verification is an essential part of our process. Every profile is linked to a registered guardian, who must verify the information provided. This ensures authenticity and adds a layer of trust to each connection. Guardians also remain actively involved throughout the matchmaking journey, guiding and supporting users.",
  },
  {
    question: "Is my information secure on My Wali?",
    answer:
      "Absolutely. We take your privacy and security seriously. All personal information is encrypted and stored securely. We follow strict data protection protocols and never share your information with third parties without your explicit consent.",
  },
  {
    question: "Can I browse profiles without creating a profile?",
    answer:
      "No, you need to create a profile to browse other profiles. This ensures that all users are committed to the process and maintains the integrity of our community. Creating a profile also allows us to provide you with personalized matches based on your preferences.",
  },
//   {
//     question: "How do I get started with My Wali?",
//     answer:
//       "Getting started is easy! Simply download the app, create your profile with your guardian's assistance, complete the verification process, and start exploring potential matches. Our guided setup process will help you through each step.",
//   },
//   {
//     question: "What if I don't have a guardian?",
//     answer:
//       "We understand that not everyone has a traditional guardian available. In such cases, we can work with trusted family members, community leaders, or religious advisors who can fulfill the guardian role in your matchmaking journey.",
//   },
];

const toggleFAQ = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

const toggleFaqSection = () => {
  setIsFaqSectionOpen(!isFaqSectionOpen);
};
  return (
    <div className="w-full bg-[#fafafa] px-5 sm:px-10 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative max-w-[1600px] mx-auto overflow-hidden">
      <div className=" max-w-3xl mx-auto ">
        {/* Ellipse Section */}
        <div className="absolute left-0 top-[200px] sm:top-[300px] md:top-[380px]  hidden sm:block z-0">
          <img
            className="w-[60px] sm:w-[120px] md:w-[150px] opacity-30"
            src={ellipse}
            alt="elipse"
          />
        </div>
        <div className="absolute   right-0 rotate-180 hidden sm:block z-0">
          <img
            className="w-[60px] sm:w-[120px] md:w-[150px] opacity-30"
            src={ellipse}
            alt="elipse"
          />
        </div>

        {/* Section Header - Now Clickable */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <button
            onClick={toggleFaqSection}
            className="focus:outline-none transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105 active:scale-95"
          >
            <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3 md:mb-4">
              <h2
                data-aos="fade-down"
                className="dm-serif-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#5A4685]"
              >
                FAQ's
              </h2>
              <div
                data-aos="fade-down"
                className="flex-shrink-0 transition-transform duration-300 ease-in-out"
              >
                {isFaqSectionOpen ? (
                  <IoMdArrowUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#5A4685] transition-all duration-300 ease-in-out" />
                ) : (
                  <IoMdArrowDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#5A4685] transition-all duration-300 ease-in-out" />
                )}
              </div>
            </div>
            <p
              data-aos="fade-down"
              className="dm-serif-display text-[#0B0B19] text-xs sm:text-sm md:text-base lg:text-[21px] max-w-2xl mx-auto leading-relaxed"
            >
              What You Need to Know?
            </p>
          </button>
        </div>

        {/* FAQ Items - Now with conditional rendering */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out transform ${
            isFaqSectionOpen
              ? "max-h-[2000px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div
            className={`space-y-0 transition-all duration-500 ease-in-out ${
              isFaqSectionOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-gray-200 transition-all duration-300 ease-in-out ${
                  isFaqSectionOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                }`}
                style={{
                  transitionDelay: isFaqSectionOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left py-3 sm:py-4 2xl:py-5 px-0 focus:outline-none transition-all duration-300 ease-in-out hover:bg-gray-50 ${
                    activeIndex === index ? "text-[#5A4685]" : "text-gray-900"
                  }`}
                >
                  <div className="flex items-start sm:items-center justify-between gap-2 sm:gap-3">
                    <h3
                      className={`dm-serif-display text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight sm:leading-relaxed flex-1 ${
                        activeIndex === index
                          ? "text-[#5A4685]"
                          : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 mt-0.5 sm:mt-0">
                      {activeIndex === index ? (
                        <IoMdArrowUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                      ) : (
                        <IoMdArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out transform ${
                    activeIndex === index
                      ? "max-h-[500px] sm:max-h-[400px] md:max-h-[350px] opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                  }`}
                >
                  <div
                    className={`pb-1 sm:pb-2 md:pb-3 transition-all duration-300 ease-in-out ${
                      activeIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-1"
                    }`}
                  >
                    <p className="montserrat tracking-tight text-black text-xs sm:text-sm 2xl:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div data-aos="fade-up" className='text-center mt-10 dm-serif-display text-2xl lg:text-4xl font-medium text-[#5A4685]'>See all</div> */}
      </div>
    </div>
  );
}

export default CommunityFaq;
