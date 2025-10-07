import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function RegisterTheMasjid() {
  const [formData, setFormData] = useState({
    masjidName: "",
    masjidAddress: "",
    countyState: "",
    code: "",
    masjidEmail: "",
    masjidPhone: "",
    message: "",
    city: "",
    country: "", // Add country field
    primaryMasjidContactName:"",
    primaryContactPosition:"",
    pimaryContactEmail:"",
    primaryContactMobileNumber:"",
    secondaryMasjidContactName:"",
    secondaryContactPosition:"",
    secondaryContactEmail:"",
    secondaryContactMobileNumber:"",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false); // New state for country dropdown
  const dropdownRef = useRef(null);
  const countryDropdownRef = useRef(null); // New ref for country dropdown

  const cities = [
    { value: "lahore", label: "Lahore" },
    { value: "karachi", label: "Karachi" },
    { value: "islamabad", label: "Islamabad" },
    { value: "peshawar", label: "Peshawar" },
    { value: "quetta", label: "Quetta" },
  ];

  // Add country options
  const countries = [
    { value: "uk", label: "United Kingdom" },
    { value: "usa", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "australia", label: "Australia" },
    { value: "germany", label: "Germany" },
    { value: "france", label: "France" },
  ];

  // Add checkbox state
  const [checkboxes, setCheckboxes] = useState({
    partnerMarriage: false,
    subsidisedAccess: false,
    communityPlatform: false,
    other: false
  });
  const [otherReason, setOtherReason] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    // Close the country dropdown if open
    if (isCountryDropdownOpen) setIsCountryDropdownOpen(false);
  };

  // Add toggle for country dropdown
  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
    // Close the city dropdown if open
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const selectCity = (city) => {
    setFormData({
      ...formData,
      city: city.value,
    });
    setIsDropdownOpen(false);
  };

  // Add select function for country
  const selectCountry = (country) => {
    setFormData({
      ...formData,
      country: country.value,
    });
    setIsCountryDropdownOpen(false);
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked
    });
  };

  // Update click-outside handler to include country dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setIsCountryDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, countryDropdownRef]);

  return (
    <div className="bg-[#fafafa] lg:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-5  md:px-10 py-10 md:py-20 max-w-[1600px] mx-auto overflow-hidden ">
        <div>
          <h6
            data-aos="fade-right"
            className="inter text-xl tracking-wider text-center md:text-left"
          >
            Get Started
          </h6>
          <h1
            data-aos="fade-right"
            className="dm-serif-display md:w-[70%] text-center md:text-left text-4xl md:text-[55px] py-5 md:py-10 leading-none"
          >
            <span className="text-[#5A4685]">MyMasjid</span> Registration
            Details (UK Only)
          </h1>
        </div>
        <div className="md:space-y-4 gap-5 md:gap-0 py-5 flex md:flex-col flex-row items-center justify-center ">
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="0">
            <button className="border rounded-full border-[#B7B7B7] p-4">
              <FaFacebookF />
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <button className="border rounded-full border-[#B7B7B7] p-4">
              <FaInstagram />
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <button className="border rounded-full border-[#B7B7B7] p-4">
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div
        data-aos="fade-up"
        className="px-5 sm:px-10  pb-12 max-w-[1600px] mx-auto"
      >
        <form onSubmit={handleSubmit} className=" space-y-6">
          {/* First Row - Masjid Name, Masjid Address */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className=" relative">
              <input
                type="text"
                name="masjidName"
                value={formData.masjidName}
                onChange={handleChange}
                placeholder="Masjid Name (As per charity records)"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            <div className="placeholder:text-sm lg:placeholder:text-base relative md:col-span-2">
              <input
                type="text"
                name="masjidAddress"
                value={formData.masjidAddress}
                onChange={handleChange}
                placeholder="Masjid Address"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>

            <div className="relative" ref={dropdownRef}>
              <div
                onClick={toggleDropdown}
                className=" w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 flex justify-between items-center cursor-pointer"
              >
                <span
                  className={formData.city ? "text-gray-700" : "text-gray-500 text-sm lg:text-base"}
                >
                  {formData.city
                    ? cities.find((c) => c.value === formData.city)?.label
                    : "Town / City"}
                </span>
                <MdOutlineKeyboardArrowDown
                  className={`text-xl transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-10 overflow-hidden border border-gray-100">
                  <div className="py-1 max-h-60 overflow-y-auto">
                    {cities.map((city) => (
                      <div
                        key={city.value}
                        onClick={() => selectCity(city)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-[15px] inter transition-colors duration-150"
                      >
                        {city.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                name="masjidAddress"
                value={formData.countyState}
                onChange={handleChange}
                placeholder="County / State"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="zipCode"
                value={formData.code}
                onChange={handleChange}
                placeholder="Post Code / Zip Code"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>

            {/* Country dropdown - ADD THIS AFTER POST CODE */}
            <div className="relative " ref={countryDropdownRef}>
              <div
                onClick={toggleCountryDropdown}
                className=" w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 flex justify-between items-center cursor-pointer"
              >
                <span
                  className={
                    formData.country ? "text-gray-700 " : "text-gray-500 text-sm lg:text-base"
                  }
                >
                  {formData.country
                    ? countries.find((c) => c.value === formData.country)?.label
                    : "Country"}
                </span>
                <MdOutlineKeyboardArrowDown
                  className={`text-xl transition-transform duration-300 ${
                    isCountryDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isCountryDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-10 overflow-hidden border border-gray-100">
                  <div className="py-1 max-h-60 overflow-y-auto">
                    {countries.map((country) => (
                      <div
                        key={country.value}
                        onClick={() => selectCountry(country)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-[15px] inter transition-colors duration-150"
                      >
                        {country.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                name="masjidAddress"
                value={formData.masjidPhone}
                onChange={handleChange}
                placeholder="Masjid Phone (Optional)"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="masjidAddress"
                value={formData.masjidPhone}
                onChange={handleChange}
                placeholder="Masjid Email Address (Optional)"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
          </div>

          {/* Message Textarea */}
          {/* <div data-aos="fade-up" className="relative mt-12">
            <textarea
              name="message"
              value={formData.masjidEmail}
              onChange={handleChange}
              placeholder="Message"
              rows={1}
              className="inter w-full bg-transparent border-b border-gray-300 py-8 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 resize-none text-[17px]"
            />
          </div> */}

          {/* Submit Button */}
          {/* <div
            data-aos="fade-up"
            className="pt-6 md:pt-12 flex justify-center md:justify-start"
          >
            <button
              type="submit"
              className="dm-serif-display bg-[#5A4685] hover:bg-[#60527e] tracking-wider text-lg text-white px-6 py-4 md:px-8 md:py-6 rounded-3xl font-medium transition-colors duration-300 flex items-center gap-3"
            >
              Leave us a Message
              <span className="text-2xl">
                <IoMdArrowForward />
              </span>
            </button>
          </div> */}
        </form>
          <div>
            <h4 className="dm-serif-display pt-16 text-[27px] pb-10">Primary Masjid Contact (Mandatory)</h4>
          </div>
            
          <form action="">
            
          {/* First Row - Masjid Name, Masjid Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="relative">
              <input
                type="text"
                name="masjidName"
                value={formData.primaryMasjidContactName}
                onChange={handleChange}
                placeholder="Primary Masjid Contact Name (Mandatory)"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="masjidAddress"
                value={formData.primaryContactPosition}
                onChange={handleChange}
                placeholder="Primary contact position (ie Chairman)"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            <div className="relative pt-5">
              <input
                type="text"
                name="masjidName"
                value={formData.pimaryContactEmail}
                onChange={handleChange}
                placeholder="Primary Contact Email Address"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            <div className="relative pt-5">
              <input
                type="text"
                name="masjidName"
                value={formData.primaryContactMobileNumber}
                onChange={handleChange}
                placeholder="Primary Contact Mobile Number"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            </div>
          </form>
          
          <div>
            <h4 className="dm-serif-display pt-16 text-[27px] pb-10">Secondary Masjid Contact (Mandatory)</h4>
          </div>

          <form action="">
            
          {/* First Row - Masjid Name, Masjid Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="relative">
              <input
                type="text"
                name="masjidName"
                value={formData.secondaryMasjidContactName}
                onChange={handleChange}
                placeholder="Secondary Masjid Contact Name (Mandatory)"
                className="w-full inter placeholder:text-sm lg:placeholder:text-base bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="masjidAddress"
                value={formData.secondaryContactPosition}
                onChange={handleChange}
                placeholder="Secondary Contact Position (ie Chairman/Imam)"
                className="placeholder:text-sm lg:placeholder:text-base w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            <div className="relative pt-5">
              <input
                type="text"
                name="masjidName"
                value={formData.secondaryContactEmail}
                onChange={handleChange}
                placeholder="Secondary Contact Email Address"
                className="w-full placeholder:text-sm lg:placeholder:text-base inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            <div className="relative pt-5">
              <input
                type="text"
                name="masjidName"
                value={formData.secondaryContactMobileNumber}
                onChange={handleChange}
                placeholder="Secondary Contact Mobile Number"
                className="w-full placeholder:text-sm lg:placeholder:text-base inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]"
              />
            </div>
            </div>
          </form>

          <div>
            <h2 className="dm-serif-display pt-10 md:pt-16 pb-10 text-[30px] md:text-[37px]  md:w-[75%] leading-10">We'd love to know the main reason for your enquiry. Please select all options that apply:</h2>
          
            {/* Checkbox options */}
            <div className="space-y-4 pb-8">
              {/* Option 1 */}
              <div className="flex items-start">
                <div className="flex items-center h-6 mt-1">
                  <input
                    id="partnerMarriage"
                    name="partnerMarriage"
                    type="checkbox"
                    checked={checkboxes.partnerMarriage}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 text-[#5A4685] border-gray-300 rounded focus:ring-[#5A4685] focus:ring-offset-0"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="partnerMarriage" className="inter text-[17px] text-gray-700">
                    To partner with MyWali/MyMasjid & provide marriage support
                  </label>
                </div>
              </div>
              
              {/* Option 2 */}
              <div className="flex items-start">
                <div className="flex items-center h-6 mt-1">
                  <input
                    id="subsidisedAccess"
                    name="subsidisedAccess"
                    type="checkbox"
                    checked={checkboxes.subsidisedAccess}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 text-[#5A4685] border-gray-300 rounded focus:ring-[#5A4685] focus:ring-offset-0"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="subsidisedAccess" className="inter text-[17px] text-gray-700">
                    To offer my local community Subsidised access to MyWali (using your masjid unique referral code)
                  </label>
                </div>
              </div>
              
              {/* Option 3 */}
              <div className="flex items-start">
                <div className="flex items-center h-6 mt-1">
                  <input
                    id="communityPlatform"
                    name="communityPlatform"
                    type="checkbox"
                    checked={checkboxes.communityPlatform}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 text-[#5A4685] border-gray-300 rounded focus:ring-[#5A4685] focus:ring-offset-0"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="communityPlatform" className="inter text-[17px] text-gray-700">
                    To connect with the MyCommunity platform for events, groups, posts etc
                  </label>
                </div>
              </div>
              
              {/* Option 4 */}
              <div className="flex items-start">
                <div className="flex items-center h-6 mt-1">
                  <input
                    id="other"
                    name="other"
                    type="checkbox"
                    checked={checkboxes.other}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 text-[#5A4685] border-gray-300 rounded focus:ring-[#5A4685] focus:ring-offset-0"
                  />
                </div>
                <div className="ml-3 flex flex-col w-full">
                  <label htmlFor="other" className="inter text-[17px] text-gray-700">
                    Other (please specify)
                  </label>
                  {checkboxes.other && (
                    <input
                      type="text"
                      value={otherReason}
                      onChange={(e) => setOtherReason(e.target.value)}
                      placeholder="Please specify"
                      className="mt-7 md:mt-10 bg-[#fafafa] w-full inter border border-gray-200 rounded-2xl py-3 px-4 sm:py-5 sm:px-5 text-gray-700 placeholder-black focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors duration-300 text-[15px]"
                    />
                  )}
                </div>
              </div>
            </div>
            
            {/* Submit Button styled like in the image */}
            <div data-aos="fade-up" className="pt-16 md:pt-20 flex justify-center md:justify-end">
              <button
                type="submit"
                onClick={handleSubmit}
                className="dm-serif-display bg-[#5A4685] hover:bg-[#60527e]  tracking-wider text-xl text-white px-8 py-6 rounded-3xl font-medium transition-colors duration-300 flex items-center gap-3"
              >
                Submit Request
                <span className="text-xl">
                  <IoMdArrowForward />
                </span>
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default RegisterTheMasjid;
