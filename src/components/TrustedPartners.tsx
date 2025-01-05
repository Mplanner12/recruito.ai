/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const TrustedPartners = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-[#fff8fa] w-full pt-[13rem] pb-[3.5rem]">
      <div className="container w-full mx-auto text-center">
        <h2 className="text-gray-900 text-sm capitalize font-[400] mb-6">
          Trusted By The World’s Leading Organisations
        </h2>
        <motion.div
          className="hidden md:flex w-full justify-evenly items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Start animation when in view
          viewport={{ once: true }} // Animate only once
        >
          {/* Left Overlay (No animation needed for this) */}
          <div className="absolute md:left-[1.25rem] lg:left-[7.35rem] mb-[2rem] h-fit w-fit pointer-events-none z-10 opacity-75">
            <img
              src="/overlay-l.png"
              alt="GSK Logo"
              className="w-fit h-fit grayscale"
            />
          </div>

          {/* Logos with animation */}
          {[
            "/gsk-logo.png",
            "ogilvy-logo.png",
            "intys-logo.png",
            "linked-logo.png",
            "ogilvy-logo.png",
            "gsk-logo.png",
          ].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={src}
              className="w-fit h-fit grayscale hover:grayscale-0 transition"
              variants={imageVariants}
            />
          ))}

          {/* Right Overlay (No animation needed for this) */}
          <div className="absolute md:right-[1.25rem] lg:right-[7.35rem] h-fit w-fit pointer-events-none z-10 opacity-75 mb-[2rem]">
            <img
              src="/overlay-r.png"
              alt="GSK Logo"
              className="w-fit h-fit grayscale"
            />
          </div>
        </motion.div>
        <div className="md:hidden w-full">
          <Swiper
            spaceBetween={5}
            slidesPerView={2.5}
            centeredSlides
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <img
                src="/gsk-logo.png"
                alt="GSK Logo"
                className="w-fit h-fit grayscale hover:grayscale-0 transition"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="ogilvy-logo.png"
                alt="Ogilvy Logo"
                className="w-fit h-fit grayscale hover:grayscale-0 transition"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="intys-logo.png"
                alt="Intys Logo"
                className="w-fit h-fit grayscale hover:grayscale-0 transition"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="linked-logo.png"
                alt="LinkedIn Logo"
                className="w-fit h-fit grayscale hover:grayscale-0 transition"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="ogilvy-logo.png"
                alt="Ogilvy Logo"
                className="w-fit h-fit grayscale hover:grayscale-0 transition"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="gsk-logo.png"
                alt="GSK Logo"
                className="w-fit h-fit grayscale hover:grayscale-0 transition"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
