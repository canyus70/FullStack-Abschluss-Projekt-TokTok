import express from "express";
import { PostController } from "../../controller/index.js";
import upload from "../../middleware/multerConfig.js";
import { doJwtAuth } from "../../middleware/doJwtAuth.js";

const PostRouter = express
    .Router()
    .get("/", PostController.getAllBlogPostsCtrl)
    .get("/:userId/feed", doJwtAuth, PostController.getAllFromOneCtrl)
    .post(
        "/add",
        upload.array("images", 7),
        doJwtAuth,
        PostController.createNewBlogPostCtrl
    )
    .patch("/:postId", doJwtAuth, PostController.updateBlogPostCtrl)
    .delete("/:postId", doJwtAuth, PostController.deleteBlogPostCtrl)

    .post("/:postId/like", doJwtAuth, PostController.addLikeToPostCtrl)
    .delete("/:postId/unlike", doJwtAuth, PostController.removeLikeFromPostCtrl)

    .post("/:postId/saved", doJwtAuth, PostController.savePostCtrl)
    .delete(
        "/:postId/remove-saved",
        doJwtAuth,
        PostController.removeSavedPostCtrl
    )

    .post("/:postId/comment", doJwtAuth, PostController.commentAPostCtrl)
    .patch(
        "/:postId/comment/:commentId",
        doJwtAuth,
        PostController.updateCommentCtrl
    )
    .delete(
        "/:postId/comment/:commentId",
        doJwtAuth,
        PostController.removeCommentFromPostCtrl
    );



export default PostRouter;
