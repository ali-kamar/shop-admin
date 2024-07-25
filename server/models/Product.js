const { number } = require("joi");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide product name"],
      maxlength: 50,
    },
    category: {
      type: String,
      enum: [
        "kitchen",
        "shisha",
        "detergents",
        "makeup",
        "decorations",
        "toys",
        "sanitary",
        "toolkit",
        "electronics",
        "outdoors",
      ],
      required: [true, "Please provide category"],
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
    },

    url: {
      type: String,
      required: [true, "Please provide url"],
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
