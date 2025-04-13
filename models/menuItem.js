const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect");

const MenuItem = sequelize.define("MenuItem", {
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
  description: DataTypes.STRING,
});

module.exports = MenuItem;
