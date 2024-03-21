import User from "../../models/User.js";
import { catchAsync } from "../../utils/catchAsync.js";

export const getUserProfileByIdCtrl = catchAsync(
  async (req, res) => {
    const targetUserId = req.params.userId;
    const foundUser = await User.findById(targetUserId)
      .populate("blogs")
      .populate("saved")
      .populate("likes")
      .populate("following")
      .populate("followers");
    if (foundUser.length > 0) throw new Error("User doesnt exist");
    const userInfo = {
      userInfo: foundUser.toProfileInfo(),
    };
    res.json(userInfo);
  },
  { message: "Could not find User" }
);
