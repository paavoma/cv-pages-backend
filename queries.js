const poolCredentials = require('./config');
const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
});
client.connect();

const getAllData = (request, response) => {
    client.query('SELECT  data -> \'sections\' AS sections FROM pagecontent', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getAllData,
  }