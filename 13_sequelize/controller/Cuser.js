// TODO: 컨트롤러 코드
// const User = require("../model/User");
const models = require("../models");

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
  // console.log(req.body); // {userid: , pw: , name: }
  /*  User.post_signup(req.body, () => {
    res.end();
  }); */
  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  }).then(() => {
    res.end();
  });
};

// POST /user/signin
exports.post_signin = (req, res) => {
  console.log("controller req.body : ", req.body);
  /* User.post_signin(req.body, (result) => {
    console.log("controller result : ", result);
    // 로그인 성공 시, true를 뷰로 전달
    // 로그인 실패 시, false를 뷰로 전달
    if (result.length > 0) res.send(true);
    // 만약 뷰에 정보를 전달하고 싶으면,
    //res.send({isLogin: true, userInfo: result[0]})
    // 으로 보내주기
    else res.send(false);
  }); */
  models.User.findOne({
    // findOne은 객체 하나만 반환함! => result.length 사용할 수 없음 (findAll은 배열 반환)
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    console.log("Cuser findOne result: ", result); // {} or null
    if (result) res.send(true);
    else res.send(false);
  });
};

// POST /user/profile
exports.post_profile = (req, res) => {
  console.log("controller req.body: ", req.body); // { userid }
  /* User.post_profile(req.body.userid, (result) => {
    console.log(result); // {id, userid, name, pw}
    // 로그인 시 프로필 페이지로 redirection
    res.render("profile", { data: result });
  }); */

  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

// POST /user/profile/edit
exports.edit_profile = (req, res) => {
  console.log("edit req.body: ", req.body);
  /*  User.edit_profile(req.body, () => {
    // res.render("profile", { data: result });
    res.end();
  }); */

  models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => {
    res.end();
  });
};

// POST /user/profile/delete
exports.delete_profile = (req, res) => {
  /* User.delete_profile(req.body.id, () => {
    res.end();
  }); */

  models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.end();
  });
};
