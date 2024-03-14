import Post from "../../models/Post.js";
import User from "../../models/User.js";

export async function deletePost(authenticatedUserId, postId) {
    const post = await Post.findById(postId);
    if (!post) throw new Error("Post not found");

    if (!post.author.equals(authenticatedUserId)) {
        throw new Error("Unauthorized to delete this post");
    }

    await Post.findByIdAndDelete(postId);

    return { message: "Post successfully deleted", post };
}
