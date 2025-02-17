import { Router } from 'express';
import { Project } from '../models/Project';

const router = Router();

router.post('/', async (req, res) => {
  const { name, description, userId } = req.body;
  const project = await Project.createProject(name, description, userId);
  res.status(201).json(project);
});

router.get('/', async (req, res) => {
  const { userId } = req.query;
  const projects = await Project.getProjects(Number(userId));
  res.json(projects);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedProject = await Project.updateProject(Number(id), req.body);
  res.json(updatedProject);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Project.deleteProject(Number(id));
  res.status(204).end();
});

export default router;
