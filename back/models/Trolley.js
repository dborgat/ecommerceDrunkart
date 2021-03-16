const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trolleySchema = new mongoose.Schema({
  total: {
    type: Number,
  }, // este number me parece que tiene que hacer referencia al length total
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],
  product: [{ type: Schema.Types.ObjectId, ref: "product" }],
});

module.exports = mongoose.model("trolley", trolleySchema);
