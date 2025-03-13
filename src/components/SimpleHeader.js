import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SimpleHeader = () => {
  const location = useLocation();
  
  // Check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <header className="simple-header">
      <div className="header-container">
        <Link to="/" className="logo">Mahaprasad.</Link>
        
        <nav className="main-nav">
          <Link to="/" className={isActive('/')}>home</Link>
          <Link to="/now" className={isActive('/now')}>now</Link>
          <Link to="/projects" className={isActive('/projects')}>projects</Link>
          <a href="https://mahaprasad003.github.io" className="external-blog" target="_blank" rel="noopener noreferrer">blog</a>
        </nav>
      </div>
      
      <style jsx>{`
        .simple-header {
          border-bottom: 1px solid var(--border-color);
          padding: 1.5rem 0;
        }
        
        .header-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        .logo:after {
          display: none;
        }
        
        .main-nav {
          display: flex;
          gap: 2rem;
        }
        
        .main-nav a {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        
        .main-nav a:hover,
        .main-nav a.active {
          color: var(--text-primary);
        }
        
        .main-nav a:after {
          display: none;
        }
        
        @media (max-width: 768px) {
          .header-container {
            padding: 0 1rem;
          }
          
          .main-nav {
            gap: 1.5rem;
          }
          
          .logo {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </header>
  );
};

export default SimpleHeader;