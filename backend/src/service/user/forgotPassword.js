export async function forgotPassword(userId) {
  const user = await findById(userId);
  if (!user) throw new Error("User not found");
  await sen;
}
