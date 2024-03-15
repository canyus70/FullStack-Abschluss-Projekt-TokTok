import Post from "../../../models/Post.js";
import User from "../../../models/User.js";
import Comment from "../../../models/Comment.js";

export async function commentAPost(authenticatedUserId, postId, newComment) {
    const post = await Post.findById(postId);
    if (!post) throw new Error("Post not found");

    const user = await User.findById(authenticatedUserId);
    if (!user) throw new Error("User not found");

    const newCommentForPost = new Comment({
        message: newComment.message,
        author: user._id,
        postId: post._id,
    });
    await newCommentForPost.save();
    post.comments.push(newCommentForPost._id);
    await post.save();
    return post;
}