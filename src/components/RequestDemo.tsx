/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const RequestDemo = () => {
  return (
    <section className="w-full h-full relative bg-[#fff8fa] py-[5.5rem] flex flex-col items-center text-center">
      {/* Mesh background */}
      <div className="absolute inset-0">
        {/* Left mesh */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 opacity-10">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="mesh2"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="300" height="300" fill="url(#mesh2)" />
          </svg>
        </div>

        {/* Right mesh */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-10">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="mesh2"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="300" height="300" fill="url(#mesh2)" />
          </svg>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col justify-start items-center">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-[#1F67E7] to-[#1AD7BE] rounded-full shadow-lg">
          <img src="/recruito-icon.png" alt="" />
        </div>

        {/* Text */}
        <h2 className="mt-6 text-4xl w-full max-w-[25rem] flex self-center font-semibold text-[#0B1928]">
          Ready to enhance your hiring process ?
        </h2>

        {/* Button */}
        <Link
          href={"#"}
          className="bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg transition-all duration-300 ease-in-out relative group hover:scale-105 hover:shadow-xl active:scale-95 active:text-gray-400 flex justify-between items-center gap-x-2 mt-[1.85rem] w-[11.15rem]"
        >
          <img src="/star-sm.png" alt="start" />
          <p>Request A Demo</p>
        </Link>
      </div>
    </section>
  );
};

export default RequestDemo;
