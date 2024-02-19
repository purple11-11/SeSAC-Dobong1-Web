const ProfileModel = function (sequelize, DataTypes) {
  const Profile = sequelize.define(
    "Profile",
    {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Profile;
};

module.exports = ProfileModel;
