import User from "../../models/User.js";

export async function getAllUsers() {
  const allUsers = await User.find();
  return allUsers;
}
