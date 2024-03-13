//=====================BLOG SERVICE=====================//
import { getAllBlogPosts } from "./blog/getAllBlogPosts.js";
import { createNewBlogPost } from "./blog/createNewBlogPost.js";
import { getAllFromOne } from "./blog/getAllFromOne.js";
import { getBlogPostById } from "./blog/getBlogPostById.js";

export const PostService = {
    getAllBlogPosts,
    createNewBlogPost,
    getAllFromOne,
    getBlogPostById
}