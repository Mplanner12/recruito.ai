import React from "react";

const Mesh = ({ opacity }: { opacity?: number }) => {
  return (
    <div className={`absolute inset-0 bg-[#f5f5f5] opacity-${opacity || 10}`}>
      {/* Top-right mesh */}
      <div className="absolute hidden lg:block top-[2.5rem] right-[0rem] w-1/2 h-1/2 bg-[#f5f5f5]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern
              id="extraLargeMeshPattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#6b7280"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#extraLargeMeshPattern)" />
        </svg>
      </div>

      {/* Bottom-left mesh */}
      <div className="lg:absolute lg:bottom-[0.5rem] lg:left-[0rem] lg:w-1/2 lg:h-1/2 bg-[#f5f5f5]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern
              id="extraLargeMeshPattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#6b7280"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#extraLargeMeshPattern)" />
        </svg>
      </div>
    </div>
  );
};

export default Mesh;
