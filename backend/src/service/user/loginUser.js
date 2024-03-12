import User from "../../models/User.js";
import { createToken } from "../../utils/jwt.js";
import bcrypt from "bcrypt";

export async function loginUser({ email, password }) {
  const foundUser = await User.findOne({ email });
  if (!foundUser) throw new Error("User doesnt exist");
  if (!foundUser.emailVerified) throw new Error("User not yet verified");
  const correctPassword = await bcrypt.compare(password, foundUser.password);
  if (!correctPassword) throw new Error("Wrong Password");
  const accessToken = createToken(foundUser, "access");
  const refreshToken = createToken(foundUser, "refresh");
  return {
    user: foundUser.toProfileInfo(),
    tokens: { accessToken, refreshToken },
  };
}
