const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8080;

/* temp DB
    임시 데이터 배열 형태로 만들어서 화면에 띄워주는 작업
*/
let tempDB = [
  {
    contentID: 1,
    title: "글제목1",
    content: "글 내용1",
    img: null, // null or path(string)
  },
  {
    contentID: 2,
    title: "글제목2",
    content: "글 내용2",
    img: null, // null or path(string)
  },
  {
    contentID: 3,
    title: "글제목3",
    content: "글 내용3",
    img: null, // null or path(string)
  },
  {
    contentID: 4,
    title: "글제목4",
    content: "글 내용4",
    img: null, // null or path(string)
  },
];

const userId = "YoungIn💜";

// 미들웨어 설정
/* 
    미들웨어란?
    요청(req)과 응답(res) 사이에서 중간다리 역할을 하는 SW
    ex1) req의 body를 서버에서 읽을 수 있도록 도와주는 "body-parser"
    ex2) req의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 "multer"
    ex3) static 파일 설정을 도와주는 app.use(express.static(~~~))
 */

/* 미들웨어1. views 설정 (set() 이용) 
    - view란?
      클라이언트에게 제공되는 화면(프론트 단 html)
      view 설정
      1. html을 보여주기 위해서 어떤 엔진을 쓸건지 (view enginge)
      2. html 파일들을 어디에 모아둘건지(views 폴더 설정)
    - view engine (ejs)
      서버에서 보낸 js 변수를 클라이언트 사용할 수 있도록 도움
      ex) ejs, pug, nunjucks, ... 등이 있지만 html과 가장 유사한 것은 ejs
*/
app.set("view engine", "ejs");
app.set("views", "./views");

/* 미들웨어2. static 폴더 설정
    - static 폴더란?
     외부(브라우저)에서 접근 가능한 폴더
     프론트 js, css, 이미지, 동영상 등
*/
app.use("/static", express.static(__dirname + "/public"));
// app.use(express.static("/public")); 이렇게 작성도 가능
app.use("/uploads", express.static(__dirname + "/uploads")); // 가상 경로

/* 미들웨어3. body-parser 설정 (express 내장 모듈)
    - req.body 기본적으로 undefined
      body-parser가 req.body를 서버측에서 사용할 수 있도록 파싱(parsing)해줌
*/
// true: queryString 모듈 사용, false: qs 모듈 사용
// 둘 다 비슷하지만 qs 모듈이 보안상 좀 더 좋다고 알려짐
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // 요청 body에서 json 정보만 가지고 오도록 설정

/* 미들웨어4. multer 설정 (파일 업로드 시에만 사용하면 됨)
    - req.body <input type="file">의 정보는 string
    실제 파일을 업로드 하고, 파일 정보를 확인하기 위해서 사용
 */
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, "uploads/");
    },
    filename: (req, file, done) => {
      /*
            내장 함수들
            extname(파일명) : 확장자 추출
            basename(파일명, 확장자) : 확장자를 제외한 파일명 추출
            basename(경로명) : (확장자 포함된) 파일명 추출
         */
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { files: 5 * 1024 * 1024 },
});

// ## 라우팅
/* 
    - 라우팅이란?
      특정 url로 특정 method에 대한 요청 처리
      - url: 사용자가 정한 url
      - method: get, post, put, patch, delete
        CRUD를 위한 것(CRUD: 데이터를 create, read, update, delete)
        1. get: 'R'ead, localhost:8080/sesac
        브라우저의 url에 주소를 입력하는 것은 모두 get 요청!
        localhost:8080/sesac의 화면을 보기 위해서는
        /sesac의 get 요청에 대한 res(응답) 처리가 되어야 볼 수 있다.
        res.send(), res.end(), res.write(), res.render(), ...
        (res.write()는 응답이 끝나지 않음. 끝나는 처리 따로 해줘야함)
        
        2. post: 'C'reate 새로운 정보를 '입력', '추가'할 때
        3. put(전체) & patch(일부): 'U'pdate 수정 관련 메소드
        4. delete: 'D'elete
 */
app.get("/", (req, res) => {
  res.render("index", {
    user: userId,
    contentData: tempDB, //[{}, {}]
  });
});

/* 
    params vs. query
    - params
        - 서버에서 url 표기 /:params
        - 클라이언트에서 요청시 /123
        - req.params 에서 정보 확인 가능 {params: '123'}
        - 네이버 블로그 처럼 여러 계정의 글을 "조회"할 때 == params 사용
    - query
        - 서버에서 url 표기 시 /sesac
        - 클라이언트에서 url 표기 시 /sesac?id=123&content=123...
        - req.query에서 정보 확인 가능 {id: '123', content: '123'}
        - 검색, 필터링 기능 == query 사용
*/
app.get("/content/:contentID", (req, res) => {
  // ':' params 명시 키워드
  console.log(req.params); // {contentID:'1'};
  const { contentID } = req.params;
  const isContent = tempDB.filter((obj) => obj.contentID === Number(contentID))[0];
  console.log(isContent); // 객체({}) or undefined
  /* {
    contentID: 1,
    title: "글제목1",
    content: "글 내용1",
    img: null, // null or path(string)
  } */
  if (isContent) res.render("content", isContent);
  else res.render("404");
  //   res.send("hi~~");
});

// 새글 작성하기 화면 렌더링
// /content/write로 경로 지정할 경우 write를 params로 파악할 수 있어서 그렇게 하면 안됨!
app.get("/write", (req, res) => {
  res.render("writeContent");
});

app.post("/blog/post", uploadDetail.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  tempDB.push({
    contentID: tempDB.length !== 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1,
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null, // null or path(string)
  });
  console.log(tempDB);
  res.redirect("/");
});

app.delete("/blog/delete", (req, res) => {
  console.log(req.query);
  const { contentID } = req.query;
  tempDB = tempDB.filter((obj) => obj.contentID !== Number(contentID));
  console.log(tempDB);
  //   res.send("ddddd");
  res.end(); // send() 랑 동시 사용 X, send()로 데이터 넘겨줄 필요 없어서 end() 사용
});

// 404 페이지 처리
app.get("*", (req, res) => {
  res.render("404");
});

// ## 포트 열기
// app.listen(포트, 포트 열릴 때 동작할 함수)
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
