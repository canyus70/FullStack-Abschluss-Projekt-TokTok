import Post from "../../models/Post.js";

export async function getAllBlogPosts() {
    const blogs = await Post.find({});
    if (blogs.length === 0) throw new Error("No blog posts found");
    return blogs;
}