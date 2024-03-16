import { catchAsync } from "../utils/catchAsync.js";
import { UserService } from "../service/index.js";

export const getUserProgressCtrl = catchAsync(
    async (req, res) => {
        const userId = req.params.userId;
        const result = await UserService.getUserProgress(userId);
        res.status(200).json({ success: true, result });
    });