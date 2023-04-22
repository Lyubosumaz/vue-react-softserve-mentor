const { Pool } = require("pg");

const pool = new Pool({
  user: "root",
  host: "localhost",
  database: "vue_database",
  password: "root",
  port: 5532,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(15) NOT NULL UNIQUE CHECK (LENGTH(email) >= 3),
    password VARCHAR(15) NOT NULL CHECK (LENGTH(password) >= 3),
    first_name VARCHAR(15) NOT NULL CHECK (LENGTH(first_name) >= 3 OR first_name = ''),
    last_name VARCHAR(15) NOT NULL CHECK (LENGTH(last_name) >= 3 OR last_name = ''),
    accept_conditions BOOLEAN DEFAULT FALSE,
    keep_me_signed_in BOOLEAN DEFAULT FALSE
  )
`;

const addUserQuery = `INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4)`;

(async () => {
  const client = await pool.connect();
  try {
    await client.query(createTableQuery);
    console.log('Table "users" running successfully');

    const result = await client.query("SELECT COUNT(*) FROM users");
    if (result.rows[0].count === "0") {
      await client.query(addUserQuery, ["admin", "admin", "", ""]);
      console.log('Default user added to the "users" table');
    }
  } finally {
    client.release();
  }
})();

module.exports = pool;
