import { UserService } from "../../service/index.js";

export async function unFollowCtrl(req, res) {
  try {
    const userFollowId = req.params.userId;
    const authenticatedUserId = req.verifiedUserClaims.sub;
    const result = await UserService.unFollow(
      userFollowId,
      authenticatedUserId
    );
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not unfollow",
    });
  }
}
