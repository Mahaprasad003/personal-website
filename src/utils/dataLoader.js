// Functions for loading projects data

// Load projects data
export const loadProjects = async () => {
  try {
    // In a real application, this might be fetched from an API or imported directly
    const projects = await import('../data/projects.json');
    return projects.default;
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
};