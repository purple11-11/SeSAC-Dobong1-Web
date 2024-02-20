"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// TODO: 모델 모듈 불러오기

const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);

// TODO: 관계 형성
// 1) Player : Profile = 1 : 1
// 한 선수 당 하나의 프로필을 가짐
PlayerModel.hasOne(ProfileModel, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});

ProfileModel.belongsTo(PlayerModel, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});

// 2) Team : Player = 1 : N
// 한 팀에는 여러 선수가 존재
TeamModel.hasMany(PlayerModel, {
  sourceKey: "team_id",
  foreignKey: "team_id",
});
PlayerModel.belongsTo(TeamModel, {
  targetKey: "team_id",
  foreignKey: "team_id",
});

// TODO: 관계 정의한 모델들을 db 객체에 저장
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;

module.exports = db;
