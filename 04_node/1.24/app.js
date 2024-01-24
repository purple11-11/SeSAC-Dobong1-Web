const http = require("http");

// fs 모듈 불러오기 : 실제로 html을 읽게 하고 싶을 때(fs: file system module)
const fs = require("fs");

const PORT = 8080;

// 서버 생성
const server = http.createServer(function (request, response) {
  console.log(request.url);
  // index.html 내용 읽어서 담아놓는 data 변수
  const data = fs.readFileSync("./index.html");
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  /* 
  response.writeHead(상태코드, 헤더 정보)
    - text/html : 응답의 콘텐트 형식이 HTML이라는 의미
    - charset=utf-8 : 인코딩 방식이 utf-8
  */

  // .write()만 하면 계속 로딩됨. .end()로 끝내줘야함!
  response.write(data);
  response.end();
  //   response.write("응답 완료!");
  //   response.end("<h3>진짜 완료!!</h3>");

  /* 예외 처리 : try{ ~ } catch(err){}문
try 스코프 내부 문장에서 오류가 났을 때 catch 문으로 err를 보냄
*/
  try {
    console.log("성공");
    const data = fs.readFileSync("./index.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.write(data);
    response.end();
  } catch (err) {
    console.log("실패");
    console.log(err);
    const errPage = fs.readFileSync("./404.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.send(errPage);
    response.end();
  } finally {
    // 예외 발생과 상관없이 모두 실행시키고 싶은 경우 작성
    console.log("성공 실패 모두 실행됩니다.");
  }
});

// 1. request 이벤트: 클라이언트 요청
// request 요청이 들어오면 동작할 함수 작성해줌
server.on("request", function (req, res) {
  console.log("request 이벤트 실행");
});

// 2. connection 이벤트 : 클라이언트가 접속했을 때 발생
server.on("connection", (req, res) => {
  console.log("connection 이벤트 발생");
});

// listen 함수로 포트 열어주기
server.listen(PORT, function () {
  console.log("server is open!");
  console.log(`http://localhost:${PORT}`);
});
