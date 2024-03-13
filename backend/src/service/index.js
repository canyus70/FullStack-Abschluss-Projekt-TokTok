import { getAllUsers } from "./user/getAllUsers.js";
import { loginUser } from "./user/loginUser.js";
import { refreshUserToken } from "./user/refreshUserToken.js";
import { registerUser } from "./user/registerUser.js";
import { verifyEmail } from "./user/verifyEmail.js";
import { editUser } from "./user/editUser.js";
import { addFollow } from "./user/addFollow.js";
import { unFollow } from "./user/unFollow.js";

export const UserService = {
  loginUser,
  registerUser,
  verifyEmail,
  refreshUserToken,
  getAllUsers,
  editUser,
  addFollow,
  unFollow,
};
//=====================BLOG SERVICE=====================//
import { getAllBlogPosts } from "./blog/getAllBlogPosts.js";
import { createNewBlogPost } from "./blog/createNewBlogPost.js";
import { getAllFromOne } from "./blog/getAllFromOne.js";
import { getBlogPostById } from "./blog/getBlogPostById.js";

export const PostService = {
  getAllBlogPosts,
  createNewBlogPost,
  getAllFromOne,
  getBlogPostById,
};
