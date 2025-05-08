import React from 'react';
import { SkillCategory } from '../data/resumeData';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;