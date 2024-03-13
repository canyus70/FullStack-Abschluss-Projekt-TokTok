import express from "express";
import { PostController } from "../../controller/index.js";
import upload from "../../middleware/multerConfig.js";
// import { makeJWTAuth } from "../../middleware/makeJwtAuth.js";

const PostRouter = express
    .Router()
    .get("/",
        // makeJWTAuth({ tokenType: "access" }),
        PostController.getAllBlogPostsCtrl)
    .get("/feed/:postId",
        // makeJWTAuth({ tokenType: "access" }),
        PostController.getAllFromOneCtrl)
    .post("/add",
        upload.array('images', 7),
        // makeJWTAuth({ tokenType: "access" }),
        PostController.createNewBlogPostCtrl)
    .post("/:postId/like",
        //     makeJWTAuth({ tokenType: "access" }),
        PostController.addLikeToPostCtrl)
    .delete("/:postId/unlike",
        //     makeJWTAuth({ tokenType: "access" }),
        PostController.removeLikeFromPostCtrl)
    .post("/:postId/saved",
        //     makeJWTAuth({ tokenType: "access" }),
        PostController.savePostCtrl)
    .delete("/:postId/remove-saved",
        //     makeJWTAuth({ tokenType: "access" }),
        PostController.removeSavedPostCtrl)

export default PostRouter;
