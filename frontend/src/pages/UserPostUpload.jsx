import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Avatar from "../components/avatar/Avatar";
import SwitchButton from "../components/switchButton/SwitchButton";

import Setting from "../components/SVG/Setting.svg";
import Logo from "../components/SVG/Logo.svg";
import Camera from "../components/SVG/Camera.svg";
import Location from "../components/SVG/Location.svg";

import styles from "./UserPostUpload.module.scss";

const UserPostUpload = () => {
  const getFile = () => {};
  return (
    <>
      <main className={styles.uploadPage}>
        <Header image={Logo} title="New Post" />
        <div className={styles.uploadField}>
          <button className="primaryButton" onClick={getFile}>
            <img src={Camera} alt="camera" /> Upload
          </button>
          <div>
            <input type="file" multiple name="photos" />
          </div>
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
