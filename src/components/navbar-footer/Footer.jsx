import React from "react";
import { footerIcon1 } from "../../assets/images/index.js";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <footer data-aos="fade-up" className="w-full overflow-hidden">
      {/* Upper Section - Dark Purple Background */}
      <div className="bg-[#5C4B8B] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="space-y-10">
              {/* Top Section - Logo and Social Media */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0">
                {/* Logo */}
                <div className="flex justify-center sm:justify-start">
                  <img
                    className="h-20 sm:h-24"
                    src={footerIcon1}
                    alt="MyWali Logo"
                  />
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center sm:justify-end space-x-3">
                  <div className="w-12 h-12 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A] transition-all duration-300 hover:scale-110">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A] transition-all duration-300 hover:scale-110">
                    <FaFacebookF className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A] transition-all duration-300 hover:scale-110">
                    <FaInstagram className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Middle Section - Pages Navigation */}
              <div className="bg-[#4A3C70] rounded-2xl p-6">
                <h3 className="text-white inter font-semibold text-lg tracking-[0.09em] mb-5 text-center">
                  Pages
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="#"
                    className="text-white hover:text-[#8B9B2F] transition-colors poppins text-sm py-2 px-4 rounded-lg hover:bg-white/10 text-center"
                  >
                    MyWali
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-[#8B9B2F] transition-colors poppins text-sm py-2 px-4 rounded-lg hover:bg-white/10 text-center"
                  >
                    MyCommunity
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-[#8B9B2F] transition-colors poppins text-sm py-2 px-4 rounded-lg hover:bg-white/10 text-center"
                  >
                    MyMasjid
                  </a>
                </div>
              </div>

              {/* Bottom Section - Newsletter Subscription */}
              <div className="bg-[#4A3C70] rounded-2xl p-6">
                <h3 className="text-white font-medium uppercase text-sm tracking-[0.2em] inter mb-4 text-center">
                  Subscribe to Newsletter
                </h3>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 border-0"
                  />
                  <button className="w-full px-6 poppins py-3 text-sm bg-[#8B9B2F] text-white rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12">
            {/* Left Column - Logo and Social Media */}
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  className="h-[140px]"
                  src={footerIcon1}
                  alt="MyWali Logo"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A] transition-colors">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A] transition-colors">
                  <FaFacebookF className="w-4 h-4 text-white" />
                </div>
                <div className="w-10 h-10 bg-[#3C2A62] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A2F5A] transition-colors">
                  <FaInstagram className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Middle Column - Pages Navigation */}
            <div className="flex flex-col space-y-6 pl-10">
              <h3 className="text-white inter font-semibold text-lg tracking-[0.09em]">
                Pages
              </h3>
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors poppins text-sm"
                >
                  MyWali
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors poppins text-sm"
                >
                  MyCommunity
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors poppins text-sm"
                >
                  MyMasjid
                </a>
              </div>
            </div>

            {/* Right Column - Newsletter Subscription */}
            <div className="flex flex-col space-y-6 pl-10">
              <h3 className="text-white font-medium uppercase text-sm tracking-[0.2em] inter">
                Subscribe to Newsletter
              </h3>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 w-[275px] text-sm focus:outline-none focus:ring-2 focus:ring-[#5A4685]"
                />
                <button className="px-6 poppins py-3 text-sm bg-[#8B9B2F] text-white rounded-lg font-normal hover:bg-[#7A8A26] transition-colors w-fit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Light Gray/White Gradient Background */}
      <div className="bg-gradient-to-b from-gray-200 to-white py-3 sm:py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-xs sm:text-sm inter">
              © Copyright 2024, All Rights Reserved by Logo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
