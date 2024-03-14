import User from "../../models/User.js";

// export async function addFollow(authenticatedUserId, userFollowId) {
//   try {
//     const foundUserFollow = await User.findOne({
//       _id: authenticatedUserId,
//       following: { $in: [userFollowId] },
//     });
//     if (foundUserFollow) throw new Error("You are already follwing this User");

//     const foundUsertobeFollowed = await User.findByIdAndUpdate(
//       { _id: userFollowId },
//       { $push: { followers: authenticatedUserId } }
//     );

//     if (!foundUsertobeFollowed) throw new Error("User doesnt exist");

//     const followingUser = await User.findByIdAndUpdate(
//       { _id: authenticatedUserId },
//       { $push: { following: userFollowId } }
//     );
//     if (!followingUser) throw new Error("not authorized");
//     await foundUsertobeFollowed.save();
//     await followingUser.save();
//     const updatedBeFollowedUser = await User.findById(userFollowId);
//     const updatedFollowingUser = await User.findById(authenticatedUserId);
//     return { updatedBeFollowedUser, updatedFollowingUser };
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       error,
//       message: error.message || "Could not follow",
//     });
//   }
// }

// export async function addFollow(authenticatedUserId, userFollowId) {
//   const foundUserFollow = await User.findOne({
//     _id: authenticatedUserId,
//     following: { $in: [userFollowId] },
//   });
//   if (foundUserFollow) throw new Error("You are already follwing this User");

//   const foundUsertobeFollowed = await User.findByIdAndUpdate(
//     { _id: userFollowId },
//     { $push: { followers: authenticatedUserId } }
//   );

//   if (!foundUsertobeFollowed) throw new Error("User doesnt exist");

//   const followingUser = await User.findByIdAndUpdate(
//     { _id: authenticatedUserId },
//     { $push: { following: userFollowId } }
//   );
//   if (!followingUser) throw new Error("not authorized");
//   await foundUsertobeFollowed.save();
//   await followingUser.save();
//   const updatedBeFollowedUser = await User.findById(userFollowId);
//   const updatedFollowingUser = await User.findById(authenticatedUserId);
//   return { updatedBeFollowedUser, updatedFollowingUser };
// }

export async function addFollow(authenticatedUserId, userFollowId) {
  const foundUserFollow = await User.findOne({
    _id: authenticatedUserId,
    following: { $in: [userFollowId] },
  });
  if (foundUserFollow) throw new Error("You are already following this User");

  const foundUsertobeFollowed = await User.findByIdAndUpdate(
    { _id: userFollowId },
    { $push: { followers: authenticatedUserId } },
    { new: true }
  );

  if (!foundUsertobeFollowed) throw new Error("User doesnt exist");

  const followingUser = await User.findByIdAndUpdate(
    authenticatedUserId,
    { $push: { following: userFollowId } },
    { new: true }
  );
  if (!followingUser) throw new Error("not authorized");

  return { foundUsertobeFollowed, followingUser };
}
