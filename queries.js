const poolCredentials = require('./config');
const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
});

const getAllData = (request, response) => {
    pool.query('SELECT  data -> \'sections\' AS sections FROM pagecontent', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getAllData,
  }