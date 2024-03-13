import { catchAsync } from "../../utils/catchAsync.js";
import { PostService } from "../../service/index.js";

export const savePostCtrl = catchAsync(
    async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const postId = req.params.postId;

        const user = await PostService.savePostForUser(authenticatedUserId, postId);
        res.status(201).json({ success: true, user });
    },
    { message: "Failed to save post" }
);