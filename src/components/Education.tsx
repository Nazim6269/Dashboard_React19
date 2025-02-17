import React from "react";
import { useTheme } from "../context/theme-context";
import NotAvailable from "./NotAvailable";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

interface EducationProps {
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
              ? "bg-dark-secondary"
              : "bg-white border-l-4 border-primary-500"
          } p-4 shadow-md rounded-lg `}
        >
          <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
          <p className="text-gray-600">{edu.institution}</p>
          <span className="text-gray-500 text-sm">{edu.year}</span>
        </div>
      ))}
    </div>
  );
};

export default Education;
