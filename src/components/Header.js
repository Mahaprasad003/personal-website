import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

// This component is no longer used in the main layout,
// but we're keeping it in case we need to reintroduce it later
const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">Mahaprasad</Link>
        
        <button 
          className="mobile-menu-button" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>home</Link>
            </li>
            <li>
              <Link to="/now" className={isActive('/now') ? 'active' : ''}>now</Link>
            </li>
            <li>
              <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>projects</Link>
            </li>
            <li>
              <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>blog</Link>
            </li>
          </ul>
          <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>
      </div>
      
      <style jsx>{`
        header {
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border-color);
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
        }
        
        .logo:after {
          display: none;
        }
        
        .nav-menu {
          display: flex;
          align-items: center;
        }
        
        .nav-menu ul {
          display: flex;
          list-style: none;
          margin-right: 1.5rem;
        }
        
        .nav-menu li {
          margin-left: 1.5rem;
        }
        
        .nav-menu a {
          color: var(--text-secondary);
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-menu a:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent-primary);
          transition: width 0.3s ease;
        }
        
        .nav-menu a:hover, .nav-menu a.active {
          color: var(--text-primary);
        }
        
        .nav-menu a:hover:after, .nav-menu a.active:after {
          width: 100%;
        }
        
        .mobile-menu-button {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 1.5rem;
          height: 1.25rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        
        .mobile-menu-button span {
          height: 2px;
          width: 100%;
          background-color: var(--text-primary);
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: flex;
            z-index: 11;
          }
          
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: var(--bg-primary);
            flex-direction: column;
            justify-content: center;
            z-index: 10;
            transition: right 0.3s ease;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          }
          
          .nav-menu.open {
            right: 0;
          }
          
          .nav-menu ul {
            flex-direction: column;
            margin: 0 0 2rem 0;
          }
          
          .nav-menu li {
            margin: 1rem 0;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;