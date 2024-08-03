import React from "react";
import "../assets/resume.css";

interface ResumeItemProps {
  title: string;
  duration: string;
  location?: string;
  description: string[];
  link?: string;
}

const ResumeItem: React.FC<ResumeItemProps> = ({
  title,
  duration,
  location,
  description,
  link,
}) => {
  const formatLink = (url: string) => url.replace(/^https?:\/\//, "");

  return (
    <div className="resume-item">
      <h4>{title}</h4>
      <h5 className="rounded">{duration}</h5>
      {location && (
        <p>
          <em>{location}</em>
        </p>
      )}
      <p>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {link && (
            <li>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-uppercase"
              >
                {formatLink(link)}
              </a>
            </li>
          )}
        </ul>
      </p>
    </div>
  );
};

export default ResumeItem;
