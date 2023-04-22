const table_name = "users";

const getUser = async (db, data) => {
  try {
    const query = {
      text: `SELECT * FROM ${table_name} WHERE email = $1`,
      values: [data.email],
    };

    const result = await db.query(query);
    // handle success
    return result.rows[0];
  } catch (err) {
    console.error("Error while getting user", err);
    // handle error
  }
};

const saveUser = async (db, data) => {
  try {
    const query = {
      text: `
      INSERT INTO ${table_name} (email, password, first_name, last_name, "accept_conditions")
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
      values: [
        data.email,
        data.password,
        data.firstName,
        data.lastName,
        data.acceptConditions,
      ],
    };

    const result = await db.query(query);
    if (result.rowCount === 0) {
      console.error("User with this email already exists");
    }
    // handle success
    return result.rows[0];
  } catch (err) {
    console.error("Error while saving user", err);
    // handle error
  }
};

module.exports = {
  getUser,
  saveUser,
};
