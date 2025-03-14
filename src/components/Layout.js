import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeTheme, toggleTheme as toggleThemeUtil } from '../utils/themeToggle';
import DotGrid from './DotGrid';

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
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      angle: (i * Math.PI * 2) / 12,
      speed: 3 + Math.random() * 3
    }));
    
    setParticles(newParticles);
    
    // Remove particles after animation
    setTimeout(() => {
      setParticles([]);
    }, 600);
  };
  
  return (
    <div className="layout">
      <DotGrid />
      <main className="main-content">
        {children}
      </main>
      
      <div className="theme-toggle-container">
        <button className="theme-toggle-floating" onClick={handleToggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="nav-particle"
            style={{
              '--x': `${Math.cos(particle.angle) * particle.speed * 40}px`,
              '--y': `${Math.sin(particle.angle) * particle.speed * 40}px`,
              left: `${particle.x}px`,
              top: `${particle.y}px`
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          position: relative;
        }
        
        .main-content {
          flex: 1;
          position: relative;
          z-index: 2;
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

        .particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
        }

        .nav-particle {
          position: fixed;
          width: 6px;
          height: 6px;
          background-color: var(--accent-primary);
          border-radius: 50%;
          opacity: 0.8;
          pointer-events: none;
          animation: particle-explosion 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes particle-explosion {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(var(--x), var(--y)) scale(0.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;