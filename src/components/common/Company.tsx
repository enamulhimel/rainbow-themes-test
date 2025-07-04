import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { PiChatCenteredTextThin } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import CommonWrapper from './CommonWrapper';

const Company = () => {
  return (
    <CommonWrapper>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-gray-100 rounded-lg shadow-md w-full">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-500 text-sm w-full md:w-auto">
          <div className="flex flex-row items-center gap-2">
            <CiLocationOn />
            <p>15th Street,USA</p>
          </div>
          <p className="hidden sm:block">|</p>
          <div className="flex flex-row items-center gap-2">
            <PiChatCenteredTextThin />
            <p>support@gmail.com</p>
          </div>
        </div>
        {/* Center Section */}
        <div className="my-2 md:my-0 text-center w-full md:w-auto">
          <p className="text-xl sm:text-2xl font-bold">RainBow Themes</p>
        </div>
        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-500 text-sm w-full md:w-auto">
          <div className="flex flex-row items-center gap-2">
            <TfiWorld />
            <p>English</p>
            <MdKeyboardArrowDown />
          </div>
          <p className="hidden sm:block">|</p>
          <div className="flex flex-row items-center gap-2">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </CommonWrapper>
  )
}

export default Company