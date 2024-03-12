import { catchAsync } from "../../utils/catchAsync.js";
import { BlogService } from "../../service/index.js";


export const getAllPostFromOneUserCtrl =
    catchAsync(async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const result = await BlogService.getAllPostFromOneUSer(authenticatedUserId);
        res.json({ success: true, result });
    },
        { message: "Failed to get all blog posts" }
    );