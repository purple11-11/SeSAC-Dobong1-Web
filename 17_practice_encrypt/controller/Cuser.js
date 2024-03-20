const { User } = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

/* bcrypt */
// 회원가입 >> 해시값 생성
function hashPw(pw) {
  return bcrypt.hashSync(pw, saltRounds); // return >> 암호화 된 문자열
}

// 로그인 >> 비밀번호(해시 값) 일치 확인
function comparePW(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw); // return >> true || false
}

/* GET */
// /
exports.main = async (req, res) => {
  console.log("Cuser main req.session.userid ::", req.session.userid);
  const { userid } = req.session;
  if (userid) {
    res.render("profile", { userid: userid });
  }
  res.render("index");
};

// /signup
exports.getSignup = (req, res) => {
  res.render("signup");
};
// /signin
exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.getProfile = (req, res) => {
  res.render("profile");
};

/* POST */
exports.postDoubleCheck = async (req, res) => {
  //   console.log("postDoubleCheck req.body ::", req.body);
  try {
    const doubleCheck = await User.findOne({
      where: { userid: req.body.userid },
    }).then((result) => {
      // console.log("Cuser findOne result ::", result);
      if (result) res.send(false); // 이미 사용중인 id
      else res.send(true);
    });
  } catch (error) {
    console.log("postDoubleCheck err ::", error);
    res.status(500).send("server error!");
  }
};

exports.postSignup = async (req, res) => {
  //   console.log("postSignup req.body ::", req.body);
  try {
    const { userid, pw, name } = req.body;
    const signup = await User.create({
      userid,
      pw: hashPw(pw),
      name,
    }).then(() => {
      res.end();
    });
  } catch (error) {
    console.log("postSingup err ::", error);
    res.status(500).send("sever error!");
  }
};

exports.postSignin = async (req, res) => {
  try {
    const { userid, pw } = req.body;
    const login = await User.findOne({
      where: {
        userid,
      },
    }).then((result) => {
      // console.log("postSignin result ::", result);
      if (result) {
        const isLogin = comparePW(pw, hashPw(pw));
        // console.log("Cuser postsignin isLogin ::", isLogin);
        if (isLogin) {
          req.session.userid = userid;
          // req.session.isLogin = true;
          // res.redirect("/");
          res.send({ success: true });
        } else {
          res.send({ success: false, message: "로그인 실패!😥 아이디와 비밀번호를 확인해주세요." });
        }
      } else {
        res.send({ success: false, message: "존재하지 않는 회원입니다." });
      }
    });
  } catch (error) {
    console.log("postSignin err ::", error);
    res.status(500).send("server error!");
  }
};

exports.postProfile = async (req, res) => {
  try {
    // console.log("postProfile req.body ::", req.body); // {userid: }
    const profile = User.findOne({
      where: {
        userid: req.body.userid,
      },
    }).then((result) => {
      console.log("postProfile result ::", result);
      res.render("profile", { data: result });
    });
  } catch (error) {
    console.log("postProfile err ::", error);
    res.status(500).send("server error!");
  }
};

/* PATCH */
// 제대로 동작 안함😥
exports.patchProfile = async (req, res) => {
  // try {
  //   const { id, pw, name } = req.body;
  //   const isUser = await User.findOne({ where: { id } });
  //   if (isUser) {
  //     await User.update({ pw, name }, { where: { id } });
  //   }
  //   res.end();
  // } catch (error) {
  //   console.log("postProfile err ::", error);
  //   res.status(500).send("server error!");
  // }
};

/* DELETE */
exports.logout = async (req, res) => {
  const user = req.session.userid;
  if (user) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send("server err");
        throw err;
      }
      res.end();
    });
  } else {
    res.send(`
    <script>
      alert("이미 세션이 만료되었습니다.");
      document.location.href="/";
    </script>`);
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const isDelete = await User.destroy({
      where: { id: req.body.id },
    }).then(() => {
      req.session.destroy(() => {
        res.end();
      });
    });
  } catch (error) {
    console.log("deleteProfile err ::", error);
    res.status(500).send("server error!");
  }
};
