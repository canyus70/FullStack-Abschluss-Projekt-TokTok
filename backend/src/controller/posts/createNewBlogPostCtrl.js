import { catchAsync } from "../../utils/catchAsync.js";
import { PostService } from "../../service/index.js";

// export const createNewBlogPostCtrl = catchAsync(
//     async (req, res) => {
//         // const authenticatedUserId = req.verifiedUserClaims.sub;
//         const newPostInfo = req.body;

//         if (req.files) {
//             newPostInfo.images = req.files.filenames;
//         }
//         const result = await PostService.createNewBlogPost(
//             // authenticatedUserId,
//             newPostInfo);
//         res.send(201).res.json({ success: true, result });

//     }, { message: "Failed to get all blog posts" }
// );

export async function createNewBlogPostCtrl(req, res) {
    try {
        // const authenticatedUserId = req.verifiedUserClaims.sub;
        const newPostInfo = req.body;

        if (req.files) {
            newPostInfo.images = req.files.map(file => file.filename);
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