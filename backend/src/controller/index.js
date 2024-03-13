import { getAllUsersCtrl } from "./user/getAllUsersCtrl.js";
import { getUserProfileByIdCtrl } from "./user/getUserProfileByIdCtrl.js";
import { patchVerifyEmailCtrl } from "./user/patchVerifyEmailCtrl.js";
import { postLoginUserCtrl } from "./user/postLoginUserCtrl.js";
import { postLogoutCtrl } from "./user/postLogoutCtrl.js";
import { postRegisterUserCtrl } from "./user/postRegisterUserCtrl.js";
import { refreshTokenCtrl } from "./user/refreshTokenCtrl.js";

export const UserController = {
  postLoginUserCtrl,
  postRegisterUserCtrl,
  patchVerifyEmailCtrl,
  postLogoutCtrl,
  refreshTokenCtrl,
  getAllUsersCtrl,
  getUserProfileByIdCtrl,
};
