import { catchAsync } from "../../utils/catchAsync.js";
import { BlogService } from "../../service/index.js";

export const geBlogPostsByIdCtrl = catchAsync(
    async (req, res) => {
        const blogId = req.params.blogId;
        const result = await BlogService.getBlogPostsById(blogId);
        res.json({ success: true, result });
    },
    { message: "Failed to get all blog posts" }
);