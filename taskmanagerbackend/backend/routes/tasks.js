const { Router } = require("express")
const { Task } = require("../models/Task")
const router = Router();

router.post('/', async (req, res) => {
  const { title, description, userId } = req.body;
  const task = await Task.createTask(title, description, userId);
  res.status(201).json(task);
});

router.get('/', async (req, res) => {
  const { userId } = req.query;
  const tasks = await Task.getTasks(Number(userId));
  res.json(tasks);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.updateTask(Number(id), req.body);
  res.json(updatedTask);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Task.deleteTask(Number(id));
  res.status(204).end();
});

module.exports = router;
