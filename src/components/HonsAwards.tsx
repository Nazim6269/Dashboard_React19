import React from "react";

interface Award {
  title: string;
  organization: string;
  year: string;
}

interface HonorsAwardsProps {
  awards: Award[];
}

const HonorsAwards: React.FC<HonorsAwardsProps> = ({ awards }) => {
  if (!awards.length) {
    return (
      <div className="bg-white px-5 py-4 max-w-xl text-md font-semibold">
        Not Available
      </div>
    );
  }
  return (
    <div className="space-y-4 max-w-3xl">
      {awards.map((award, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow-md rounded-lg border-l-4 border-yellow-500"
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
