import React from "react";
import "../assets/resume.css";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="section-title">
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
);

export default SectionTitle;
