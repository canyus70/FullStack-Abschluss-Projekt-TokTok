import Post from "../../../models/Post.js";
import User from "../../../models/User.js";

export async function removeLikeFromPost(authenticatedUserId, postId) {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");

  const user = await User.findById(authenticatedUserId);
  if (!user) throw new Error("User not found");

  if (!post.likedBy.includes(user._id)) {
    throw new Error("User did not like this post");
  }

  post.likedBy.pull(user._id);
  user.likes.pull(postId);
  await post.save();
  await user.save();

  return post;
}
