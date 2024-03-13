import User from "../../models/User.js";
import { createToken } from "../../utils/jwt.js";

export async function refreshUserToken(authenticatedUserId) {
  const user = await User.findById(authenticatedUserId);
  if (!user) throw new Error("User not found");
  const accessToken = createToken(user, "access");
  return { accessToken };
}
