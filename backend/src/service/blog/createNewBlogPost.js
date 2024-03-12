import Blog from "../../models/Blog";

export async function createNewBlogPost(authenticatedUserId, stayInfo) {
    const foundUser = await User.findById(authenticatedUserId);
    if (!foundUser) throw new Error("User not found");

    const newBlogPost = await Blog.create({
        ...newBlogPost,
        author: foundUser._id
    });
}