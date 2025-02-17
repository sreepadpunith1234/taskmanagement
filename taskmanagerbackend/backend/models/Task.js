const { db } = require("../database/schema")
const { tasks } = require("../database/schema")
const { eq } = require("drizzle-orm")

class Task {
  constructor(id, title, description, status, userId) {
    this.id = id
    this.title = title
    this.description = description
    this.status = status
    this.userId = userId
  }

  static async createTask(title, description, userId) {
    const newTask = await db.insert(tasks).values({ title, description, userId }).returning()
    return newTask[0]
  }

  static async getTasks(userId) {
    return await db.select().from(tasks).where(eq(tasks.userId, userId))
  }

  static async updateTask(id, data) {
    const updatedTask = await db.update(tasks).set(data).where(eq(tasks.id, id)).returning()
    return updatedTask[0]
  }

  static async deleteTask(id) {
    await db.delete(tasks).where(eq(tasks.id, id))
  }
}

module.exports = Task
