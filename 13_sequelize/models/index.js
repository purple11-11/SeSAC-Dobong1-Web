"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

console.log("config >> ", config);

// const sequelize = new Sequelize(DB명, 사용자명, 비밀번호, config 정보 전체) // 4개의 매개변수 전달
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize; // db = {sequelize: sequelize}
db.Sequelize = Sequelize; // db = {sequelize: sequelize, Sequelize: Sequelize}

db.Visitor = require("./Visitor")(sequelize, Sequelize); // models > Visitor.js의 Sequelize, DataTypes 매개변수로 각각 넘겨줌
module.exports = db;
// 다른 파일에서 쓸 수 있도록, db 라는 변수를 내보내기 하는 중
