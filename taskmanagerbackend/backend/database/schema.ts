import { drizzle } from 'drizzle-orm/node-postgres';
import client from './index';
import { pgTable, serial, text, varchar, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 50 }).notNull(),
  password: text('password').notNull(),
  email: varchar('email', { length: 100 }).notNull(),
});

export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 100 }).notNull(),
  description: text('description').notNull(),
  status: varchar('status', { length: 20 }).default('pending'),
  userId: integer('user_id').references(() => users.id),
});

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  userId: integer('user_id').references(() => users.id),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  userId: integer('user_id').references(() => users.id),
});

export const db = drizzle(client);
