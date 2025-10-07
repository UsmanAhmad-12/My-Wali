import React from "react";
import { Link } from "react-router-dom";
import { footerIcon1 } from "../../assets/images/index.js";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full overflow-hidden">
      {/* Upper Section - Dark Purple Background */}
      <div className="bg-[#1f1537] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="space-y-6">
              {/* Top Section - Logo and Brand */}
              <div className="flex flex-col items-center space-y-4">
                {/* Logo */}
                <div className="flex justify-center">
                  <img
                    className="h-10"
                    src={footerIcon1}
                    alt="MyWali Logo"
                  />
                </div>
                {/* <h1 className="text-white text-3xl font-bold">MyWali</h1> */}
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mt-2">
                  <div className="w-10 h-10 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A]">
                    <FaTwitter className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A]">
                    <FaFacebookF className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A]">
                    <FaInstagram className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Pages Navigation */}
              <div className="bg-[#241A3B] rounded-xl p-4">
                <h3 className="text-white font-semibold text-lg mb-3 text-center">
                  Pages
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="/"
                    className="text-white hover:text-gray-300 transition-colors text-sm py-1 text-center"
                  >
                    MyWali
                  </Link>
                  <Link
                    to="/my-community"
                    className="text-white hover:text-gray-300 transition-colors text-sm py-1 text-center"
                  >
                    MyCommunity
                  </Link>
                  <Link
                    to="/my-masjid"
                    className="text-white hover:text-gray-300 transition-colors text-sm py-1 text-center"
                  >
                    MyMasjid
                  </Link>
                </div>
              </div>

              {/* Support Navigation */}
              <div className="bg-[#241A3B] rounded-xl p-4">
                <h3 className="text-white font-semibold text-lg mb-3 text-center">
                  Support
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm py-1 text-center"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-gray-300 transition-colors text-sm py-1 text-center"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm py-1 text-center"
                  >
                    Safety Tips.
                  </Link>
                </div>
              </div>

              {/* Privacy Terms Navigation */}
              <div className="bg-[#241A3B] rounded-xl p-4">
                <h3 className="text-white font-semibold text-lg mb-3 text-center">
                  Privacy Terms
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm py-1 text-center"
                  >
                    Refunds
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm py-1 text-center"
                  >
                    Cookies
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm py-1 text-center"
                  >
                    Community Guidelines.
                  </Link>
                </div>
              </div>

              {/* Careers Navigation */}
              <div className="bg-[#241A3B] rounded-xl p-4">
                <h3 className="text-white font-semibold text-lg mb-3 text-center">
                  Careers
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm py-1 text-center"
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
                {/* <h1 className="text-white text-4xl font-bold mb-4">MyWali</h1> */}
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A]">
                    <FaTwitter className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A]">
                    <FaFacebookF className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A]">
                    <FaInstagram className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer columns with even spacing */}
            <div className="flex flex-1 justify-evenly mt-10">
              {/* Pages Column */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold inter tracking-wider text-lg mb-6">
                  Pages
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    MyWali
                  </Link>
                  <Link
                    to="/my-community"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    MyCommunity
                  </Link>
                  <Link
                    to="/my-masjid"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    MyMasjid
                  </Link>
                </div>
              </div>

              {/* Support Column */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold inter tracking-wider text-lg mb-6">
                  Support
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    Safety Tips.
                  </Link>
                </div>
              </div>

              {/* Privacy Terms Column */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold inter tracking-wider text-lg mb-6">
                  Privacy Terms
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    Refunds
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    Cookies
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    Community Guidelines.
                  </Link>
                </div>
              </div>

              {/* Careers Column */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold inter tracking-wider text-lg mb-6">
                  Careers
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
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
      <div className="bg-gradient-to-b from-gray-200 to-white py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-xs sm:text-sm">
              © Copyright 2024, All Rights Reserved by Logo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
