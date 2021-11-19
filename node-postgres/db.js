const Pool = require('pg').Pool;

const pool = new Pool({
    user: "jiyoungyoon",
    password: "Wldud1023",
    host:"localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;