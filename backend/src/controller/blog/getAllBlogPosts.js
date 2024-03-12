import { catchAsync } from "../../utils/catchAsync.js";
import { BlogService } from "../../service/index.js";

export const getAllBlogPostsCtrl = catchAsync(
    async (req, res) => {
        const result = await BlogService.getAllBlogPosts();
        res.json({ success: true, result });
    }, { message: "Failed to get all blog posts" }
);