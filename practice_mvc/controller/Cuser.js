const User = require("../model/User"); // userInfo();

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  console.log("model: ", User.userInfo()); // model/User의 정보
  console.log("client: ", req.body); // 클라이언트 정보
  const { id, pw } = req.body;
  if (id === User.userInfo()[0].id && pw === User.userInfo()[0].pw) {
    res.send({
      userInfo: req.body,
      isLogin: true,
    });
  } else {
    res.send({
      isLogin: false,
    });
  }
};
