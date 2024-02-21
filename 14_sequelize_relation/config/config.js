// .env 모듈 설치
require("dotenv").config();

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "sesac",
  host: "127.0.0.1",
  dialect: "mysql",
};

module.exports = { development };
// module.exports = { development, test, production }; // 추가로 내보낼것 있을 때!
