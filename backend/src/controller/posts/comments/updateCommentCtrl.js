import { catchAsync } from "../../../utils/catchAsync.js";
import { PostService } from "../../../service/index.js";

export const updateCommentCtrl = catchAsync(
    async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const postId = req.params.postId;
        const commentId = req.params.commentId;
        const newPostInfo = req.body;
        const result = await PostService.updateComment(authenticatedUserId, postId, commentId, newPostInfo);
        res.json({ success: true, result });
    },
    { message: "Failed to update post" }
)