import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { ToggleLike, ToggleSaved } from "../toggleButtons/ToggleButtons";
import Comment from "../SVG/Comment.svg";
import Share from "../SVG/Share.svg";

import styles from "./FunctionButtons.module.scss";

const FunctionButtons = ({ transparent, post }) => {
  const [copied, setCopied] = useState(false);



  if (!post) return null;


  const copyToClipboard = () => {
    const url = `${document.location.origin}/${post?._id}/comment`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        console.log("Copy error");
      });
  };

  useEffect(() => {
    if (copied) {
      const button = document.getElementById("copyButton");
      button.classList.add("copied");
      setTimeout(() => {
        button.classList.remove("copied");
        setCopied(false);
      }, 1000);
    }
  }, [copied]);

  return (
    <div className={styles.functionButtons}>
      <ToggleLike post={post} />

      <div>
        <Link to={`/${post._id}/comment`}>
          <button>
            <img src={Comment} alt="comment" />
          </button>
        </Link>
        <p>{post.comments.length}</p>
      </div>

      <ToggleSaved post={post} />

      <button
        className={`${transparent && styles.transparent} ${
          copied && styles.copied
        }`}
        onClick={copyToClipboard}
        id="copyButton"
      >
        <img src={Share} alt="share" />
      </button>
    </div>
  );
};

export default FunctionButtons;
