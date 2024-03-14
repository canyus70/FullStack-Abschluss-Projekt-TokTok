import { catchAsync } from "../../../utils/catchAsync.js";
import { PostService } from "../../../service/index.js";

export const removeCommentFromPostCtrl = catchAsync(
    async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const postId = req.params.postId;
        const commentId = req.params.commentId;
        const result = await PostService.removeCommentFromAPost(authenticatedUserId, postId, commentId);
        res.json({ success: true, result });
    },
    { message: "Failed to remove comment from post" }
);