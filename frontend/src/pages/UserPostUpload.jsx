import React, {
  useState,
  useRef,
  useContext,
  useCallback,
  useEffect,
} from "react";
import Webcam from "react-webcam";
import Header from "../components/header/Header.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import styles from "./UserPostUpload.module.scss";

import Camera from "../components/SVG/Camera.svg";
import CameraGreen from "../components/SVG/CameraGreen.svg";
import photographFill from "../images/photographFill.png";
import photographLine from "../images/photographLine.png";
import Logo from "../components/SVG/Logo.svg";
import switchButton from "../images/switchButton.png";

import photograph from "../images/photograph.png";

import Location from "../components/SVG/Location.svg";
import Avatar from "../components/avatar/Avatar";
import { convertDataURLToBlob } from "../utils/convertDataURLtoBlob.js";

import AuthorizationContext from "../contexts/AuthorizationContext.jsx";
import UserContext from "../contexts/UserContext.jsx";
import fetchUser from "../services/fetchUser.js";

const UserPostUpload = () => {
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [showWebcam, setShowWebcam] = useState(false);
  const [camera, setCamera] = useState("user");
  const webcamRef = useRef(null);
  const [accessToken] = useContext(AuthorizationContext);
  const [user, setUser] = useContext(UserContext);
  const textRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setShowWebcam(false);
  }, [webcamRef]);

  const switchCamera = () => {
    setCamera((prevCamera) => (prevCamera === "user" ? "environment" : "user"));
  };

  const onSelectPhotos = (event) => {
    if (event.target.files.length) {
      const files = Array.from(event.target.files);
      const imagePromises = files.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.readAsDataURL(file);
        });
      });

      Promise.all(imagePromises).then((imageSrcs) => {
        setImages(imageSrcs); // Speichert alle ausgewählten Bilder
        setImage(imageSrcs[0]); // Setzt das erste Bild als Vorschau
      });
    }
  };

  const uploadPost = async () => {
    if (!image && images.length === 0) return;

    const formData = new FormData();

    if (image) {
      const blob = await convertDataURLToBlob(image);
      formData.append("images", blob);
    }

    for (const imageSrc of images) {
      const blob = await convertDataURLToBlob(imageSrc);
      formData.append("images", blob);
    }

    formData.append("description", textRef.current?.value);

    try {
      const response = await fetch("/api/v1/posts/add", {
        method: "POST",
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Upload erfolgreich:", result);

      fetchUser(user._id, setUser, accessToken);
    } catch (error) {
      console.error("Fehler beim Upload:", error);
    }
  };

  if (!user) return null;

  return (
    <>
      <main className={styles.uploadPage}>
        <Header title="New Post" image={Logo} large />
        <div className={styles.uploadField}>
          {showWebcam ? (
            <div className={styles.webcam}>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
                style={{ aspectRatio: 1 }}
                videoConstraints={{ facingMode: camera }}
              />
            </div>
          ) : (
            image && (
              <div className={styles.uploadPreview}>
                <img src={image} alt="Upload Preview" />
              </div>
            )
          )}
          {!showWebcam && (
            <>
              <div className={styles.uploadButton}>
                <input
                  id="file-upload"
                  multiple
                  className={styles.fileInput}
                  type="file"
                  name="photos"
                  onChange={onSelectPhotos}
                  style={{ display: "none" }}
                />
                <label htmlFor="file-upload" className={styles.uploadButton}>
                  Upload
                </label>
              </div>
            </>
          )}
        </div>
        <div className={styles.cameraButtons}>
          {showWebcam && (
            <div className={styles.captureSwitchCamera}>
              <img
                src={switchButton}
                alt="switchCamera"
                onClick={switchCamera}
              />
              <img src={photograph} alt="switchCamera" onClick={capture} />
            </div>
          )}

          <div onClick={() => setShowWebcam(!showWebcam)}>
            {showWebcam ? (
              <img src={photographFill} alt="close camera" width="28px" />
            ) : (
              <img src={photographLine} alt="open camera" width="28px" />
            )}
          </div>
        </div>
        <div className={styles.description}>
          <Avatar avatar={user.avatar} />
          <textarea
            name="description"
            id="description"
            ref={textRef}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <hr />
        <button className={styles.primaryButton} onClick={uploadPost}>
          Upload
        </button>
      </main>
      <Navbar />
    </>
  );
};

export default UserPostUpload;
