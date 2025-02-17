import { db } from '../database/schema';
import { categories } from '../database/schema';
import { eq } from 'drizzle-orm';

export class Category {
  id: number;
  name: string;
  userId: number;

  static async createCategory(name: string, userId: number) {
    const newCategory = await db.insert(categories).values({ name, userId }).returning();
    return newCategory[0];
  }

  static async getCategories(userId: number) {
    return await db.select().from(categories).where(eq(categories.userId, userId));
  }

  static async deleteCategory(id: number) {
    await db.delete(categories).where(eq(categories.id, id));
  }
}
