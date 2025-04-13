const sequelize = require("../dbConnect");
const User = require("./user");
const Order = require("./order");
const MenuItem = require("./menuItem");
const OrderItem = require("./orderItem");

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(MenuItem, { through: OrderItem });
MenuItem.belongsToMany(Order, { through: OrderItem });

sequelize.sync({ force: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Sync failed:", err));

module.exports = { sequelize, User, Order, MenuItem, OrderItem };
