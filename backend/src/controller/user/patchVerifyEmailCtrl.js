import { UserService } from "../../service/index.js";

export async function patchVerifyEmailCtrl(req, res) {
  try {
    console.log(req.body);
    const result = await UserService.verifyEmail(req.body);
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not verify User",
    });
  }
}
