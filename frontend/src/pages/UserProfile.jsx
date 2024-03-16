import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar.jsx";
import Avatar from "../components/avatar/Avatar";

import Post from "../components/SVG/Post.svg";
import MoreSettings from "../components/SVG/MoreSettings.svg";
import Edit from "../components/SVG/Edit.svg";
import Feeds from "../components/SVG/Feeds.svg";
import Logo from "../components/SVG/Logo.svg";
import annie from "../../src/images/annie.jpg";

import styles from "./UserProfile.module.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.jsx";

const UserProfile = () => {
  const [image, setImage] = useState("");
  const [user] = useContext(UserContext);

  console.log(Number(user.blogs?.length));

  return (
    <>
      <main className={styles.userProfilePage}>
        <div className={styles.profileHeader}>
          <Header image={Logo} large title={user.username} />
          <div>
            <Link to="/upload">
              <img src={Post} alt="post" />
            </Link>
            <Link to="/edit-profile">
              <img src={Edit} alt="edit" />
            </Link>

            <img src={MoreSettings} alt="moreSettings" />
          </div>
        </div>
        <div className={styles.infos}>
          <Avatar avatar={image} large />

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
              <h1>{user.blogs ?? 0}</h1>
              <h5>Posts</h5>
            </div>
            <div>
              <h1>{user.followers ?? 0}</h1>
              <h5>Followers</h5>
            </div>
            <div>
              <h1>{user.following ?? 0}</h1>
              <h5>Following</h5>
            </div>
          </div>
        </div>
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
            <div className={styles.image}>
              <img src={annie} alt="annie" />
            </div>
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

export default UserProfile;
