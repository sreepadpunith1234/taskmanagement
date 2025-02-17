import { Client } from 'pg';
import { dbConfig } from '../config/dbConfig';

const client = new Client({
  connectionString: dbConfig.connectionString,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

export default client;
