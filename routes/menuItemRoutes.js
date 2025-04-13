const express = require("express");
const router = express.Router();
const controller = require("../controllers/menuItemController");

router.post("/", controller.createMenuItem);

module.exports = router;
