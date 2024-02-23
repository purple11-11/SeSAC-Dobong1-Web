const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// cookie-parser
app.use(cookieParser("secret"));

app.get("/", (req, res) => {
  // TODO: index.ejs 두번째 인자로 popup key에 쿠키값 보내기
  // res.render('index', {popup: 쿠키값 보내기});
  console.log(req.signedCookies); // {popup: 'hide'}
  res.render("index", { popup: req.signedCookies.popup });
});

const cookieConfig = {
  maxAge: 1000 * 60 * 60 * 24, // 24h
  httpOnly: true,
  signed: true,
};

app.post("/setCookie", (req, res) => {
  // TODO: 쿠키 생성
  // 쿠키이름: 'popup', 쿠키값:'hide'
  res.cookie("popup", "hide", cookieConfig);
  res.send("쿠키 설정 성공!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/* 
    req 객체
    - req.cookies : 쿠키 정보 담겨있음
    - req.signedCookies : 암호화된 쿠키 정보 담겨있음
*/

/* 
    res 객체
    - res.cookie(키, 값, 옵션) : 쿠키 설정(등록)
    - res.clearCookie(키, 값, 옵션) : 쿠키 제거
*/
