import Post from "../../models/Post.js";
import User from "../../models/User.js";

export async function createNewBlogPost(
    // authenticatedUserId,
    postInfo) {
    // const foundUser = await User.findById(authenticatedUserId);
    // if (!foundUser) throw new Error("User not found");

    const newBlogPost = new Post(postInfo); {
        await newBlogPost.save();
        return newBlogPost;
    }
}