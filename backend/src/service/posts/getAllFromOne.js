import Post from "../../models/Post.js";

export async function getAllFromOne(userId) {
    // Posts des Benutzers holen
    const posts = await Post.find({ author: userId })
        .populate({
            path: 'comments',
            populate: { path: 'author', select: 'username' }
        })
        .populate('author', 'username')
        .exec();

    // Zusätzliche Informationen des Benutzers holen, wie followers, following, likes
    const userDetail = await User.findById(userId)
        .populate('followers', 'username')
        .populate('following', 'username')
        .populate('likes', 'title')
        .exec();

    // Kombiniere die Informationen für die Antwort
    return { posts, userDetail };
}