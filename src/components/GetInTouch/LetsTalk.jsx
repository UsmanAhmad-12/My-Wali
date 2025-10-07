import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowRight} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
function LetsTalk() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='bg-[#fafafa] lg:px-10'>
    <div className='flex flex-col md:flex-row justify-between items-center px-5 sm:px-10 md:px-10 py-10 md:py-20 max-w-[1600px] mx-auto overflow-hidden '>
        <div>
            <h6 className='dm-serif-display text-[55px] text-center md:text-left text-[#5A4685] leading-none'>Contact Us</h6>
            <h1 className='dm-serif-display  text-center md:text-left text-4xl md:text-[55px] py-7 leading-none'>Get in touch with us.</h1>
        </div>
        <div className='md:space-y-4 gap-5 md:gap-0 py-5 flex md:flex-col flex-row items-center justify-center '>
            <div>
                <button className='border rounded-full border-[#B7B7B7] p-4'>
                    <FaFacebookF />
                </button>
            </div>
            <div>
            <button className='border rounded-full border-[#B7B7B7] p-4'>
                <FaInstagram />
            </button>
            </div>
            <div>
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
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className='w-full inter bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]'
            />
          </div>
          <div className='relative'>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className='inter w-full bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]'
            />
          </div>
          <div className='relative'>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (optional)"
              className='inter w-full bg-transparent border-b border-gray-300 py-4 px-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-300 text-[17px]'
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

        {/* Submit Button */}
        <div data-aos="fade-up" className='pt-6 md:pt-12 flex justify-center md:justify-end'>
          <button
            type="submit"
            className='dm-serif-display bg-[#5A4685] hover:bg-[#60527e] tracking-wider text-xl text-white px-6 py-4 md:px-8 md:py-6 rounded-3xl font-medium transition-colors duration-300 flex items-center gap-3'
          >
            Submit Request 
            <span className='text-2xl'><IoMdArrowForward /></span>
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default LetsTalk