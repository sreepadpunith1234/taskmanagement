const express = require("express")
const cors = require("cors")
const authRoutes = require("../routes/auth")
const taskRoutes = require("../routes/tasks")
const projectRoutes = require("../routes/projects")
const { authenticateToken } = require("../middleware/auth")
const { serverConfig } = require("../config/serverConfig")
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use('/auth', authRoutes);
//app.use(authenticateToken);
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);

app.get("/",(req,res)=>{
  res.json("Hello");
})

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});
