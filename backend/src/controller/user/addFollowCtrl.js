import { UserService } from "../../service/index.js";

export async function addFollowCtrl(req, res) {
  try {
    const userFollowId = req.body.userId;
    const authenticatedUserId = req.verifiedUserClaims.sub;
    const result = await UserService.addFollow(
      userFollowId,
      authenticatedUserId
    );
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: true,
      error,
      message: error.message || "Could not add follow",
    });
  }
}
