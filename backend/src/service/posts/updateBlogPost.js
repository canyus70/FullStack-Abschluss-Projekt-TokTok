import Post from "../../models/Post.js";
import User from "../../models/User.js";

export async function updateBlogPost(authenticatedUserId, postId, newPostInfo) {
    const user = await User.findById(authenticatedUserId);
    if (!user) throw new Error("User not found");

    const post = await Post.findById(postId);
    if (!post) throw new Error("Post not found");

    if (!post.author.equals(authenticatedUserId)) {
        throw new Error("Unauthorized to update this post");
    }

    post.title = newPostInfo.title ?? post.title;
    post.description = newPostInfo.description ?? post.description;
    post.images = newPostInfo.images ?? post.images;
    post.tags = newPostInfo.tags ?? post.tags;

    await post.save();

    return post;
}