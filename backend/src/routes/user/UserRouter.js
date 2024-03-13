import express from "express";
import { UserController } from "../../controller/index.js";
import { doJwtAuth } from "../../middleware/doJwtAuth.js";

const UserRouter = express.Router();

UserRouter.post("/register", UserController.postRegisterUserCtrl);
UserRouter.patch("/verify-email", UserController.patchVerifyEmailCtrl);
UserRouter.post("/login", UserController.postLoginUserCtrl);
UserRouter.post("/logout", doJwtAuth, UserController.postLogoutCtrl);
UserRouter.patch("/refresh-token", doJwtAuth, UserController.refreshTokenCtrl);
UserRouter.get("/", UserController.getAllUsersCtrl);

// userRouter.get("/:userId/profile", doJwtAuth,UserController.getUserProfileCtrl);
// userRouter.patch("/:userId/profile", doJwtAuth,UserController.editUserProfileCtrl);
// userRouter.post("/:userId/add-follow", doJwtAuth,UserController.addFollowCtrl);
// userRouter.post("/:userId/not-follow", doJwtAuth,UserController.removeFollowCtrl);

export default UserRouter;
