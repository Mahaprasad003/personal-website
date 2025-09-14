import React from 'react';
import SimpleHeader from '../components/SimpleHeader';

const Home = () => {
  return (
    <div className="home-page">
      <SimpleHeader />
      
      <div className="container fade-in">
        <div className="home-content">
          <h1 className="tagline">gradient descending into AI 🤖</h1>
          
          <div className="bio">
            <p>pursuing postgrad in data science.</p>
            <p>part data scientist, part philosopher, part weightlifter.</p>
            <p>aristotle would've called me a polymath, my mom calls me indecisive.</p>
          </div>
          
          <div className="social">
            <p>find me on social media:</p>
            <div className="social-icons">
              <a href="https://x.com/mahaprasad_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://github.com/Mahaprasad003" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mahaprasad003/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .home-page {
          padding-bottom: 2rem;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .home-content {
          margin-top: 3.25rem;
          text-align: left;
        }
        
  .tagline { margin-bottom: 1.75rem; font-weight: 700 }
        
        .bio {
          margin-bottom: 3rem;
          line-height: 1.8;
          font-size: 1.1rem;
        }
        
        .bio p {
          margin-bottom: 0.75rem;
        }
        
        .social p {
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }
        
        .social-icons {
          display: flex;
          gap: 1.5rem;
        }
        
        .social-icons a {
          color: var(--text-primary);
          transition: color 0.3s ease;
        }
        
        .social-icons a:hover {
          color: var(--accent-primary);
        }
        
        .social-icons a:after {
          display: none;
        }
        
        @media (max-width: 768px) {
          .home-content { margin-top: 2rem }
          .tagline { font-size: 1.75rem; margin-bottom: 1rem }
          .bio { font-size: 1rem }
          .container { padding: 0 1rem }
        }
      `}</style>
    </div>
  );
};

export default Home;