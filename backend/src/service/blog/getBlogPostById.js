import Blog from "../../models/Blog";

export async function getBlogPostById(blogId) {
    const blogPost = await Blog.findById(blogId);
    if (!blogPost) throw new Error("Blog post not found");
    return blogPost;
}