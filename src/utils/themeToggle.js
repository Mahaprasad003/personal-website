  // Theme toggle functionality

// Check if user has a stored preference
export const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    
    // If the user has explicitly chosen a theme, use that
    if (savedTheme) {
      return savedTheme;
    }
    
    // Otherwise, check if they have a system preference
    const prefersDark = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return prefersDark ? 'dark' : 'light';
  };
  
  // Set theme to document and localStorage
  export const setTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    
    localStorage.setItem('theme', theme);
  };
  
  // Toggle between light and dark mode
  export const toggleTheme = (currentTheme) => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    return newTheme;
  };
  
  // Initialize theme on page load
  export const initializeTheme = () => {
    const theme = getInitialTheme();
    setTheme(theme);
    return theme;
  };
