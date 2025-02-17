const { db } = require("../database/schema")
const { projects } = require("../database/schema")
const { eq } = require("drizzle-orm")

class Project {
  constructor(id, name, description, userId) {
    this.id = id
    this.name = name
    this.description = description
    this.userId = userId
  }

  static async createProject(name, description, userId) {
    const newProject = await db.insert(projects).values({ name, description, userId }).returning()
    return newProject[0]
  }

  static async getProjects(userId) {
    return await db.select().from(projects).where(eq(projects.userId, userId))
  }

  static async updateProject(id, data) {
    const updatedProject = await db.update(projects).set(data).where(eq(projects.id, id)).returning()
    return updatedProject[0]
  }

  static async deleteProject(id) {
    await db.delete(projects).where(eq(projects.id, id))
  }
}

module.exports = Project
