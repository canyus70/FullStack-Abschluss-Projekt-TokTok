import { catchAsync } from "../../utils/catchAsync.js";
import { PostService } from "../../service/index.js";

export async function createNewBlogPostCtrl(req, res) {
    try {
        // const authenticatedUserId = req.verifiedUserClaims.sub;
        const newPostInfo = req.body;

        if (req.files) {
            newPostInfo.images = req.files.map(file => file.path);
        }

        const result = await PostService.createNewBlogPost(
            // authenticatedUserId,
            newPostInfo);
        res.status(201).json({ success: true, result });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error,
            message: error.message || "Could not create new blog post",
        });
    }
}