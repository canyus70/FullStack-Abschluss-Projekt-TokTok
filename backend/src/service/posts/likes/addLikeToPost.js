import Post from "../../../models/Post.js";
import User from "../../../models/User.js";

export async function addLikeToPost(authenticatedUserId, postId) {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");

  const user = await User.findById(authenticatedUserId);
  if (!user) throw new Error("User not found");

  if (post.likedBy.includes(user._id)) {
    throw new Error("User already liked this post");
  }
  user.likes.push(postId);
  post.likedBy.push(user._id);

  //   console.log(user);
  await post.save();
  await user.save();

  return post;
}
