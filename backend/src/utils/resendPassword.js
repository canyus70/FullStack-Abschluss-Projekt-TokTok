import { sendEmail } from "./sendEmail.js";

export async function resendPassword(user, tempPassword) {
  return sendEmail({
    to: user.email,
    subject: "Clever, you forgot your Password",
    text: `Hello ${user.firstname},
    you are obviously too stupid to remember a password. Luckily this service exists.
    Here is your new password ${tempPassword}.
    Please login using this temporary password and change it immediately.
    Yours,
    TokTok-Team`,
  });
}
