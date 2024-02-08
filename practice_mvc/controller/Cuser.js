const User = require("../model/User"); // userInfo();

exports.main = (req, res) => {
  res.render("index");
};

/* 실습 1 */
// exports.login = (req, res) => {
//   console.log("model: ", User.userInfo()); // model/User의 정보
//   console.log("client: ", req.body); // 클라이언트 정보
//   const { id, pw } = req.body;
//   if (id === User.userInfo()[0].id && pw === User.userInfo()[0].pw) {
//     res.send({
//       userInfo: req.body,
//       isLogin: true,
//     });
//   } else {
//     res.send({
//       isLogin: false,
//     });
//   }
// };

/* 실습 2 */
exports.login = (req, res) => {
  const { id, pw } = req.body;
  const user = User.user.split("\n");
  console.log(user);
  for (let i = 0; i < user.length; i++) {
    if (user[i].indexOf(id + "//") !== -1 && user[i].indexOf("//" + pw + "//") !== -1) {
      res.send({
        name: user[i].split("//")[2],
        isLogin: true,
      });
    }
  }
  res.send({
    isLogin: false,
  });
};
