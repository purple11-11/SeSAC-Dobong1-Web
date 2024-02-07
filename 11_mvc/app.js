const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// localhost:8080/ 계열 경로 요청 처리
// const indexRouter = require('./routes/index');
const indexRouter = require("./routes"); // 파일명이 index.js일 경우 생략 가능
app.use("/", indexRouter);

// localhost:8080/user 계열 경로 요청 처리
const userRouter = require("./routes/user");
app.use("/user", userRouter);

// 404 page
app.get("*", (req, res) => {
  res.render("404");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
