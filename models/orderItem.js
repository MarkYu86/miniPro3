const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect");

const OrderItem = sequelize.define("OrderItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  menuItemName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = OrderItem;
