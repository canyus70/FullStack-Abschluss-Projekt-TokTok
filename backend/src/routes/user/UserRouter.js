import express from "express";
import { UserController } from "../../controller/index.js";
import { doJwtAuth } from "../../middleware/doJwtAuth.js";

const UserRouter = express.Router();

UserRouter.post("/register", UserController.postRegisterUserCtrl);
UserRouter.patch("/verify-email", UserController.patchVerifyEmailCtrl);
UserRouter.post("/login", UserController.postLoginUserCtrl);
UserRouter.post("/logout", doJwtAuth, UserController.postLogoutCtrl);
UserRouter.patch("/refresh-token", doJwtAuth, UserController.refreshTokenCtrl);
UserRouter.get("/", UserController.getAllUsersCtrl); // userRouter.get("/:userId/profile", doJwtAuth,UserController.getUserProfileCtrl);
UserRouter.patch(
  "/:userId/profile",
  doJwtAuth,
  UserController.editUserProfileCtrl
);
UserRouter.post("/:userId/add-follow", doJwtAuth, UserController.addFollowCtrl);
UserRouter.post("/:userId/not-follow", doJwtAuth, UserController.unFollowCtrl);

// UserRouter.post("/:postId/like",doJwtAuth, userController.addLikeBlogCtrl);
// UserRouter.post("/:postId/dislike",doJwtAuth, userController.removeLikeBlogCtrl);
// UserRouter.post("/:postId/saved",doJwtAuth, userController.addSavedBlogCtrl);
// UserRouter.post("/:postId/remove-saved",doJwtAuth, userController.removeSavedBlogCtrl);

export default UserRouter;
