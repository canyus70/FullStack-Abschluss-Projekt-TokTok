import User from "../../models/User.js";
import { generateRandomPassword } from "../../utils/generateRandomPassword.js";
import { resendPassword } from "../../utils/resendPassword.js";
import bcrypt from "bcrypt";

export async function forgotPassword(email) {
  const user = await User.findByEmail(email);
  if (!user) throw new Error("User not found");
  const tempPassword = generateRandomPassword();
  // const hashedPassword = await bcrypt.hash(tempPassword, 10);
  //user.password = hashedPassword;
  user.password = tempPassword;
  await user.save();

  await resendPassword(user, tempPassword);
  return user.toProfileInfo();
}
