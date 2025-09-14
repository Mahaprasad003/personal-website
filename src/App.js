import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Now from './pages/Now';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

// Styles
import './styles/globals.css';
import './styles/animations.css';

function App() {
  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }, []);
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/now" element={<Now />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;