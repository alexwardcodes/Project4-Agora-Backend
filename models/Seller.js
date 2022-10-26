const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema(
  {
    sellerName: {
      type: String,
      minlength: [3],
      maxlength: [99],
      required: true,
    },
    bio: {
      type: String,
      minlength: [3],
      maxlength: [500],
      required: true,
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    review: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = { Seller };
