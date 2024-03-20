import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar.jsx";
import Avatar from "../components/avatar/Avatar";

import Post from "../components/SVG/Post.svg";
import MoreSettings from "../components/SVG/MoreSettings.svg";
import Edit from "../components/SVG/Edit.svg";
import Delete from "../components/SVG/Delete.svg";
import Feeds from "../components/SVG/Feeds.svg";
import Logo from "../components/SVG/Logo.svg";

import styles from "./UserProfile.module.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.jsx";
import AuthorizationContext from "../contexts/AuthorizationContext.jsx";

const UserProfile = () => {
  const [accessToken] = useContext(AuthorizationContext);
  const [user] = useContext(UserContext);
  const [feeds, setFeeds] = useState([]);

  const fetchAllFeedsFromUser = async () => {
    if (!accessToken || !user) return;

    const response = await fetch(`api/v1/posts/${user._id}/feed`, {
      headers: { authorization: `Bearer ${accessToken}` },
    });
    const { result } = await response.json();

    setFeeds(result.posts);
  };

  const deletePost = async (feedId) => {
    try {
      const response = fetch(`api/v1/posts/${feedId}`, {
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

  if (!user) return;
  console.log(user);

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
      <Navbar />
    </>
  );
};

export default UserProfile;
