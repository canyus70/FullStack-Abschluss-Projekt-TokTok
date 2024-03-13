import { catchAsync } from "../../utils/catchAsync.js";
import { PostService } from "../../service/index.js";

export const getAllBlogPostsCtrl = catchAsync(
    async (req, res) => {
        const result = await PostService.getAllBlogPosts();
        res.json({ success: true, result });
    }, { message: "Failed to get all blog posts" }
);