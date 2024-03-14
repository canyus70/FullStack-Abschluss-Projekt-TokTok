import User from "../../models/User.js";

export async function unFollow(userFollowId, authenticatedUserId) {
  const foundUserFollow = await User.findOneAndUpdate(
    { _id: userFollowId },
    { $pull: { following: authenticatedUserId } },
    { new: true }
  );
  if (!foundUserFollow) throw new Error("User does not exist");

  const followingUser = await User.findOneAndUpdate(
    { _id: authenticatedUserId },
    { $pull: { following: userFollowId } },
    { new: true }
  );
  if (!followingUser) throw new Error("not autorized");
  return { foundUserFollow, followingUser };
}
