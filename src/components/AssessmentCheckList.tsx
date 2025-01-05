import React from "react";

interface ChecklistItem {
  id: number;
  text: string;
  completed: boolean;
}

const AssessmentChecklist: React.FC = () => {
  const checklistItems: ChecklistItem[] = [
    { id: 1, text: "Creative Design Skills Test", completed: true },
    { id: 2, text: "UX/UI Design Challenge", completed: true },
    { id: 3, text: "Problem-Solving Task", completed: true },
    { id: 4, text: "Trends Awareness Quiz Test", completed: false },
  ];

  return (
    <div className="bg-blend-lighten rounded-[16px] py-[1.25rem] w-full lg:w-[95%] shadow flex justify-center items-center">
      <ul className="flex flex-col gap-3">
        {checklistItems.map((item) => (
          <li key={item.id} className="flex items-center gap-5">
            <span
              className={`w-6 h-6 flex justify-center items-center rounded-[8px] ${
                item.completed
                  ? "bg-[#53d94c]"
                  : "bg-white border border-[#00000029]"
              }`}
            >
              {item.completed && (
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L5 9L13 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span
              className={`w-[14.5rem] lg:w-[21rem] text-[0.9rem] leading-[24px] p-[0.85rem] rounded-lg border border-gray-300 ${
                item.completed ? "line-through text-[#00000061]" : "text-black"
              }`}
            >
              {`${item.id}- ${item.text}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssessmentChecklist;
