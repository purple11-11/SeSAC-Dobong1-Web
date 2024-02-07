const User = require("../model/User");
// User.userInfo() //{ id: , pw: ~}

// GET localhost:8080/user
exports.user = (req, res) => {
  res.render("user", { userInfo: User.userInfo() });
};
