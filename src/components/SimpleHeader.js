import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SimpleHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header className="simple-header">
      <div className="header-container">
        <Link to="/" className="logo">Mahaprasad.</Link>
        
        <button 
          className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')}>home</Link>
          <Link to="/now" className={isActive('/now')}>now</Link>
          <Link to="/projects" className={isActive('/projects')}>projects</Link>
          <Link to="/blog" className={isActive('/blog')}>blog</Link>
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

        .burger-menu {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 11;
        }

        .burger-menu span {
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .burger-menu.open span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .burger-menu.open span:nth-child(2) {
          opacity: 0;
        }

        .burger-menu.open span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
        
        @media (max-width: 768px) {
          .header-container {
            padding: 0 1rem;
          }
          
          .burger-menu {
            display: flex;
          }

          .main-nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: var(--bg-primary);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            transition: right 0.3s ease;
            z-index: 10;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          }

          .main-nav.open {
            right: 0;
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