// TODO: 컨트롤러
const { Player, Profile, Team } = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    console.log("getPlayers controller res: ", players);
    res.send(players);
  } catch (error) {
    console.log("getPlayers err: ", error);
    res.status(500).send("server error!");
  }
};
