import Blog from "../../models/Post.js";

export async function getAllBlogPosts() {
    const blogs = await Blog.find({});
    if (!blogs) throw new Error("No blog posts found");
    return blogs;
}