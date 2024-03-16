import { Link } from "react-router-dom";
import { useState } from "react";

import { ToggleLike, ToggleSaved } from "../toggleButtons/ToggleButtons";
import Comment from "../SVG/Comment.svg";
import Share from "../SVG/Share.svg";

import styles from "./FunctionButtons.module.scss";

const FunctionButtons = ({ transparent, liked, comments, saved }) => {
  const [shared, setShared] = useState(false);

  const copyToClipboard = (e) => {};
  return (
    <div className={styles.functionButtons}>
      <div>
        <ToggleLike />
        <p>{liked}</p>
      </div>
      <div>
        <Link to="/comment">
          <button>
            <img src={Comment} alt="comment" />
          </button>
        </Link>
        <p>{comments}</p>
      </div>

      <div className={transparent && styles.transparent}>
        <ToggleSaved />
        <p>{saved}</p>
      </div>

      <button
        className={transparent && styles.transparent}
        onClick={copyToClipboard}
      >
        <img src={Share} alt="share" />
      </button>
    </div>
  );
};

export default FunctionButtons;
