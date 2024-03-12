import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profession: { type: String, required: true },
    avatar: { type: String },
    qrcode: { type: String },
    phonenumber: { type: Number },
    bio: { type: String, required: true },
    gender: { type: String, enum: [male, female, divers] },
    birthday: { type: Date },
    website: { type: String },
    sixDigitCode: {
      type: String,
      default: () => Math.random().toString().slice(2, 8),
    },
    emailVerified: { type: Boolean, default: false },
    blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    activities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Activity" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { collection: "users" }
);

const User = mongoose.model("User", userSchema);
export default User;
