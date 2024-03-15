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
import { useState } from "react";

const UserProfile = () => {
  const [image, setImage] = useState("");

  const onSelectPhotos = (event) => {
    if (event.target.files) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <>
      <main className={styles.userProfilePage}>
        <div className={styles.profileHeader}>
          <Header image={Logo} large title="john_doe" />
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
          <div className={styles.uploadAvatar}>
            <Avatar avatar={image} large edit />
            <input type="file" name="avatar" onChange={onSelectPhotos} />
          </div>
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
