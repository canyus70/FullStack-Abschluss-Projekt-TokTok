import { UserService } from "../../service/index.js";

export async function editUserProfileCtrl(req, res) {
  try {
    const authenticatedUserId = req.verifiedUserClaims.sub;
    const userInfo = req.body;

    if (req.file) {
      userInfo.avatar = req.file.path;
    }
    const result = await UserService.editUser(authenticatedUserId, userInfo);
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not edit User",
    });
  }
}
