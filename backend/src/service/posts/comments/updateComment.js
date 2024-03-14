import Post from "../../../models/Post.js";
import User from "../../../models/User.js";
import Comment from "../../../models/Comment.js";

export async function updateComment(authenticatedUserId, postId, commentId, newCommentContent) {
    const post = await Post.findById(postId);
    if (!post) throw new Error("Post not found");

    const user = await User.findById(authenticatedUserId);
    if (!user) throw new Error("User not found");

    const comment = await Comment.findById(commentId);
    if (!comment) throw new Error("Comment not found");

    if (!comment.author.equals(authenticatedUserId)) {
        throw new Error("Unauthorized to update this comment");
    }

    comment.content = newCommentContent;
    comment.updatedAt = Date.now();
    await post.save();

    return post;
}
