const Comment = require("../model/Comment"); // commentsInfo()
/* 
    controller 에서는 model에서 받은 데이터를 가공해서
    view에 전달할 수 있다.
*/

// GET localhost:8080/
exports.main = (req, res) => {
  res.render("index");
};

// GET /localhost:8080/comments
exports.comments = (req, res) => {
  const comments = Comment.commentsInfo();
  console.log(comments); // 임시 DB 조회
  res.render("comments", { commentInfo: comments });
};

// GET /localhost:8080/comment/:id (params 사용)
exports.comment = (req, res) => {
  console.log(req.params);
  const commentId = req.params.id; // 1, 2, 3, 4
  const comments = Comment.commentsInfo();
  if (!comments[commentId - 1]) return res.render("404"); // 위의 코드 한줄로 가능!

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
/*  
app.get("/comment/:id", (req, res) => {
  console.log(req.params);
  const commentId = req.params.id; // 1, 2, 3, 4

  //   if (commentId < 1 || commentId > comments.length) {
  //     return res.render("404");
  //   }

  //   if (isNaN(commentId)) {
  //     // isNaN : 숫자인지 확인 -> 숫자 아니면 true 반환
  //     return res.render("404");
  //   }
  if (!comments[commentId - 1]) return res.render("404"); // 위의 코드 한줄로 가능!

  res.render("comment", { commentInfo: comments[commentId - 1] });
});
*/
