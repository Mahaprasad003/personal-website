import React from 'react';

const DarkModeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme} 
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
      <span className="toggle-text">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </span>
      <style jsx>{`
        .theme-toggle {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          padding: 0.5rem 0.75rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }
        
        .theme-toggle:hover {
          background-color: var(--bg-secondary);
        }
        
        .toggle-text {
          margin-left: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .toggle-text {
            display: none;
          }
          
          .theme-toggle {
            padding: 0.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </button>
  );
};

export default DarkModeToggle;
