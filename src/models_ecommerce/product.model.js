import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    }
    /*we can keep images in buffer form , but we should not keep in db . We can either save ina public folder on server
    OR we can use any 3rd party services */
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
