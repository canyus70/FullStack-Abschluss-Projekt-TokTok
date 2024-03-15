import { UserService } from "../../service/index.js";

export async function forgotPasswordCtrl(req, res) {
  try {
    const email = req.body.email;
    const result = await UserService.forgotPassword(email);
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not resend password",
    });
  }
}
