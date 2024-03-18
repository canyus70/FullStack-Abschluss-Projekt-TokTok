import { catchAsync } from "../../../utils/catchAsync.js";
import { PostService } from "../../../service/index.js";

export const getAllCommentsFromPostCtrl = catchAsync(
    async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const postId = req.params.postId;
        const result = await PostService.getAllCommentsFromPost(authenticatedUserId, postId, commentId);
        res.json({ success: true, result });
    }, { message: "Failed to get all comments from post" }
);