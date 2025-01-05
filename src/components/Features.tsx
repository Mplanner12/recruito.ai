/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import ProfileCardsLayout from "./ProfileCardLayout";
import Illustration from "./Illustration";
import AssessmentChecklist from "./AssessmentCheckList";
import Leaderboard from "./LeaderBoard";
import { motion } from "framer-motion";

const Features: React.FC = () => {
  return (
    <div className="bg-[#fff8fa] w-full">
      <div className="max-w-7xl mx-auto py-10 px-5">
        <div className="text-center mb-16 flex flex-col justify-start items-center">
          <span className="inline-block bg-inherit text-[#004CD3] px-3.5 py-2 rounded-full text-[0.85rem] mb-4 font-medium border border-[#848EA033]">
            Features
          </span>
          <div className="max-w-[38rem] flex self-center items-center mt-2.5">
            <h1 className="w-full text-center text-[2.25rem] font-semibold">
              Streamline your recruitment with our advanced features
            </h1>
          </div>
        </div>
        <div className="">
          {/* Candidate Sourcing & Job Posting */}
          <motion.div
            className="bg-white w-full rounded-lg p-6 flex flex-col justify-center md:flex-row items-center md:items-start md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="md:w-1/2 h-full flex flex-col self-center items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }} // Add a delay
            >
              <h2 className="text-4xl w-full md:w-[73%] font-semibold mb-3 text-left">
                Candidate Sourcing & Job Posting
              </h2>
              <p className="text-[#3E4757] tracking-tight w-full md:w-[73%] text-[0.9rem] text-center md:text-start">
                Recruito automatically posts your position or actively hunts top
                candidates across multiple platforms. No human intervention
                needed.
              </p>
            </motion.div>
            {/* Profile Cards */}
            <motion.div
              className="md:w-1/2 mt-5 md:mt-0 md:ml-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ProfileCardsLayout />
            </motion.div>
          </motion.div>

          {/* Automated Resume Screening & Filtering */}
          <motion.div
            className="bg-white p-6 w-full flex flex-col-reverse md:flex-row items-center justify-between py-[3rem] md:py-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Illustration */}
            <motion.div
              className="md:w-1/2 h-full flex justify-center items-center mt-[3rem] md:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Illustration />
            </motion.div>

            <motion.div
              className="md:w-1/2 h-full flex flex-col justify-center items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-semibold mb-3 leading-snug w-full md:w-[73%] text-center md:text-start">
                Automated Resume Screening & Filtering
              </h2>
              <p className="text-[#3E4757] tracking-tight text-[0.9rem] w-full md:w-[73%] text-center md:text-start">
                Our AI instantly sorts and prioritizes resumes, highlighting
                only the strongest matches and discarding unqualified
                applicants.
              </p>
            </motion.div>
          </motion.div>

          {/* Online Assessment */}
          <motion.div
            className="bg-white rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start md:text-left py-[3rem] md:py-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="md:w-1/2 h-full flex flex-col self-center justify-center items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-semibold mb-3 leading-snug w-full md:w-[73%] text-center md:text-start">
                Online Assessment
              </h2>
              <p className="text-[#3E4757] tracking-tight w-full md:w-[73%] text-[0.9rem] text-center md:text-start">
                Candidates complete a quick skill or behavioral test to validate
                their capabilities. The process is seamlessly integrated and
                fully automated.
              </p>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 mt-[1rem] md:mt-0 md:ml-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-full lg:w-[85%] h-full shadow-lg rounded-xl py-[2.2rem] px-[1rem] flex justify-center items-center">
                <AssessmentChecklist />
              </div>
            </motion.div>
          </motion.div>

          {/* AI Video Interviews */}
          <motion.div
            className="bg-white p-6 flex flex-col-reverse md:flex-row items-center md:items-start md:text-left py-[2rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="md:w-1/2 md:ml-5 flex justify-center items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-full h-fit border border-gray-200 rounded-xl py-[0.5rem] md:pl-[0.5rem] md:pr-[1rem] flex justify-center items-center relative ml-0 md:ml-[3.25rem]">
                <div className="w-full h-fit flex justify-center items-center px-[1.5rem] md:px-0 md:pr-[2.2rem]">
                  <div className="lg:w-[92%] h-fit flex justify-center items-center rounded-lg mt-[2.5rem]">
                    <img
                      className="w-full h-auto rounded-xl object-cover"
                      src="/inter-img.png"
                      alt=""
                    />
                  </div>
                  <div className="hidden w-auto h-auto lg:flex justify-center items-center rounded-lg absolute mt-[2.5rem] md:mt-[3.2rem] right-[-0.9rem]">
                    <img className="h-auto" src="/ana-img.png" alt="" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 h-full flex flex-col self-center justify-center items-center mb-[0.85rem] md:mt-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-semibold mb-3 leading-snug w-full md:w-[73%] text-center md:text-start">
                AI Video Interviews
              </h2>
              <p className="text-[#3E4757] tracking-tight w-full md:w-[73%] text-center md:text-start">
                AI-driven video interviews analyze candidate speech, adaptive
                learning, capturing both technical insights and soft skills.
                Everything is within hands-reach.
              </p>
            </motion.div>
          </motion.div>

          {/* Final Shortlist for the Line Manager */}
          <motion.div
            className="bg-white p-6 flex flex-col md:flex-row items-center md:items-start md:text-left py-[2rem] md:pt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-full md:w-1/2 h-full flex flex-col self-center justify-center items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-semibold mb-3 leading-snug w-full md:w-[73%] text-center md:text-start">
                Final Shortlist for the Line Manager
              </h2>
              <p className="text-[#3E4757] tracking-tight w-full md:w-[73%] text-center md:text-start">
                Receive pre-sorted candidates that best fit top performance,
                optimizing the selection process. With our assistance, you can
                make a confident hiring decision.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 mt-5 md:mt-0 md:ml-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Leaderboard />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
