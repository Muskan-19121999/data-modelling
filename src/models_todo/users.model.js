import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      required: true,
      required: [true, "Email is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

/*whenever the database is connected the model name User gets converted to plural and lowercase so, 
User will become users */
