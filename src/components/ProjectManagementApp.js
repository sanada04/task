import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Input,
  Select,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@/components/ui';
import { PlusCircle, Trash, Edit } from 'lucide-react';
import projectApi from '@/api/projectApi';

const ProjectManagementApp = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '', status: 'todo' });
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    // Fetch projects from server using HTMX
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const projects = await projectApi.getProjects();
      setProjects(projects);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  const addProject = async () => {
    try {
      const newProject = await projectApi.createProject(newProject);
      setProjects([...projects, newProject]);
      setNewProject({ name: '', description: '', status: 'todo' });
    } catch (error) {
      console.error('Failed to add project:', error);
    }
  };

  const updateProject = async () => {
    try {
      const updatedProject = await projectApi.updateProject(editingProject);
      setProjects(
        projects.map((project) =>
          project.id === updatedProject.id ? updatedProject : project
        )
      );
      setEditingProject(null);
    } catch (error) {
      console.error('Failed to update project:', error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await projectApi.deleteProject(id);
      setProjects(projects.filter((project) => project.id !== id));
    } catch (error) {
      console.error('Failed to delete project:', error);
    }
  };

  return (
    <div>
      <h1>Project Management App</h1>

      <Card>
        <CardHeader>New Project</CardHeader>
        <CardContent>
          <Input
            label="Name"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          />
          <Input
            label="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          />
          <Select
            label="Status"
            value={newProject.status}
            onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
            options={['todo', 'in progress', 'done']}
          />
        </CardContent>
        <CardActions>
          <Button onClick={addProject}>
            <PlusCircle /> Add Project
          </Button>
        </CardActions>
      </Card>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>
                <Button onClick={() => setEditingProject(project)}>
                  <Edit /> Edit
                </Button>
                <Button onClick={() => deleteProject(project.id)}>
                  <Trash /> Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {editingProject && (
        <Card>
          <CardHeader>Edit Project</CardHeader>
          <CardContent>
            <Input
              label="Name"
              value={editingProject.name}
              onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
            />
            <Input
              label="Description"
              value={editingProject.description}
              onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
            />
            <Select
              label="Status"
              value={editingProject.status}
              onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value })}
              options={['todo', 'in progress', 'done']}
            />
          </CardContent>
          <CardActions>
            <Button onClick={updateProject}>
              <Edit /> Update Project
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default ProjectManagementApp;