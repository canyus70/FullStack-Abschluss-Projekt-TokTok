import { catchAsync } from "../../../utils/catchAsync.js";
import { PostService } from "../../../service/index.js";

export const addLikeToPostCtrl = catchAsync(
    async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const postId = req.params.postId;
        const result = await PostService.addLikeToPost(authenticatedUserId, postId);
        res.json({ success: true, result });
    },
    { message: "Failed to add like to post" }
)