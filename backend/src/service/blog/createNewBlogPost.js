import Blog from "../../models/Post";

export async function createNewBlogPost(authenticatedUserId, postInfo) {
    const foundUser = await User.findById(authenticatedUserId);
    if (!foundUser) throw new Error("User not found");

    const newBlogPost = await Blog.create({
        ...postInfo,
        author: foundUser._id
    });
    return newBlogPost;
}