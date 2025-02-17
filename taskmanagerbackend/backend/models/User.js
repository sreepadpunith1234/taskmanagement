const bcrypt = require("bcrypt")
const { db } = require("../database/schema")
const { users } = require("../database/schema")
const { eq } = require("drizzle-orm")

class User {
  constructor(id, username, password, email) {
    this.id = id
    this.username = username
    this.password = password
    this.email = email
  }

  static async createUser(username, password, email) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await db.insert(users).values({ username, password: hashedPassword, email }).returning()
    return newUser[0]
  }

  static async findUserByUsername(username) {
    const user = await db.select().from(users).where(eq(users.username, username)).limit(1)
    return user[0]
  }

  static async validatePassword(user, password) {
    return await bcrypt.compare(password, user.password)
  }
}

module.exports = User
