import React, { useState, useEffect } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  logo,
  ukFlag,
  usFlag,
  caFlag,
  auFlag,
  deFlag,
  frFlag,
  itFlag,
  esFlag
} from '../../assets/images/index.js'

function Navbar() {
  const [selectedCountry, setSelectedCountry] = useState('UK')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activePage, setActivePage] = useState('MyWali') // Default active page
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Update active page based on current route
  useEffect(() => {
    const path = location.pathname
    if (path === '/my-community') {
      setActivePage('MyCommunity')
    } else if (path === '/my-masjid') {
      setActivePage('MyMasjid')
    } else if (path === '/') {
      setActivePage('MyWali')
    }
  }, [location.pathname])

  const countries = [
    { code: 'UK', name: 'United Kingdom', flag: ukFlag },
    { code: 'US', name: 'United States', flag: usFlag },
    { code: 'CA', name: 'Canada', flag: caFlag },
    { code: 'AU', name: 'Australia', flag: auFlag },
    { code: 'DE', name: 'Germany', flag: deFlag },
    { code: 'FR', name: 'France', flag: frFlag },
    { code: 'IT', name: 'Italy', flag: itFlag },
    { code: 'ES', name: 'Spain', flag: esFlag }
  ]

  const currentCountry = countries.find(country => country.code === selectedCountry)

  return (
    <div data-aos="fade-down" className='w-full bg-white py-1 relative sticky top-0 z-50'>
      {/* Desktop Navbar */}
      <div className='hidden lg:flex justify-between items-center px-4 xl:px-10 py-2'>
        <div className='w-[180px] xl:w-[219px]'>
          <img className='h-[45px] xl:h-[53px]' src={logo} alt="" />
        </div>
        <div>
          <ul className='flex gap-8 xl:gap-12 dm-serif-display text-[#5A4685] text-xl xl:text-2xl tracking-normal'>
            <li 
              className='cursor-pointer relative group'
              onClick={() => setActivePage('MyWali')}
            >
              <Link to="/">MyWali</Link>
              <div
                className={`absolute bottom-0 left-0 h-[1px] bg-[#5A4685] transition-all duration-300 ease-in-out ${activePage === 'MyWali'
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                  }`}
              />
            </li>
            <li
              className='cursor-pointer relative group'
              onClick={() => setActivePage('MyCommunity')}
            >
              <Link to="/my-community">MyCommunity</Link>
              <div
                className={`absolute bottom-0 left-0 h-[1px] bg-[#5A4685] transition-all duration-300 ease-in-out ${activePage === 'MyCommunity'
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                  }`}
              />
            </li>
            <li
              className='cursor-pointer relative group'
              onClick={() => setActivePage('MyMasjid')}
            >
              <Link to="/my-masjid">MyMasjid</Link>
              <div
                className={`absolute bottom-0 left-0 h-[1px] bg-[#5A4685] transition-all duration-300 ease-in-out ${activePage === 'MyMasjid'
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                  }`}
              />
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-3 xl:gap-4'>
          <div className='relative'>
            <div
              className='flex items-center gap-1 cursor-pointer'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={currentCountry?.flag}
                alt={`${currentCountry?.name} flag`}
                className='w-5 h-4 object-cover rounded-sm'
              />
              <span className='text-xs font-bold montserrat text-gray-700'>{selectedCountry}</span>
              <IoMdArrowDropdown
                className={`w-4 h-4 font-bold text-black transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </div>

            {isDropdownOpen && (
              <div className='absolute top-full left-0 mt-5 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                {countries.map((country) => (
                  <div
                    key={country.code}
                    className='flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer'
                    onClick={() => {
                      setSelectedCountry(country.code)
                      setIsDropdownOpen(false)
                    }}
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className='w-6 h-4 object-cover rounded-sm'
                    />
                    <div>
                      <div className='text-sm font-medium text-gray-900'>{country.code}</div>
                      <div className='text-xs text-gray-500 '>{country.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <button className='bg-[#5A4685] montserrat rounded-full px-4 xl:px-5 py-2 xl:py-[11px] text-white text-xs xl:text-sm'>Download App</button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navbar */}
      <div className='lg:hidden flex justify-between items-center px-4 py-2'>
        <div className='w-[120px] sm:w-[150px]'>
          <img className='h-[35px] sm:h-[40px]' src={logo} alt="" />
        </div>

        {/* Mobile Menu Button */}
        <div className='flex items-center gap-2'>
          <div className='relative'>
            <div
              className='flex items-center gap-1 cursor-pointer'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={currentCountry?.flag}
                alt={`${currentCountry?.name} flag`}
                className='w-4 h-3 object-cover rounded-sm'
              />
              <span className='text-xs font-bold montserrat text-gray-700'>{selectedCountry}</span>
              <IoMdArrowDropdown
                className={`w-3 h-3 font-bold text-black transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </div>

            {isDropdownOpen && (
              <div className='absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                {countries.map((country) => (
                  <div
                    key={country.code}
                    className='flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer'
                    onClick={() => {
                      setSelectedCountry(country.code)
                      setIsDropdownOpen(false)
                    }}
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className='w-5 h-3 object-cover rounded-sm'
                    />
                    <div>
                      <div className='text-xs font-medium text-gray-900'>{country.code}</div>
                      <div className='text-xs text-gray-500'>{country.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            className='p-2 text-gray-700'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX className='w-6 h-6' /> : <HiMenuAlt3 className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 transition-all duration-300 ease-in-out z-40 ${isMobileMenuOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
        }`}>
        <ul className='flex flex-col py-4'>
          <li
            className={`cursor-pointer px-4 py-3 text-lg dm-serif-display text-[#5A4685] border-l-2 transition-all duration-200 ${activePage === 'MyWali'
                ? 'border-[#5A4685] bg-gray-50'
                : 'border-transparent hover:border-[#5A4685] hover:bg-gray-50'
              }`}
            onClick={() => {
              setActivePage('MyWali')
              setIsMobileMenuOpen(false)
            }}
          >
            <Link to="/">MyWali</Link>
          </li>
          <li
            className={`cursor-pointer px-4 py-3 text-lg dm-serif-display text-[#5A4685] border-l-2 transition-all duration-200 ${activePage === 'MyCommunity'
                ? 'border-[#5A4685] bg-gray-50'
                : 'border-transparent hover:border-[#5A4685] hover:bg-gray-50'
              }`}
            onClick={() => {
              setActivePage('MyCommunity')
              setIsMobileMenuOpen(false)
            }}
          >
            <Link to="/my-community">MyCommunity</Link>
          </li>
          <li
            className={`cursor-pointer px-4 py-3 text-lg dm-serif-display text-[#5A4685] border-l-2 transition-all duration-200 ${activePage === 'MyMasjid'
                ? 'border-[#5A4685] bg-gray-50'
                : 'border-transparent hover:border-[#5A4685] hover:bg-gray-50'
              }`}
            onClick={() => {
              setActivePage('MyMasjid')
              setIsMobileMenuOpen(false)
            }}
          >
            <Link to="/my-masjid">MyMasjid</Link>
          </li>
        </ul>

        {/* Download Button in Mobile Menu */}
        <div className='px-4 py-3 border-t border-gray-200'>
          <button
            className='w-full bg-[#5A4685] montserrat rounded-full px-4 py-3 text-white text-sm font-medium'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download App
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar