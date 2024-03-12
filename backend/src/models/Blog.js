import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  images: [{ type: String, required: true }],
  author: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  tags: [{ type: String }],
  likedBy: [{ type: mongoose.Types.ObjectId, required: true, ref: "User" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  archived: { type: Boolean, default: false }, // if true not visible, only in archiveSchema
});


const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
