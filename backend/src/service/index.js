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
import { getAllBlogPosts } from "./posts/getAllBlogPosts.js";
import { createNewBlogPost } from "./posts/createNewBlogPost.js";
import { getAllFromOne } from "./posts/getAllFromOne.js";
import { getBlogPostById } from "./posts/getBlogPostById.js";
import { addLikeToPost } from "./posts/likes/addLikeToPost.js";
import { removeLikeFromPost } from "./posts/likes/removeLikeFromPost.js";
import { savePostForUser } from "./posts/savePostForUser.js";
import { removeSavedPost } from "./posts/removeSavedPost.js";

export const PostService = {
  getAllBlogPosts,
  createNewBlogPost,
  getAllFromOne,
  getBlogPostById,
  addLikeToPost,
  savePostForUser,
  removeSavedPost,
  //======LIKES HANDLER======//
  removeLikeFromPost
};
