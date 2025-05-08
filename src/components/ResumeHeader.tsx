import React from 'react';
import { ResumeData } from '../data/resumeData';

interface ResumeHeaderProps {
  data: ResumeData;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ data }) => {
  return (
    <header className="mb-6 border-b pb-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-1">{data.name}</h1>
      <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">{data.title}</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">{data.summary}</p>
      
      <div className="flex flex-wrap gap-3 sm:gap-4 text-sm">
        {data.contactInfo.map((contact, index) => (
          <div 
            key={index} 
            className="flex items-center text-gray-700 hover:text-blue-700 transition-colors"
          >
            {contact.link ? (
              <a 
                href={contact.link} 
                className="flex items-center" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={contact.label}
              >
                <contact.icon className="w-4 h-4 mr-1" />
                <span>{contact.text}</span>
              </a>
            ) : (
              <div className="flex items-center">
                <contact.icon className="w-4 h-4 mr-1" />
                <span>{contact.text}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default ResumeHeader;