import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import cors from "cors";
import UserRouter from "./routes/user/UserRouter.js";
import PostRouter from "./routes/posts/postRouter.js";

dotenv.config();

const tenDaysInMs = 10 * 24 * 60 * 60 * 1000;
const isFrontendLocalHost =
  process.env.FRONTEND_URL.startsWith("http://localhost");
const cookieSessionSecret = process.env.COOKIE_SESSION_SECRET;

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 4444;
const app = express();

app.use(cors({ origin: ["https://toktok-nks4.onrender.com"], credentials: true }));
app.set("trusty proxy", 1);
const cookieSessionOptions = {
  name: "session",
  secret: cookieSessionSecret,
  httpOnly: true,
  expires: new Date(Date.now() + tenDaysInMs),
  sameSite: isFrontendLocalHost ? "lax" : "none",
  secure: isFrontendLocalHost ? false : true,
};



app.use(cookieSession(cookieSessionOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/posts", PostRouter);
app.get("/", (_, res) => res.send("it works :)"));
//app.use("/api/v1/comments", PostRouter);
//app.use("/api/v1/activities", PostRouter);

const serverListenertoPort = () =>
  app.listen(PORT, () => console.log("Server is listening at port", PORT));

mongoose
  .connect(MONGODB_URL, { dbName: "FullStack_Abschluss_Projekt_TokTok" })
  .then(() => {
    console.log("Server listening on port", PORT);
    serverListenertoPort();
  })
  .catch((error) => {
    console.log("Error connection to database");
    console.log(error);
    console.log("Server will not start. Aborting...");
    process.exit(1);
  });
