/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const Benefits: React.FC = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const cardVariants = {
    hover: { scale: 1.05, boxShadow: "xl" },
    tap: { scale: 0.95 },
  };
  return (
    <section className="relative w-full bg-[#0B1928] text-white py-16">
      {/* Background gray illustrations */}
      <div className="absolute inset-0">
        <div className="top-10 left-0 absolute z-10">
          <img src="bg-overlay2.png" alt="" />
        </div>
        <div className="top-10 right-5 absolute z-10">
          <img src="bg-overlay1.png" alt="" />
        </div>{" "}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.span
          className="w-[7.5rem] inline-block bg-inherit text-[#1BD1C2] px-3.5 py-2 rounded-full text-[0.85rem] mt-[0.75rem] mb-[1.75rem] font-medium border border-[#848EA033]"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }} // Add a delay
        >
          Benefits
        </motion.span>
        <motion.h2
          className="w-full max-w-[38rem] text-3xl md:text-4xl font-semibold mb-8 flex justify-self-center items-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }} // Add a delay
        >
          Unlock the advantages of using Recruito AI for your hiring needs.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 px-[3rem] lg:px-[7.5rem]">
          {/* Automate Processes */}
          <motion.div
            className="bg-[#152232] rounded-lg z-50 p-6 border border-gray-700 flex flex-col items-center gap-y-6"
            variants={cardVariants}
            whileHover="hover" // Trigger hover animation
            whileTap="tap" // Optional: Add a tap animation
          >
            <div className="w-12 h-12 bg-[#152232] border border-gray-700 rounded-lg flex items-center justify-center">
              <img src="/automate-img.png" alt="img" />
            </div>
            <h3 className="text-xl font-semibold">Automate Processes</h3>
            <p className="text-[#848EA0] text-sm text-start md:text-center">
              Let Recruito handle resume screening, scheduling, and interviews
              so you can focus on strategic decisions.
            </p>
          </motion.div>

          {/* Provide Instant Information */}
          <motion.div
            className="bg-[#152232] rounded-lg z-50 p-6 border border-gray-700 flex flex-col items-center gap-y-6"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <div className="w-12 h-12 bg-[#152232] border border-gray-700 rounded-lg flex items-center justify-center">
              <img src="/instant-info-img.png" alt="img" />
            </div>
            <h3 className="text-xl font-semibold">
              Provide Instant Information
            </h3>
            <p className="text-[#848EA0] text-sm text-start md:text-center">
              Quickly access relevant candidate data, ensuring no talent is
              overlooked in your search.
            </p>
          </motion.div>

          {/* Make Data-Driven Decisions */}
          <motion.div
            className="bg-[#152232] rounded-lg z-50 p-6 border border-gray-700 flex flex-col items-center gap-y-6"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <div className="w-12 h-12 bg-[#152232] border border-gray-700 rounded-lg flex items-center justify-center">
              <img src="decision-img.png" alt="img" />
            </div>
            <h3 className="text-xl font-semibold">
              Make Data-Driven Decisions
            </h3>
            <p className="text-[#848EA0] text-sm text-start md:text-center">
              Utilize analytics to rank candidates based on key metrics,
              providing unbiased recommendations for your hiring team.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
