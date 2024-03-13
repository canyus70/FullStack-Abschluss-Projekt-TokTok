import User from "../../models/User.js";

export async function getUserProfileByIdCtrl(req, res) {
  try {
    const targetUserId = req.params.userId;
    const foundUser = await User.findById(targetUserId);
    if (!foundUser) throw new Error("User doesnt exist");
    const userInfo = {
      userInfo: foundUser.toProfileInfo(),
    };
    res.json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: true,
      error,
      message: error.message || "Could not find User",
    });
  }
}
