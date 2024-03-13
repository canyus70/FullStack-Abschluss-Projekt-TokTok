import User from "../../models/User.js";

export async function getUserProfileById(targetUserId) {
  const foundUser = await User.findById(targetUserId);
  if (!foundUser) throw new Error("User doesnt exist");
  return {
    userInfo: foundUser.toProfileInfo(),
    // kommen hier objektkammer hin?
  };
}
