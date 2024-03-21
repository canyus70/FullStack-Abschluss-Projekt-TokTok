import { Link } from "react-router-dom";

import Avatar from "../avatar/Avatar";
import verified from "../SVG/verified.svg";
import verifiedNot from "../SVG/verifiedNot.svg";
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

      {user.emailVerified ? (
        <img src={verified} alt="verified" />
      ) : (
        <img src={verifiedNot} alt="notVerified" />
      )}
    </div>
  );
};

export default UserConciseInfos;
