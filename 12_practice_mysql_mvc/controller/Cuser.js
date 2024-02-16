// TODO: 컨트롤러 코드
const User = require("../model/User");

/* GET */
// GET /user
exports.main = (req, res) => {
  res.render("index");
};

// GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};

// GET /user/signup
exports.get_signup = (req, res) => {
  res.render("signup");
};

/* POST */
// POST /user/signup
exports.post_signup = (req, res) => {
  // console.log(req.body); // {id: , pw: , name: }
  User.post_signup(req.body, () => {
    res.end();
  });
};

// POST /user/signin
exports.post_signin = (req, res) => {
  console.log("controller req.body : ", req.body);
  User.post_signin(req.body, (result) => {
    console.log("controller result : ", result);
    // 로그인 성공 시, true를 뷰로 전달
    // 로그인 실패 시, false를 뷰로 전달
    if (result.length > 0) res.send(true);
    // 만약 뷰에 정보를 전달하고 싶으면,
    //res.send({isLogin: true, userInfo: result[0]})
    // 으로 보내주기
    else res.send(false);
  });
};

// POST /user/profile
exports.post_profile = (req, res) => {
  console.log("controller req.body: ", req.body); // { userid }
  User.post_profile(req.body.userid, (result) => {
    console.log(result); // {id, userid, name, pw}
    // 로그인 시 프로필 페이지로 redirection
    res.render("profile", { data: result });
  });
};

// POST /user/profile/edit
exports.edit_profile = (req, res) => {
  console.log("edit req.body: ", req.body);
  User.edit_profile(req.body, () => {
    // res.render("profile", { data: result });
    res.end();
  });
};

// POST /user/profile/delete
exports.delete_profile = (req, res) => {
  User.delete_profile(req.body.id, () => {
    res.end();
  });
};
