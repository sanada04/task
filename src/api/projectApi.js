import axios from 'axios';

const projectApi = {
  getProjects: async () => {
    const response = await axios.get('/path/to/projects');
    return response.data;
  },
  createProject: async (project) => {
    const response = await axios.post('/path/to/projects', project);
    return response.data;
  },
  updateProject: async (project) => {
    const response = await axios.put(`/path/to/projects/${project.id}`, project);
    return response.data;
  },
  deleteProject: async (id) => {
    await axios.delete(`/path/to/projects/${id}`);
  }
};

export default projectApi;