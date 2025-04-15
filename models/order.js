const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect");

const Order = sequelize.define("Order", {
  totalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

module.exports = Order;
