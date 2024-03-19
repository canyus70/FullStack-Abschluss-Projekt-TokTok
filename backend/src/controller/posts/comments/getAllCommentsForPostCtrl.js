import { PostService } from "../../../service/index.js";
import { catchAsync } from "../../../utils/catchAsync.js";

// added by Runhong
export const getAllCommentsForPostCtrl = catchAsync(
  async (req, res) => {
    const postId = req.params.postId;
    const result = await PostService.getAllCommentsForPost(postId);
    res.json({ success: true, result });
  },
  { message: "Failed to get all comments from post" }
);
