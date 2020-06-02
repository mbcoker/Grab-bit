const { Pool } = require('pg')
const PG_URI = 'postgres://ldhcxbzr:k03duD...@ruby.db.elephantsql.com:5432/ldhcxbzr';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};