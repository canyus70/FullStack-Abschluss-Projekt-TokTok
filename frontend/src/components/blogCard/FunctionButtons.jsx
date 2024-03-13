import Comment from "../SVG/Comment.svg";
import Saved from "../SVG/Saved.svg";
import Share from "../SVG/Share.svg";
import styles from "./FunctionButtons.module.scss";
import { ToggleLike, ToggleSaved } from "../toggleButtons/ToggleButtons";

const FunctionButtons = () => {
  return (
    <div className={styles.functionButtons}>
      <div>
        <ToggleLike />
        <p>20</p>
      </div>
      <div>
        <button>
          <img src={Comment} alt="comment" />
        </button>
        <p>20</p>
      </div>
      <div>
        <ToggleSaved />
        <p>20</p>
      </div>
      <button>
        <img src={Share} alt="share" />
      </button>
    </div>
  );
};

export default FunctionButtons;
