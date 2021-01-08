'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'test_database',
  user: 'test_user',
  password: 'test',
});

module.exports = pool;
