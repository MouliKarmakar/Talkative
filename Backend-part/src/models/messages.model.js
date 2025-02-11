import mongoose from "mongoose";
const messagesSchema = new mongoose.Schema({
  senderId: {
    required: true,
    type: String,
  },
  receiverId: {
    required: true,
    type: String,
  },
  text: {
    required: true,
    type: String,
  },
  image: {
    type: String,
  },
});
const messagesModel = mongoose.model("Messages", messagesSchema);
export default messagesModel;
