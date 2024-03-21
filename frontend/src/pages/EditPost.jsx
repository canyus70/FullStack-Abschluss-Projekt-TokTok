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
import { useParams, useNavigate } from "react-router-dom";
import AuthorizationContext from "../contexts/AuthorizationContext";
import UserContext from "../contexts/UserContext";
import fetchPost from "../services/fetchPost";

const EditPost = () => {
  const [post, setPost] = useState(undefined);
  const [image, setImage] = useState(post?.images[0]);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [accessToken] = useContext(AuthorizationContext);
  const [user, setUser] = useContext(UserContext);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) return;

    fetchPost(postId, accessToken, setPost);
  }, [accessToken]);

  useEffect(() => {
    if (post) {
      setImage(post.images[0]);
    }
  }, [post]);

  if (!user) return null;

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
    navigate("/profile");
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
            defaultValue={post?.description}
          ></textarea>
        </div>
        <hr />

        <button className="primaryButton" onClick={uploadPost}>
          Upload
        </button>
      </main>
    </>
  );
};

export default EditPost;
