import React from "react";
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
  if (!educationList.length) {
    return <NotAvailable />;
  }
  return (
    <div className="space-y-4 max-w-3xl">
      {educationList.map((edu, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow-md rounded-lg border-l-4 border-primary-500"
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
