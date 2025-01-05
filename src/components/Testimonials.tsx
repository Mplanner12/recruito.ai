/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const testimonials = [
    {
      id: 1,
      name: "Alex Martin",
      title: "Company, HR",
      image: "/profile-img-4.png",
      message:
        "Recruito has transformed our hiring process! We save countless hours each week. The quality of candidates has significantly improved since we started using Recruito.",
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "Company, Recruiter",
      image: "/profile-img-2.jpg",
      message:
        "Recruito AI has made our recruitment seamless. The automation and insights are top-notch. Highly recommend it for any HR professional!",
    },
    {
      id: 3,
      name: "John Smith",
      title: "Company, Manager",
      image: "/profile-img-1.jpg",
      message:
        "The data-driven insights from Recruito AI have allowed us to make better hiring decisions. It’s a game-changer for our team!",
    },
    {
      id: 4,
      name: "Emily Clark",
      title: "Company, Talent Acquisition",
      image: "/profile-img-3.jpg",
      message:
        "Recruito AI has streamlined our hiring process. We've reduced hiring time by half while ensuring better candidate matches.",
    },
  ];

  return (
    <section className="w-full h-full relative bg-[#fff8fa] py-16">
      <div className="w-full h-full mx-auto">
        {/* Header */}
        <motion.div
          className="text-center w-full flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="w-[7.5rem] inline-block bg-inherit text-[#004CD3] px-3.5 py-2 rounded-full text-[0.85rem] mt-[0.75rem] mb-[1.75rem] font-medium border border-[#848EA033]"
            variants={headerVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="text-4xl font-semibold text-start text-gray-800 w-full px-[1.5rem] md:px-0 md:max-w-[41rem] mt-6"
            variants={headerVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Don’t just take our word for it—see what our clients say about
            Recruito AI.
          </motion.h2>
        </motion.div>

        {/* Carousel desktop */}
        <div className="w-full h-full hidden md:block">
          <Swiper
            spaceBetween={20}
            slidesPerView={2.5}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            modules={[Pagination]}
            breakpoints={{
              540: { slidesPerView: 1 },
              640: { slidesPerView: 2.5 },
            }}
            className="mt-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="p-6 pb-8 bg-white h-[13rem] md:h-[15.25rem] flex flex-col justify-start items-start gap-y-5 rounded-lg shadow-sm border border-gray-200">
                  {/* Image */}
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-[550] text-[#0B1928] w-full text-start">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-[0.85rem]">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  {/* Message */}
                  <p className="text-[#3E4757] w-full text-start text-[0.925rem]">
                    {testimonial.message}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Pagination Dots */}
          <div className="custom-pagination flex justify-center mt-6"></div>
        </div>

        {/* Carousel mobile */}
        <div className="w-full h-full md:hidden block">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.5}
            modules={[Pagination]}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2.5 },
            }}
            className="mt-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="p-6 pb-8 bg-gray-50 h-[16.25rem] md:h-[13rem] flex flex-col justify-start items-start gap-y-5 rounded-lg shadow-sm border border-gray-200">
                  {/* Image */}
                  <div className="flex md:items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4 flex flex-col justify-start items-start">
                      <h3 className="font-[550] text-[#0B1928] w-full text-start">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 w-full text-start text-[0.85rem]">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  {/* Message */}
                  <p className="text-[#3E4757] w-full text-start text-[0.925rem]">
                    {testimonial.message}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
