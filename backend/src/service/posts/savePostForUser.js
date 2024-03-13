import Post from "../../models/Post.js";
import User from "../../models/User.js";

export async function savePostForUser(authenticatedUserId, postId) {
    const user = await User.findById(authenticatedUserId);
    if (!user) throw new Error("User not found");

    const post = await Post.findById(postId);
    if (!post) throw new Error("Post not found");

    if (user.saved.includes(postId)) {
        throw new Error("Post already saved");
    }

    user.saved.push(postId);
    await user.save();

    return user;
}
