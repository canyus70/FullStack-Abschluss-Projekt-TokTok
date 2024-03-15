import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Avatar from "../components/avatar/Avatar";
import SwitchButton from "../components/switchButton/SwitchButton";

import Setting from "../components/SVG/Setting.svg";
import Logo from "../components/SVG/Logo.svg";
import Camera from "../components/SVG/Camera.svg";
import Location from "../components/SVG/Location.svg";

import styles from "./UserPostUpload.module.scss";
import { useState } from "react";

const UserPostUpload = () => {
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
      <main className={styles.uploadPage}>
        <Header image={Logo} large title="New Post" />
        <div className={styles.uploadField}>
          {image && (
            <div className={styles.uploadPreview}>
              <img src={image} alt="upload preview" />
            </div>
          )}
          <div className={styles.uploadButton}>
            <img src={Camera} alt="camera" /> Upload
          </div>
          <input
            className={styles.uploadButton}
            type="file"
            multiple
            name="photos"
            onChange={onSelectPhotos}
          />
        </div>

        <div className={styles.description}>
          <Avatar />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <hr />
        <div className={styles.location}>
          <img src={Location} alt="location" />
          <h2>Add Location</h2>
        </div>
        <hr />
        <div className={styles.socialMedia}>
          <h2>Also post to</h2>
          <div>
            <h2>Facebook</h2>
            <SwitchButton />
          </div>
          <div>
            <h2>Twitter</h2>
            <SwitchButton />
          </div>
          <div>
            <h2>Tumblr</h2>
            <SwitchButton />
          </div>
        </div>
        <hr />
        <div className={styles.setting}>
          <img src={Setting} alt="setting" />
          <h2>Advanced Settings</h2>
        </div>
        <button className="primaryButton">Upload</button>
      </main>
      <Navbar />
    </>
  );
};

export default UserPostUpload;
