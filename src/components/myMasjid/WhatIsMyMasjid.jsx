import React from "react";
import {
  whatIsMyMasjidImage1,
  WhatIsMyMasjidImage2,
  WhatIsMyMasjidImage3,
  WhatIsMyMasjidImage4,
  WhatIsMyMasjidImage5,
  WhatIsMyMasjidImage6,
  discoverImage1,
  discoverImage2,
  discoverImage3,
  discoverImage4,
  discoverImage5,
  howItWorksImage5,
} from "../../assets/images";
import RightLeftSections from "../RightLeftSections";
function WhatIsMyMasjid() {
  return (
    <div className="bg-[#fafafa]">
      <div className=" py-10 max-w-[1600px] mx-auto overflow-hidden">
        <div>
          <img
            data-aos="fade-down"
            className="mx-auto  w-[70%] md:w-[40%] lg:w-[28%]"
            src={whatIsMyMasjidImage1}
            alt=""
          />
          <p
            data-aos="fade-down"
            className="text-center px-5 sm:px-0 sm:w-[82%] pt-5 sm:mt-10 mx-auto montserrat text-[#403F3D] font-medium text-base sm:text-lg"
          >
            MyMasjid lets mosques partner with MyWali to support families and
            seekers in their marriage journey, all without the admin of running
            a matrimonial platform. Mosques gain access to MyCommunity, where
            they can provide guidance, organise events, and strengthen
            connections within their community.
          </p>
        </div>
        <div
          data-aos="fade-down"
          className="flex gap-12 flex-wrap justify-center mt-5 sm:mt-10 px-5 sm:px-40 xl:pb-20"
        >
          {RightLeftData.map((items, index) => (
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
  );
}

export default WhatIsMyMasjid;

const RightLeftData = [
  {
    icon: WhatIsMyMasjidImage2,
    heading: "Free Access",
    para: "Masjids receive free access to the MyWali Marriage platform.",
  },
  {
    icon: WhatIsMyMasjidImage3,
    heading: "Community Discount Codes",
    para: "Partner Masjids receive an exclusive MyWali referral code, offering their community members discounted access to MyWali memberships. ",
  },
  {
    icon: WhatIsMyMasjidImage4,
    heading: "Community Support",
    para: "Masjids can explore our marriage database to better support their community in finding suitable, faith-aligned matches. ",
  },
  {
    icon: WhatIsMyMasjidImage5,
    heading: "Free Access to MyCommunity",
    para: "A platform where mosques can: Organise events and dedicated groups Share knowledge and community posts Ask and answer faith-based questions  ",
  },
  {
    icon: howItWorksImage5,
    heading: "Supporting Your Masjid",
    para: "At MyWali, we give back to the heart of the community. That’s why a portion of our proceeds funds your masjid’s initiatives, supporting everything from community programs to local development.",
  },
];
