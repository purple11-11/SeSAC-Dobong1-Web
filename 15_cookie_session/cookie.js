const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// [ cookie middleware ]
// ver1. 암호화 되지 않은 쿠키 (!signed 옵션)
// app.use(cookieParser()); //서버에 쿠키파서를 쓸거라는 걸 알림!

// ver2. 암호화된 쿠키
app.use(cookieParser("secretKey"));
const cookieConfig = {
  /* 
        쿠키 설정 시 사용 가능한 "옵션"
        - maxkAge : 쿠키의 수명, 밀리초 단위(1000 = 1초)
        - expires : 만료 날짜, GMT 시간 설정
        - httpOnly : HTTP통신만 접근 허용 (true, false)
        - path : '/abc'로 설정 -> 쿠키가 해당 경로와 그 하위 경로에서만 활성화
                 (default: '/')
        - secure : https로 통신하는 경우에만 쿠키 전송 (보안 강화/ true, false)
        - signed : 쿠키의 암호화 (true, false)
     */
  maxAge: 60 * 1000, // 1분간 유효한 쿠키
  httpOnly: true,
  signed: true, // 쿠키 암호화 => 미들웨어 설정 필요, 쿠키 가져오는 부분 다름
};

app.get("/", (req, res) => {
  res.render("cookie");
});

// 쿠키 설정
// res.cookie(쿠키이름, 쿠키값, 옵션{객체})
app.get("/setCookie", (req, res) => {
  res.cookie("myCookie", "cookie~~", cookieConfig);
  res.send("setCookie 완료");
});

// 쿠키 가져오기
// req.cookies >> 쿠키 정보 담겨 있음
/* ver1. */
// app.get("/getCookie", (req, res) => {
//   console.log(req.cookies); // ver1. 암호화되지 않은 쿠키일 때
//   res.send(req.cookies);
// });
/* ver2. */
app.get("/getCookie", (req, res) => {
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

// 쿠키 삭제
// res.clearCookie(쿠키이름, 쿠키값, 옵션{객체}) // 쿠키값을 찾아서 삭제해야하기 때문에, res.cookie(쿠키이름, 쿠키값, 옵션{객체})로 설정해준것과 동일하게 적어야함
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "cookie~~", cookieConfig);
  res.send("쿠키 삭제");
});

// path 확인 (다른 경로에서 쿠키 확인)
const cookieConfig2 = {
  maxAge: 60 * 1000, // 1분간 유효한 쿠키
  httpOnly: true,
  path: "/abc", // /abc 상위 경로에서는 쿠키 확인 안됨
};

app.get("/abc", (req, res) => {
  res.cookie("abc", "another cookie", cookieConfig2);
  res.render("abc");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/* 

ver 1. 암호화 하지 않았을 때
- 미들웨어 설정 >> app.use(cookieParser())
- 쿠키 설정 >> res.cookie(이름, 값, 옵션)
- 쿠키 확인 >> req.cookies 객체에서 확인
- 쿠키 삭제 >> res.clearCookie(이름, 값, 옵션)
    - 쿠키 삭제만 하는 것이고 응답 완료까진 하지 않음
    - 이름, 값, 옵션이 일치해야 삭제됨
      (expires, maxAge 옵션은 일치하지 않아도 됨)
*/

/*

ver2. 암호화된 쿠키일 때
- 미들웨어 설정 >> app.use(cookieParser('특정 문자열'))
  - 임의의 문자열은 개발자가 정하는 것
- 쿠키 설정 >> res.cookie로 설정 & signed: true 옵션으로 설정
- 쿠키 확인 >> req.signedCookies 객체에서 확인
- 쿠키 삭제 >> ver1. 과 동일
*/
