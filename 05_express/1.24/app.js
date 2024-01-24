const express = require("express");
const app = express();

const PORT = 8080;

app.set("view engine", "ejs"); // 뷰엔진을 ejs로 사용하겠다고 알리기!
app.set("views", "./views"); // .ejs 파일을 모아둔 폴더 알려줌!
// app.use() 서버와 클라이언트 이어주는 중간 작업(경로 숨길 수 있음)
app.use("/static", express.static(__dirname + "/public"));

// get 요청 시 동작할 함수
app.get("/", (request, response) => {
  //   response.send("hello express!!");
  // .render() : 렌더링 해줄 페이지 설정
  response.render("index.ejs", {
    // .render()의 두번째 인자에 index.ejs에서 사용할 아래 정보를 객체로 보낼 수 있다.
    btns: ["apple", "banana"],
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "식사는 맛있게 하셨나요?!",
    },
  });
});

// 라우팅
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// page not found, 404 페이지는 맨 마지막에 설정
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
