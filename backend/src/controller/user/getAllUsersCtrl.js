import { UserService } from "../../service/index.js";
import { catchAsync } from "../../utils/catchAsync.js";

export const getAllUsersCtrl = catchAsync
  (async (req, res) => {
    const userId = req.params.userId;
    const result = await UserService.getAllUsers(userId);
    res.status(200).json({ success: true, result });
  },
    { message: "Failed to get User" }
  );