require("dotenv").config();

const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: "sesac",
  host: "127.0.0.1",
  dialect: "mysql",
};

module.exports = { development };
