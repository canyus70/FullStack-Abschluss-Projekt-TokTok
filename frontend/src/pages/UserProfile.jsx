import Header from "../components/header/Header";

import Avatar from "../components/avatar/Avatar";

import Post from "../components/SVG/Post.svg";
import MoreSettings from "../components/SVG/MoreSettings.svg";
import Edit from "../components/SVG/Edit.svg";
import Delete from "../components/SVG/Delete.svg";
import Feeds from "../components/SVG/Feeds.svg";
import Logo from "../components/SVG/Logo.svg";

import CloseFriends from "../components/SVG/CloseFriends.svg";
import settingHeart from "../components/SVG/settingHeart.svg";
import settingLogout from "../components/SVG/settingLogout.svg";
import settingQR from "../components/SVG/settingQR.svg";
import settingSaved from "../components/SVG/settingSaved.svg";

import LogoutIcon from "../components/SVG/logout.svg";

import styles from "./UserProfile.module.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.jsx";
import AuthorizationContext from "../contexts/AuthorizationContext.jsx";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../api/index.js";
import NewBar from "../components/newBar/NewBar.jsx";
import LandingPage from "../components/LandingPage.jsx";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useContext(AuthorizationContext);
  const [user, setUser] = useContext(UserContext);
  const [feeds, setFeeds] = useState([]);

  const handleLogout = async () => {
    setAccessToken(null);
    setUser(null);
    localStorage.removeItem("refreshToken");
    navigate("/signin");
  };

  console.log(!!accessToken);

  const fetchAllFeedsFromUser = async () => {
    if (!accessToken || !user) return;

    const response = await fetch(
      `${backendUrl}/api/v1/posts/${user._id}/feed`,
      {
        headers: { authorization: `Bearer ${accessToken}` },
      }
    );
    const { result } = await response.json();

    setFeeds(result.posts);
  };

  const deletePost = async (feedId) => {
    try {
      const response = fetch(`${backendUrl}/api/v1/posts/${feedId}`, {
        method: "DELETE",
        headers: { authorization: `Bearer ${accessToken}` },
      });

      (await response).json();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllFeedsFromUser();
  }, [accessToken, user]);

  if (!user || !accessToken) return <LandingPage />;

  const closeFriends = user.followers.filter((follower) =>
    user.following.some((follow) => follow._id === follower._id)
  );

  return (
    <>
      <main className={styles.userProfilePage}>
        <div className={styles.profileHeader}>
          <Header image={Logo} large title={user.username} path="/" />
          <div>
            <Link to="/upload">
              <img src={Post} alt="post" />
            </Link>
            <Link to="/edit-profile">
              <img src={Edit} alt="edit" />
            </Link>

            <img src={MoreSettings} alt="moreSettings" onClick={togglePopup} />
          </div>
        </div>
        {isOpen && (
          <>
            <div className={styles.overlay}></div>
            <div className={styles.popup}>
              <div className={styles.popup_content}>
                {/* Hier können Sie Ihre Einstellungen platzieren */}
                <button className={styles.button} onClick={togglePopup}>
                  ____
                </button>
                <div onClick={handleLogout}>
                  <img src={settingLogout} alt="" />
                  <p>Logout</p>
                </div>

                <div>
                  <img src={settingQR} alt="" />
                  <p>QR Code</p>
                </div>
                <Link className={styles.link} to={`/saved/${user._id}`}>
                  <div>
                    <img src={settingSaved} alt="" />
                    <p>Saved</p>
                  </div>
                </Link>
                <Link className={styles.link} to={`/close-friends/${user._id}`}>
                  <div>
                    <img src={CloseFriends} alt="" />
                    <p>Close Friends </p>
                  </div>
                </Link>
                <Link className={styles.link} to={`/favoriten/${user._id}`}>
                  <div>
                    <img src={settingHeart} alt="" />
                    <p>Favorites</p>
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}

        <div className={styles.infos}>
          <Avatar avatar={user.avatar} large />

          <div className={styles.personalInfo}>
            <h1>
              {user.firstname} {user.lastname}
            </h1>
            <h5>{user.profession}</h5>
            <h5>{user.bio}</h5>
            <a target="_blank" href={user.website}>
              {user.website}
            </a>
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
              <h1>{user.following?.length ?? 0}</h1>
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
            {feeds &&
              feeds.map((feed) => (
                <div key={feed._id} className={styles.image}>
                  <Link to={`/${feed._id}/comment`}>
                    <img src={feed.images[0]} alt="postImage" />
                  </Link>
                  <div className={styles.buttons}>
                    <Link to={`/edit-post/${feed._id}`}>
                      <button className="iconButton">
                        <img src={Edit} alt="edit" />
                      </button>
                    </Link>
                    <button
                      className="iconButton"
                      onClick={() => deletePost(feed._id)}
                    >
                      <img src={Delete} alt="delete" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      <NewBar />
    </>
  );
};

export default UserProfile;
