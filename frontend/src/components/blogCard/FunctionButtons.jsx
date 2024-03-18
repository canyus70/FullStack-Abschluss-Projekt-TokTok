import { Link } from "react-router-dom";
import { useState } from "react";

import { ToggleLike, ToggleSaved } from "../toggleButtons/ToggleButtons";
import Comment from "../SVG/Comment.svg";
import Share from "../SVG/Share.svg";

import styles from "./FunctionButtons.module.scss";

const FunctionButtons = ({ transparent, post }) => {
  const [liked, setLiked] = useState(post.likedBy.length);

  if (!post) return;

  //  the count of liked automatic changed
  const onClickLike = (next) => {
    const count = next ? liked + 1 : liked - 1;

    setLiked(count < 0 ? 0 : count);
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
        <ToggleSaved />
        <p>{post.saved?.length ?? 0}</p>
      </div>

      <button className={transparent && styles.transparent}>
        <img src={Share} alt="share" />
      </button>
    </div>
  );
};

export default FunctionButtons;
