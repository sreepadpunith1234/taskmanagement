const { drizzle } = require('drizzle-orm/node-postgres');
const client = require('./index');
const { pgTable, serial, text, varchar, integer } = require('drizzle-orm/pg-core');

const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 50 }).notNull(),
  password: text('password').notNull(),
  email: varchar('email', { length: 100 }).notNull(),
});

const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 100 }).notNull(),
  description: text('description').notNull(),
  status: varchar('status', { length: 20 }).default('pending'),
  userId: integer('user_id').references(() => users.id),
});

const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  userId: integer('user_id').references(() => users.id),
});

const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  userId: integer('user_id').references(() => users.id),
});

const db = drizzle(client);

module.exports = {
  users,
  tasks,
  projects,
  categories,
  db,
};
