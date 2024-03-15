import Post from "../../models/Post.js";
import User from "../../models/User.js"; // Stelle sicher, dass dieser Import hinzugefügt wird

export async function getAllFromOne(userId) {

    const posts = await Post.find({ author: userId })
        .populate({
            path: 'comments',
            populate: { path: 'author', select: 'username' }
        })
        .populate('author', 'username');

    const userDetail = await User.findById(userId)
        .populate('followers', 'username')
        .populate('following', 'username')
        .populate('likes', 'title')

    return { posts, userDetail };
}
