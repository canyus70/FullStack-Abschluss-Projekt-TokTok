import { catchAsync } from "../../../utils/catchAsync.js";
import { PostService } from "../../../service/index.js";

export const commentAPostCtrl = catchAsync(
    async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const postId = req.params.postId;
        const newComment = req.body;
        const result = await PostService.commentAPost(authenticatedUserId, postId, newComment);
        res.json({ success: true, result });
    }
    , { message: "Failed to comment a post" }
);