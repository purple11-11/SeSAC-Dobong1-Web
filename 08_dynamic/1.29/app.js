const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 미들웨어
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// ajax 라우팅
app.get("/ajax", (req, res) => {
  console.log(req.query);
  // res.send("ajax 응답완료");
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios 라우팅
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// fetch 라우팅
app.get("/fetch", (req, res) => {
  console.log(req.query);
  // res.send("fetch 응답 완료!"); // .ejs 파일의 return res.text();메서드 사용
  res.send(req.query); // .ejs 파일의 return res.json(); 메서드 사용
});

app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// open api 사용
app.get("/open-api", (req, res) => {
  res.render("api");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
