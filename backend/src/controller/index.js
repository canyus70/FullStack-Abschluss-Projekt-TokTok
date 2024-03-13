//=====================User CONTROLLER=====================//

import { getAllUsersCtrl } from "./user/getAllUsersCtrl.js";
import { getUserProfileByIdCtrl } from "./user/getUserProfileByIdCtrl.js";
import { patchVerifyEmailCtrl } from "./user/patchVerifyEmailCtrl.js";
import { postLoginUserCtrl } from "./user/postLoginUserCtrl.js";
import { postLogoutCtrl } from "./user/postLogoutCtrl.js";
import { postRegisterUserCtrl } from "./user/postRegisterUserCtrl.js";
import { refreshTokenCtrl } from "./user/refreshTokenCtrl.js";
import { editUserProfileCtrl } from "./user/editUserProfileCtrl.js";
import { addFollowCtrl } from "./user/addFollowCtrl.js";
import { unFollowCtrl } from "./user/unFollowCtrl.js";

export const UserController = {
  postLoginUserCtrl,
  postRegisterUserCtrl,
  patchVerifyEmailCtrl,
  postLogoutCtrl,
  refreshTokenCtrl,
  getAllUsersCtrl,
  getUserProfileByIdCtrl,
  editUserProfileCtrl,
  addFollowCtrl,
  unFollowCtrl,
};
//=====================BLOG CONTROLLER=====================//
import { getAllBlogPostsCtrl } from "./blog/getAllBlogPostsCtrl.js";
import { createNewBlogPostCtrl } from "./blog/createNewBlogPostCtrl.js";
import { getBlogPostByIdCtrl } from "./blog/getBlogPostByIdCtrl.js";
import { getAllFromOneCtrl } from "./blog/getAllFromOneCtrl.js";

export const BlogController = {
  getAllBlogPostsCtrl,
  createNewBlogPostCtrl,
  getBlogPostByIdCtrl,
  getAllFromOneCtrl,
};
