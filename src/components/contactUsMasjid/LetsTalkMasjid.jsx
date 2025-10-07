import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowRight} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function LetsTalkMasjid() {
    const [formData, setFormData] = useState({
        masjidName: '',
        masjidAddress:'',
        masjidCode:'',
        contactName: '',
        position: '',
        phoneNo: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      
      const [checkboxes, setCheckboxes] = useState({
    partnerMarriage: false,
    subsidisedAccess: false,
    communityPlatform: false,
    other: false,
  });

  // Other reason text input
  const [otherReason, setOtherReason] = useState("");

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Options:", checkboxes);
    console.log("Other Reason:", otherReason);
  };
  return (
    <div className='bg-[#fafafa] lg:px-10'>
        <div className='flex flex-col md:flex-row justify-between items-center px-5 sm:px-10 md:px-10 py-10 md:py-20 max-w-[1600px] mx-auto overflow-hidden '>
            <div>
                <h6 className='dm-serif-display text-[55px] text-center md:text-left text-[#5A4685] leading-none'>MyMasjid</h6>
                <h1 className='dm-serif-display  text-center md:text-left text-4xl md:text-[55px] py-7 leading-none'>Get in touch with us.</h1>
            </div>
            <div className='md:space-y-4 gap-5 md:gap-0 py-5 flex md:flex-col flex-row items-center justify-center '>
                <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="0">
                    <button className='border rounded-full border-[#B7B7B7] p-4'>
                        <FaFacebookF />
                    </button>
                </div>
                <div data-aos="fade-left"data-aos-duration="800" data-aos-delay="100">
                <button className='border rounded-full border-[#B7B7B7] p-4'>
                    <FaInstagram />
                </button>
                </div>
                <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                <button className='border rounded-full border-[#B7B7B7] p-4'>
                    <FaTwitter />
                </button>
                </div>
            </div>
        </div>
        
        {/* FORM */}
        <div data-aos="fade-up" className='px-5 sm:px-10  pb-20 max-w-[1600px] mx-auto'>
          <form onSubmit={handleSubmit} className=' space-y-6'>
            {/* First Row - Name, Email, Phone */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='relative'>
                <input
                  type="text"
                  name="name"
                  value={formData.masjidName}
                  onChange={handleChange}
                  placeholder="Masjid Name"
                  className='w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]'
                />
              </div>
              <div className='relative'>
                <input
                  type="text"
                  name="name"
                  value={formData.masjidAddress}
                  onChange={handleChange}
                  placeholder="Masjid Address"
                  className='w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]'
                />
              </div>
              <div className='relative'>
                <input
                  type="text"
                  name="name"
                  value={formData.masjidCode}
                  onChange={handleChange}
                  placeholder="Masjid Code"
                  className='w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]'
                />
              </div>
              <div className='relative'>
                <input
                  type="text"
                  name="name"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Contact Name"
                  className='w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]'
                />
              </div>
              <div className='relative'>
                <input
                  type="text"
                  name="name"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Your Position"
                  className='w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]'
                />
              </div>
              <div className='relative'>
                <input
                  type="text"
                  name="name"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className='w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]'
                />
              </div>
            </div>
    
            {/* Message Textarea */}
            <div data-aos="fade-up" className='relative mt-12'>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={1}
                className='inter w-full bg-transparent border-b border-gray-300 py-8 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 resize-none text-[17px]'
              />
            </div>
    
            <div>
                        <h2 className="dm-serif-display  pt-5 md:pt-16 pb-10 text-[30px] md:text-[37px]  md:w-[75%] leading-10">We'd love to know the main reason for your enquiry. Please select all options that apply:</h2>
                      
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
                        <div data-aos="fade-up" className="pt-12 md:pt-20 flex justify-center md:justify-end">
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

            {/* Submit Button */}
            {/* <div data-aos="fade-up" className='pt-6 md:pt-12 flex justify-center md:justify-end'>
              <button
                type="submit"
                className='dm-serif-display bg-[#5A4685] hover:bg-[#60527e] tracking-wider text-xl text-white px-6 py-4 md:px-8 md:py-6 rounded-3xl font-medium transition-colors duration-300 flex items-center gap-3'
              >
                Submit Request 
                <span className='text-2xl'><IoMdArrowForward /></span>
              </button>
            </div> */}
          </form>
        </div>
        </div>
  )
}

export default LetsTalkMasjid