import Post from "../../../models/Post.js";
import User from "../../../models/User.js";

export async function removeSavedPost(authenticatedUserId, postId) {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");

  const user = await User.findById(authenticatedUserId);
  if (!user) throw new Error("User not found");

  //   if (!post.savedBy.includes(user._id)) {
  //     throw new Error("User did not like this post");
  //   }
  user.saved.pull(postId);
  post.savedBy.pull(user._id);
  await post.save();
  await user.save();
  return post;
}
