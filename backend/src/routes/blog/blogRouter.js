import express from "express";
import { BlogController } from "../../controller/index.js";
import { makeJWTAuth } from "../../middleware/makeJwtAuth.js";

export const blogRouter = express
    .Router()
    .get("/", BlogController.getAllBlogPostsCtrl)
    .post("/",
        makeJWTAuth({ tokenType: "access" }),
        BlogController.createNewBlogPostCtrl
    );

