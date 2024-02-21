const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userInfo = { id: "cocoa", pw: "1234", name: "코코아" };
const SECRET = "ki35oOvIoQwjX7G4MV0Ccwt3I68W0I"; // random string

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 로그인 요청
// jwt 생성
app.post("/login", (req, res) => {
  try {
    console.log(req.body);

    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // JWT 인증 토큰 생성
      // const token = jwt.sign(payload, secret/private Key, option);
      const token = jwt.sign({ id: id }, SECRET);
      console.log(token);
      res.send({ result: true, token });
    } else {
      res.send({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (error) {
    console.log("POST /login err : ", err);
    res.status(500).send("server error");
  }
});

// token 정보 확인
app.post("/token", (req, res) => {});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
