const itemModel = require("../models/itemModel");

// create item
exports.createItem = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(500).send({
        success: false,
        message: "Text require",
      });
    }
    const item = await new itemModel({ text }).save();
    res.status(201).send({
      success: true,
      message: "New item added",
      item,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
    });
  }
};

// get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send({
      success: true,
      count: items.length,
      message: "All items",
      items,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
    });
  }
};

// update a item
exports.updateItem = async (req, res) => {
  try {
    const { text } = req.body;
    const { id } = req.params;
    await itemModel.findByIdAndUpdate(id, { text });
    res.status(200).send({
      success: true,
      message: "Item updated successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Unable to update",
      error,
    });
  }
};
