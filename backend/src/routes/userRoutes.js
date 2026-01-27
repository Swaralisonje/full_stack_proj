const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const { exportToCSV } = require("../utils/exportCsv");

router.post("/", controller.createUser);
router.get("/", controller.getUsers);
router.get("/search", controller.searchUser);
router.get("/export", exportToCSV);
router.get("/:id", controller.getUserById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
