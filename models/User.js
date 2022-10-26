const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      minlength: [3],
      maxlength: [99],
      required: true,
    },
    lastName: {
      type: String,
      minlength: [3],
      maxlength: [99],
      required: true,
    },
    emailAddress: {
      type: String,
      minlength: [10],
      maxlength: [99],
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlenth: [6, "Your password is too weak"],
      required: true,
    },
    profilePhoto: String,
    cloudinary_id: String,
    shippingAddress: {
      addressLine1: {
        type: String,
        minlength: [4],
        maxlength: [99],
      },
      addressLine2: {
        type: String,
        minlength: [4],
        maxlength: [99],
      },
      city: {
        type: String,
        minlength: [4],
        maxlength: [99],
      },
      county: {
        type: String,
        minlength: [4],
        maxlength: [99],
      },
      postCode: {
        type: String,
        minlength: [4],
        maxlength: [6],
      },
    },
    billingAddress: {
      addressLine1: {
        type: String,
        minlength: [4],
        maxlength: [99],
      },
      addressLine2: {
        type: String,
        minlength: [4],
        maxlength: [99],
      },
      city: {
        type: String,
        minlength: [4],
        maxlength: [99],
      },
      county: {
        type: String,
        minlength: [4],
        maxlength: [99],
      },
      postCode: {
        type: String,
        minlength: [4],
        maxlength: [6],
      },
    },
    phoneNumber: {
      type: Number,
      minlength: [11],
      maxlength: [16],
    },
    userRole: String,
    favourite: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Favourite",
      },
    ],
    review: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    transaction: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// function to verify function
userSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
