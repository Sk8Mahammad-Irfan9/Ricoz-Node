const express = require("express");
const {
  getAllItems,
  createItem,
  updateItem,
} = require("../controller/itemController");

const router = express.Router();

// get all items
router.get("/", getAllItems);

// add item
router.post("/create-item", createItem);

// update item
router.put("/update-item/:id", updateItem);

module.exports = router;
