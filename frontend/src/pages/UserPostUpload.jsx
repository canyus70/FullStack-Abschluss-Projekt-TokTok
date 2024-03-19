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

import Setting from "../components/SVG/Setting.svg";
import Logo from "../components/SVG/Logo.svg";
import Camera from "../components/SVG/Camera.svg";
import Location from "../components/SVG/Location.svg";
import Avatar from "../components/avatar/Avatar";

import AuthorizationContext from "../contexts/AuthorizationContext.jsx";
import UserContext from "../contexts/UserContext.jsx";
import {
  FabricCanvas,
  applyFilterToImage,
  FILTERS,
  convertDataURLToBlob,
} from "../utils/fabricUtils.jsx";

const UserPostUpload = () => {
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [showWebcam, setShowWebcam] = useState(false);
  const [camera, setCamera] = useState("user");
  const webcamRef = useRef(null);
  const imageRef = useRef(null);
  const [showCanvas, setShowCanvas] = useState(false);
  const [fabricCanvas, setFabricCanvas] = useState(null);
  const [accessToken] = useContext(AuthorizationContext);
  const [user, setUser] = useContext(UserContext);
  const textRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setShowWebcam(false);
    setShowCanvas(true);
    setTimeout(() => updateCanvasWithImage(imageSrc, "none"), 500);
  }, [webcamRef]);

  const switchCamera = () => {
    setCamera((prevCamera) => (prevCamera === "user" ? "environment" : "user"));
  };

  useEffect(() => {
    if (showCanvas && image && fabricCanvas) {
      updateCanvasWithImage(image, "none");
    }
  }, [showCanvas, image, fabricCanvas]);

  const updateCanvasWithImage = (imgSrc, filterName) => {
    if (!fabricCanvas) return;

    fabric.Image.fromURL(imgSrc, (img) => {
      img.scaleToWidth(fabricCanvas.getWidth());
      img.scaleToHeight(fabricCanvas.getHeight());
      fabricCanvas.clear();
      fabricCanvas.add(img);
      fabricCanvas.centerObject(img);
      applyFilterToImage(img, filterName);
    });
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
        setShowCanvas(true);
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
          {showCanvas && (
            <>
              <FabricCanvas onCanvasReady={setFabricCanvas} />
              <div className={styles.filterButtons}>
                {Object.keys(FILTERS).map((filterName) => (
                  <button
                    key={filterName}
                    onClick={() => updateCanvasWithImage(image, filterName)}
                  >
                    {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
                  </button>
                ))}
              </div>
            </>
          )}
          {showWebcam ? (
            <div>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
                videoConstraints={{ facingMode: camera }}
              />
              <button onClick={capture}>Capture</button>
              <button onClick={switchCamera}>Switch Camera</button>
            </div>
          ) : (
            !showCanvas &&
            image && (
              <div className={styles.uploadPreview}>
                <img src={image} alt="Upload Preview" />
              </div>
            )
          )}
          {!showCanvas && (
            <>
              <div
                className={styles.uploadButton}
                onClick={() => setShowWebcam(!showWebcam)}
              >
                {showWebcam ? "Close Camera" : "Open Camera"}
              </div>
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
            </>
          )}
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
