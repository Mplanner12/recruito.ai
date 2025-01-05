/* eslint-disable @next/next/no-img-element */
import React from "react";

const Leaderboard = () => {
  const data = [
    {
      id: 1,
      name: "Alex Martin",
      rank: "#1",
      score: 99,
      image: "/profile-img-3.jpg",
    },
    {
      id: 2,
      name: "Emma Rivera",
      rank: "#2",
      score: 99,
      image: "/profile-img-2.jpg",
    },
    {
      id: 3,
      name: "Ryan Lee",
      rank: "#3",
      score: 98,
      image: "/profile-img-1.jpg",
    },
  ];

  return (
    <div className="py-8 px-4 w-full lg:w-[90%] flex flex-col justify-start items-center md:px-6 rounded-xl border border-gray-200  mx-auto space-y-6">
      {data.map((item, index) => (
        <div
          className="w-full lg:w-fit gap-x-3 lg:gap-x-4 flex justify-start md:justify-between items-center"
          key={item.id}
        >
          <div className="flex justify-center items-center rounded-full">
            <img
              src={item.image}
              alt=""
              className="w-[2.4rem] md:w-10 h-[2.4rem] md:h-11 object-cover rounded-full"
            />
          </div>
          <div
            className={`w-[18rem] lg:w-[20rem] flex items-center bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-lg mb-4 ${
              index === 0 ? "tilt-up" : index === 2 ? "tilt-down" : ""
            }`}
          >
            <div className="flex justify-between items-center w-full px-2 md:px-[1rem]">
              <h4 className="text-[#8d95a3] font-medium">{item.name}</h4>
              <span className="text-[#6f757f]">{item.rank}</span>
            </div>
            <div className="text-[#6f757f] font-medium text-sm flex items-center">
              <div className="relative rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="absolute top-0 left-0" width="32" height="32">
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="#c4c8cf"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="#53d94c"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={`${(item.score / 100) * 83.92}, 87.92`}
                    transform="rotate(-90 16 16)"
                  />
                </svg>
                <span className="relative slanted-strikethrough text-[0.55rem]">
                  {item.score}%
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
