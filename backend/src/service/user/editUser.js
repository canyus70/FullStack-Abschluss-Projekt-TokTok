import User from "../../models/User.js";

export async function editUser(authenticatedUserId, userInfo) {
  const updatedUser = await User.findByIdAndUpdate(
    authenticatedUserId,
    userInfo,
    { new: true }
  );
  return updatedUser;
}
