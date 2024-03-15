import { UserService } from "../../service";

export async function forgotPasswordCtrl(req, res) {
  try {
    const userId = req.body.userId;
    const result = await UserService.forgotPassword(userId);
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: false,
        error,
        message: error.message || "Could not resend password",
      });
  }
}
