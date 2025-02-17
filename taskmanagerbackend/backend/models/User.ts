import bcrypt from 'bcrypt';
import { db } from '../database/schema';
import { users } from '../database/schema';
import { eq } from 'drizzle-orm';

export class User {
  id: number;
  username: string;
  password: string;
  email: string;

  static async createUser(username: string, password: string, email: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.insert(users).values({ username, password: hashedPassword, email }).returning();
    return newUser[0];
  }

  static async findUserByUsername(username: string) {
    const user = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return user[0];
  }

  static async validatePassword(user: User, password: string) {
    return await bcrypt.compare(password, user.password);
  }
}
