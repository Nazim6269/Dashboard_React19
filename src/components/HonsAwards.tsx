import React from "react";
import { useTheme } from "../context/theme-context";
import NotAvailable from "./NotAvailable";

interface Award {
  title: string;
  organization: string;
  year: string;
}

interface HonorsAwardsProps {
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
          <h3 className="text-lg font-semibold text-gray-900">{award.title}</h3>
          <p className="text-gray-600">{award.organization}</p>
          <span className="text-gray-500 text-sm">{award.year}</span>
        </div>
      ))}
    </div>
  );
};

export default HonorsAwards;
