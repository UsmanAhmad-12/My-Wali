import React from "react";
import { whatIsMyMasjidImage1, WhatIsMyMasjidImage2, WhatIsMyMasjidImage3, WhatIsMyMasjidImage4, WhatIsMyMasjidImage5, WhatIsMyMasjidImage6 } from "../../assets/images";
import Card from "../Card";
function WhatIsMyMasjid() {
  return (
    <div className="bg-[#fafafa]">
    <div className=" py-10 max-w-[1600px] mx-auto overflow-hidden">
      <div>
        <img data-aos="fade-down" className="mx-auto  w-[50%] md:w-[28%]" src={whatIsMyMasjidImage1} alt="" />
        <p data-aos="fade-down" className="text-center px-5 sm:px-0 sm:w-[82%] mt-10 mx-auto montserrat text-[#403F3D] font-medium text-base sm:text-lg">
          MyMasjid is a dedicated feature allowing mosques to
          partner with MyWali. It is designed to empower local mosques to
          also support families and seekers in their marriage journey — without
          the administrative burden of running a matrimonial platform. It
          provides mosques with the following tools and services: 
        </p>
      </div>
      <div data-aos="fade-down" className="flex gap-12 flex-wrap justify-center mt-10 px-5 sm:px-10">
        {data.map((item, index) => (
          <Card
           key={index}
           item={item}
           image={item.image}
           title={item.title}
           description={item.description}
           />
        ))}
      </div>
    </div>
    </div>
  );
}

export default WhatIsMyMasjid;

const data = [
  {
    image: WhatIsMyMasjidImage2,
    title: "Free Access",
    description: "Masjids receive free access to the MyWali Marriage platform.",
  },
  {
    image: WhatIsMyMasjidImage3,
    title: "Community Discount Codes",
    description: "partner Masjids receive an exclusive MyWali referral code, offering their community members discounted access to MyWali memberships. ",
  },
  {
    image: WhatIsMyMasjidImage4,
    title: "Community Support",
    description: "Masjids can explore our marriage database to better support their community in finding suitable, faith-aligned matches. ",
  },
  {
    image: WhatIsMyMasjidImage5,
    title: "Free Access to MyCommunity",
    description: "partner Masjids receive an exclusive MyWali referral code, offering their community members discounted access to MyWali memberships. ",
  },
  {
    image: WhatIsMyMasjidImage6,
    title: "Supporting Your Masjid",
    description: "At MyWali, we give back to the heart of the community. That’s why a portion of our proceeds funds your masjid’s initiatives — supporting everything from community programs to local development.",
  },

];
