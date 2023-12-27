import axios from 'axios';

axios.defaults.withCredentials = true;
const BASE_URL = 'https://dashboard-server-psi.vercel.app/project';

const api = axios.create({
  baseURL: BASE_URL,
});

// Create a project
export const createProject = async (projectData) => {
  try {
    const response = await api.post('/create', projectData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get all projects
export const getAllProjects = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update a project by ID
export const updateProjectById = async (projectId, projectData) => {
  try {
    const response = await api.put(`/update/${projectId}`, projectData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Delete a project by ID
export const deleteProjectById = async (projectId) => {
  try {
    const response = await api.delete(`/delete/${projectId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;
