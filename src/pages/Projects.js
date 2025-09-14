import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';
import { loadProjects } from '../utils/dataLoader';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await loadProjects();
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading projects:', error);
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
  return (
    <div className="projects-page">
      <SimpleHeader />
      
      <div className="container fade-in">
        <div className="projects-header">
          <h1>projects</h1>
          <p className="projects-description">
            a selection of my recent work and personal projects.
          </p>
        </div>
        
        {loading ? (
          <div className="loading-state">Loading projects...</div>
        ) : (
          <div className="projects-list scroll-wrap">
            {projects.map(project => (
              <a key={project.id} className="post-card" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <h2>{project.title}</h2>
                <div className="meta">{project.date || project.year || ''}</div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">#{tag}</span>
                  ))}
                </div>
                <div className="github-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>View on GitHub</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      
      <style jsx>{`
        .projects-page {
          padding-bottom: 2rem;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          margin-top: 3rem;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          align-items: start;
        }
        
        .projects-header {
          position: sticky;
          top: 2rem;
        }

  h1 { margin-bottom: 0.5rem; font-weight: 700 }

  .projects-description { color: var(--text-secondary); line-height:1.5 }

        .projects-list { margin-top: 0 }

        .post-card {
          padding: 0.9rem 1rem;
          border-radius: 8px;
          background: var(--card-bg);
          box-shadow: var(--shadow-elevation);
          text-decoration: none;
          color: inherit;
          transition: transform 160ms ease, box-shadow 160ms ease;
          display: block;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .post-card + .post-card { margin-top: 0.5rem }

        .post-card:hover { transform: translateY(-4px) }
        .post-card h2 { margin:0 0 0.4rem 0 }
        .meta { font-size:0.9rem; color:var(--text-secondary) }
        .project-description { margin:0.5rem 0 0 }

        .project-tags {
          display:flex;
          gap:0.5rem;
          flex-wrap:wrap;
          margin-bottom: 0.5rem;
        }

        .tag {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .github-link {
          display: inline-flex;
          align-items: center;
          color: var(--accent-primary);
          font-size: 0.92rem;
          text-decoration: none;
          margin-bottom: 0.5rem;
        }

        .github-link svg { margin-right: 0.5rem }

        .project-divider { display: none }
        
        .loading-state {
          grid-column: 2;
          padding: 3rem 0;
          color: var(--text-secondary);
          font-style: italic;
        }
        
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1rem;
          }
          
          .projects-header {
            position: static;
          }
          
          h1 {
            font-size: 2.5rem;
          }
          
          .loading-state {
            grid-column: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;