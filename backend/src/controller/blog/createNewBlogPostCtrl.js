import { catchAsync } from "../../utils/catchAsync.js";
import { BlogService } from "../../service/index.js";

export const createNewBlogPostCtrl = catchAsync(
    async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const newPostInfo = req.body;
        const result = await BlogService.createNewBlogPost(authenticatedUserId, newPostInfo);
        res.send(201).res.json({ success: true, result });

    }, { message: "Failed to get all blog posts" }
);