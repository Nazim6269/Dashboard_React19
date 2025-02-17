import React from "react";
import { useTheme } from "../context/theme-context";
import NotAvailable from "./NotAvailable";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link?: string;
}

interface PublicationsProps {
  publications: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  const { theme } = useTheme();

  if (!publications.length) {
    return <NotAvailable />;
  }

  return (
    <div className="space-y-4 max-w-3xl">
      {publications.map((pub, index) => (
        <div
          key={index}
          className={`${
            theme === "dark"
              ? "bg-dark-secondary"
              : "bg-white border-l-4 border-green-600"
          } p-4 shadow-md rounded-lg `}
        >
          <h3 className="text-lg font-semibold text-gray-900">{pub.title}</h3>
          <p className="text-gray-600">
            <span className="font-medium">Authors:</span> {pub.authors}
          </p>
          <p className="text-gray-500">
            <span className="font-medium">Journal:</span> {pub.journal} |{" "}
            {pub.year}
          </p>
          {pub.link && (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Publication
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Publications;
