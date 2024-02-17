const User = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      timestamps: false,
      freezeTableName: true,
    }
  );
  console.log("models > User.js model: ", model);
  return model;
};

module.exports = User;
