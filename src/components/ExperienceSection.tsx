import React from 'react';
import { ExperienceItem } from '../data/resumeData';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Professional Experience</h2>
      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <div className="flex flex-wrap justify-between items-baseline mb-1">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                {exp.title}
              </h3>
              <span className="text-gray-600 text-sm">{exp.period}</span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline mb-2">
              <div className="text-gray-700 font-medium">{exp.company}</div>
              <div className="text-gray-600 text-sm">{exp.location}</div>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {exp.description.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;