import { catchAsync } from "../../utils/catchAsync.js";
import { PostService } from "../../service/index.js";


export const getAllFromOneCtrl =
    catchAsync(async (req, res) => {
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const result = await PostService.getAllFromOne(authenticatedUserId);
        res.json({ success: true, result });
    },
        { message: "Failed to get Feed" }
    );