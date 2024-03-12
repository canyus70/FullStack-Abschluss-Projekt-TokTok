import { UserService } from "../../service/index.js";

export async function postLoginUserCtrl(req, res) {
  try {
    const loginInfo = { email: req.body.email, password: req.body.password };
    const result = await UserService.loginUser(loginInfo);
    req.session.refreshToken = result.tokens.refreshToken;
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not login User",
    });
  }
}
