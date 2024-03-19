import { Link } from "react-router-dom";

import Avatar from "../avatar/Avatar";
import Checked from "../SVG/Checked.svg";
import styles from "./UserConciseInfos.module.scss";

const UserConciseInfos = ({ user }) => {
  if (!user) return;

  return (
    <div className={styles.userConciseInfo}>
      <div className={styles.userInfo}>
        <Link to={`/${user._id}/other-user-profile`}>
          <Avatar avatar={user.avatar} small />
        </Link>
        <div>
          <h3>{user.username}</h3>
          <h4>{user.profession}</h4>
        </div>
      </div>
      <img src={Checked} alt="checked" />
    </div>
  );
};

export default UserConciseInfos;
