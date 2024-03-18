import Post from "../../../models/Post.js";
import User from "../../../models/User.js";
import Comment from "../../../models/Comment.js";


export async function getAllCommentsFromPost(authenticatedUserId, postId, commentId) {
    const posts = await Post.find({ author: userId })
        .populate('comments') // Kommentare einbinden
        .exec();

    const user = await User.findById(authenticatedUserId);
    if (!user) throw new Error("User not found");

    const comment = await Comment.findById(commentId);
    if (!comment) throw new Error("Comment not found");

    const comments = await Comment.find({ postId: postId });
    return comments;
}