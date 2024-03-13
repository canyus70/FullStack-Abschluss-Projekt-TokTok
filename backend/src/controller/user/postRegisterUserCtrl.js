import { UserService } from "../../service/index.js";

export async function postRegisterUserCtrl(req, res) {
  try {
    const result = await UserService.registerUser(req.body);
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: true,
        error,
        message: error.message || "Could not register User",
      });
  }
}
