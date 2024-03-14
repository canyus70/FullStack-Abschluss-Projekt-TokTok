import Post from "../../models/Post.js";

export async function getBlogPostById(postId) {
    const blogPost = await Post.findById(postId);
    if (!blogPost) throw new Error("Post post not found");
    return blogPost;
}