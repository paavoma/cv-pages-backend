const poolCredentials = require('./config');

const Pool = require('pg').Pool
const pool = new Pool(poolCredentials);

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