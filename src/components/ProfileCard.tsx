/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ProfileCardProps {
  name: string;
  position: string;
  skills: string[];
  image: string;
  visible: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  position,
  skills,
  image,
  visible,
}: ProfileCardProps) => {
  return (
    <div className="bg-white w-[245px] md:w-[200px] h-[295px] md:h-[325px] lg:w-[245px] lg:h-[295px] p-4 px-3 flex flex-col justify-start items-center space-y-4 rounded-xl shadow-md border border-gray-200">
      <div
        className={`absolute top-0 left-0 mt-3 ml-4 ${
          visible ? "block" : "hidden"
        }`}
      >
        <img src="/check-img.png" alt="check" />
      </div>
      <div className="w-[100px] h-[100px] bg-white rounded-full overflow-hidden">
        <img src={image} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-gray-950 text-lg font-[400]">{name}</h3>
        <p className="text-[#3E4757] text-[0.875rem]">{position}</p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-2.5 mt-[2rem]">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-100 px-3 py-1 rounded-full text-[#3E4757] text-[0.85rem]"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
