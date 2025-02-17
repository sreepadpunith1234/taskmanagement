import { db } from '../database/schema';
import { projects } from '../database/schema';
import { eq } from 'drizzle-orm';

export class Project {
  id: number;
  name: string;
  description: string;
  userId: number;

  static async createProject(name: string, description: string, userId: number) {
    const newProject = await db.insert(projects).values({ name, description, userId }).returning();
    return newProject[0];
  }

  static async getProjects(userId: number) {
    return await db.select().from(projects).where(eq(projects.userId, userId));
  }

  static async updateProject(id: number, data: Partial<Omit<Project, 'id'>>) {
    const updatedProject = await db.update(projects).set(data).where(eq(projects.id, id)).returning();
    return updatedProject[0];
  }

  static async deleteProject(id: number) {
    await db.delete(projects).where(eq(projects.id, id));
  }
}
