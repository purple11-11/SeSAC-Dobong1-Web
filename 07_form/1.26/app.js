const express = require("express"); // express 불러오기
const app = express(); // 서버 열어줌
const PORT = 8080;

/* 미들웨어 4가지 */
// ejs 사용
app.set("view engine", "ejs");
// views 폴더 경로 알려줌
app.set("views", "./views");

// body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형식으로 데이터를 주고 받음

/* 수업 */

//localhost:8080에 들어갔을 때 index.ejs 보여주기
app.get("/", function (req, res) {
  res.render("index"); //.ejs(확장자) 생략 가능
});

/*
app.get("/getForm", function (req, res) {
  console.log(req.query);
  //   res.send("데이터 잘 받았습니다.");

  // res.render('뷰', {보내줄 데이터})
  res.render("result", {
    title: "GET",
    userInfo: req.query, // req.query 도 객체({}) 형태 => { id: , email: , password: }
  }); //result.ejs 보여주세요
});

app.post("/postForm", function (req, res) {
  // post 요청은 request.body에 담겨져 옵니다!
  console.log(req.body);
  //   res.send("포스트 요청 성공~!");
  //
  //   res.send(`
  // <ul>
  // <li>${req.body.id}</li>
  // <li>${req.body.password}</li>
  // </ul>
  // `);
  //

  console.log("안녕하세요");
  res.render("result.ejs", {
    title: "POST",
    userInfo: req.body, // { id:'' , password:'' , agree: [] }
  });
});
 */

/* 실습. GET, POST 요청 */
// app.get("/", function (req, res) {
//   res.render("practice/index");
// });

app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("validation 응답");
});

app.get("/getPractice", function (req, res) {
  res.render("practice/getPractice");
});
app.get("/postPractice", function (req, res) {
  res.render("practice/postPractice");
});

app.get("/practice", function (req, res) {
  console.log(req.query);
  // res.send("데이터 받아오기 완료");
  res.render("practice/result", {
    title: "GET",
    userInfo: req.query,
    addInfo: false,
  });
});

app.post("/practice", function (req, res) {
  console.log(req.body);
  const postInfo = req.body;
  res.render("practice/result", {
    title: "POST",
    userInfo: postInfo,
    addInfo: true,
  });
});
app.listen(PORT, function () {
  // 포트가 열린 이후에 실행될 동작 작성
  console.log(`http://localhost:${PORT}`);
});
