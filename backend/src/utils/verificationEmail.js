import { sendEmail } from "./sendEmail.js";

export async function sendVerificationEmail(user) {
  return sendEmail({
    to: user.email,
    subject: "Please verify your account",
    text: `Hello ${user.firstname},
    welcome to the hell. I dont know how you got here but you are now fucked.
    Please verify your account by entering this 6 digit code: ${user.sixDigitCode}
    Yours,
    TokTok-Team`,
  });
}
