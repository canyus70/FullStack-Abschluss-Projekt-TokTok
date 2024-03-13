import User from "../../models/User.js";
import { sendVerificationEmail } from "../../utils/verificationEmail.js";

export async function registerUser({
  firstname,
  lastname,
  username,
  email,
  password,
  birthday,
}) {
  const foundUser = await User.findByEmail(email);
  if (foundUser) throw new Error("User with this Email already exist");
  const user = await User.create({
    firstname,
    lastname,
    username,
    email,
    password,
    birthday,
  });
  await sendVerificationEmail(user);
  return user.toProfileInfo();
}
