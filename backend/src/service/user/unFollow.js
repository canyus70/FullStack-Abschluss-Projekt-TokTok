import User from "../../models/User.js";

// export async function unFollow(userFollowId, authenticatedUserId) {
//   const foundUserFollow = await User.findOneAndUpdate(
//     { _id: userFollowId },
//     { $pull: { following: authenticatedUserId } },
//     { new: true }
//   );
//   if (!foundUserFollow) throw new Error("User does not exist");

//   const followingUser = await User.findOneAndUpdate(
//     { _id: authenticatedUserId },
//     { $pull: { following: userFollowId } },
//     { new: true }
//   );
//   if (!followingUser) throw new Error("not autorized");
//   return { foundUserFollow, followingUser };
// }

export async function unFollow(userFollowId, authenticatedUserId) {
  const foundBeFollowedUser = await User.findById(userFollowId);
  const foundFollowingUser = await User.findById(authenticatedUserId);

  if (!foundBeFollowedUser) throw new Error("User does not exist");

  if (!foundFollowingUser) throw new Error("not autorized");

  if (
    !foundBeFollowedUser.followers.includes(authenticatedUserId) ||
    !foundFollowingUser.following.includes(userFollowId)
  )
    throw new Error("User is not followed by you");

  await foundBeFollowedUser.followers.pull(authenticatedUserId);

  await foundFollowingUser.following.pull(userFollowId);

  await foundBeFollowedUser.save();
  await foundFollowingUser.save();

  return { foundBeFollowedUser, foundFollowingUser };
}
