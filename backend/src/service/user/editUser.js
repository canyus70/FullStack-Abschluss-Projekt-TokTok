import User from "../../models/User.js";

// export async function editUser(authenticatedUserId, userInfo) {
//   const foundUser = await User.findById(authenticatedUserId);
//   if (!foundUser) throw new Error("User not found");

//   foundUser.set(userInfo.userInfo);
//   await foundUser.save();
//   return foundUser.toProfileInfo();
// }

export async function editUser(authenticatedUserId, userInfo) {
  const updatedUser = await User.findByIdAndUpdate(
    authenticatedUserId,
    userInfo,
    { new: true }
  );
  return updatedUser;
}
