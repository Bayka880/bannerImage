const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const singImageScehma = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  filePath: {
    type: String,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("bannerImages", singImageScehma);
