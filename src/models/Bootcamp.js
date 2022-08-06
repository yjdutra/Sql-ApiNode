const { DataTypes, Model } = require("sequelize");

class Bootcamp extends Model {
  static init(sequelize) {
    super.init(
      {
        dbInteger: DataTypes.INTEGER,
        dbString: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Bootcamp;
