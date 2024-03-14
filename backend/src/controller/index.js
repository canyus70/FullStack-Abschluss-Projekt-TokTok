//=====================USER CONTROLLER=====================//

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
import { searchUserCtrl } from "./user/searchUserCtrl.js";

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
  searchUserCtrl,

};
//=====================BLOG POSTS CONTROLLER=====================//
import { getAllBlogPostsCtrl } from "./posts/getAllBlogPostsCtrl.js";
import { createNewBlogPostCtrl } from "./posts/createNewBlogPostCtrl.js";
import { getBlogPostByIdCtrl } from "./posts/getBlogPostByIdCtrl.js";
import { getAllFromOneCtrl } from "./posts/getAllFromOneCtrl.js";
import { addLikeToPostCtrl } from "./posts/likes/addLikeToPostCtrl.js";
import { removeLikeFromPostCtrl } from "./posts/likes/removeLikeFromPostCtrl.js";
import { savePostCtrl } from "./posts/savePostCtrl.js";
import { removeSavedPostCtrl } from "./posts/removeSavedPostCtrl.js";

export const PostController = {

    getAllBlogPostsCtrl,
    createNewBlogPostCtrl,
    getBlogPostByIdCtrl,
    getAllFromOneCtrl,
    savePostCtrl,
    removeSavedPostCtrl,
    //==========LIKES HANDLER==========//
    addLikeToPostCtrl,
    removeLikeFromPostCtrl
}


