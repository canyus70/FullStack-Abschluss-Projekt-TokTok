import { UserService } from "../../service/index.js";

export async function getAllUsersCtrl(_, res) {
  const result = await UserService.getAllUsers();
  res.status(200).json({ success: true, result });
}
