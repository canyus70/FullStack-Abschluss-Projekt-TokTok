import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  blog: { type: mongoose.Types.ObjectId, ref: "Blog" },
  actor: { type: String, ref: "User" },
  action: { type: String, default: "" },
});

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
