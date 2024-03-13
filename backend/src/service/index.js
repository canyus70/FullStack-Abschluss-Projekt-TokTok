import { getAllUsers } from "./user/getAllUsers.js";
import { loginUser } from "./user/loginUser.js";
import { refreshUserToken } from "./user/refreshUserToken.js";
import { registerUser } from "./user/registerUser.js";
import { verifyEmail } from "./user/verifyEmail.js";

export const UserService = {
  loginUser,
  registerUser,
  verifyEmail,
  refreshUserToken,
  getAllUsers,
};
