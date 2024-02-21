const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// [ session middleware ]
const sessionConfig = {
  /* 
        세션 설정 시 사용 가능한 "옵션"
            - secret : 안전한 쿠키 전송을 위한 서명값 (필수!!)
            - resave : 세션 수정사항이 생기지 않더라도 매 요청마다 세션을 다시 저장할지 여부 (false 권장)
            - saveUninitialized : 세션에 저장할 내용이 없더라도 처음부터 세션 생성할지 여부 (false 권장)
            - cookie : 세션 쿠키에 대한 설정 (cookie.js 참고 { maxAge, ...})
            - secure : https에 대한 세션을 주고 받을지 (true, false)
            - name : 세션 쿠키의 이름 설정 (default: connect.sid)
    */
  secret: "secretKey", // 필수
  resave: false,
  saveUninitialized: false,
  cookie: {
    // maxAge: 60*1000,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));

app.get("/", (req, res) => {
  res.render("session");
});

// 세션 설정하기(등록)
app.get("/set", (req, res) => {
  // req.session.키이름="값"
  req.session.name = "young";
  res.send("세션 설정 완료!!");
});

// 세션 확인
app.get("/name", (req, res) => {
  console.log("sessionID: ", req.sessionID); // sessionID:  hJoCJ9o6tzNE-pj_ZW4wWaY-JSHyJ-GK

  // 세션 정보 확인
  //   console.log("req.session : ", req.session);
  /* req.session :  Session {
    cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
  } */

  //   res.send("서버에서 세션 정보 확인");

  // 세션 name 확인 (세션 설정하기에서 req.session.name = "young"로 name 설정함!)
  console.log("req.session.name : ", req.session.name); //req.session.name :  young
  res.json({ id: req.sessionID, name: req.session.name });
});

// 세션 삭제
// req.session.destroy(()=>{})
app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    // try catch 없이 에러 처리
    if (err) {
      res.status(500).send("server err");
      throw err;
    }
    // res.send("세션 삭제 완료!");
    res.redirect("/name");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
