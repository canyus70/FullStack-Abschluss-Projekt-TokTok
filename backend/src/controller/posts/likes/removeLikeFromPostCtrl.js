import { catchAsync } from "../../../utils/catchAsync.js";
import { PostService } from "../../../service/index.js";

export const removeLikeFromPostCtrl = catchAsync(
    async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const postId = req.params.postId;
        const result = await PostService.removeLikeFromPost(authenticatedUserId, postId);
        res.json({ success: true, result });
    },
    { message: "Failed to remove like from post" }
)