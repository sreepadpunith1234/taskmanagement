import express from 'express';
import cors from "cors";
import authRoutes from '../routes/auth';
import taskRoutes from '../routes/tasks';
import projectRoutes from '../routes/projects';
import { authenticateToken } from '../middleware/auth';
import { serverConfig } from '../config/serverConfig';

const app = express();
app.use(express.json());
app.use(cors())

app.use('/auth', authRoutes);
app.use(authenticateToken);
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});
