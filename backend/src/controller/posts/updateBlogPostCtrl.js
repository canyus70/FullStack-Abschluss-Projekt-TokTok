import { catchAsync } from "../../utils/catchAsync.js";
import { PostService } from "../../service/index.js";

export const updateBlogPostCtrl = catchAsync(
    async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const postId = req.params.postId;
        const newPostInfo = req.body;

        if (req.files) {
            newPostInfo.images = req.files.map(file => file.path);
        }

        const result = await PostService.updateBlogPost(authenticatedUserId, postId, newPostInfo);
        res.json({ success: true, result });
    },
    { message: "Failed to update blog post" }
);