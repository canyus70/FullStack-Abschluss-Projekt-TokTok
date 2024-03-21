import User from "../../models/User.js";

export async function addFollow(authenticatedUserId, userFollowId) {
  const foundUserFollow = await User.findById(authenticatedUserId);

  const foundUserToBeFollowed = await User.findById(userFollowId);

  if (!foundUserToBeFollowed) throw new Error("User doesnt exist");

  if (!foundUserFollow) throw new Error("not authorized");

  if (
    foundUserFollow.following.includes(userFollowId) ||
    foundUserToBeFollowed.followers.includes(authenticatedUserId)
  )
    throw new Error("You are already following this User");

  foundUserFollow.following.push(userFollowId);

  foundUserToBeFollowed.followers.push(authenticatedUserId);

  await foundUserFollow.save();
  await foundUserToBeFollowed.save();

  return { foundUserFollow, foundUserToBeFollowed };
}
