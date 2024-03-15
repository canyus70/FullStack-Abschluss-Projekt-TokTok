import { catchAsync } from "../../utils/catchAsync.js";
import { PostService } from "../../service/index.js";

export const deleteBlogPostCtrl = catchAsync(
    async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const postId = req.params.postId;
        const result = await PostService.deletePost(authenticatedUserId, postId);
        res.json({ success: true, result });
    },
    { message: "Failed to delete post" }
);