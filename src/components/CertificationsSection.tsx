import React from 'react';

interface CertificationsSectionProps {
  certifications?: string[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Certifications</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {certifications.map((cert, index) => (
          <li key={index} className="leading-relaxed">{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsSection;