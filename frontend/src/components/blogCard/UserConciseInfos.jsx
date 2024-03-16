import { Link } from "react-router-dom";

import Avatar from "../avatar/Avatar";
import Checked from "../SVG/Checked.svg";
import styles from "./UserConciseInfos.module.scss";

const UserConciseInfos = ({ avatar, name, profession }) => {
  return (
    <div className={styles.userConciseInfo}>
      <div className={styles.userInfo}>
        <Link to="/:userId/other-user-profile">
          <Avatar avatar={avatar} small />
        </Link>
        <div>
          <h3>{name}</h3>
          <h4>{profession}</h4>
        </div>
      </div>
      <img src={Checked} alt="checked" />
    </div>
  );
};

export default UserConciseInfos;
