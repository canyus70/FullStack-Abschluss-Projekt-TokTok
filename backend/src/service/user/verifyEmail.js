import User from "../../models/User.js";

export async function verifyEmail({ sixDigitCode, userId }) {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");
  if (user.sixDigitCode !== sixDigitCode) throw new Error("Wrong sixDigitCode");
  (user.emailVerified = true), await user.save();
  return user.toProfileInfo();
}
