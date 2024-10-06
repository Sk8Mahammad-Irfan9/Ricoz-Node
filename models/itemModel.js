const mongoose = require("mongoose");

// item schema
const itemSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

// itemModel create
const itemModel = mongoose.model("items", itemSchema);

// Export the model
module.exports = itemModel;
