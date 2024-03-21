import { useParams, Link } from "react-router-dom";
import Header from "../components/header/Header.jsx";

import Avatar from "../components/avatar/Avatar.jsx";

import verified from "../components/SVG/verified.svg";
import verifiedNot from "../components/SVG/verifiedNot.svg";
import Feeds from "../components/SVG/Feeds.svg";
import Back from "../components/SVG/Back.svg";

import styles from "./UserProfile.module.scss";

import { useContext, useEffect, useState } from "react";
import AuthorizationContext from "../contexts/AuthorizationContext.jsx";
import fetchUser from "../services/fetchUser.js";
import ToggleFollowButton from "../components/toggleButtons/ToggleFollowButton.jsx";
import UserContext from "../contexts/UserContext.jsx";

const OtherUserProfile = () => {
  const { userId } = useParams();
  const [accessToken] = useContext(AuthorizationContext);
  const [feeds, setFeeds] = useState([]);
  const [user, setUser] = useState(undefined);
  const [authorizedUser, setAuthorizedUser] = useContext(UserContext);

  const onClickFollow = () => {
    if (!accessToken || !userId) return;

    fetchUser(userId, setUser, accessToken);

    if (!accessToken || !authorizedUser) return;
    fetchUser(authorizedUser._id, setAuthorizedUser, accessToken);
  };

  useEffect(() => {
    if (!accessToken || !userId) return;
    fetchUser(userId, setUser, accessToken);
  }, [userId, accessToken]);

  useEffect(() => {
    const fetchAllFeedsFromUser = async () => {
      if (!accessToken || !userId) return;

      const response = await fetch(`/api/v1/posts/${userId}/feed`, {
        headers: { authorization: `Bearer ${accessToken}` },
      });
      const { result } = await response.json();

      setFeeds(result.posts);
    };

    fetchAllFeedsFromUser();
  }, [userId, accessToken]);

  if (!user) return null;

  console.log(user);

  return (
    <>
      <main className={styles.userProfilePage}>
        <div className={styles.profileHeader}>
          <Header image={Back} title={user.username} path="/" />
          {user.emailVerified ? (
            <img src={verified} alt="verified" />
          ) : (
            <img src={verifiedNot} alt="notVerified" />
          )}
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
              <h1>{user.following?.length ?? 0}</h1>
              <h5>Following</h5>
            </div>
          </div>
        </div>
        <ToggleFollowButton user={user} icon onClick={onClickFollow} />
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
