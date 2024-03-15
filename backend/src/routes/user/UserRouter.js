import express from "express";
import { UserController } from "../../controller/index.js";
import { doJwtAuth } from "../../middleware/doJwtAuth.js";

const UserRouter = express.Router();

UserRouter.post("/register", UserController.postRegisterUserCtrl);
UserRouter.patch("/verify-email", UserController.patchVerifyEmailCtrl);
UserRouter.post("/login", UserController.postLoginUserCtrl);

UserRouter.post("/logout", doJwtAuth, UserController.postLogoutCtrl);

UserRouter.get("/", UserController.getAllUsersCtrl);

UserRouter.patch("/refresh-token", doJwtAuth, UserController.refreshTokenCtrl);
UserRouter.get(
  "/:userId/profile",
  doJwtAuth,
  UserController.getUserProfileByIdCtrl
);
UserRouter.patch(
  "/:userId/profile",
  doJwtAuth,
  UserController.editUserProfileCtrl
);
UserRouter.post("/:userId/add-follow", doJwtAuth, UserController.addFollowCtrl);
UserRouter.post("/:userId/not-follow", doJwtAuth, UserController.unFollowCtrl);
UserRouter.get("/search-users", UserController.searchUserCtrl);
UserRouter.post("/resend-password", UserController.forgotPasswordCtrl);

export default UserRouter;
