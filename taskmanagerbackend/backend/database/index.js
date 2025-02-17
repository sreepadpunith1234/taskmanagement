const { Client } = require('pg');
const { dbConfig } = require('../config/dbConfig');

const client = new Client({
  connectionString: "postgres://user:password@localhost:5432/mydb",
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
