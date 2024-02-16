// [DB 연결 전]
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "윤영인", comment: "안녕하세요~~" },
//     { id: 2, name: "홍길동", comment: "hello~~" },
//   ];
// };

const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

// 전체 데이터 조회
// /GET /visitors
exports.getVisitors = (cb) => {
  // TODO: 여기서 콜백은 뭐지? 뭘 가르키는건지 아님 내부 함수인지?
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js 전체 목록::", rows);
    cb(rows);
  });
};

// 한 개의 데이터 조회
// /GET /visitor
exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js 하나의 데이터 조회 : ", rows); // [{}]
    cb(rows[0]);
  });
};

// 데이터 등록
// POST /visitor
exports.postVisitor = (data, cb) => {
  // data = {name: '영인', comment: '하하하하하'}
  conn.query(
    `INSERT INTO visitor VALUES (null, '${data.name}', '${data.comment}')`,
    (err, rows) => {
      if (err) throw err;
      cb(rows.insertId);
      // console.log("Visitor post : ", rows);
      /* 
        // cb(rorws)
        Visitor post :  OkPacket {
           fieldCount: 0,
            affectedRows: 1,
            insertId: 4,
            serverStatus: 2,
            warningCount: 0,
            message: '',
            protocol41: true,
            changedRows: 0
          }
       */
    }
  );
};

// 데이터 삭제
exports.deleteVisitor = (id, cb) => {
  console.log(id);
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js delete : ", rows);
    cb(rows);
  });
};

// 데이터 수정
exports.patchVisitor = (data, cb) => {
  console.log(data);
  conn.query(
    `UPDATE visitor 
     SET name='${data.name}', comment='${data.comment}' 
     WHERE id=${data.id}`,
    (err, rows) => {
      if (err) throw err;
      console.log("Visitor patch : ", rows);
      cb(true);
    }
  );
};
