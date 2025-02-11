import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: {
      required: true,
      type: String,
      unique: true,
    },
    fullName: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
      minlength: 8,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("User", userSchema);
export default userModel;
