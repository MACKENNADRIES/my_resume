import React from 'react';
import { resumeData } from '../data/resumeData';
import ResumeHeader from './ResumeHeader';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import LanguagesSection from './LanguagesSection';
import ProjectsSection from './ProjectsSection';

const Resume: React.FC = () => {
  return (
    <div className="transition-all duration-200 ease-in-out space-y-8 py-8">
      {/* First Page */}
      <div className="mx-auto max-w-[850px] bg-white shadow-md rounded-md overflow-hidden print:shadow-none">
        <div className="h-2 bg-blue-600"></div>
        <div className="p-8 sm:p-10">
          <ResumeHeader data={resumeData} />
          <ExperienceSection experiences={resumeData.experience} />
          <EducationSection education={resumeData.education} />
          <SkillsSection skills={resumeData.skills} />
          <CertificationsSection certifications={resumeData.certifications} />
          <LanguagesSection languages={resumeData.languages} />
        </div>
      </div>

      {/* Second Page */}
      <div className="mx-auto max-w-[850px] bg-white shadow-md rounded-md overflow-hidden print:shadow-none print:mt-0 page-break-before">
        <div className="h-2 bg-blue-600"></div>
        <div className="p-8 sm:p-10">
          <ProjectsSection projects={resumeData.projects} />
          
          <div className="mt-6 text-center text-gray-500 text-sm print:hidden">
            <p>
              <button 
                onClick={() => window.print()} 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Print / Save as PDF
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;