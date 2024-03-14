import { UserService } from "../../service/index.js";

export async function searchUserCtrl(req, res) {
  try {
    const { query } = req.body;
    const result = await UserService.searchUsers(query);
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: false,
        error,
        message: error.message || "Could not find User",
      });
  }
}
