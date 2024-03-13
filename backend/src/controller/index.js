//=====================USER CONTROLLER=====================//
import { getAllUsersCtrl } from "./user/getAllUsersCtrl.js";
import { getUserProfileByIdCtrl } from "./user/getUserProfileByIdCtrl.js";
import { patchVerifyEmailCtrl } from "./user/patchVerifyEmailCtrl.js";
import { postLoginUserCtrl } from "./user/postLoginUserCtrl.js";
import { postLogoutCtrl } from "./user/postLogoutCtrl.js";
import { postRegisterUserCtrl } from "./user/postRegisterUserCtrl.js";
import { refreshTokenCtrl } from "./user/refreshTokenCtrl.js";

export const UserController = {
    postLoginUserCtrl,
    postRegisterUserCtrl,
    patchVerifyEmailCtrl,
    postLogoutCtrl,
    refreshTokenCtrl,
    getUserProfileByIdCtrl,
    getAllUsersCtrl

};
//=====================BLOG POSTS CONTROLLER=====================//
import { getAllBlogPostsCtrl } from "./posts/getAllBlogPostsCtrl.js";
import { createNewBlogPostCtrl } from "./posts/createNewBlogPostCtrl.js";
import { getBlogPostByIdCtrl } from "./posts/getBlogPostByIdCtrl.js";
import { getAllFromOneCtrl } from "./posts/getAllFromOneCtrl.js";



export const PostController = {
    getAllBlogPostsCtrl,
    createNewBlogPostCtrl,
    getBlogPostByIdCtrl,
    getAllFromOneCtrl
}