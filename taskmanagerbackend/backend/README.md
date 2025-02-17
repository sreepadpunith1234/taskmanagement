# Backend for Task Management Application

## Project Structure
- **database/**: Contains database connection and schema definition files.
- **models/**: Contains model definitions for users, tasks, projects, and categories.
- **routes/**: Contains API route definitions for authentication, tasks, and projects.
- **middleware/**: Contains middleware for authentication and request validation.
- **config/**: Contains configuration files for database and server settings.
- **server.ts**: Main entry point for the backend application.

## Installation

1. Clone the repository.
2. Navigate to the backend directory.
3. Run `npm install` to install the dependencies.

## Database Setup
Make sure you have PostgreSQL installed and running. Create a new database and update the `DATABASE_URL` in your environment variables or directly in `config/dbConfig.ts`.

## Running the Application

- To start the application, run `npm start`.
- For development with auto-reloading, use `npm run dev`.

## API Endpoints
- **POST /auth/signup**: Sign up a new user.
- **POST /auth/login**: Log in an existing user.
- **POST /auth/logout**: Log out the user.
- **POST /tasks**: Create a new task.
- **GET /tasks**: Retrieve tasks for a user.
- **PUT /tasks/:id**: Update a task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.
- **POST /projects**: Create a new project.
- **GET /projects**: Retrieve projects for a user.
- **PUT /projects/:id**: Update a project by ID.
- **DELETE /projects/:id**: Delete a project by ID.

## Features
- User authentication with JWT.
- CRUD operations for tasks and projects.
- Built with TypeScript and Express.

## Additional Information
Ensure to set up your environment variables for sensitive information such as database URL and JWT secret.
