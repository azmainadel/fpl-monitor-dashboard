import React from "react";

interface InfoCardsProps {
  category: string;
  team: string;
  manager: string;
  change: string;
  levelUp?: boolean;
  levelDown?: boolean;
  positiveStat?: boolean;
  negativeStat?: boolean;
}

const InfoCards: React.FC<InfoCardsProps> = ({
  category,
  team,
  manager,
  change,
  levelUp,
  levelDown,
  positiveStat,
  negativeStat,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mt-1 flex items-end justify-between">
        <div>
          <h4 className="font-medium text-primary dark:text-secondary">
            {category}
          </h4>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {team}
          </h4>
          <h3 className="text-black dark:text-white">
            {manager}
          </h3>
        </div>

        <span
          className={`flex items-center gap-1 font-medium
          ${ levelUp && "text-meta-3"} ${levelDown && "text-meta-1"}
          ${positiveStat && "text-meta-3"} ${negativeStat && "text-meta-1"}`}
        >
          {change}

          {levelUp && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-meta-1"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default InfoCards;
