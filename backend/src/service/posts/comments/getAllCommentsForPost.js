import Comment from "../../../models/Comment.js";

// added by Runhong
export async function getAllCommentsForPost(postId) {
  const commentsForPost = await Comment.find({ postId: postId }).populate(
    "author",
    "avatar username profession _id"
  );

  return commentsForPost;
}
