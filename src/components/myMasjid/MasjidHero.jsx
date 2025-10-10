import React from "react";
import { heroImage, playstore } from "../../assets/images/index.js";
import { BsApple } from "react-icons/bs";
import { masjidHeroVideo } from "../../assets/videos/index.js";
import { logoMasjidHero, coreFeaturesImage6 } from "../../assets/images/index.js";
import { Link } from "react-router-dom";
function MasjidHero() {
  return (
    <div>
      <div className="w-full py-20 sm:py-40 md:py-24  relative overflow-hidden">
        <video
          src={masjidHeroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

        <div className="relative z-20">
          <div className="flex justify-end mr-5 sm:mr-10 -mt-12 sm:-mt-28 md:-mt-16 lg:-mt-12">
            <Link to="/masjid-get-in-touch">
            <button className="bg-[#5A4685] rounded-full px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 text-[#ffffff] montserrat text-xs sm:text-lg cursor-pointer hover:bg-[#47376b] transition-all hover:scale-105 duration-300">Book A Presentation</button>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              data-aos="fade-up"
              className="w-[260px] h-[240px]"
              src={logoMasjidHero}
              alt=""
            />
            <p
              data-aos="fade-up"
              className="mt-8 w-[90%] md:w-[80%] lg:w-[83%] 2xl:w-[58%] tracking-wide text-xl  md:text-2xl montserrat text-center  text-white"
            >
              Empowering masjids to support the matchmaking journey within their communities.{" "}
              <span className="font-bold">
                Strengthening the community through faith, family, and marriage.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-4 mt-10 md:mt-20">
              <a
                data-aos="fade-right"
                href="#"
                className="flex items-center bg-black text-white px-6 py-2 rounded-lg border-2 border-white hover:bg-gray-900 transition-all hover:scale-105 duration-300"
              >
                <BsApple className="w-10 h-10 mr-3" />
                <div className="text-left">
                  <div className="text-sm leading-none">Download on the</div>
                  <div className="text-2xl font-semibold leading-none">
                    App Store
                  </div>
                </div>
              </a>

              <a
                data-aos="fade-left"
                href="#"
                className="flex items-center bg-black text-white px-6 py-2 rounded-lg border-2 border-white hover:bg-gray-900 transition-all hover:scale-105 duration-300"
              >
                <img
                  src={playstore}
                  alt="Google Play"
                  className="w-10 h-10 mr-2"
                />
                <div className="text-left">
                  <div className="text-sm leading-none">GET IT ON</div>
                  <div className="text-2xl font-semibold leading-none">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasjidHero;
