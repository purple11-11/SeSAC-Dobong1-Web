// const Visitor = require("../model/Visitor");
const models = require("../models");
exports.main = (req, res) => {
  res.render("index");
};

// /GET /visitors
exports.getVisitors = (req, res) => {
  /* visitor.ejs에 데이터 보내주기 */
  //
  // 1. [DB 연결 전, 임시 데이터베이스]
  // console.log(Visitor.getVisitors());
  // res.render("visitor", { data: Visitor.getVisitors() });
  //
  // 2. [DB 연결 후! (MySQL)]
  // Visitor.getVisitors((result) => {
  //   console.log("Cvisitor.js 전체 목록::", result); // model에서 보내는 rows
  //   res.render("visitor", { data: result });
  // });
  //
  // 3. [sequelize 연결! - After sequelize]
  // "SELECT * FROM visitor"
  models.Visitor.findAll().then((result) => {
    console.log("findAll result: ", result);
    res.render("visitor", { data: result });
  });
};

// GET /visitor/:id
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);
  // 1. [Before sequelize]
  /*   Visitor.getVisitor(req.params.id, (result) => {
    console.log("Cvisitor.js 한 개의 목록 : ", result); // {}: 배열이 아닌 객체만 넘어옴 (model로부터)
    res.send(result);
  }); */

  // 2. [After sequelize]
  // `SELECT * FROM visitor WHERE id=${id}`
  models.Visitor.findOne({
    where: { id: req.params.id },
  }).then((result) => {
    console.log(result); // {}
    res.send(result);
  });
};

// POST /visitor
exports.postVisitor = (req, res) => {
  console.log(req.body); // {id, name, comment}
  // 1. [Before sequelize]
  /*   Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor post : ", result); // result: id값 (model/Visitor의 cb(rows.insertId);로 id 넘어옴)
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  }); */

  // 2. [After sequelize]
  // `INSERT INTO visitor VALUES (null, '${data.name}', '${data.comment}')`
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log(result);
    res.send(result);
  });
};

// DELETE /visitor
exports.deleteVisitor = (req, res) => {
  // req.body를 이용해 삭제
  console.log(req.body);
  console.log(req.body.id);

  // [Before sequelize]
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   // 응답 이후 동작
  //   console.log("Cvisitor.js delete : ", result);
  //   res.send("번 방명록 삭제 완료!");
  // });

  // [After sequelize]
  models.Visitor.destroy({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log("sequelize destroy result: ", result);
    res.send(req.body.id + "번 방명록 삭제 완료");
  });
};

// PATCH /visitor
exports.patchVisitor = (req, res) => {
  console.log(req.body); // {id, name, comment}

  // [Before sequelize]
  // Visitor.patchVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js patch : ", result);
  //   res.send("번 방명록 수정!");
  // });
  //
  // [After sequelize]
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    res.send(req.body.id + "번 방명록 수정!");
  });
};
