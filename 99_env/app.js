const express = require("express");
const app = express();

// console.log(process.env); // 내 컴퓨터에서 사용하는 모든 환경변수 조회

// .env에서 만들어둔 환경 변수를 읽어오기 위한 설정
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT; // process.env. 를 사용하기 위해서는 require("dotenv") 아래쪽에 위치해야한다.

app.get("/", (req, res) => {
  console.log("mysql pw: ", process.env.MYSQL_PASSWORD);
  console.log("API KEY: ", process.env.API_KEY);
  console.log("PORT: ", process.env.PORT);
  res.send("응답완료");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
