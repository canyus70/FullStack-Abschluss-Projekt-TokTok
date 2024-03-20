import Post from "../../models/Post.js";

export async function getAllBlogPosts() {
    const posts = await Post.find({}).populate('comments').populate('author', "username firstname lastname ").exec(1);
    if (posts.length === 0) throw new Error("No blog posts found");
    return posts;
}