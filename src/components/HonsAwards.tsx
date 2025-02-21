import React from "react";
import { useTheme } from "../context/theme-context";
import NotAvailable from "./NotAvailable";

export interface Award {
  title: string;
  organization: string;
  year: string;
}

export interface HonorsAwardsProps {
  awards: Award[];
}

const HonorsAwards: React.FC<HonorsAwardsProps> = ({ awards }) => {
  const { theme } = useTheme();
  if (!awards.length) {
    return <NotAvailable />;
  }
  return (
    <div className="space-y-4 max-w-3xl">
      {awards.map((award, index) => (
        <div
          key={index}
          className={`${
            theme === "dark"
              ? "bg-dark-secondary"
              : "bg-white border-l-4 border-yellow-500"
          } p-4 shadow-md rounded-lg `}
        >
          <h3
            className={`${
              theme === "dark" ? "text-gray-200" : "text-gray-900"
            } text-lg font-semibold`}
          >
            {award.title}
          </h3>
          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            }`}
          >
            {award.organization}
          </p>
          <span
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-900"
            } text-sm`}
          >
            {award.year}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HonorsAwards;
