import { useParams } from "react-router-dom";
import Header from "../components/header/Header.jsx";

import Avatar from "../components/avatar/Avatar.jsx";

import Checked from "../components/SVG/Checked.svg";
import Feeds from "../components/SVG/Feeds.svg";
import Back from "../components/SVG/Back.svg";
import FollowUser from "../components/SVG/FollowUser.svg";
import annie from "../../src/images/annie.jpg";

import styles from "./UserProfile.module.scss";
import Navbar from "../components/navbar/Navbar.jsx";
import { useContext, useEffect, useState } from "react";
import AuthorizationContext from "../contexts/AuthorizationContext.jsx";
import fetchUser from "../services/fetchUser.js";

const OtherUserProfile = () => {
  const { userId } = useParams();
  const [accessToken] = useContext(AuthorizationContext);

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (!accessToken) return;

    fetchUser(userId, setUser, accessToken);
  }, [userId, setUser, accessToken]);

  if (!user) return null;

  return (
    <>
      <main className={styles.userProfilePage}>
        <div className={styles.profileHeader}>
          <Header image={Back} title={user.username} path="/" />
          <img src={Checked} alt="Checked" />
        </div>
        <div className={styles.infos}>
          <Avatar large />
          <div className={styles.personalInfo}>
            <h1>
              {user.firstname} {user.lastname}
            </h1>
            <h5>{user.profession}</h5>
            <h5>{user.bio}</h5>
            <h5 className={styles.personalWeb}>{user.website}</h5>
          </div>
          <div className={styles.socialInfo}>
            <div>
              <h1>{user.blogs?.length ?? 0}</h1>
              <h5>Posts</h5>
            </div>
            <div>
              <h1>{user.followers?.length ?? 0}</h1>
              <h5>Followers</h5>
            </div>
            <div>
              <h1>{user.follows?.length ?? 0}</h1>
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
      <Navbar />
    </>
  );
};

export default OtherUserProfile;
