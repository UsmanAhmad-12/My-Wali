import React from "react";
import {
  discoverImage1,
  discoverImage2,
  discoverImage3,
  discoverImage4,
  discoverImage5,
  ellipse,
} from "../../assets/images/index.js";
import RightLeftSections from "../RightLeftSections.jsx";
import {
  coreFeaturesImage3,
  coreFeaturesImage2,
  coreFeaturesImage5,
  coreFeaturesImage4,
  coreFeaturesImage6,
} from "../../assets/images/index.js";
function Discover() {
  return (
    <div className="bg-[#f4f1fa] relative">
      <div className="py-12 lg:py-24 px-10 lg:px-16 xl:px-20 max-w-[1600px] mx-auto overflow-hidden">
        <div className="absolute top-[200px] sm:top-[300px] md:top-[280px] right-0 rotate-180 hidden sm:block z-0">
          <img
            className="w-[80px] sm:w-[120px] md:w-[130px] opacity-30"
            src={ellipse}
            alt="elipse"
          />
        </div>
        <div className="absolute top-[400px] sm:top-[600px] md:top-[800px] left-0 hidden sm:block z-0">
          <img
            className="w-[80px] sm:w-[120px] md:w-[150px] opacity-30"
            src={ellipse}
            alt="elipse"
          />
        </div>
        {/* <div className="absolute top-[500px] sm:top-[800px] md:top-[1500px] right-0 rotate-180 hidden sm:block z-0">
          <img
            className="w-[80px] sm:w-[120px] md:w-[150px] opacity-30"
            src={ellipse}
            alt="elipse"
          />
        </div> */}

        <div data-aos="fade-down" className="flex justify-center">
          <img
            className=" w-[80%] lg:w-[45%] object-cover"
            src={discoverImage1}
            alt=""
          />
        </div>
        <div className="bg-[#f4f1fa]">
          <div className="px-4 sm:px-8 md:px-7 lg:px-20 xl:px-32 mt-10 sm:mt-16 md:mt-20 relative z-10">
            <div>
              {RightLeftData?.map((items, index) => (
                <RightLeftSections
                  icon={items.icon}
                  heading={items.heading}
                  para={items.para}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;

const RightLeftData = [
  {
    icon: discoverImage2,
    heading: "Community Engagement",
    para: "Share ideas & posts, spark meaningful discussions, create polls, and create online groups.",
  },
  {
    icon: discoverImage3,
    heading: "Recognition Badges",
    para: "Earn badges reflecting your contribution to MyCommunity",
  },
  {
    icon: discoverImage4,
    heading: "Build Your Presence, Earn Trust",
    para: " By asking questions, offering guidance, or sharing experiences in MyCommunity, you actively shape your profile and reputation. This creates a more authentic, holistic picture of who you are, helping other MyWali members understand your character and values, so connections are based on real insight, trust, and authenticity.",
  },
  {
    icon: discoverImage5,
    heading: "Organise Events",
    para: "Enabling members and organizations to create, share, and manage events with ease, whether online or in person, helping the Muslim community stay connected and engaged.",
  },
];
