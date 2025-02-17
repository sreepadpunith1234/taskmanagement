import { db } from '../database/schema';
import { tasks } from '../database/schema';
import { eq } from 'drizzle-orm';

export class Task {
  id: number;
  title: string;
  description: string;
  status: string;
  userId: number;

  static async createTask(title: string, description: string, userId: number) {
    const newTask = await db.insert(tasks).values({ title, description, userId }).returning();
    return newTask[0];
  }

  static async getTasks(userId: number) {
    return await db.select().from(tasks).where(eq(tasks.userId, userId));
  }

  static async updateTask(id: number, data: Partial<Omit<Task, 'id'>>) {
    const updatedTask = await db.update(tasks).set(data).where(eq(tasks.id, id)).returning();
    return updatedTask[0];
  }

  static async deleteTask(id: number) {
    await db.delete(tasks).where(eq(tasks.id, id));
  }
}
