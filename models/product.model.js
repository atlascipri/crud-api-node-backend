const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requerid: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      requerid: true,
      default: 0,
    },

    price: {
      type: Number,
      requerid: true, 
      default: 0,
    },

    image: {
      type: String,
      requerid: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product =  mongoose.model("Product", ProductSchema);
module.exports = Product;
