const mongoose = require("mongoose");

const userConfigSchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  age: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  registerList: {
    type: mongoose.SchemaTypes.Array,
    default: [],
    required: false,
  },
});

module.exports = mongoose.model("UserConfig", userConfigSchema);
