import { catchAsync } from "../../utils/catchAsync.js";
import { PostService } from "../../service/index.js";

export const getBlogPostsByIdCtrl = catchAsync(
    async (req, res) => {
        const postId = req.params.postId;
        const result = await PostService.getBlogPostById(postId);
        res.json({ success: true, result });
    },
    { message: "Failed to get all blog posts" }
);