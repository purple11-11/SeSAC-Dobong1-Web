const { User } = require("../models");

/* GET */
// /
exports.main = (req, res) => {
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
      console.log("Cuser findOne result ::", result);
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
      pw,
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
        pw,
      },
    }).then((result) => {
      console.log("postSignin result ::", result);
      if (result) res.send(true);
      else res.send(false);
    });
  } catch (error) {
    console.log("postSignin err ::", error);
    res.status(500).send("server error!");
  }
};

exports.postProfile = async (req, res) => {
  try {
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
exports.patchProfile = async (req, res) => {
  try {
    const { id, pw, name } = req.body;
    const isEdit = await User.update({ pw, name }, { where: { id } }).then(() => {
      res.end();
    });
  } catch (error) {
    console.log("postProfile err ::", error);
    res.status(500).send("server error!");
  }
};

/* DELETE */
exports.deleteProfile = async (req, res) => {
  try {
    const isDelete = await User.destroy({
      where: { id: req.body.id },
    }).then(() => {
      res.end();
    });
  } catch (error) {
    console.log("deleteProfile err ::", error);
    res.status(500).send("server error!");
  }
};
