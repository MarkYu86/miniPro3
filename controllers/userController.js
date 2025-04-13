const { User } = require("../models");

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};
