import User from "../../models/User.js";

export async function searchUsers(query) {
  try {
    const searchedUsers = await User.find({
      $or: [
        { firstname: { $regex: query, $options: "i" } },
        { lastname: { $regex: query, $options: "i" } },
        { username: { $regex: query, $options: "i" } },
      ],
    });

    return searchedUsers;
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;
  }
}
