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
        upload.array('images', 2),
        // makeJWTAuth({ tokenType: "access" }),
        PostController.createNewBlogPostCtrl
    );

export default PostRouter;