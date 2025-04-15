const { User } = require("../models");

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
