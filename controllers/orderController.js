const { Order, OrderItem, MenuItem } = require("../models");

exports.createOrder = async (req, res) => {
  const { userId, items } = req.body;

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const order = await Order.create({ UserId: userId, totalPrice });

  for (const item of items) {
    await OrderItem.create({
      OrderId: order.id,
      MenuItemId: item.menuItemId,
      quantity: item.quantity,
    });
  }

  res.json(order);
};
