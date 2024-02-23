const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userInfo = { id: "cocoa", pw: "1234", name: "코코아" };
const SECRET = "ki35oOvIoQwjX7G4MV0Ccwt3I68W0I"; // random string (.env 파일에서 관리하는 것이 좋다)

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
    // 서버 오류가 날 수 있어서 try/catch 사용
    console.log(req.body);

    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // JWT 인증 토큰 생성
      // const token = jwt.sign(payload, secret/private Key, option);
      const token = jwt.sign({ id: id }, SECRET);
      console.log(token);
      res.send({ result: true, token }); // 프론트에 토큰을 보내줘야 함, 발급 후에는 프론트에서 관리해야하기 때문에
    } else {
      res.send({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (error) {
    console.log("POST /login err : ", err);
    res.status(500).send("server error");
  }
});

// token 정보 확인
app.post("/token", (req, res) => {
  try {
    console.log("req auth ::", req.headers.authorization);

    if (req.headers.authorization) {
      // 인증 정보 들어왔을 떄
      // token만 저장
      const token = req.headers.authorization.split(" ")[1];

      // token 유효성 체크
      try {
        console.log("token ::", token);

        const auth = jwt.verify(token, SECRET);
        console.log("auth ::", auth);
        // verify()의 리턴값 auth :: { id: 'cocoa', iat: 1708656028 }
        // iat: issued at, 발급된 시간
        if (userInfo.id === auth.id) {
          res.send({ result: true, name: userInfo.name });
        }
        res.end();
      } catch (error) {
        // 잘못된 정보 들어왔을 때
        console.log("토큰 인증 에러 : ", error);
        res.send({ result: false, message: "인증된 회원이 아닙니다." });
      }
    } else {
      // 인증 정보 안들어왔을 때
      res.redirect("/login");
    }
  } catch (error) {
    console.log("POST /token err : ", error);
    res.status(500).send("server error");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
