import React from 'react';
import { EducationItem } from '../data/resumeData';

interface EducationSectionProps {
  education: EducationItem[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="group">
            <div className="flex flex-wrap justify-between items-baseline mb-1">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                {edu.degree}
              </h3>
              <span className="text-gray-600 text-sm">{edu.period}</span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline mb-2">
              <div className="text-gray-700 font-medium">{edu.institution}</div>
              <div className="text-gray-600 text-sm">{edu.location}</div>
            </div>
            {edu.description && (
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {edu.description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;