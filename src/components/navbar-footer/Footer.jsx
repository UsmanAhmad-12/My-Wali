import React from "react";
import { Link } from "react-router-dom";
import { footerIcon1 } from "../../assets/images/index.js";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer({image}) {
  return (
    <footer className="w-full overflow-hidden">
      {/* Upper Section - Dark Purple Background */}
      <div
  className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12"
  style={{
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",          // ✅ makes image cover the whole area
    backgroundRepeat: "no-repeat",    // ✅ prevents tiling
    backgroundPosition: "center",     // ✅ keeps image centered
  }}
>
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="space-y-6">
              {/* Top Section - Logo and Brand */}
              <div className="flex flex-col items-center space-y-4">
                {/* Logo */}
                <div className="flex justify-center">
                  <img
                    className="h-24"
                    src={footerIcon1}
                    alt="MyWali Logo"
                  />
                </div>
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mt-2">
                  <div className="w-10 h-10 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1DA1F2] transition-all duration-300 group">
                    <FaTwitter className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="w-10 h-10 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1877F2] transition-all duration-300 group">
                    <FaFacebookF className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="w-10 h-10 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E1306C] transition-all duration-300 group">
                    <FaInstagram className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* Pages Navigation */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                <h3 className="text-white font-semibold text-lg mb-3 text-center">
                  Pages
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="/"
                    className="text-white hover:text-gray-300 transition-colors text-base py-1 text-center poppins"
                  >
                    MyWali
                  </Link>
                  <Link
                    to="/my-community"
                    className="text-white hover:text-gray-300 transition-colors text-base py-1 text-center poppins"
                  >
                    MyCommunity
                  </Link>
                  <Link
                    to="/my-masjid"
                    className="text-white hover:text-gray-300 transition-colors text-base py-1 text-center poppins"
                  >
                    MyMasjid
                  </Link>
                </div>
              </div>

              {/* Support Navigation */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                <h3 className="text-white font-semibold text-lg mb-3 text-center">
                  Support
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-base py-1 text-center poppins"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-gray-300 transition-colors text-base py-1 text-center poppins"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-base py-1 text-center poppins"
                  >
                    Safety Tips.
                  </Link>
                </div>
              </div>

              {/* Privacy Terms Navigation */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                <h3 className="text-white font-semibold text-lg mb-3 text-center">
                  Privacy Terms
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-base py-1 text-center poppins"
                  >
                    Refunds
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-base py-1 text-center poppins"
                  >
                    Cookies
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-base py-1 text-center poppins"
                  >
                    Community Guidelines.
                  </Link>
                </div>
              </div>

              {/* Careers Navigation */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                <h3 className="text-white font-semibold text-lg mb-3 text-center">
                  Careers
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-base py-1 text-center poppins"
                  >
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-wrap justify-between items-start px-10">
            {/* Logo and Social Icons */}
            <div className="w-64">
              <div className="flex flex-col">
                <img
                  className="w-40 mb-5"
                  src={footerIcon1}
                  alt="MyWali Logo"
                />
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1DA1F2] transition-all duration-300 group">
                    <FaTwitter className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="w-8 h-8 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1877F2] transition-all duration-300 group">
                    <FaFacebookF className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="w-8 h-8 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E1306C] transition-all duration-300 group">
                    <FaInstagram className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer columns with even spacing */}
            <div className="flex flex-1 justify-evenly mt-10">
              {/* Pages Column */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold inter tracking-widest text-lg mb-6">
                  Pages
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/"
                    className="text-white hover:text-gray-300 transition-colors text-sm poppins"
                  >
                    MyWali
                  </Link>
                  <Link
                    to="/my-community"
                    className="text-white hover:text-gray-300 transition-colors text-sm poppins"
                  >
                    MyCommunity
                  </Link>
                  <Link
                    to="/my-masjid"
                    className="text-white hover:text-gray-300 transition-colors text-sm poppins"
                  >
                    MyMasjid
                  </Link>
                </div>
              </div>

              {/* Support Column */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold inter tracking-widest text-lg mb-6">
                  Support
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm poppins"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-gray-300 transition-colors text-sm poppins"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm poppins"
                  >
                    Safety Tips.
                  </Link>
                </div>
              </div>

              {/* Privacy Terms Column */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold inter tracking-widest text-lg mb-6">
                  Privacy Terms
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm poppins"
                  >
                    Refunds
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm poppins"
                  >
                    Cookies
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm poppins"
                  >
                    Community Guidelines.
                  </Link>
                </div>
              </div>

              {/* Careers Column */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold inter tracking-widest text-lg mb-6">
                  Careers
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/masjid-get-in-touch"
                    className="text-white hover:text-gray-300 transition-colors text-sm poppins"
                  >
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="bg-gradient-to-r from-[#e9e8ec] to-[#f9f8fb] py-3 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#1F1537] text-xs inter">
              © Copyright 2024, All Rights Reserved by Logo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
