/* eslint-disable @next/next/no-img-element */
import React from "react";

const Illustration = () => {
  return (
    <div className="relative p-[1.5rem] bg-blend-lighten rounded-xl shadow-lg border border-gray-200">
      {/* Background grid and magnifying glass icon */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-12 gap-4 h-full opacity-10">
          <div className="col-span-12 border-b border-gray-300"></div>
        </div>
        <div className="absolute bottom-[1.8rem] right-[1.25rem]">
          <div className="w-36 h-[10rem] bg-none rounded-full flex items-center justify-center">
            <img src="/magnifer-img.png" alt="" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="relative space-y-[-2rem] md:space-y-[-2rem]">
        {[1, 2, 3].map((color, idx) => (
          <div key={idx} className="flex items-center p-4 rounded-lg">
            <div
              className={`${
                idx === 1
                  ? "ml-0 md:ml-[1.5rem]"
                  : idx === 2
                  ? "ml-0 md:ml-[3rem]"
                  : ""
              } h-full flex justify-center`}
            >
              <img src={`/illu-item-${idx + 1}.png`} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Illustration;
