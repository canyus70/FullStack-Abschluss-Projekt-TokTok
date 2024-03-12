import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

export function createToken(user, tokenType = "access") {
  const expiresIn =
    {
      access: "60min",
      refresh: "12d",
    }[tokenType] || "10min";

  const tokenPayload = { sub: user._id.toString(), type: tokenType };
  const options = { algorithm: "HS256", expiresIn };
  const tokenString = jwt.sign(tokenPayload, jwtSecret, options);
  return tokenString;
}
