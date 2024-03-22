import Post from "../../models/Post.js";
import User from "../../models/User.js";

export async function deletePost(authenticatedUserId, postId) {
  const post = await Post.findById(postId);
  const foundUser = await User.findById(authenticatedUserId);
  if (!post) throw new Error("Post not found");

  if (!post.author.equals(authenticatedUserId)) {
    throw new Error("Unauthorized to delete this post");
  }

  await foundUser.blogs.pull(post._id);

  await Post.findByIdAndDelete(postId);

  await foundUser.save();

  return { message: "Post successfully deleted", post };
}
