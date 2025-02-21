import React from "react";
import { useTheme } from "../context/theme-context";
import NotAvailable from "./NotAvailable";

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface EducationProps {
  educationList: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationList }) => {
  const { theme } = useTheme();
  if (!educationList.length) {
    return <NotAvailable />;
  }
  return (
    <div className="space-y-4 max-w-3xl">
      {educationList.map((edu, index) => (
        <div
          key={index}
          className={`${
            theme === "dark"
              ? "bg-dark-secondary "
              : "bg-white border-l-4 border-primary-500"
          } p-4 shadow-md rounded-lg `}
        >
          <h3
            className={`${
              theme === "dark" ? "text-gray-200" : "text-gray-900"
            } text-lg font-semibold`}
          >
            {edu.degree}
          </h3>
          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            }`}
          >
            {edu.institution}
          </p>
          <span
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-900"
            } text-sm`}
          >
            {edu.year}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Education;
