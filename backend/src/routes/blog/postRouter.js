import express from "express";
import { BlogController } from "../../controller/index.js";
import { makeJWTAuth } from "../../middleware/makeJwtAuth.js";

export const PostRouter = express
    .Router()
    .get("/create", BlogController.getAllBlogPostsCtrl)
    .get("/feed/:postId",
        makeJWTAuth({ tokenType: "access" }),
        BlogController.getAllFromOneCtrl)
    .post("/",
        makeJWTAuth({ tokenType: "access" }),
        BlogController.createNewBlogPostCtrl
    );

