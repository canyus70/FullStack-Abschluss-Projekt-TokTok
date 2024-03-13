import { getAllUsers } from "./user/getAllUsers.js";
import { loginUser } from "./user/loginUser.js";
import { refreshUserToken } from "./user/refreshUserToken.js";
import { registerUser } from "./user/registerUser.js";
import { verifyEmail } from "./user/verifyEmail.js";

export const UserService = {
    loginUser,
    registerUser,
    verifyEmail,
    refreshUserToken,
    getAllUsers,
};
//=====================BLOG SERVICE=====================//
import { getAllBlogPosts } from "./posts/getAllBlogPosts.js";
import { createNewBlogPost } from "./posts/createNewBlogPost.js";
import { getAllFromOne } from "./posts/getAllFromOne.js";
import { getBlogPostById } from "./posts/getBlogPostById.js";

export const PostService = {
    getAllBlogPosts,
    createNewBlogPost,
    getAllFromOne,
    getBlogPostById
}