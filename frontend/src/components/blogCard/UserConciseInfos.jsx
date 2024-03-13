import Avatar from "../avatar/Avatar";
import MoreSettings from "../SVG/MoreSettings.svg";
import styles from "./UserConciseInfos.module.scss";

const UserConciseInfos = () => {
  return (
    <div className={styles.userConciseInfo}>
      <div className={styles.userInfo}>
        <Avatar small />
        <div>
          <h3>annie_wilson</h3>
          <p>Marketing Coordinator</p>
        </div>
      </div>
      <button>
        <img src={MoreSettings} alt="moreSettings" />
      </button>
    </div>
  );
};

export default UserConciseInfos;
