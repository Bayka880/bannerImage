const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const singFileScehma = new Schema({
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
  img: {
    data: Buffer,
    contentType: String,
  },
});
module.exports = mongoose.model("bannerImage", singFileScehma);
