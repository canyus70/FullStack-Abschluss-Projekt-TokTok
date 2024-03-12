import express from "express";
import { UserController } from "../../controller/index.js";

const UserRouter = express.Router();

UserRouter.post("/login", UserController.postLoginUserCtrl);
