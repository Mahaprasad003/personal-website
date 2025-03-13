import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeTheme, toggleTheme as toggleThemeUtil } from '../utils/themeToggle';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [particles, setParticles] = useState([]);
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
    
    // Create particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 4,
      speedY: (Math.random() - 0.5) * 4,
      opacity: 1,
      rotation: Math.random() * 360
    }));
    
    setParticles(newParticles);
    
    // Remove particles after animation
    setTimeout(() => {
      setParticles([]);
    }, 1500);
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

      {particles.map(particle => (
        <div
          key={particle.id}
          className="theme-particle"
          style={{
            left: particle.x + 'px',
            top: particle.y + 'px',
            width: particle.size + 'px',
            height: particle.size + 'px',
            opacity: particle.opacity,
            '--speedX': `${particle.speedX * 50}px`,
            '--speedY': `${particle.speedY * 50}px`,
            '--rotation': `${particle.rotation}deg`
          }}
        />
      ))}
      
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

        .theme-particle {
          position: fixed;
          background-color: var(--accent-primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99;
          animation: particle-fade 1.5s ease-out forwards,
                     particle-move 1.5s linear forwards;
        }

        @keyframes particle-fade {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes particle-move {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(var(--speedX), var(--speedY)) rotate(var(--rotation));
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;