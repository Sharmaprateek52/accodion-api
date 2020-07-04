const Pool = require("pg").Pool;
const pool = new Pool({
  user: "prateek",
  host: "localhost",
  database: "api",
  password: "prateek",
  port: 5432,
});

const getAccordion = async (req, res) => {
  await pool.query("SELECT * FROM tasks ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
};


module.exports = getAccordion;