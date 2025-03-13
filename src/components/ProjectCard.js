import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      
      <a 
        href={project.githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="github-link"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        View on GitHub
      </a>
      
      <style jsx>{`
        .project-card {
          background-color: var(--bg-secondary);
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border: 1px solid var(--border-color);
        }
        
        .project-card h3 {
          margin-top: 0;
          margin-bottom: 0.75rem;
        }
        
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          margin: 0.75rem 0;
          gap: 0.5rem;
        }
        
        .tag {
          background-color: var(--accent-secondary);
          color: white;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 20px;
        }
        
        .github-link {
          display: inline-flex;
          align-items: center;
          margin-top: 0.75rem;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .github-link svg {
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
