import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  imageId: String,
  email: { type: String, unique: true },
  messages: [
    {
      message: String,
      sender: String,
      reciever: String,
      time: Date,
    },
  ],
});

export const User = mongoose.model("User", userSchema, "chatgram_users");
