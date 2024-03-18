import { Link } from "react-router-dom";

import Avatar from "../avatar/Avatar";
import Checked from "../SVG/Checked.svg";
import styles from "./UserConciseInfos.module.scss";

const UserConciseInfos = ({ post }) => {
  if (!post) return;
  console.log(post);

  console.log(post.author?.username);

  return (
    <div className={styles.userConciseInfo}>
      <div className={styles.userInfo}>
        <Link to={`/${post.author?._id}/other-user-profile`}>
          <Avatar avatar={post.author?.avatar} small />
        </Link>
        <div>
          <h3>{post.author?.username ?? "undefined"}</h3>
          <h4>{post.author?.profession ?? "undefined"}</h4>
        </div>
      </div>
      <img src={Checked} alt="checked" />
    </div>
  );
};

export default UserConciseInfos;
