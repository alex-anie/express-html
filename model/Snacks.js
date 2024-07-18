const mongoose = require("mongoose");
const snacksSchema = mongoose.Schema({
  snacks: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Snacks", snacksSchema);
