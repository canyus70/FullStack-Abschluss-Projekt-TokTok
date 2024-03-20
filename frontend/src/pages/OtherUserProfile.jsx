import { useParams, Link } from "react-router-dom";
import Header from "../components/header/Header.jsx";

import Avatar from "../components/avatar/Avatar.jsx";

import Checked from "../components/SVG/Checked.svg";
import Feeds from "../components/SVG/Feeds.svg";
import Back from "../components/SVG/Back.svg";
import FollowUser from "../components/SVG/FollowUser.svg";

import styles from "./UserProfile.module.scss";

import { useContext, useEffect, useState } from "react";
import AuthorizationContext from "../contexts/AuthorizationContext.jsx";
import fetchUser from "../services/fetchUser.js";

const OtherUserProfile = () => {
  const { userId } = useParams();
  const [accessToken] = useContext(AuthorizationContext);
  const [feeds, setFeeds] = useState([]);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (!accessToken || !userId) return;
    fetchUser(userId, setUser, accessToken);
  }, [userId, accessToken]);

  useEffect(() => {
    const fetchAllFeedsFromUser = async () => {
      if (!accessToken || !userId) return;

      const response = await fetch(
        `${backendUrl}/api/v1/posts/${userId}/feed`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      const { result } = await response.json();

      setFeeds(result.posts);
    };

    fetchAllFeedsFromUser();
  }, [userId, accessToken]);

  if (!user) return null;

  return (
    <>
      <main className={styles.userProfilePage}>
        <div className={styles.profileHeader}>
          <Header image={Back} title={user.username} path="/" />
          <img src={Checked} alt="Checked" />
        </div>
        <div className={styles.infos}>
          <Avatar avatar={user.avatar} large />
          <div className={styles.personalInfo}>
            <h1>
              {user.firstname} {user.lastname}
            </h1>
            <h5>{user.profession}</h5>
            <h5>{user.bio}</h5>
            <Link to={user.website}>
              <h5 className={styles.personalWeb}>{user.website}</h5>
            </Link>
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
              <h1>{user.follows?.length ?? 0}</h1>
              <h5>Following</h5>
            </div>
          </div>
        </div>
        <button className="primaryButton">
          <img src={FollowUser} alt="followUser" /> Follow
        </button>
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
                </div>
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default OtherUserProfile;
