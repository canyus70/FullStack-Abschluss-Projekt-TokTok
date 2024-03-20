import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Avatar from "../components/avatar/Avatar";
import SwitchButton from "../components/switchButton/SwitchButton";

import Setting from "../components/SVG/Setting.svg";
import Back from "../components/SVG/Back.svg";
import Camera from "../components/SVG/Camera.svg";
import Location from "../components/SVG/Location.svg";

import styles from "./UserPostUpload.module.scss";
import { useState, useRef, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthorizationContext from "../contexts/AuthorizationContext";
import UserContext from "../contexts/UserContext";

const EditPost = () => {
  const [image, setImage] = useState("");
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [accessToken] = useContext(AuthorizationContext);
  const [user, setUser] = useContext(UserContext);
  const { postId } = useParams();
  const [post, setPost] = useState(undefined);

  if (!user) return null;

  // useEffect(() => {
  //   if (!accessToken || !post) return;
  //   fetchPost(postId, accessToken, setPost);
  // }, []);

  const onSelectPhotos = (event) => {
    if (event.target.files) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const uploadPost = async () => {
    const post = new FormData();

    for (const file of imageRef.current.files) {
      post.append("images", file);
    }
    post.append("description", textRef.current.value);

    const response = await fetch(`/api/v1/posts/${postId}`, {
      method: "PATCH",
      headers: { authorization: `Bearer ${accessToken}` },
      body: post,
    });

    await response.json();
  };

  return (
    <>
      <main className={styles.uploadPage}>
        <Header image={Back} large title="Edit Post" path="/profile" />
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
            ref={imageRef}
            onChange={onSelectPhotos}
          />
        </div>

        <div className={styles.description}>
          <Avatar avatar={user.avatar} />
          <textarea
            name="description"
            id="description"
            ref={textRef}
            cols="30"
            rows="1"
            // defaultValue={post.description}
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
        <button className="primaryButton" onClick={uploadPost}>
          Upload
        </button>
      </main>
    </>
  );
};

export default EditPost;