import { Link } from "react-router-dom";
import { useState } from "react";

import { ToggleLike, ToggleSaved } from "../toggleButtons/ToggleButtons";
import Comment from "../SVG/Comment.svg";
import Share from "../SVG/Share.svg";

import styles from "./FunctionButtons.module.scss";

const FunctionButtons = ({ transparent, post }) => {
  if (!post) return;
  const [liked, setLiked] = useState(post.likedBy?.length);

  //  the count of liked automatic changed
  const onClickLike = (next) => {
    const count = next ? liked + 1 : liked - 1;

    setLiked(count < 0 ? 0 : count);
  };

  if (!post) return;
  const [saved, setSaved] = useState(post.savedBy?.length);

  //  the count of saved automatic changed
  const onClickSaved = (next) => {
    const count = next ? saved + 1 : saved - 1;

    setSaved(count < 0 ? 0 : count);
  };

  const [shareLink, setShareLink] = useState("");

  const getShareLink = async () => {
    try {
      const response = await fetch(`/api/v1/posts/${post._id}/share`);
      if (!response.ok) {
        throw new Error("Failed to fetch share link");
      }
      const result = await response.json();
      console.log(result);
      const shareLink = result.result;
      setShareLink(shareLink);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.functionButtons}>
      <div>
        <ToggleLike onClick={onClickLike} postId={post._id} />
        <p>{liked}</p>
      </div>
      <div>
        <Link to={`/${post._id}/comment`}>
          <button>
            <img src={Comment} alt="comment" />
          </button>
        </Link>
        <p>{post.comments.length}</p>
      </div>

      <div className={transparent && styles.transparent}>
        <ToggleSaved onClick={onClickSaved} postId={post._id} />
        {/* <p>{post.saved?.length ?? 0}</p> */}
        <p>{saved}</p>
      </div>

      <button className={transparent && styles.transparent}>
        <img src={Share} alt="share" />
      </button>
    </div>
  );
};

export default FunctionButtons;
