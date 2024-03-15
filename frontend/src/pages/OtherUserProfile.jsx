import Header from "../components/header/Header.jsx";

import Avatar from "../components/avatar/Avatar.jsx";

import Checked from "../components/SVG/Checked.svg";
import Feeds from "../components/SVG/Feeds.svg";
import Back from "../components/SVG/Back.svg";
import FollowUser from "../components/SVG/FollowUser.svg";
import annie from "../../src/images/annie.jpg";

import styles from "./UserProfile.module.scss";
import Navbar from "../components/navbar/Navbar.jsx";

const OtherUserProfile = () => {
  return (
    <>
      <main className={styles.userProfilePage}>
        <div className={styles.profileHeader}>
          <Header image={Back} title="john_doe" path="/" />
          <img src={Checked} alt="Checked" />
        </div>
        <div className={styles.infos}>
          <Avatar large />
          <div className={styles.personalInfo}>
            <h1>John Doe</h1>
            <h5>UI/UX Designer</h5>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </h5>
            <h5 className={styles.personalWeb}>www.yourdomain.com</h5>
          </div>
          <div className={styles.socialInfo}>
            <div>
              <h1>356</h1>
              <h5>Posts</h5>
            </div>
            <div>
              <h1>46,379</h1>
              <h5>Followers</h5>
            </div>
            <div>
              <h1>318</h1>
              <h5>Following</h5>
            </div>
          </div>
        </div>
        <button className="primaryButton">
          <img src={FollowUser} alt="followUser" /> Follow
        </button>
        <hr />
        <div className={styles.feeds}>
          <div className={styles.title}>
            <img src={Feeds} alt="feeds" />
            <h3>Feeds</h3>
          </div>
          <div className={styles.blogs}>
            <div className={styles.image}>
              <img src={annie} alt="annie" />
            </div>
          </div>
        </div>
      </main>
      <Navbar/>
    </>
  );
};

export default OtherUserProfile;
