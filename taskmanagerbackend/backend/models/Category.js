const { db } = require("../database/schema")
const { categories } = require("../database/schema")
const { eq } = require("drizzle-orm")

class Category {
  constructor(id, name, userId) {
    this.id = id
    this.name = name
    this.userId = userId
  }

  static async createCategory(name, userId) {
    const newCategory = await db.insert(categories).values({ name, userId }).returning()
    return newCategory[0]
  }

  static async getCategories(userId) {
    return await db.select().from(categories).where(eq(categories.userId, userId))
  }

  static async deleteCategory(id) {
    await db.delete(categories).where(eq(categories.id, id))
  }
}

module.exports = Category
