/* 테이블 구조 생성 */

const Visitor = function (Sequelize, DataTypes) {
  // Sequelize 는 model/index.js의 sequelize
  // DataTypes 는 model/index.js의 Sequelize

  // const model = Sequelize.define(params1, params2[, params3]);
  /* 
        params1: 모델 이름 설정 
        params2: 컬럼을 정의, ( = CREATE TABLE 제약조건)
        params3: 모델 옵션
   */
  const model = Sequelize.define(
    "Visitor",
    {
      id: {
        type: DataTypes.INTEGER, //DataTypes.INTEGER : 시퀄라이즈에서 제공하는 데이터 타입
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor", // 실제 db의 table이 어떻게 정의되어 있는지 작성
      timestamps: false,
      freezeTableName: true,
    }
  );
  return model;
};

module.exports = Visitor;
