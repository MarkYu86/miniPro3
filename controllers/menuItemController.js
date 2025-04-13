const { MenuItem } = require("../models");

exports.createMenuItem = async (req, res) => {
  const item = await MenuItem.create(req.body);
  res.json(item);
};
