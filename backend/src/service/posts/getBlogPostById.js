import Post from "../../models/Post.js";

export async function getBlogPostById(postId) {
  const blogPost = await Post.findById(postId)
    .populate("author", "username avatar profession qrcode")
    .populate("comments", "author createdAt message"); //added by runhong
  if (!blogPost) throw new Error("Post post not found");
  return blogPost;
}
