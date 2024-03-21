import express from "express";
import { PostController } from "../../controller/index.js";
import upload from "../../middleware/multerConfig.js";
import { doJwtAuth } from "../../middleware/doJwtAuth.js";
import { PostService } from "../../service/index.js";

const PostRouter = express
  .Router()
  .get("/", PostController.getAllBlogPostsCtrl)
  .get("/:userId/feed", doJwtAuth, PostController.getAllFromOneCtrl)
  .get("/:postId", doJwtAuth, PostController.getBlogPostByIdCtrl)
  .post(
    "/add",
    upload.array("images", 7),
    doJwtAuth,
    PostController.createNewBlogPostCtrl
  )

  .post(
    "/:postId",
    upload.array("images", 7),
    doJwtAuth,
    PostController.updateBlogPostCtrl
  )

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

  .get("/:postId/comments", doJwtAuth, PostController.getAllCommentsForPostCtrl)

  .post(
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
