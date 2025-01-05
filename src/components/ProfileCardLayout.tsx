"use client";
import React from "react";
import ProfileCard from "./ProfileCard";
import { motion } from "framer-motion";

const profileData = [
  {
    name: "John Doe",
    position: "Software Engineer",
    skills: ["React", "JavaScript", "Node.js", "TypeScript"],
    image: "/profile-img-1.jpg",
  },
  {
    name: "Jane Smith",
    position: "Data Scientist",
    skills: ["Python", "Machine Learning", "Data Analysis", "SQL"],
    image: "/profile-img-2.jpg",
  },
  {
    name: "David Lee",
    position: "Project Manager",
    skills: ["Agile", "Collaboration", "ethic", "Leadership"],
    image: "/profile-img-3.jpg",
  },
];

const ProfileCardsLayout: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delay: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-center w-full md:space-x-4 border border-gray-200 rounded-xl p-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {profileData.map((profile, index) => (
        <motion.div
          variants={cardVariants}
          key={index}
          className={`transform relative mb-4 md:mb-0 ${
            index === 0
              ? "md:left-[7.25rem]"
              : index === 1
              ? "md:mt-[-2.75rem] md:z-20"
              : "md:right-[7.35rem]"
          }`}
        >
          <ProfileCard
            visible={index === 1}
            name={profile.name}
            position={profile.position}
            skills={profile.skills}
            image={profile.image}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProfileCardsLayout;
