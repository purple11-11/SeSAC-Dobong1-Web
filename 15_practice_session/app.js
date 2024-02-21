const express = require("express");
const app = express();
const session = require("express-session");
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: 세션 설정
// app.use();
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 10, // 10분 뒤 세션 종료
      httpOnly: true,
    },
  })
);
const userInfo = { userId: "cocoa", userPw: "1234" };

// 2. 세션 확인
app.get("/", (req, res) => {
  /* 
    index.ejs에 session 정보 전달
    - 로그인 된 유저라면 { isLogin: true, user: user }
    - 로그인 안된 유저라면 { isLogin: false }
*/
  //  TODO: 1. user session 불러오는 부분
  const user = req.session.user; // 'cocoa'
  console.log("로그인 유저 정보: ", user);
  //        2. user가 로그인 됐는지 안됐는지 검사하는 부분
  if (user) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});

// TODO: 로그인 기능
app.get("/login", (req, res) => {
  res.render("login");
});
// 2. 세션 설정(등록)
app.post("/login", (req, res) => {
  if (req.body.id === userInfo.userId && req.body.pw === userInfo.userPw) {
    req.session.user = req.body.id;
    res.redirect("/");
    console.log(req.session);
    console.log(req.sessionID); //Lp5DomX2NM1AifyqJgzk1Tjfb0e4K9Uu
  } else {
    res.send(`
    <script>
      alert("아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요");
      document.location.href="/login";
    </script>`);
  }
});

// TODO: 로그아웃 기능
// 3. 세션 삭제
app.get("/logout", (req, res) => {
  const user = req.session.user;
  // 1. 로그아웃 진행
  if (user) {
    // 로그인 된 회원 >> logout 시켜주기
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send("server err");
        throw err;
      }
      // 2. 메인 페이지 렌더 (redirect)
      res.redirect("/");
    });
  } else {
    // 세션 만료된 회원
    res.send(`
    <script>
      alert("이미 세션이 만료되었습니다.");
      document.location.href="/";
    </script>`);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/* 
    req 객체
    req.session.키 = 값 // 세션 설정
    req.session.키 // 세션 사용
    req.session.destroy(콜백) // 세션 삭제
*/
