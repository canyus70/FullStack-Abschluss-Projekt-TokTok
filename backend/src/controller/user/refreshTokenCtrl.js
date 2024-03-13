import { UserService } from "../../service/index.js";

export async function refreshTokenCtrl(req, res) {
  try {
    const authenticatedUserId = req.verifiedUserClaims.sub;
    const result = await UserService.refreshUserToken(authenticatedUserId);
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not refresh Token",
    });
  }
}
