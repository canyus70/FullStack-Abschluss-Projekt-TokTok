import Blog from "../../models/Post";

export async function getBlogPostById(postId) {
    const blogPost = await Blog.findById(postId);
    if (!blogPost) throw new Error("Blog post not found");
    return blogPost;
}