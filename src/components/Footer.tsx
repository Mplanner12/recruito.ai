/* eslint-disable @next/next/no-img-element */
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="w-full bg-[#848EA00D] py-5 border-gray-200">
      <div className="mx-auto px-5 md:px-[6rem] flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="w-full md:w-auto h-full flex flex-col justify-between items-center md:items-start space-y-6">
          <div className="flex justify-center items-center space-x-3">
            {/* Logo */}
            <img src="Logo2.png" alt="logo" />
          </div>
          <div className="hidden md:block text-[0.825rem] font-medium text-[#3E4757] text-center md:text-left">
            © 2024 Recruito AI. All Rights Reserved.
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex flex-col items-center space-y-7 mt-4 md:mt-0">
          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <RiTwitterXLine className="text-[#3E4757]" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <SlSocialInstagram className="text-[#3E4757]" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <SlSocialFacebook className="text-[#3E4757]" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <SlSocialLinkedin className="text-[#3E4757]" />
            </a>
          </div>
          {/* Links */}
          <div className="flex justify-center items-center text-[#3E4757] hover:text-gray-800 text-[0.825rem] font-medium space-x-3">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>

        <div className="text-[0.825rem] font-medium text-[#3E4757] mt-4 text-center md:text-left md:hidden">
          © 2024 Recruito AI. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
