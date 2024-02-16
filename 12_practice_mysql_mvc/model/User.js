// TODO: DB(mysql) 연결
// TODO: 모델 코드

// 0.MySQL 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

/* 
  [ MVC 순서 : 뷰 > 컨트롤러 > 모델 > DB > 모델 > 컨트롤러 > 뷰 ]
    1. VIEW에서 요청
    2. 컨트롤러에서 정보를 받고 모델로 정보를 넘겨줌 (req.body, req.query, req.params, ...)
    3. MODEL에서 DB에 접근하여 요청함
    4. 모델에서는 데이터 삽입/삭제/조회/.. 결과값을 컨트롤러로 응답
    5. 컨트롤러에서는 res 객체를 통해 뷰로 응답 전달
*/

// POST /user/signUp
exports.post_signup = (data, cb) => {
  // console.log(data); // {id, pw, name}
  conn.query(
    `INSERT INTO user VALUES (null, '${data.userid}', '${data.name}', '${data.pw}')`,
    (err, rows) => {
      if (err) throw err;
      cb(); // TODO: 왜 아무것도 안넘겨줘도 되는지??? controller에서 rows 정보 사용하지 않을거라서!
      // console.log(rows); // OkPacket{...}
    }
  );
};

// POST /user/signin
exports.post_signin = (data, cb) => {
  console.log("model : ", data); // {userid, pw}
  conn.query(
    // "LIMIT 1" 걸어준 이유: 회원 가입 시 중복 검사 하지 않아서, SELECT 결과가 여러개일 수 있음 => 중복 조회 방지
    `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`,
    (err, rows) => {
      if (err) throw err;
      cb(rows); // 컨트롤러에 넘겨줌!
      console.log("User.js rows: ", rows); // [{id, userid, name, pw}] or [] (정보를 조회 할 수도있고, 빈 배열일 수도 있음)
    }
  );
};

// POST /user/progile
exports.post_profile = (userid, cb) => {
  console.log("model userid: ", userid); // userid="cocoa"
  conn.query(`SELECT * FROM user WHERE userid='${userid}' LIMIT 1`, (err, rows) => {
    if (err) throw err;
    console.log("model rows: ", rows); // [{id, userid, name, pw}] - 로그인 성공 시 동작할 함수라서, 무조건!! 배열 1개 넘어옴 (빈배열일 수 없음)
    cb(rows[0]);
  });
};

exports.edit_profile = (data, cb) => {
  console.log("[model] edit_profile data: ", data); // {id, name, pw}
  conn.query(
    `UPDATE user SET pw='${data.pw}', name='${data.name}' WHERE id=${data.id}`,
    (err, rows) => {
      if (err) throw err;
      console.log("[model] edit_profile rows: ", rows);
      cb();
    }
  );
};

exports.delete_profile = (id, cb) => {
  conn.query(`DELETE FROM user WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    cb();
  });
};
