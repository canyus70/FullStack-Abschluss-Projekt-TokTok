import clsx from "clsx";

import Ellipse from "../SVG/Ellipse.svg";
import styles from "./Avatar.module.scss";

const Avatar = ({ avatar, small, large }) => {
  return (
    <div
      className={clsx(
        styles.avatar,
        { [styles.large]: large },
        { [styles.small]: small }
      )}
    >
      {avatar ? (
        <img src={avatar} alt="avatar" />
      ) : (
        <img src={Ellipse} alt="ellipse" />
      )}
    </div>
  );
};

export default Avatar;
