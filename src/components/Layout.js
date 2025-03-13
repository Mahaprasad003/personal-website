import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeTheme, toggleTheme as toggleThemeUtil } from '../utils/themeToggle';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const location = useLocation();
  
  // Initialize theme on first load
  useEffect(() => {
    const initialTheme = initializeTheme();
    setTheme(initialTheme);
  }, []);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Handle theme toggle
  const handleToggleTheme = () => {
    const newTheme = toggleThemeUtil(theme);
    setTheme(newTheme);
  };
  
  return (
    <div className="layout">
      <main className="main-content">
        {children}
      </main>
      
      <div className="theme-toggle-container">
        <button className="theme-toggle-floating" onClick={handleToggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        
        .main-content {
          flex: 1;
        }
        
        .theme-toggle-container {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 100;
        }
        
        .theme-toggle-floating {
          background-color: var(--accent-primary);
          color: white;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        
        .theme-toggle-floating:hover {
          transform: translateY(-3px);
          background-color: var(--accent-secondary);
        }
      `}</style>
    </div>
  );
};

export default Layout;