//=====================BLOG CONTROLLER=====================//
import { getAllBlogPostsCtrl } from "./blog/getAllBlogPostsCtrl.js";
import { createNewBlogPostCtrl } from "./blog/createNewBlogPostCtrl.js";
import { getBlogPostByIdCtrl } from "./blog/getBlogPostByIdCtrl.js";
import { getAllFromOneCtrl } from "./blog/getAllFromOneCtrl.js";



export const BlogController = {
    getAllBlogPostsCtrl,
    createNewBlogPostCtrl,
    getBlogPostByIdCtrl,
    getAllFromOneCtrl
}