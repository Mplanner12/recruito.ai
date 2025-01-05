"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#e3ebf5] to-[#fff8fa] w-full h-full px-[2.5rem] md:px-[5rem] py-[5rem]">
      <div className="md:max-w-[53rem] mx-auto px-2">
        {/* FAQ Header */}
        <span className="w-[7.5rem] inline-block bg-inherit text-[#004CD3] px-3.5 py-2 rounded-full text-[0.85rem] mt-[0.75rem] mb-[1.75rem] font-medium border border-[#848EA033]">
          FAQs
        </span>

        {/* Accordion */}
        <div className="mt-[1.25rem]">
          {/* Question 1 */}
          <div
            className={`border rounded-t-lg overflow-hidden ${
              activeIndex === 0 ? "shadow-lg" : "border-gray-200"
            }`}
          >
            <button
              className="w-full text-[#0B1928] text-left py-5 px-8 bg-[#fffbfb] font-[550] text-lg flex justify-between items-center"
              onClick={() => toggleAccordion(0)}
            >
              What is an AI Agent?
              <span className="text-gray-400">
                {activeIndex === 0 ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
            </button>
            {activeIndex === 0 && (
              <div className="pt-2 pb-6 px-8 text-gray-600 bg-[#fffbfb] w-full text-start">
                <p>
                  An AI agent is a software system that understands language,
                  learns from data, and takes actions automatically to achieve
                  specific goals. In the hiring world, an AI agent can review
                  resumes, interact with candidates, and provide
                  recommendations, all without manual oversight.
                </p>
                <ul className="list-none">
                  <li>
                    - Natural Language Processing to interpret resumes and
                    candidate responses
                  </li>
                  <li>
                    - Adaptive Learning to improve accuracy and efficiency over
                    time
                  </li>
                  <li>
                    - Task Automation to handle repetitive or time-consuming
                    steps
                  </li>
                  <li>
                    - Data-Driven Insights for better predictions and decisions
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div
            className={`border overflow-hidden ${
              activeIndex === 1 ? "shadow-lg" : "border-gray-200"
            }`}
          >
            <button
              className="w-full text-[#0B1928] text-left py-5 px-8 bg-[#fffbfb] font-[550] text-lg flex justify-between items-center"
              onClick={() => toggleAccordion(1)}
            >
              What are the Benefits of Using Recruito&apos;s AI Agent?
              <span className="text-gray-400">
                {activeIndex === 1 ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
            </button>
            {activeIndex === 1 && (
              <div className="pt-2 pb-6 px-8 text-gray-600 bg-[#fffbfb] w-full text-start">
                <p>
                  Recruito&apos;s AI agent streamlines hiring processes, reduces
                  human error, and saves time. With advanced analytics and
                  automation, it ensures your team focuses on strategic hiring
                  decisions while leaving the repetitive tasks to AI.
                </p>
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div
            className={`border rounded-b-lg overflow-hidden ${
              activeIndex === 2 ? "shadow-lg" : "border-gray-200"
            }`}
          >
            <button
              className="w-full text-[#0B1928] text-left py-5 px-8 bg-[#fffbfb] font-[550] text-lg flex justify-between items-center"
              onClick={() => toggleAccordion(2)}
            >
              Next Steps?
              <span className="text-gray-400">
                {activeIndex === 2 ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
            </button>
            {activeIndex === 2 && (
              <div className="pt-2 pb-6 px-8 text-gray-600 bg-[#fffbfb] w-full text-start">
                <p>
                  Ready to enhance your hiring process? Contact Recruito today
                  to explore how our AI solutions can transform your recruitment
                  strategy.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
