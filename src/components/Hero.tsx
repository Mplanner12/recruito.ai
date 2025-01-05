/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center lg:p-[6rem] items-center bg-inherit mt-16 mb-[4rem] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-[46rem] flex flex-col justify-center items-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-[3.2rem] font-[600] text-gray-900 w-full text-center sm:text-start flex flex-col justify-start items-center gap-y-3">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Revolutionize Your Hiring <br />{" "}
          </motion.span>
          <motion.span
            className="sm:ml-10 tracking-tight flex justify-center items-center gap-x-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span>Process with </span>
            <span className="bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] bg-clip-text text-transparent flex justify-between items-center ">
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Recruito AI
              </motion.p>
              <motion.img
                src="/star-lg.png"
                alt="star"
                className="mr-[0.25rem] mb-[0.5rem]"
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </span>
          </motion.span>
        </h2>{" "}
        <p className="w-full max-w-[27rem] text-[#3E4757] font-[400] mt-6 text-base md:text-center text-left">
          Your fully automated hiring assistant that sources, screens, and
          interviews candidates effortlessly
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          href={"#"}
          className="bg-inherit hover:bg-gray-900 hover:text-white text-gray-900 text-sm font-medium border border-[#a7b2c5] px-5 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 ease-in-out relative group hover:scale-105 active:scale-95 active:text-gray-400"
        >
          Start Your Free Trial
        </Link>

        <Link
          href={""}
          className="bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg transition-all duration-300 ease-in-out relative group hover:scale-105 hover:shadow-xl active:scale-95 active:text-gray-400 flex justify-between items-center gap-x-2"
        >
          <img src="/star-sm.png" alt="start" />
          <p>Request A Demo</p>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
