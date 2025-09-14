import React from 'react';
import SimpleHeader from '../components/SimpleHeader';

const Now = () => {
  return (
    <div className="now-page">
      <SimpleHeader />
      
      <div className="container fade-in">
        <div className="now-header">
          <h1>what i'm doing now</h1>
          <p className="last-updated">last updated: September 14, 2025</p>
        </div>
        
        <div className="now-content">
          <section className="now-section">
            <h2>current focus</h2>
            <p>
              working on personal projects. looking for internships.
            </p>
          </section>
          
          <section className="now-section">
            <h2>learning</h2>
            <p>
              learning about llms. implementing rag pipelines. and writing research papers.
            </p>
          </section>
          
          <section className="now-section">
            <h2>reading</h2>
            <p>
              currently reading AI engineering by Chip Huyen.
            </p>
          </section>
          
          <section className="now-section">
            <h2>Personal Life</h2>
            <p>
              trying to reduce screen time. and also be more mindful of where i spend my time.
            </p>
          </section>
          
          <div className="now-note">
            <p>
              This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a>. 
              It's a snapshot of what I'm focused on at this point in my life.
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .now-page {
          padding-bottom: 2rem;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          margin-top: 2.5rem;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2.5rem;
          align-items: start;
        }
        
        .now-header {
          position: sticky;
          top: 2rem;
        }
        
  h1 { font-size: 2.25rem; margin-bottom: 0.75rem; font-weight:700 }
        
        .last-updated {
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-style: italic;
        }
        
        .now-content {
          margin-top: 0;
        }
        
        .now-section {
          margin-bottom: 2.5rem;
        }
        
  .now-section h2 { margin-bottom: 0.75rem; color: var(--accent-primary) }
        
        .now-section p {
          line-height: 1.7;
          font-size: 1.05rem;
        }
        
        .now-note {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        
        @media (max-width: 768px) {
          .container { grid-template-columns:1fr; gap:1.75rem; padding:0 1rem }
          .now-header { position: static }
          h1 { font-size: 2rem }
          .now-section h2 { font-size: 1rem }
          .now-section p { font-size: 1rem }
        }
      `}</style>
    </div>
  );
};

export default Now;