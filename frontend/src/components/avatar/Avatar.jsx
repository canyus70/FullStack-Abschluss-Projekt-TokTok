import clsx from "clsx";
import { Link } from "react-router-dom";

import Ellipse from "../SVG/Ellipse.svg";
import styles from "./Avatar.module.scss";
import EditRed from "../SVG/EditRed.svg";

const Avatar = ({ avatar, small, large, edit, path }) => {
  return (
    <div
      className={clsx(
        styles.avatar,
        { [styles.large]: large },
        { [styles.small]: small }
      )}
    >
      {avatar ? (
        <img src={avatar} alt="avatar" className={styles.avatarShow} />
      ) : (
        <img src={Ellipse} alt="ellipse" />
      )}

      {edit && (
        <Link to={path}>
          <img src={EditRed} alt="edit" className={styles.edit} />
        </Link>
      )}
    </div>
  );
};

export default Avatar;
