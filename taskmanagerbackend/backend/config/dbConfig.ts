export const dbConfig = {
  connectionString: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/mydb',
};
