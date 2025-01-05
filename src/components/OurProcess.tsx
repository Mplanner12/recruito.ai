/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const OurProcess = () => {
  return (
    <div className="bg-[#fff8fa] relative w-full h-auto lg:h-[400px] flex flex-col lg:flex-row justify-center items-center mt-[2.5rem] lg:mt-[6rem] py-[2rem]">
      {/* Left Div */}
      <div className="hidden absolute bottom-[2.5rem] left-[1.95rem] 2xl:left-[3.5rem] h-fit w-fit z-20 lg:flex flex-col justify-start items-center">
        <img
          src="/left-dash-over-img.png"
          alt=""
          className="w-full h-full object-cover shadow-lg z-20"
        />
      </div>
      {/* Center Image */}
      <div
        id="dash-img"
        className="w-[90%] lg:w-[82%] h-auto lg:h-[626px] pt-[0.5rem] px-[0.85rem] rounded-3xl bg-[#CFD8E34D] flex flex-col justify-start items-center z-10"
      >
        <motion.p
          className="text-sm capitalize relative mb-[0.65rem] md:mb-[1.1rem] lg:mb-0 2xl:mb-[0.75rem] md:top-[13] xl:top-[3] text-[#3E4757] font-[500] text-center flex justify-center items-center gap-x-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }} // Added a slight delay
        >
          <span>See how we create an autonomous </span>
          <motion.span
            className="w-fit flex flex-col justify-start items-center mt-[0.085rem]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }} // Added a slight delay
          >
            <span className="">ai agent</span>
            <span className="border border-b-gray-900 w-full mt-[-0.14rem]"></span>
          </motion.span>
        </motion.p>
        <img
          src="/dashb-img.png"
          alt="dashboard-img"
          className="w-full h-full object-contain z-20"
        />
      </div>

      {/* Right Div */}
      <div className="hidden absolute top-[1.15rem] lg:right-[1.95rem] xl:right-[3.5rem] h-fit w-fit z-20 lg:flex justify-center items-center">
        <img
          src="/right-dash-over-img.png"
          alt=""
          className="w-full h-full object-cover shadow-lg z-20"
        />
      </div>
    </div>
  );
};

export default OurProcess;
