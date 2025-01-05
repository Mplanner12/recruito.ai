/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full max-w-6xl py-4 px-8 mt-5 z-20">
      <motion.div
        className="bg-white border border-white shadow-sm rounded-full py-3.5 px-4 flex justify-between items-center w-full outline-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2">
          <img
            src="/Logo.jpg"
            alt="recruito logo"
            className="w-[9.2rem] h-[2.15rem]"
          />
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-lg flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.nav
              className="bg-white p-10 rounded-lg shadow-2xl space-y-8 text-center w-11/12 max-w-md"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="#home"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                href="#pricing"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Pricing
              </Link>
              <Link
                href="#features"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Features
              </Link>
              <Link
                href="#resources"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Resources
              </Link>
              <Link
                href="#contact"
                className="block bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Link>
            </motion.nav>
          </motion.div>
        )}
        <nav className="hidden md:flex space-x-8 text-gray-900 font-[550] text-[0.925rem]">
          <Link href="#home" className="relative group">
            <span className="text-gray-900 transition-all duration-200 group-hover:bg-gradient-to-r group-active:bg-gradient-to-r from-[#1e73e1] to-[#1ac9c2] bg-clip-text group-hover:text-transparent group-active:text-transparent">
              Home
            </span>
            <span className="hidden group-hover:inline-block group-active:inline-block ml-0.5 bg-gradient-to-r from-[#1e73e1] to-[#1ac9c2] bg-clip-text text-transparent relative top-[-0.4rem] text-xs transition-all duration-200">
              ★
            </span>
          </Link>

          <Link href="#pricing" className="relative group">
            <span className="text-gray-900 transition-all duration-200 group-hover:bg-gradient-to-r group-active:bg-gradient-to-r from-[#1e73e1] to-[#1ac9c2] bg-clip-text group-hover:text-transparent group-active:text-transparent">
              Pricing
            </span>
            <span className="hidden group-hover:inline-block group-active:inline-block ml-0.5 bg-gradient-to-r from-[#1e73e1] to-[#1ac9c2] bg-clip-text text-transparent relative top-[-0.4rem] text-xs transition-all duration-200">
              ★
            </span>
          </Link>

          <Link href="#features" className="relative group">
            <span className="text-gray-900 transition-all duration-200 group-hover:bg-gradient-to-r group-active:bg-gradient-to-r from-[#1e73e1] to-[#1ac9c2] bg-clip-text group-hover:text-transparent group-active:text-transparent">
              Features
            </span>
            <span className="hidden group-hover:inline-block group-active:inline-block ml-0.5 bg-gradient-to-r from-[#1e73e1] to-[#1ac9c2] bg-clip-text text-transparent relative top-[-0.4rem] text-xs transition-all duration-200">
              ★
            </span>
          </Link>

          <Link href="#resources" className="relative group">
            <span className="text-gray-900 transition-all duration-200 group-hover:bg-gradient-to-r group-active:bg-gradient-to-r from-[#1e73e1] to-[#1ac9c2] bg-clip-text group-hover:text-transparent group-active:text-transparent">
              Resources
            </span>
            <span className="hidden group-hover:inline-block group-active:inline-block ml-0.5 bg-gradient-to-r from-[#1e73e1] to-[#1ac9c2] bg-clip-text text-transparent relative top-[-0.4rem] text-xs transition-all duration-200">
              ★
            </span>
          </Link>
        </nav>

        <Link
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] text-white text-[0.925rem] font-medium px-6 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out relative group hover:scale-105 hover:shadow-xl active:scale-95  active:text-gray-400"
        >
          Contact Us
        </Link>
        {/* Mobile Menu Button */}
        <button
          className={`bg-white w-fit ${
            isMobileMenuOpen ? "rounded-full p-2 " : ""
          }md:hidden relative right-4 z-30 text-gray-900 hover:text-gray-600 focus:outline-none`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
