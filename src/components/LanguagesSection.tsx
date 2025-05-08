import React from 'react';

interface Language {
  language: string;
  proficiency: string;
}

interface LanguagesSectionProps {
  languages?: Language[];
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({ languages }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Languages</h2>
      <div className="flex flex-wrap gap-4">
        {languages.map((lang, index) => (
          <div key={index} className="text-gray-700">
            <span className="font-medium">{lang.language}</span>
            <span className="text-gray-500 ml-1">({lang.proficiency})</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;