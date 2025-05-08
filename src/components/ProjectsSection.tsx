import React from 'react';
import { ProjectItem } from '../data/resumeData';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="mb-6 page-break-before">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Projects & Code</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                {project.name}
              </h3>
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <div className="text-gray-700 mb-2">{project.description}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.highlights && (
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-relaxed">{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;