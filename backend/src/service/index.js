import { getAllUsers } from "./user/getAllUsers.js";
import { loginUser } from "./user/loginUser.js";
import { refreshUserToken } from "./user/refreshUserToken.js";
import { registerUser } from "./user/registerUser.js";
import { verifyEmail } from "./user/verifyEmail.js";
import { editUser } from "./user/editUser.js";
import { addFollow } from "./user/addFollow.js";
import { unFollow } from "./user/unFollow.js";
import { searchUsers } from "./user/searchUsers.js";
import { forgotPassword } from "./user/forgotPassword.js";

export const UserService = {
  loginUser,
  registerUser,
  verifyEmail,
  refreshUserToken,
  getAllUsers,
  editUser,
  addFollow,
  unFollow,
  searchUsers,
  forgotPassword,
};
//=====================BLOG SERVICE=====================//
import { getAllBlogPosts } from "./posts/getAllBlogPosts.js";
import { createNewBlogPost } from "./posts/createNewBlogPost.js";
import { getAllFromOne } from "./posts/getAllFromOne.js";
import { getBlogPostById } from "./posts/getBlogPostById.js";
import { addLikeToPost } from "./posts/likes/addLikeToPost.js";
import { removeLikeFromPost } from "./posts/likes/removeLikeFromPost.js";
import { savePostForUser } from "./posts/save/savePostForUser.js";
import { removeSavedPost } from "./posts/save/removeSavedPost.js";
import { commentAPost } from "./posts/comments/commentAPost.js";
import { updateBlogPost } from "./posts/updateBlogPost.js";
import { removeCommentFromAPost } from "./posts/comments/removeCommentFromAPost.js";
import { updateComment } from "./posts/comments/updateComment.js";
import { deletePost } from "./posts/deletePost.js";

export const PostService = {
  getAllBlogPosts,
  createNewBlogPost,
  getAllFromOne,
  getBlogPostById,
  updateBlogPost,
  deletePost,
  //======LIKES HANDLER======//
  removeLikeFromPost,
  addLikeToPost,
  //========COMMENTS HANDLER=========//
  commentAPost,
  removeCommentFromAPost,
  updateComment,
  //=========SAVED HADNLER===========//
  savePostForUser,
  removeSavedPost,
};
